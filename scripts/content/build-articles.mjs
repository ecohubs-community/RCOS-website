#!/usr/bin/env node
/**
 * content/**.yaml → .content-build/articles/**.md
 *
 * The download builds (templates, core markdown, standard data) read markdown
 * articles; this writes them from the YAML. The site reads the YAML itself.
 *
 * Alongside it writes sources.json: generated file → the files it came from
 * (YAML, plus the markdown it replaced), so page dates can follow git history.
 *
 * Runs from the Vite plugin in vite.config.ts (dev and build), or by hand:
 *   node scripts/content/build-articles.mjs
 */
import { writeFile, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { toArticle } from '../../src/lib/content/article.js';
import { refTargets } from '../../src/lib/content/refs.js';
import { loadDocuments } from '../../src/lib/content/load.js';

export { loadDocuments };

const ROOT = path.resolve(import.meta.dirname, '../..');
export const OUT = path.join(ROOT, '.content-build');
const OUT_ARTICLES = path.join(OUT, 'articles');

/** @param {string} p */
const rel = (p) => path.relative(ROOT, p);

/** @param {{ quiet?: boolean }} [options] */
export async function buildArticles({ quiet = false } = {}) {
	const docs = await loadDocuments();
	const targets = refTargets(docs);
	await rm(OUT_ARTICLES, { recursive: true, force: true });
	await mkdir(OUT_ARTICLES, { recursive: true });

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
		await mkdir(path.dirname(target), { recursive: true });
		await writeFile(target, article);
		sources[rel(target)] = from;
	};

	for (const { file, en, overlays } of docs) {
		await write(en.legacyPath, 'en', toArticle(en, undefined, 'en', targets), [rel(file)]);
		for (const [locale, { file: f, data }] of Object.entries(overlays)) {
			// lang and sourceHash describe the translation file, not the article text.
			const { lang: _lang, sourceHash: _hash, ...overlay } = data;
			await write(en.legacyPath, locale, toArticle(en, overlay, locale, targets), [
				rel(f),
				rel(file)
			]);
		}
	}
	await writeFile(path.join(OUT, 'sources.json'), JSON.stringify(sources, null, '\t'));
	if (!quiet)
		console.log(
			`[content] ${Object.keys(sources).length} articles written from YAML to ${rel(OUT_ARTICLES)}`
		);
}

if (import.meta.url === `file://${process.argv[1]}`) await buildArticles();
