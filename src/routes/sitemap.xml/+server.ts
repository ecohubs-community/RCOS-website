import { buildGraph } from '$lib/server/graph';
import { readArticleMeta } from '$lib/server/content';
import { standardSitemap } from '$lib/server/standard';
import { getFileDates } from '$lib/server/dates';
import { SITE_URL } from '$lib/config/site';
import { LOCALES, DEFAULT_LOCALE } from '$lib/i18n/languages';
import { localeUrl } from '$lib/i18n/path';
import type { RequestHandler } from './$types';

export const prerender = true;

/**
 * Sitemap with hreflang alternates per Google's documented format:
 * https://developers.google.com/search/docs/specialized/international/localized-versions#sitemap
 *
 * For each (page, locale) where the page has a real translation in that locale, emit
 * one <url> with <loc> for that locale, plus <xhtml:link rel="alternate"> entries for
 * EVERY available locale (bidirectional reciprocity is required), plus an x-default
 * pointing at the canonical (default-locale) URL.
 *
 * Per-article availability is computed by buildGraph() from the set of files
 * actually present (e.g. presence of `00-introduction.de.md` registers `de` for
 * that article); untranslated articles emit only the default-locale URL.
 */

type Entry = {
	path: string; // unprefixed canonical path, e.g. "/articles/foo"
	availableLocales: string[]; // locales where a real translation exists
	changefreq: string;
	priority: string;
	/** Last commit date of the file served per locale. Google uses <lastmod> to
	 * schedule recrawls (and ignores changefreq/priority), so only emit it when
	 * git history gives a real date — see src/lib/server/dates.ts. */
	lastmod?: Record<string, string>;
};

export const GET: RequestHandler = async () => {
	// Default-locale graph: per-article availability is the same regardless of which
	// locale we resolve into, since availableLocales is computed from the files
	// present, not the requested locale.
	const graph = await buildGraph(DEFAULT_LOCALE);

	const staticEntries: Entry[] = [
		{
			path: '/',
			// All UI is auto-translated (or trivially translatable); treat home as available everywhere.
			availableLocales: LOCALES.map((l) => l.code),
			changefreq: 'monthly',
			priority: '1.0'
		},
		{
			path: '/articles',
			availableLocales: LOCALES.map((l) => l.code),
			changefreq: 'weekly',
			priority: '0.8'
		}
	];

	// slug → locale → last-modified date of that locale's file.
	const [meta, fileDates] = await Promise.all([readArticleMeta(), getFileDates()]);
	const lastmodBySlug = new Map<string, Record<string, string>>();
	for (const entry of meta) {
		const modified = entry.filePath ? fileDates.get(entry.filePath)?.modified : undefined;
		if (!modified) continue;
		const bySlug = lastmodBySlug.get(entry.slug) ?? {};
		bySlug[entry.lang ?? DEFAULT_LOCALE] = modified;
		lastmodBySlug.set(entry.slug, bySlug);
	}

	const articleEntries: Entry[] = graph.articles.map((article) => ({
		path: `/articles/${article.slug}`,
		availableLocales: article.availableLocales.length ? article.availableLocales : [DEFAULT_LOCALE],
		changefreq: 'weekly',
		priority: '0.6',
		lastmod: lastmodBySlug.get(article.slug)
	}));

	// The standard, served from its YAML (one source file per locale).
	const standardEntries: Entry[] = (await standardSitemap()).map(({ path, locales, files }) => ({
		path,
		availableLocales: locales,
		changefreq: 'weekly',
		priority: path === '/standard' || /^\/standard\/core\/[^/]+\/[^/]+$/.test(path) ? '0.8' : '0.6',
		lastmod: Object.fromEntries(
			Object.entries(files).flatMap(([loc, file]) => {
				const modified = fileDates.get(file)?.modified;
				return modified ? [[loc, modified]] : [];
			})
		)
	}));

	const allEntries = [...staticEntries, ...standardEntries, ...articleEntries];

	const renderUrl = (entry: Entry, loc: string) => {
		const alternates =
			entry.availableLocales.length > 1
				? entry.availableLocales
						.map(
							(alt) =>
								`    <xhtml:link rel="alternate" hreflang="${alt}" href="${localeUrl(SITE_URL, entry.path, alt)}" />`
						)
						.join('\n') +
					`\n    <xhtml:link rel="alternate" hreflang="x-default" href="${localeUrl(SITE_URL, entry.path, DEFAULT_LOCALE)}" />`
				: '';

		const lastmod = entry.lastmod?.[loc];

		return `  <url>
    <loc>${localeUrl(SITE_URL, entry.path, loc)}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ''}
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>${alternates ? '\n' + alternates : ''}
  </url>`;
	};

	const urls = allEntries.flatMap((entry) =>
		entry.availableLocales.map((loc) => renderUrl(entry, loc))
	);

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>`;

	return new Response(xml.trim(), {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};
