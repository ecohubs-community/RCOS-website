#!/usr/bin/env node
/**
 * pnpm content:check: validates everything under content/.
 *
 *  1. Shape: every English document matches its schema (src/lib/content/schema.js);
 *     every translation is an overlay of its English document, which merges
 *     and splits back to itself (no text attached to an id English lacks).
 *  2. Identity: article ids unique; parentIds resolve; clause refs unique and
 *     numbered in order within their section.
 *  3. References: template clause refs, ownership.yaml, stress-test links
 *     (preventsWith, cascade, related) all point at things that exist.
 *  4. Completeness: every document has all four translations.
 *  5. Translation rules (formerly normalize-rfc-keywords / normalize-terms): no
 *     English RFC 2119 keyword and no "Layer N" left in translated text.
 *
 * Exits 1 on any error, printing all of them.
 */
import { readFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';
import matter from 'gray-matter';
import { isDeepStrictEqual } from 'node:util';
import {
	document,
	overlayFrame,
	ownership as ownershipSchema
} from '../../src/lib/content/schema.js';
import { merge, split } from '../../src/lib/content/overlay.js';
import { sectionId } from '../../src/lib/content/template.js';
import { refTargets, refsIn, resolveRef } from '../../src/lib/content/refs.js';
import { loadDocuments } from './build-articles.mjs';

const ROOT = path.resolve(import.meta.dirname, '../..');
const LOCALES = ['de', 'es', 'fr', 'pt-br'];

/**
 * @param {string} [contentDir]
 * @returns {Promise<{ errors: string[], summary: string }>}
 */
export async function checkContent(contentDir = path.join(ROOT, 'content')) {
	/** @type {string[]} */
	const errors = [];
	const err = (/** @type {string} */ where, /** @type {string} */ msg) =>
		errors.push(`${where}: ${msg}`);
	const rel = (/** @type {string} */ p) => path.relative(path.dirname(contentDir), p);

	const docs = await loadDocuments(contentDir);

	// --- 1. Shape ------------------------------------------------------------------------
	for (const { file, en, overlays } of docs) {
		const parsed = document.safeParse(en);
		if (!parsed.success) {
			for (const issue of parsed.error.issues.slice(0, 5))
				err(rel(file), `${issue.path.join('.')}: ${issue.message}`);
		}
		for (const locale of LOCALES) {
			const o = overlays[locale];
			if (!o) {
				err(rel(file), `no ${locale} translation`);
				continue;
			}
			const frame = overlayFrame.safeParse(o.data);
			if (!frame.success)
				err(
					rel(o.file),
					frame.error.issues.map((i) => `${i.path.join('.')}: ${i.message}`).join('; ')
				);
			if (o.data.lang !== locale) err(rel(o.file), `lang is ${o.data.lang}`);
			const { lang: _l, sourceHash: _h, ...overlay } = o.data;
			let back;
			try {
				back = split(en, merge(en, overlay)) ?? {};
			} catch (e) {
				err(rel(o.file), /** @type {Error} */ (e).message);
				continue;
			}
			if (!isDeepStrictEqual(back, overlay))
				err(rel(o.file), 'holds text at ids or fields English does not have');
		}
	}

	// --- 2. Identity -----------------------------------------------------------------------
	/** @type {Map<string, string>} article id → where */
	const ids = new Map();
	for (const { file, en } of docs) {
		const id = String(en.id);
		if (ids.has(id)) err(rel(file), `id ${id} also used by ${ids.get(id)}`);
		ids.set(id, rel(file));
	}
	// Articles still authored as markdown take part in the tree too.
	for (const f of await walk(path.join(contentDir, 'articles'))) {
		if (!f.endsWith('.md') || /\.(de|es|fr|pt-br)\.md$/.test(f)) continue;
		const { data } = matter(await readFile(f, 'utf8'));
		if (data.id) ids.set(String(data.id), rel(f));
	}
	for (const { file, en } of docs) {
		if (en.parentId && !ids.has(String(en.parentId)))
			err(rel(file), `parentId ${en.parentId} is no article`);
	}

	/** @type {Set<string>} */
	const clauseRefs = new Set();
	for (const { file, en } of docs) {
		if (en.kind !== 'chapter') continue;
		for (const section of en.sections ?? []) {
			let expected = 1;
			for (const block of section.blocks) {
				if (block.kind !== 'clause') continue;
				if (clauseRefs.has(block.ref)) err(rel(file), `clause ${block.ref} defined twice`);
				clauseRefs.add(block.ref);
				if (block.id !== block.ref) err(rel(file), `clause ${block.ref} has id ${block.id}`);
				if (section.ref) {
					const want = `${section.ref}.${expected}`;
					if (block.ref !== want) err(rel(file), `clause ${block.ref} where ${want} was expected`);
					expected++;
				}
			}
		}
	}

	// --- 3. References -----------------------------------------------------------------------
	/** @type {Set<string>} template section keys, "<template>.<section>" */
	const sectionKeys = new Set();
	/** @type {Set<string>} legacy paths of every YAML article */
	const paths = new Set(docs.map((d) => d.en.legacyPath));
	for (const { file, en } of docs) {
		if (en.kind !== 'template') continue;
		const name = path.basename(file, '.yaml');
		for (const s of en.sections) {
			sectionKeys.add(`${name}.${s.id}`);
			// A fenced example entry (learning log, version history) has its own
			// `## ` headings. The published data lists each as an instance section
			// (disposition instance_record), so they are valid targets too.
			for (const b of s.blocks) {
				if (b.kind !== 'md') continue;
				for (const fence of b.md.match(/^```[\s\S]*?^```/gm) ?? [])
					for (const h of fence.matchAll(/^## (.+)$/gm))
						sectionKeys.add(`${name}.${sectionId(h[1])}`);
			}
			for (const b of s.blocks) {
				if (b.kind !== 'clauses') continue;
				for (const ref of b.refs)
					if (!clauseRefs.has(ref))
						err(rel(file), `section ${s.id} cites clause ${ref}, which does not exist`);
			}
		}
	}
	// Typed links (`rcos:…`) in English text and in every translation.
	const targets = refTargets(docs);
	for (const { file, en, overlays } of docs) {
		for (const [f, data] of [[file, en], ...Object.values(overlays).map((o) => [o.file, o.data])]) {
			for (const [where, value] of strings(data))
				for (const ref of refsIn(value))
					if (!resolveRef(ref, targets)) err(rel(f), `${where}: link rcos:${ref} points nowhere`);
		}
	}
	for (const { file, en } of docs) {
		for (const target of en.preventsWith ?? [])
			if (!paths.has(target)) err(rel(file), `preventsWith ${target}: no such template`);
		for (const c of en.cascade ?? [])
			if (!paths.has(c.test)) err(rel(file), `cascade ${c.test}: no such stress test`);
		for (const r of en.related ?? [])
			if (!paths.has(r)) err(rel(file), `related ${r}: no such stress test`);
	}

	const ownershipFile = path.join(contentDir, 'standard/rcos-core/0.1/ownership.yaml');
	const own = ownershipSchema.safeParse(yaml.load(await readFile(ownershipFile, 'utf8')));
	if (!own.success) {
		for (const issue of own.error.issues.slice(0, 5))
			err(rel(ownershipFile), `${issue.path.join('.')}: ${issue.message}`);
	} else {
		const glossaryKeys = new Set(
			docs.flatMap((d) =>
				d.en.kind === 'glossary' ? d.en.terms.map((/** @type {any} */ t) => t.key) : []
			)
		);
		for (const [ref, owner] of Object.entries(own.data.owners)) {
			if (!clauseRefs.has(ref)) err(rel(ownershipFile), `owners: clause ${ref} does not exist`);
			if (!sectionKeys.has(owner))
				err(rel(ownershipFile), `owners: ${ref} → ${owner}, no such template section`);
		}
		for (const ref of Object.keys(own.data.dispositions))
			if (!clauseRefs.has(ref))
				err(rel(ownershipFile), `dispositions: clause ${ref} does not exist`);
		for (const key of Object.keys(own.data.sections))
			if (!sectionKeys.has(key))
				err(rel(ownershipFile), `sections: ${key}, no such template section`);
		for (const [term, key] of Object.entries(own.data.glossary)) {
			if (!glossaryKeys.has(term))
				err(rel(ownershipFile), `glossary: term ${term} is not in the glossary`);
			if (!sectionKeys.has(key))
				err(rel(ownershipFile), `glossary: ${term} → ${key}, no such template section`);
		}
	}

	// --- 5. Translation rules -------------------------------------------------------------------
	const RFC = /\b(MUST NOT|MUST|SHOULD NOT|SHOULD|MAY|REQUIRED|RECOMMENDED)\b/;
	const LAYER = /\bLayer \d\b/;
	for (const { overlays } of docs) {
		for (const [locale, o] of Object.entries(overlays)) {
			for (const [where, value] of strings(o.data)) {
				if (where.endsWith('.legacyPath') || where === 'sourceHash') continue;
				// Clauses and normative prose must carry the localized keyword.
				if (RFC.test(value))
					err(
						rel(o.file),
						`${where}: English RFC 2119 keyword "${RFC.exec(value)?.[0]}" in ${locale} text`
					);
				if (LAYER.test(stripCode(value)))
					err(rel(o.file), `${where}: "${LAYER.exec(value)?.[0]}" not translated`);
			}
		}
	}

	const summary = `${docs.length} documents, ${docs.length * LOCALES.length} translations, ${clauseRefs.size} clauses, ${sectionKeys.size} template sections`;
	return { errors, summary };
}

if (import.meta.url === `file://${process.argv[1]}`) {
	const { errors, summary } = await checkContent();
	if (errors.length) {
		console.error(`content:check found ${errors.length} problem(s):\n  ` + errors.join('\n  '));
		process.exit(1);
	}
	console.log(`content:check: ${summary}. All good.`);
}

// --- helpers -------------------------------------------------------------------------------------
/**
 * @param {unknown} v
 * @param {string} [at]
 * @returns {Generator<[string, string]>}
 */
function* strings(v, at = '') {
	if (typeof v === 'string') yield [at, v];
	else if (Array.isArray(v)) for (const [i, x] of v.entries()) yield* strings(x, `${at}[${i}]`);
	else if (v && typeof v === 'object')
		for (const [k, x] of Object.entries(v)) yield* strings(x, at ? `${at}.${k}` : k);
}

/** Link targets and code are not prose; ignore them for the term rule. */
function stripCode(/** @type {string} */ s) {
	return s.replace(/`[^`]*`/g, '').replace(/\]\([^)]*\)/g, ']');
}

/**
 * @param {string} dir
 * @returns {Promise<string[]>}
 */
async function walk(dir) {
	if (!existsSync(dir)) return [];
	const out = [];
	for (const e of await readdir(dir, { withFileTypes: true })) {
		const p = path.join(dir, e.name);
		if (e.isDirectory()) out.push(...(await walk(p)));
		else out.push(p);
	}
	return out;
}
