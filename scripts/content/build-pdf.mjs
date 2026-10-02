#!/usr/bin/env node
// @ts-check
/**
 * Print RCOS-Core to PDF, one file per locale:
 *
 *   static/downloads/<locale>/rcos-core-v0-1.pdf
 *
 * Chromium (Playwright) prints the prerendered /standard/core/0.1/print page,
 * so the PDF uses the site's own typography. Run it after `pnpm build`; it
 * starts `vite preview` itself, or prints from a running site:
 *
 *   pnpm build && pnpm content:pdf
 *   pnpm content:pdf --url http://localhost:5173
 *
 * Then it adds the PDFs to static/downloads/manifest-core.json
 * (scripts/build-core.mjs keeps them there on its next run).
 */
import { spawn } from 'node:child_process';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { chromium } from '@playwright/test';
import { SUPPORTED_LOCALES } from '../i18n.mjs';

const ROOT = path.resolve(import.meta.dirname, '../..');
const OUT = path.join(ROOT, 'static/downloads');
const DEFAULT_LOCALE = 'en';
const PORT = 4372;

const urlArg = process.argv.indexOf('--url');
let base = urlArg > 0 ? process.argv[urlArg + 1].replace(/\/$/, '') : null;

/** @type {import('node:child_process').ChildProcess | null} */
let preview = null;
if (!base) {
	base = `http://localhost:${PORT}`;
	preview = spawn(
		process.execPath,
		['./node_modules/vite/bin/vite.js', 'preview', '--port', String(PORT), '--strictPort'],
		{ cwd: ROOT, stdio: 'ignore' }
	);
	await waitFor(base);
}

const browser = await chromium.launch();
try {
	const page = await browser.newPage();
	await page.emulateMedia({ media: 'print', colorScheme: 'light' });
	for (const locale of SUPPORTED_LOCALES) {
		const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;
		const res = await page.goto(`${base}${prefix}/standard/core/0.1/print`, {
			waitUntil: 'networkidle'
		});
		if (!res?.ok()) {
			throw new Error(
				`${prefix}/standard/core/0.1/print answered ${res?.status()}. Run \`pnpm build\` first.`
			);
		}
		await page.evaluate(() => document.fonts.ready);
		const messages = JSON.parse(await readFile(path.join(ROOT, `messages/${locale}.json`), 'utf8'));
		const file = path.join(OUT, locale, 'rcos-core-v0-1.pdf');
		await mkdir(path.dirname(file), { recursive: true });
		await page.pdf({
			path: file,
			format: 'A4',
			printBackground: true,
			margin: { top: '18mm', bottom: '20mm', left: '18mm', right: '18mm' },
			// Bookmarks from the headings, and a tagged (accessible) PDF.
			outline: true,
			tagged: true,
			displayHeaderFooter: true,
			headerTemplate: '<span></span>',
			// Chromium renders these templates on their own, outside the page's CSS.
			footerTemplate: `<div style="width:100%;padding:0 18mm;display:flex;justify-content:space-between;font:8px sans-serif;color:#6b7280"><span>${messages.std_version_label}</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>`
		});
		console.log(`  ${locale}: ${path.relative(ROOT, file)}`);
	}
} finally {
	await browser.close();
	preview?.kill();
}

// Add the PDFs to the core manifest.
const manifestPath = path.join(OUT, 'manifest-core.json');
const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
for (const entry of manifest.entries) {
	if (entry.slug !== 'rcos-core/v0-1') continue;
	if (!entry.formats.includes('pdf')) entry.formats.push('pdf');
	for (const locale of SUPPORTED_LOCALES) {
		entry.files[locale] ??= {};
		entry.files[locale].pdf = `/downloads/${locale}/rcos-core-v0-1.pdf`;
	}
}
await writeFile(manifestPath, JSON.stringify(manifest, null, 2));
console.log(`Wrote ${path.relative(ROOT, manifestPath)}`);

/** @param {string} url */
async function waitFor(url) {
	for (let i = 0; i < 60; i++) {
		try {
			await fetch(url);
			return;
		} catch {
			await new Promise((r) => setTimeout(r, 500));
		}
	}
	throw new Error(`vite preview did not start on ${url}`);
}
