#!/usr/bin/env node
// @ts-check
/**
 * Broken-link and metadata check over the prerendered site (run after
 * `pnpm build`): every internal link and every #anchor in every page points at
 * a page, a redirect, a static file or an element id that exists; every
 * indexable page has a title, a description and a canonical URL, and titles
 * are unique per language.
 *
 *   pnpm build && pnpm check:links
 *
 * Exits 1 and lists the broken links. External links are not checked.
 */
import { readdir, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const OUT = path.join(ROOT, '.svelte-kit/output/prerendered');
const PAGES = path.join(OUT, 'pages');

if (!existsSync(PAGES)) {
	console.error('No prerendered output. Run `pnpm build` first.');
	process.exit(1);
}

/** @param {string} dir @returns {Promise<string[]>} */
async function walk(dir) {
	const out = [];
	for (const e of await readdir(dir, { withFileTypes: true })) {
		const p = path.join(dir, e.name);
		if (e.isDirectory()) out.push(...(await walk(p)));
		else out.push(p);
	}
	return out;
}

/** "pages/de/standard.html" → "/de/standard"; "pages/index.html" → "/" */
const pagePath = (/** @type {string} */ file) => {
	const rel = path.relative(PAGES, file).replace(/\.html$/, '');
	return rel === 'index' ? '/' : `/${rel.replace(/\/index$/, '')}`;
};

/** @type {Map<string, { ids: Set<string>, redirect: boolean }>} */
const pages = new Map();
/** @type {Map<string, string>} page → html */
const html = new Map();
// Redirects whose target has a fragment are also saved under a name with `#`
// by the crawler; no browser requests those, so they are not pages.
for (const file of (await walk(PAGES)).filter((f) => f.endsWith('.html') && !f.includes('#'))) {
	const text = await readFile(file, 'utf8');
	const redirect = text.startsWith('<script>location.href=');
	const ids = new Set([...text.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
	pages.set(pagePath(file), { ids, redirect });
	if (!redirect) html.set(pagePath(file), text);
}

const files = new Set(
	[
		...(await walk(path.join(ROOT, 'static'))).map((f) =>
			path.relative(path.join(ROOT, 'static'), f)
		),
		...(existsSync(path.join(OUT, 'dependencies'))
			? (await walk(path.join(OUT, 'dependencies'))).map((f) =>
					path.relative(path.join(OUT, 'dependencies'), f)
				)
			: [])
	].map((f) => `/${f}`)
);

const decode = (/** @type {string} */ s) => {
	try {
		return decodeURIComponent(s.replace(/&amp;/g, '&'));
	} catch {
		return s;
	}
};

/** @type {string[]} */
const broken = [];
for (const [from, text] of html) {
	for (const [, raw] of text.matchAll(/<a\s[^>]*href="([^"]+)"/g)) {
		const href = decode(raw);
		if (/^(https?:|mailto:|tel:|\/\/|javascript:)/.test(href)) continue;
		const [beforeHash, hash] = href.split('#');
		const target = beforeHash.split('?')[0] || from;
		if (!target.startsWith('/')) continue;
		const clean = target.length > 1 ? target.replace(/\/$/, '') : target;
		if (clean.startsWith('/_app/') || files.has(clean)) continue;
		const page = pages.get(clean);
		if (!page) {
			broken.push(`${from} → ${href} (no such page)`);
			continue;
		}
		if (hash && !page.redirect && !page.ids.has(hash))
			broken.push(`${from} → ${href} (no element #${hash})`);
	}
}

// Metadata: every indexable page has a title, a description and a canonical
// URL, and no two pages in one language share a title.
/** @type {Map<string, string>} "lang|title" → first page */
const titles = new Map();
for (const [from, text] of html) {
	if (/<meta name="robots" content="noindex/.test(text)) continue;
	const title = /<title>([^<]*)<\/title>/.exec(text)?.[1];
	if (!title) broken.push(`${from}: no <title>`);
	if (!/<meta name="description" content="[^"]+"/.test(text))
		broken.push(`${from}: no meta description`);
	if (!/<link rel="canonical"/.test(text)) broken.push(`${from}: no canonical link`);
	const lang = /<html lang="([^"]+)"/.exec(text)?.[1] ?? '';
	const key = `${lang}|${title}`;
	if (title && titles.has(key))
		broken.push(`${from}: same <title> as ${titles.get(key)} ("${title}")`);
	else titles.set(key, from);
}

const unique = [...new Set(broken)];
if (unique.length) {
	console.error(`check:links found ${unique.length} broken link(s):\n  ${unique.join('\n  ')}`);
	process.exit(1);
}
console.log(
	`check:links: ${html.size} pages, ${pages.size - html.size} redirects. All links resolve.`
);
