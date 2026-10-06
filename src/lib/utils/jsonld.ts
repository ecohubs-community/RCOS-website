import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '$lib/config/site';
import { localeUrl, stripLocale } from '$lib/i18n/path';
import { m } from '$lib/paraglide/messages.js';
import type { Locale } from '$lib/paraglide/runtime.js';

export function buildWebSiteSchema(): Record<string, unknown> {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: SITE_NAME,
		url: SITE_URL,
		potentialAction: {
			'@type': 'SearchAction',
			target: `${SITE_URL}/search?q={search_term_string}`,
			'query-input': 'required name=search_term_string'
		}
	};
}

const PUBLISHER = {
	'@type': 'Organization',
	'@id': 'https://ecohubs.community/#organization',
	name: 'EcoHubs Community',
	url: 'https://ecohubs.community'
};

/** The share image every page uses (no per-page images yet). */
const IMAGE = `${SITE_URL}${DEFAULT_OG_IMAGE}`;

/**
 * Home page graph: the site (in the page's language) plus who publishes it.
 * `inLanguage` and the locale-specific URL let search engines tie each
 * translated home page to its own language instead of folding them together.
 */
export function buildHomeSchema(locale: string, description: string): Record<string, unknown>[] {
	return [
		{
			...buildWebSiteSchema(),
			url: localeUrl(SITE_URL, '/', locale),
			description,
			inLanguage: locale,
			publisher: { '@id': PUBLISHER['@id'] }
		},
		{ '@context': 'https://schema.org', ...PUBLISHER }
	];
}

export type Crumb = { name: string; path: string };

/** HTML (rendered at build time) as plain text: tags stripped, entities decoded. */
export function textOf(html: string): string {
	return html
		.replace(/<[^>]+>/g, '')
		.replace(/&#(\d+);/g, (_m, n) => String.fromCodePoint(Number(n)))
		.replace(/&#x([\da-f]+);/gi, (_m, n) => String.fromCodePoint(parseInt(n, 16)))
		.replace(/&quot;/g, '"')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&nbsp;/g, ' ')
		.replace(/&amp;/g, '&')
		.replace(/\s+/g, ' ')
		.trim();
}

/**
 * A content page in one locale. `path` is locale-neutral; `inLanguage` is the
 * language of the text actually served (English on a not-yet-translated page).
 */
export function buildPageSchema(opts: {
	title: string;
	description?: string | null;
	path: string;
	locale: string;
	inLanguage: string;
	datePublished?: string | null;
	dateModified?: string | null;
}): Record<string, unknown> {
	const url = localeUrl(SITE_URL, opts.path, opts.locale);
	const schema: Record<string, unknown> = {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: opts.title,
		url,
		mainEntityOfPage: url,
		inLanguage: opts.inLanguage,
		image: IMAGE,
		author: PUBLISHER,
		publisher: PUBLISHER,
		isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: localeUrl(SITE_URL, '/', opts.locale) }
	};
	if (opts.description) schema.description = opts.description;
	if (opts.datePublished) schema.datePublished = opts.datePublished;
	if (opts.dateModified) schema.dateModified = opts.dateModified;
	return schema;
}

/** Breadcrumb trail Home → …crumbs, with names and URLs in the page's locale. */
export function buildBreadcrumbSchema(crumbs: Crumb[], locale: string): Record<string, unknown> {
	const items = [
		{ name: m.nav_home({}, { locale: locale as Locale }), url: localeUrl(SITE_URL, '/', locale) },
		...crumbs.map((c) => ({ name: c.name, url: localeUrl(SITE_URL, c.path, locale) }))
	];
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: item.url
		}))
	};
}

const LICENSE = 'https://creativecommons.org/licenses/by/4.0/';

/** The standard itself, as the work every chapter is part of. */
function standardWork(locale: string): Record<string, unknown> {
	return {
		'@type': 'CreativeWork',
		name: 'RCOS-Core',
		version: '0.1',
		creativeWorkStatus: 'Draft',
		license: LICENSE,
		url: localeUrl(SITE_URL, '/standard/core/0.1', locale),
		publisher: PUBLISHER
	};
}

/** A page of the standard: a TechArticle that is part of RCOS-Core 0.1. */
export function buildStandardSchema(opts: {
	title: string;
	description?: string | null;
	path: string;
	locale: string;
	inLanguage: string;
	datePublished?: string | null;
	dateModified?: string | null;
}): Record<string, unknown> {
	const url = localeUrl(SITE_URL, opts.path, opts.locale);
	return {
		'@context': 'https://schema.org',
		'@type': 'TechArticle',
		headline: opts.title,
		url,
		mainEntityOfPage: url,
		inLanguage: opts.inLanguage,
		license: LICENSE,
		image: IMAGE,
		author: PUBLISHER,
		publisher: PUBLISHER,
		...(opts.description ? { description: opts.description } : {}),
		...(opts.datePublished ? { datePublished: opts.datePublished } : {}),
		...(opts.dateModified ? { dateModified: opts.dateModified } : {}),
		isPartOf: standardWork(opts.locale)
	};
}

/** The glossary as a DefinedTermSet. */
export function buildGlossarySchema(
	terms: { key: string; term: string; definition: string }[],
	opts: { title: string; path: string; locale: string }
): Record<string, unknown> {
	const url = localeUrl(SITE_URL, opts.path, opts.locale);
	return {
		'@context': 'https://schema.org',
		'@type': 'DefinedTermSet',
		'@id': `${url}#glossary`,
		name: opts.title,
		url,
		inLanguage: opts.locale,
		hasDefinedTerm: terms.map((t) => ({
			'@type': 'DefinedTerm',
			termCode: t.key,
			name: t.term,
			description: t.definition,
			url: `${url}#term-${t.key}`,
			inDefinedTermSet: `${url}#glossary`
		}))
	};
}

const MEDIA_TYPE: Record<string, string> = {
	md: 'text/markdown',
	docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
	odt: 'application/vnd.oasis.opendocument.text',
	pdf: 'application/pdf'
};

/** Downloadable files of a page (a template, the standard) as DigitalDocuments. */
export function buildDownloadsSchema(
	name: string,
	files: Record<string, string>,
	locale: string
): Record<string, unknown>[] {
	return Object.entries(files).map(([format, href]) => ({
		'@context': 'https://schema.org',
		'@type': 'DigitalDocument',
		name,
		encodingFormat: MEDIA_TYPE[format] ?? format,
		contentUrl: href.startsWith('http') ? href : `${SITE_URL}${href}`,
		inLanguage: locale,
		license: LICENSE,
		publisher: PUBLISHER
	}));
}

/**
 * Article + breadcrumb trail for a content page, from the same crumbs the page
 * shows (their hrefs may carry the locale prefix; the last crumb is the page).
 */
export function buildPageLd(opts: {
	title: string;
	description?: string | null;
	path: string;
	locale: string;
	inLanguage?: string;
	datePublished?: string | null;
	dateModified?: string | null;
	crumbs: { label: string; href?: string }[];
}): Record<string, unknown>[] {
	return [
		buildPageSchema({ ...opts, inLanguage: opts.inLanguage ?? opts.locale }),
		buildBreadcrumbSchema(
			opts.crumbs.map((c) => ({ name: c.label, path: c.href ? stripLocale(c.href) : opts.path })),
			opts.locale
		)
	];
}
