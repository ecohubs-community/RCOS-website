/**
 * Pages whose copy is still markdown (content/pages/**.md, one file per
 * language: `<key>.md`, `<key>.de.md`, …): hub introductions, the toolkit,
 * safeguards and reference implementations. Rendered at prerender time.
 */
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { Marked } from 'marked';
import { DEFAULT_LOCALE } from '$lib/i18n/languages';
import { headingSlug } from '$lib/content/markdown.js';
import { escapeTemplatePlaceholders } from './template-markdown.js';
import { localizeLinks } from './docs';
import { getFileDates } from './dates';

const ROOT = path.resolve('content/pages');

const ENTITIES: Record<string, string> = { amp: '&', lt: '<', gt: '>', quot: '"', '#39': "'" };
const plainText = (html: string) =>
	html.replace(/<[^>]+>/g, '').replace(/&(amp|lt|gt|quot|#39);/g, (_, e) => ENTITIES[e]);

/**
 * Markdown to HTML with heading ids as GitHub makes them (a repeated id gets
 * -1, -2, …, skipping any id already taken), so links to `#some-heading` keep
 * working.
 */
function render(md: string): string {
	const counts = new Map<string, number>();
	const taken = new Set<string>();
	const marked = new Marked({ gfm: true, async: false });
	marked.use({
		renderer: {
			heading({ tokens, depth }) {
				const html = this.parser.parseInline(tokens);
				const base = headingSlug(plainText(html));
				let n = counts.get(base) ?? 0;
				let id = n ? `${base}-${n}` : base;
				while (taken.has(id)) id = `${base}-${++n}`;
				counts.set(base, n + 1);
				taken.add(id);
				return `<h${depth} id="${id}">${html}</h${depth}>\n`;
			}
		}
	});
	return marked.parse(md) as string;
}

export type MarkdownPage = {
	key: string;
	title: string;
	summary: string | null;
	/** The first words of the text, for a description when there is no summary */
	excerpt: string;
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
	const html = render(escapeTemplatePlaceholders(localizeLinks(content, locale)));
	const lang = file === source ? DEFAULT_LOCALE : locale;
	const dates = (await getFileDates()).get(file);
	return {
		key,
		title: String(data.title ?? key),
		summary: data.summary ? String(data.summary) : null,
		html,
		excerpt: html
			.replace(/<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>/g, ' ')
			.replace(/<[^>]+>/g, ' ')
			.replace(/\s+/g, ' ')
			.trim()
			.slice(0, 200),
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
