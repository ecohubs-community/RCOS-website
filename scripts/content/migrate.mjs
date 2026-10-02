#!/usr/bin/env node
/**
 * One-shot migration: content/articles/**.md → content/**.yaml (phase 2).
 *
 * For every migrated article it writes the English document and one overlay per
 * translation, then proves the migration lossless: YAML → markdown reproduces
 * every source file (frontmatter equal as data, body equal up to whitespace that
 * does not change rendering). It refuses to write anything if a single file
 * fails, so a partial migration cannot happen.
 *
 *   node scripts/content/migrate.mjs           dry run: parse and verify only
 *   node scripts/content/migrate.mjs --write   write the YAML
 */
import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises';
import { existsSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import path from 'node:path';
import matter from 'gray-matter';
import yaml from 'js-yaml';
import { parseChapter } from '../../src/lib/content/chapter.js';
import { parseTemplate } from '../../src/lib/content/template.js';
import { parseGlossary } from '../../src/lib/content/glossary.js';
import { parseDoc } from '../../src/lib/content/doc.js';
import { headingSlug } from '../../src/lib/content/markdown.js';
import { split, merge } from '../../src/lib/content/overlay.js';
import { emitBody, frontmatterOf } from '../../src/lib/content/emit.js';

const ROOT = path.resolve(import.meta.dirname, '../..');
const ARTICLES = path.join(ROOT, 'content/articles');
const CONTENT = path.join(ROOT, 'content');
const LOCALES = ['de', 'es', 'fr', 'pt-br'];
const WRITE = process.argv.includes('--write');

const md5short = (s) => createHash('md5').update(s).digest('hex').slice(0, 8);
const ls = async (dir) => (existsSync(dir) ? (await readdir(dir)).sort() : []);
const isTranslation = (f) => /\.(de|es|fr|pt-br)\.md$/.test(f);

/** @type {{ md: string, yaml: string, kind: string, level?: number }[]} */
const jobs = [];
const add = (md, yamlRel, kind, level) => jobs.push({ md, yaml: yamlRel, kind, level });

// --- The standard ---------------------------------------------------------
add('rcos-core', 'standard/rcos-core/about.yaml', 'chapter');
add('rcos-core/v0-1', 'standard/rcos-core/0.1/version.yaml', 'chapter');
for (const f of await ls(path.join(ARTICLES, 'rcos-core/v0-1'))) {
	if (isTranslation(f) || !f.endsWith('.md')) continue;
	const base = f.slice(0, -3);
	add(
		`rcos-core/v0-1/${base}`,
		`standard/rcos-core/0.1/chapters/${base}.yaml`,
		base === 'appendix-a-glossary' ? 'glossary' : 'chapter'
	);
}
add('rcos-modules', 'standard/modules/about.yaml', 'chapter');
for (const mod of ['permaculture', 'minimal-permaculture']) {
	add(`rcos-modules/${mod}`, `standard/modules/${mod}/about.yaml`, 'chapter');
	add(`rcos-modules/${mod}/v0-1`, `standard/modules/${mod}/0.1/standard.yaml`, 'chapter');
	add(
		`rcos-modules/${mod}/additional-artifacts`,
		`standard/modules/${mod}/0.1/additional-artifacts.yaml`,
		'chapter'
	);
}
// --- Templates --------------------------------------------------------------
for (const d of await ls(path.join(ARTICLES, 'rcos-templates'))) {
	if (!/^layer-\d$/.test(d)) continue;
	add(`rcos-templates/${d}`, `templates/${d}/index.yaml`, 'index');
	for (const f of await ls(path.join(ARTICLES, 'rcos-templates', d))) {
		if (isTranslation(f)) continue;
		add(
			`rcos-templates/${d}/${f.slice(0, -3)}`,
			`templates/${d}/${f.slice(0, -3)}.yaml`,
			'template'
		);
	}
}
// --- Layer guides -------------------------------------------------------------
for (const f of await ls(path.join(ARTICLES, 'rcos-layers'))) {
	if (isTranslation(f)) continue;
	add(`rcos-layers/${f.slice(0, -3)}`, `layers/${f.slice(0, -3)}.yaml`, 'doc', 3);
}
// --- Stress tests (flat; the category folder survives only in legacyPath) ----
for (const d of await ls(path.join(ARTICLES, 'rcos-stress-tests'))) {
	if (!statSync(path.join(ARTICLES, 'rcos-stress-tests', d)).isDirectory()) continue;
	for (const f of await ls(path.join(ARTICLES, 'rcos-stress-tests', d))) {
		if (isTranslation(f)) continue;
		add(
			`rcos-stress-tests/${d}/${f.slice(0, -3)}`,
			`stress-tests/${f.slice(0, -3)}.yaml`,
			'doc',
			3
		);
	}
}

// --- Clause links, for the template "RCOS clauses" lines -------------------------
const hrefs = new Map();
for (const job of jobs.filter(
	(j) => j.kind === 'chapter' && /^rcos-core\/v0-1\/0[2-8]-/.test(j.md)
)) {
	const { content } = matter(await readFile(path.join(ARTICLES, job.md + '.md'), 'utf8'));
	const slug = job.md
		.split('/')
		.pop()
		.replace(/^\d\d-/, '');
	for (const s of parseChapter(content).sections)
		for (const b of s.blocks)
			if (b.kind === 'clause')
				hrefs.set(b.ref, `/articles/rcos-core/v0-1/${slug}#${headingSlug(`${s.ref} ${s.title}`)}`);
}
const clauseHref = (ref) => {
	const href = hrefs.get(ref);
	if (!href) throw new Error(`Unknown clause ${ref}`);
	return href;
};

/** Parse one article body. `en` is the parsed English doc, for translations. */
function parseBody(job, body, locale, en) {
	switch (job.kind) {
		case 'chapter':
			return parseChapter(body);
		case 'template':
			return parseTemplate(
				body,
				locale,
				clauseHref,
				en?.sections.map((s) => s.id)
			);
		case 'glossary':
			return parseGlossary(
				body,
				en?.terms.map((t) => t.key)
			);
		case 'doc':
			return parseDoc(
				body,
				job.level,
				en?.sections.map((s) => s.id)
			);
		case 'index':
			if (body.trim()) throw new Error(`${job.md}: an index article with a body`);
			return {};
	}
}

/**
 * Source bugs the migration fixes on purpose. verify() applies the same fix to
 * the source before comparing, so everything else must still match exactly.
 */
const FIXES = {
	// German frontmatter said order 0; every other locale says 1 and 3. The
	// German navigation sorted these pages wrong. Translations inherit order now.
	'rcos-core.de': { frontmatter: ['order'] },
	'rcos-modules.de': { frontmatter: ['order'] },
	// Glossary terms lacked the hard break, so term and definition ran together.
	'rcos-core/v0-1/appendix-a-glossary.pt-br': {
		body: (s) => s.replace(/^(\*\*[^*\n]+\*\*)\n/gm, '$1  \n')
	}
};
const fixed = [];

const norm = (s) =>
	s
		.replace(/^(#{1,6} .*)\n(?!\n)/gm, '$1\n\n')
		.replace(/[ \t]+$/gm, (m) => (m === '  ' ? m : ''))
		.replace(/\n{3,}/g, '\n\n')
		.trim();
const sameData = (a, b) => JSON.stringify(sortKeys(a)) === JSON.stringify(sortKeys(b));
const sortKeys = (v) =>
	Array.isArray(v)
		? v.map(sortKeys)
		: v && typeof v === 'object'
			? Object.fromEntries(
					Object.keys(v)
						.sort()
						.map((k) => [k, sortKeys(v[k])])
				)
			: v;

const dump = (obj) => yaml.dump(obj, { lineWidth: -1, noRefs: true, quotingType: "'" });

const outputs = []; // [path, text]
const problems = [];
const stats = { documents: 0, translations: 0, exact: 0, whitespaceOnly: 0, outdated: 0 };

for (const job of jobs) {
	const enFile = path.join(ARTICLES, job.md + '.md');
	const enRaw = await readFile(enFile, 'utf8');
	const enFm = matter(enRaw);
	let enBody;
	try {
		enBody = parseBody(job, enFm.content, 'en');
	} catch (e) {
		problems.push(`${job.md}: ${e.message}`);
		continue;
	}
	const enDoc = {
		kind: job.kind,
		legacyPath: job.md,
		...(job.level ? { headingLevel: job.level } : {}),
		...enFm.data,
		...enBody
	};
	const enYaml = dump(enDoc);
	const enHash = md5short(enYaml);
	outputs.push([path.join(CONTENT, job.yaml), enYaml]);
	stats.documents++;
	verify(job, enDoc, 'en', enRaw);

	for (const locale of LOCALES) {
		const trFile = path.join(ARTICLES, `${job.md}.${locale}.md`);
		if (!existsSync(trFile)) continue;
		const trRaw = await readFile(trFile, 'utf8');
		const trFm = matter(trRaw);
		try {
			const { lang, sourceHash, ...trData } = trFm.data;
			const fix = FIXES[`${job.md}.${locale}`];
			for (const k of ['id', 'parentId', 'order']) {
				if (!(k in enFm.data) || trData[k] === enFm.data[k]) continue;
				if (!fix?.frontmatter?.includes(k)) throw new Error(`${k} differs from English`);
				fixed.push(`${job.md}.${locale}: ${k} ${trData[k]} → ${enFm.data[k]}`);
				trData[k] = enFm.data[k];
			}
			const trDoc = { ...enDoc, ...trData, ...parseBody(job, trFm.content, locale, enBody) };
			const overlay = split(enDoc, trDoc) ?? {};
			const upToDate = sourceHash === md5short(enRaw);
			if (!upToDate) stats.outdated++;
			const file = {
				lang: locale,
				sourceHash: upToDate ? enHash : `outdated:${sourceHash ?? 'none'}`,
				...overlay
			};
			outputs.push([
				path.join(CONTENT, job.yaml.replace(/\.yaml$/, `.${locale}.yaml`)),
				dump(file)
			]);
			stats.translations++;
			verify(job, merge(enDoc, overlay), locale, trRaw, { lang, sourceHash }, fix);
			if (fix?.body) fixed.push(`${job.md}.${locale}: body`);
		} catch (e) {
			problems.push(`${job.md}.${locale}: ${e.message}`);
		}
	}
}

function verify(job, doc, locale, raw, extraFm = {}, fix = undefined) {
	const src = matter(raw);
	for (const k of fix?.frontmatter ?? []) src.data[k] = doc[k];
	if (fix?.body) src.content = fix.body(src.content);
	const body = emitBody(doc, locale, clauseHref);
	const fm = {
		...frontmatterOf(doc),
		...Object.fromEntries(Object.entries(extraFm).filter(([, v]) => v !== undefined))
	};
	if (!sameData(fm, src.data)) problems.push(`${job.md} [${locale}]: frontmatter differs`);
	if (body === src.content || body === src.content.replace(/^\n+/, '')) stats.exact++;
	else if (norm(body) === norm(src.content)) stats.whitespaceOnly++;
	else problems.push(`${job.md} [${locale}]: body differs`);
}

console.log(stats);
if (fixed.length) console.log(`Fixed on purpose:\n  ${fixed.join('\n  ')}`);
if (problems.length) {
	console.error(`\n${problems.length} problem(s):\n  ` + problems.slice(0, 30).join('\n  '));
	process.exit(1);
}
if (WRITE) {
	for (const [file, text] of outputs) {
		await mkdir(path.dirname(file), { recursive: true });
		await writeFile(file, text);
	}
	console.log(`Wrote ${outputs.length} files.`);
} else {
	console.log(`Dry run OK: ${outputs.length} files would be written. Re-run with --write.`);
}
