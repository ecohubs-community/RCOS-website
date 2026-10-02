#!/usr/bin/env node
/**
 * One-shot (phase 2b): rewrite hard-coded article links in content/**.yaml as
 * typed `rcos:` refs (see src/lib/content/refs.js). A link is only rewritten
 * when the ref resolves back to exactly the same URL, so the generated articles
 * do not change. Translations that were up to date with their English
 * document get its new sourceHash.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import yaml from 'js-yaml';
import { loadDocuments } from './build-articles.mjs';
import { refTargets, linkifyAll } from '../../src/lib/content/refs.js';

const md5short = (/** @type {string} */ s) => createHash('md5').update(s).digest('hex').slice(0, 8);
const dump = (/** @type {unknown} */ o) =>
	yaml.dump(o, { lineWidth: -1, noRefs: true, quotingType: "'" });

const docs = await loadDocuments();
const targets = refTargets(docs);
let files = 0;
let links = 0;
const count = (/** @type {string} */ s) => (s.match(/\]\(rcos:/g) ?? []).length;

for (const { file, en, overlays } of docs) {
	const oldRaw = await readFile(file, 'utf8');
	const oldHash = md5short(oldRaw);
	const nextRaw = dump(linkifyAll(en, targets));
	links += count(nextRaw) - count(oldRaw);
	const newHash = md5short(nextRaw);
	if (nextRaw !== oldRaw) {
		await writeFile(file, nextRaw);
		files++;
	}
	for (const { file: f } of Object.values(overlays)) {
		const raw = await readFile(f, 'utf8');
		const data = /** @type {Record<string, any>} */ (yaml.load(raw));
		const { lang, sourceHash, ...overlay } = data;
		const linked = linkifyAll(overlay, targets);
		const hash = sourceHash === oldHash ? newHash : sourceHash;
		const out = dump({ lang, sourceHash: hash, ...linked });
		links += count(out) - count(raw);
		if (out !== raw) {
			await writeFile(f, out);
			files++;
		}
	}
}
console.log(`Rewrote ${links} links in ${files} files.`);
