import { standardSitemap } from '$lib/server/standard';
import { siteSitemap } from '$lib/server/site';
import { PAGE_KEYS, pageLocales } from '$lib/server/pages';
import { getFileDates } from '$lib/server/dates';
import { SITE_URL } from '$lib/config/site';
import { LOCALES, LOCALE_CODES, DEFAULT_LOCALE } from '$lib/i18n/languages';
import { localeUrl } from '$lib/i18n/path';
import path from 'node:path';
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
 * A page is available in a locale when its source has a translation there;
 * untranslated pages emit only the default-locale URL.
 */

type Entry = {
	path: string; // unprefixed canonical path, e.g. "/templates/layer-0"
	availableLocales: string[]; // locales where a real translation exists
	changefreq: string;
	priority: string;
	/** Last commit date of the file served per locale. Google uses <lastmod> to
	 * schedule recrawls (and ignores changefreq/priority), so only emit it when
	 * git history gives a real date — see src/lib/server/dates.ts. */
	lastmod?: Record<string, string>;
};

export const GET: RequestHandler = async () => {
	const fileDates = await getFileDates();
	const lastmod = (files: Record<string, string>) =>
		Object.fromEntries(
			Object.entries(files).flatMap(([loc, file]) => {
				const modified = fileDates.get(file)?.modified;
				return modified ? [[loc, modified]] : [];
			})
		);
	const all = LOCALES.map((l) => l.code);

	const staticEntries: Entry[] = [
		{ path: '/', availableLocales: all, changefreq: 'monthly', priority: '1.0' },
		{ path: '/library', availableLocales: all, changefreq: 'monthly', priority: '0.8' },
		{ path: '/toolkit', availableLocales: all, changefreq: 'monthly', priority: '0.7' },
		{ path: '/data', availableLocales: all, changefreq: 'monthly', priority: '0.5' }
	];

	// The standard and the content pages, served from their YAML (one file per locale).
	const yamlEntries: Entry[] = [...(await standardSitemap()), ...(await siteSitemap())].map(
		({ path: p, locales, files }) => ({
			path: p,
			availableLocales: locales,
			changefreq: 'weekly',
			priority: p === '/standard' || /^\/standard\/core\/[^/]+\/[^/]+$/.test(p) ? '0.8' : '0.6',
			lastmod: lastmod(files)
		})
	);

	// Pages whose copy is markdown (hubs, toolkit, safeguards, reference implementations).
	const pageEntries: Entry[] = PAGE_KEYS.map((key) => {
		const locales = pageLocales(key, LOCALE_CODES);
		const files = Object.fromEntries(
			locales.map((l) => [
				l,
				path.resolve('content/pages', `${key}${l === DEFAULT_LOCALE ? '' : `.${l}`}.md`)
			])
		);
		return {
			path: `/${key}`,
			availableLocales: locales,
			changefreq: 'weekly',
			priority: '0.7',
			lastmod: lastmod(files)
		};
	});

	const allEntries = [...staticEntries, ...yamlEntries, ...pageEntries];

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
