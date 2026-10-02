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

type Crumb = { title: string; slug: string };

/**
 * Article schema for one locale's page. `url` must match the page's canonical
 * (locale-prefixed) URL, and `inLanguage` is the language of the body actually
 * served, which is English on a not-yet-translated page.
 */
export function buildArticleSchema(
	article: Crumb & { summary?: string; tags?: string[] },
	breadcrumbs: Crumb[],
	opts: {
		locale: string;
		inLanguage: string;
		datePublished?: string | null;
		dateModified?: string | null;
	}
): Record<string, unknown> {
	const articleUrl = (slug: string) => localeUrl(SITE_URL, `/articles/${slug}`, opts.locale);
	const url = articleUrl(article.slug);

	const schema: Record<string, unknown> = {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: article.title,
		url,
		mainEntityOfPage: url,
		inLanguage: opts.inLanguage,
		publisher: PUBLISHER,
		isPartOf: {
			'@type': 'WebSite',
			name: SITE_NAME,
			url: localeUrl(SITE_URL, '/', opts.locale)
		}
	};

	if (opts.datePublished) schema.datePublished = opts.datePublished;
	if (opts.dateModified) schema.dateModified = opts.dateModified;

	if (article.summary) {
		schema.description = article.summary;
	}

	if (article.tags?.length) {
		schema.keywords = article.tags.join(', ');
	}

	if (breadcrumbs.length > 1) {
		const parent = breadcrumbs[breadcrumbs.length - 2];
		schema.isPartOf = {
			'@type': 'Article',
			name: parent.title,
			url: articleUrl(parent.slug)
		};
	}

	return schema;
}

/** Breadcrumb trail Home → Articles → …crumbs, with names and URLs in the page's locale. */
export function buildBreadcrumbSchema(
	breadcrumbs: Crumb[],
	locale: string
): Record<string, unknown> {
	const items = [
		{ name: m.nav_home({}, { locale: locale as Locale }), url: localeUrl(SITE_URL, '/', locale) },
		{
			name: m.breadcrumb_segment_articles({}, { locale: locale as Locale }),
			url: localeUrl(SITE_URL, '/articles', locale)
		},
		...breadcrumbs.map((crumb) => ({
			name: crumb.title,
			url: localeUrl(SITE_URL, `/articles/${crumb.slug}`, locale)
		}))
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
