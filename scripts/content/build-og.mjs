#!/usr/bin/env node
/**
 * Share images (Open Graph, 1200×630) for the important pages, in every
 * language: the hubs, the standard's start and version pages, the seven layer
 * chapters and the seven layer guides. The home page keeps static/og-image.png.
 *
 *   pnpm build && pnpm content:og
 *
 * Reads the prerendered pages (.svelte-kit/output/prerendered/pages), so the
 * title, description and breadcrumb on each card are the page's own, in its
 * language. Writes static/og/<locale>/<path>.jpg and src/lib/og-images.json,
 * which SEO.svelte reads to pick a page's image. Run it again after changing
 * titles or descriptions, then build again.
 *
 * The card is HTML rendered by Chromium (Playwright); its inline styles are an
 * exception to the Tailwind rule because it is a standalone image template.
 */
import { readFile, writeFile, mkdir, readdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { chromium } from '@playwright/test';
import { SUPPORTED_LOCALES } from '../i18n.mjs';

const ROOT = path.resolve(import.meta.dirname, '../..');
const PAGES = path.join(ROOT, '.svelte-kit/output/prerendered/pages');
const OUT = path.join(ROOT, 'static/og');
const MANIFEST = path.join(ROOT, 'src/lib/og-images.json');

if (!existsSync(PAGES)) {
	console.error('No prerendered pages. Run `pnpm build` first.');
	process.exit(1);
}

const HUBS = [
	'/library',
	'/layers',
	'/templates',
	'/stress-tests',
	'/toolkit',
	'/safeguards',
	'/reference-implementations',
	'/standard',
	'/standard/core/0.1'
];
const ls = async (dir, re) =>
	(await readdir(path.join(PAGES, dir)))
		.filter((f) => re.test(f))
		.map((f) => f.replace(/\.html$/, ''));
const PATHS = [
	...HUBS,
	...(await ls('standard/core/0.1', /^layer-\d-.*\.html$/)).map((f) => `/standard/core/0.1/${f}`),
	...(await ls('layers', /^\d-.*\.html$/)).map((f) => `/layers/${f}`)
];

/** Layer colours and their text colours, as in src/lib/styles/theme.css. */
const LAYER = ['#1a3009', '#2d5016', '#4a7c2a', '#6b9f3d', '#9ac966', '#b5da82', '#d0eb9e'];
const LAYER_INK = ['#fff', '#fff', '#fff', '#1a3009', '#1a3009', '#1a3009', '#1a3009'];

const decode = (s) =>
	s
		.replace(/<[^>]+>/g, '')
		.replace(/&#(\d+);/g, (_m, n) => String.fromCodePoint(Number(n)))
		.replace(/&#x([\da-f]+);/gi, (_m, n) => String.fromCodePoint(parseInt(n, 16)))
		.replace(/&quot;/g, '"')
		.replace(/&#39;|&apos;/g, "'")
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&amp;/g, '&')
		.replace(/\s+/g, ' ')
		.trim();
const escape = (s) =>
	s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Title, description and breadcrumb of a built page. */
function readPage(html) {
	const meta = (name) =>
		decode(new RegExp(`<meta (?:name|property)="${name}" content="([^"]*)"`).exec(html)?.[1] ?? '');
	// Without the site suffix and a chapter number ("4. Layer 2 — …"): the card shows the layer.
	const title = meta('og:title')
		.replace(/\s+-\s+RCOS$/, '')
		.replace(/^\d+\.?\s+/, '');
	const description = meta('description');
	const nav = /<nav aria-label="Breadcrumb"[^>]*>([\s\S]*?)<\/nav>/.exec(html)?.[1] ?? '';
	const crumbs = [...nav.matchAll(/<(?:a|span)\b[^>]*>([\s\S]*?)<\/(?:a|span)>/g)]
		.map((m) => decode(m[1]))
		.filter(Boolean);
	return { title, description, eyebrow: crumbs.slice(0, -1).join(' · ') };
}

const font = async (file) =>
	`data:font/woff2;base64,${(await readFile(path.join(ROOT, 'node_modules', file))).toString('base64')}`;
const PRIDI = await font('@fontsource/pridi/files/pridi-latin-700-normal.woff2');
const TEXT = await font(
	'@fontsource-variable/stack-sans-text/files/stack-sans-text-latin-wght-normal.woff2'
);
const LOGO = await readFile(path.join(ROOT, 'static/favicon.svg'), 'utf8');

function card({ title, description, eyebrow, layer }) {
	const size = title.length > 46 ? 58 : title.length > 30 ? 66 : 76;
	const chip =
		layer === null
			? ''
			: `<div style="width:112px;height:112px;border-radius:24px;background:${LAYER[layer]};color:${LAYER_INK[layer]};box-shadow:0 0 0 3px #b5da82;display:flex;align-items:center;justify-content:center;font:700 64px Pridi">${layer}</div>`;
	return `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:Pridi;src:url(${PRIDI}) format('woff2');font-weight:700}
@font-face{font-family:Text;src:url(${TEXT}) format('woff2');font-weight:100 900}
*{margin:0;box-sizing:border-box}
body{width:1200px;height:630px;background:#1a3009;color:#f5fde5;font-family:Text,sans-serif;overflow:hidden}
.grid{position:absolute;inset:0;background-image:radial-gradient(#4a7c2a 1.5px,transparent 1.5px);background-size:28px 28px;opacity:.35}
.wrap{position:relative;height:100%;padding:64px 72px;display:flex;flex-direction:column}
.top{display:flex;align-items:center;gap:18px}
.top svg{width:64px;height:64px}
.brand{font:700 30px Pridi;letter-spacing:.01em}
.main{flex:1;display:flex;align-items:center;gap:48px}
.text{flex:1;display:flex;flex-direction:column;gap:20px}
.eyebrow{font-weight:650;font-size:22px;letter-spacing:.08em;text-transform:uppercase;color:#b5da82}
h1{font:700 ${size}px/1.08 Pridi;color:#f5fde5;text-wrap:balance}
p{font-size:28px;line-height:1.35;color:#d0eb9e;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
.url{font-size:22px;color:#b5da82;letter-spacing:.02em}
</style></head><body><div class="grid"></div><div class="wrap">
<div class="top">${LOGO.replace(/<\?xml[^>]*\?>|<!DOCTYPE[^>]*>/g, '')}<span class="brand">RCOS</span></div>
<div class="main"><div class="text">${eyebrow ? `<div class="eyebrow">${escape(eyebrow)}</div>` : ''}<h1>${escape(title)}</h1>${description ? `<p>${escape(description)}</p>` : ''}</div>${chip}</div>
<div class="url">rcos.ecohubs.community</div>
</div></body></html>`;
}

await rm(OUT, { recursive: true, force: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
/** @type {Record<string, string[]>} */
const manifest = {};
let count = 0;
for (const locale of SUPPORTED_LOCALES) {
	manifest[locale] = [];
	for (const p of PATHS) {
		const file = path.join(PAGES, locale === 'en' ? '' : locale, `${p.slice(1)}.html`);
		if (!existsSync(file)) continue;
		const info = readPage(await readFile(file, 'utf8'));
		const layer = /\/layer-(\d)-|^\/layers\/(\d)-/.exec(p);
		await page.setContent(card({ ...info, layer: layer ? Number(layer[1] ?? layer[2]) : null }));
		await page.evaluate(() => document.fonts.ready);
		const out = path.join(OUT, locale, `${p.slice(1)}.jpg`);
		await mkdir(path.dirname(out), { recursive: true });
		await page.screenshot({ path: out, type: 'jpeg', quality: 72 });
		manifest[locale].push(p);
		count++;
	}
}
await browser.close();
await writeFile(MANIFEST, `${JSON.stringify(manifest, null, '\t')}\n`);
console.log(`Wrote ${count} share images to static/og and src/lib/og-images.json`);
