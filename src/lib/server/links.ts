import { localizePath } from '$lib/i18n/path';

/**
 * Rewrite internal article links in rendered article HTML:
 *
 *   /articles/old-slug?id=4a376956#part  →  /de/articles/current-slug#part   (on a /de page)
 *
 * - `?id=` links were written by the former admin editor and still appear in
 *   content: the id survives renames, the slug does not. Resolve the id to the article's current slug,
 *   then drop it, so every article has one URL instead of one per query string.
 * - Prefix the active locale, so a German page links to German pages rather
 *   than sending readers (and crawlers) back to the English URLs.
 *
 * Unknown ids keep the written slug. Other query params and the #hash are kept.
 */
export function rewriteArticleLinks(
	html: string,
	locale: string,
	articles: ReadonlyArray<{ id: string; slug: string }>
): string {
	const slugById = new Map(articles.map((a) => [a.id, a.slug]));

	return html.replace(
		/href="\/articles((?:\/[^"?#]*)?)(\?[^"#]*)?(#[^"]*)?"/g,
		(_match, slugPath: string, query = '', hash = '') => {
			const params = new URLSearchParams(query.replace(/&amp;/g, '&'));
			const resolved = slugById.get(params.get('id') ?? '');
			params.delete('id');

			const target = localizePath(resolved ? `/articles/${resolved}` : `/articles${slugPath}`, locale);
			const rest = params.toString().replace(/&/g, '&amp;');
			return `href="${target}${rest ? `?${rest}` : ''}${hash}"`;
		}
	);
}
