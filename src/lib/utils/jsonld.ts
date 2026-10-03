import { SITE_URL, SITE_NAME } from '$lib/config/site';
import { localeUrl } from '$lib/i18n/path';
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
