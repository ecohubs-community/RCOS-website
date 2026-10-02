#!/usr/bin/env node
/**
 * content/**.yaml → .content-build/articles/**.md
 *
 * The site and the download builds still read markdown articles. Until they
 * read the YAML directly (phase 3 for the standard, phase 5 for the rest), this
 * writes those articles from the YAML. It also copies over the articles that
 * are still authored as markdown (hub pages, safeguards, …), so readers need
 * only one folder.
 *
 * Alongside it writes sources.json: generated file → the files it came from
 * (YAML, plus the markdown it replaced), so page dates can follow git history.
 *
 * Runs from the Vite plugin in vite.config.ts (dev and build), or by hand:
 *   node scripts/content/build-articles.mjs
 */
import { readFile, writeFile, mkdir, readdir, rm, cp } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';
import { headingSlug } from '../../src/lib/content/markdown.js';
import { toArticle } from '../../src/lib/content/article.js';

const ROOT = path.resolve(import.meta.dirname, '../..');
const CONTENT = path.join(ROOT, 'content');
const SOURCE_ARTICLES = path.join(CONTENT, 'articles');
export const OUT = path.join(ROOT, '.content-build');
const OUT_ARTICLES = path.join(OUT, 'articles');
const YAML_DIRS = ['standard', 'templates', 'layers', 'stress-tests'];
const LOCALE_FILE = /\.(de|es|fr|pt-br)\.yaml$/;
/** YAML in the content folders that holds data, not articles. */
const DATA_FILES = new Set(['ownership.yaml']);

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

/** @param {string} p */
const rel = (p) => path.relative(ROOT, p);

/**
 * @typedef {Record<string, any> & { kind: string, legacyPath: string }} EnDoc
 * @typedef {{ file: string, en: EnDoc, overlays: Record<string, { file: string, data: Record<string, any> }> }} LoadedDoc
 */

/**
 * Load every English document with its overlays.
 * @returns {Promise<LoadedDoc[]>}
 */
export async function loadDocuments() {
	const files = (await Promise.all(YAML_DIRS.map((d) => walk(path.join(CONTENT, d)))))
		.flat()
		.filter((f) => f.endsWith('.yaml'));
	/** @type {LoadedDoc[]} */
	const docs = [];
	for (const file of files.filter((f) => !LOCALE_FILE.test(f)).sort()) {
		const en = /** @type {EnDoc | null} */ (yaml.load(await readFile(file, 'utf8')));
		if (!en?.kind) {
			// Data about the standard, not an article.
			if (DATA_FILES.has(path.basename(file))) continue;
			throw new Error(`${rel(file)}: no \`kind\` (and not a known data file)`);
		}
		/** @type {LoadedDoc['overlays']} */
		const overlays = {};
		for (const f of files.filter(
			(f) => LOCALE_FILE.test(f) && f.replace(LOCALE_FILE, '.yaml') === file
		)) {
			const locale = /** @type {RegExpExecArray} */ (LOCALE_FILE.exec(f))[1];
			overlays[locale] = {
				file: f,
				data: /** @type {Record<string, any>} */ (yaml.load(await readFile(f, 'utf8')))
			};
		}
		docs.push({ file, en, overlays });
	}
	return docs;
}

/**
 * Clause ref → link path, from the standard's chapters (for template clause lines).
 * @param {LoadedDoc[]} docs
 * @returns {(ref: string) => string}
 */
export function clauseLinks(docs) {
	const hrefs = new Map();
	for (const { en } of docs) {
		if (en.kind !== 'chapter' || !/^rcos-core\/v0-1\/0[2-8]-/.test(en.legacyPath)) continue;
		const slug = path.basename(en.legacyPath).replace(/^\d\d-/, '');
		for (const s of en.sections ?? [])
			for (const b of s.blocks)
				if (b.kind === 'clause')
					hrefs.set(
						b.ref,
						`/articles/rcos-core/v0-1/${slug}#${headingSlug(`${s.ref} ${s.title}`)}`
					);
	}
	return (ref) => {
		const href = hrefs.get(ref);
		if (!href) throw new Error(`Unknown clause ${ref}`);
		return href;
	};
}

/** @param {{ quiet?: boolean }} [options] */
export async function buildArticles({ quiet = false } = {}) {
	const docs = await loadDocuments();
	const href = clauseLinks(docs);
	await rm(OUT_ARTICLES, { recursive: true, force: true });
	await mkdir(OUT_ARTICLES, { recursive: true });

	// Articles still authored as markdown: copied as they are.
	if (existsSync(SOURCE_ARTICLES)) await cp(SOURCE_ARTICLES, OUT_ARTICLES, { recursive: true });

	/** @type {Record<string, string[]>} */
	const sources = {};
	/**
	 * @param {string} legacyPath
	 * @param {string} locale
	 * @param {string} article
	 * @param {string[]} from
	 */
	const write = async (legacyPath, locale, article, from) => {
		const name = `${legacyPath}${locale === 'en' ? '' : `.${locale}`}.md`;
		const target = path.join(OUT_ARTICLES, name);
		if (existsSync(target)) throw new Error(`${name} exists both as YAML and as markdown`);
		await mkdir(path.dirname(target), { recursive: true });
		await writeFile(target, article);
		sources[rel(target)] = [...from, `content/articles/${name}`];
	};

	for (const { file, en, overlays } of docs) {
		await write(en.legacyPath, 'en', toArticle(en, undefined, 'en', href), [rel(file)]);
		for (const [locale, { file: f, data }] of Object.entries(overlays)) {
			// lang and sourceHash describe the translation file, not the article text.
			const { lang: _lang, sourceHash: _hash, ...overlay } = data;
			await write(en.legacyPath, locale, toArticle(en, overlay, locale, href), [rel(f), rel(file)]);
		}
	}
	await writeFile(path.join(OUT, 'sources.json'), JSON.stringify(sources, null, '\t'));
	if (!quiet)
		console.log(
			`[content] ${Object.keys(sources).length} articles written from YAML to ${rel(OUT_ARTICLES)}`
		);
}

if (import.meta.url === `file://${process.argv[1]}`) await buildArticles();
