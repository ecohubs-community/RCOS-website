import MiniSearch from 'minisearch';
import { searchDocuments } from '$lib/server/search';
import { DEFAULT_LOCALE } from '$lib/i18n/languages';
import type { PageServerLoad } from './$types';

export const prerender = true;

/** A per-locale search index, built at prerender time. */
export const load: PageServerLoad = async ({ params }) => {
	const locale = params.lang ?? DEFAULT_LOCALE;
	const miniSearch = new MiniSearch({
		fields: ['title', 'body'],
		storeFields: ['id', 'url', 'title', 'kind'],
		searchOptions: { fuzzy: 0.2, prefix: true, boost: { title: 2 } }
	});
	miniSearch.addAll(await searchDocuments(locale));
	return { locale, searchIndex: miniSearch.toJSON() };
};
