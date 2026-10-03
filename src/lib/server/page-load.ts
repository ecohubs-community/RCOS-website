import { error } from '@sveltejs/kit';
import { readPage, type PageKey } from './pages';
import { DEFAULT_LOCALE } from '$lib/i18n/languages';

/** Load a markdown page (content/pages) for a route, or 404. */
export async function loadMarkdownPage(key: PageKey, lang: string | undefined) {
	const locale = lang ?? DEFAULT_LOCALE;
	const page = await readPage(key, locale);
	if (!page) error(404, 'Not found');
	return { locale, page };
}
