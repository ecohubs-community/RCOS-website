/**
 * Pages whose copy is still markdown (content/pages/**.md, one file per
 * language: `<key>.md`, `<key>.de.md`, …): hub introductions, the toolkit,
 * safeguards and reference implementations. Rendered at prerender time.
 */
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { compile, type MdsvexCompileOptions } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import { DEFAULT_LOCALE } from '$lib/i18n/languages';
import { escapeTemplatePlaceholders, codeHighlighter } from './template-markdown.js';
import { localizeLinks } from './docs';
import { getFileDates } from './dates';

const ROOT = path.resolve('content/pages');

const mdsvexOptions = {
	rehypePlugins: [rehypeSlug],
	highlight: { highlighter: codeHighlighter }
} as unknown as MdsvexCompileOptions;

export type MarkdownPage = {
	key: string;
	title: string;
	summary: string | null;
	html: string;
	/** Language of the text served (English when the page is not translated) */
	lang: string;
	fallback: boolean;
	datePublished: string | null;
	dateModified: string | null;
};

/** Every page key ("toolkit/self-assessment"), for tests and the sitemap. */
export const PAGE_KEYS = [
	'layers',
	'templates',
	'stress-tests',
	'toolkit/self-assessment',
	'toolkit/facilitation-worksheet',
	'safeguards',
	'safeguards/land-commons-anti-privatization',
	'reference-implementations'
] as const;
export type PageKey = (typeof PAGE_KEYS)[number];

export async function readPage(key: PageKey, locale: string): Promise<MarkdownPage | null> {
	const translated = path.join(ROOT, `${key}.${locale}.md`);
	const source = path.join(ROOT, `${key}.md`);
	const file = locale !== DEFAULT_LOCALE && existsSync(translated) ? translated : source;
	if (!existsSync(file)) return null;
	const { data, content } = matter(await readFile(file, 'utf8'));
	const compiled = await compile(
		escapeTemplatePlaceholders(localizeLinks(content, locale)),
		mdsvexOptions
	);
	const lang = file === source ? DEFAULT_LOCALE : locale;
	const dates = (await getFileDates()).get(file);
	return {
		key,
		title: String(data.title ?? key),
		summary: data.summary ? String(data.summary) : null,
		html: compiled?.code ?? content,
		lang,
		fallback: lang !== locale,
		datePublished: dates?.published ?? null,
		dateModified: dates?.modified ?? null
	};
}

/** Locales a page exists in. */
export function pageLocales(key: PageKey, locales: readonly string[]): string[] {
	return locales.filter(
		(l) => l === DEFAULT_LOCALE || existsSync(path.join(ROOT, `${key}.${l}.md`))
	);
}
