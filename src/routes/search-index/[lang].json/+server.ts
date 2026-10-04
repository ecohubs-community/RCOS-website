import { error, json } from '@sveltejs/kit';
import { searchIndex } from '$lib/server/search';
import { LOCALE_CODES } from '$lib/i18n/languages';
import type { EntryGenerator, RequestHandler } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () => LOCALE_CODES.map((lang) => ({ lang }));

/** The search index for one language, as static JSON (loaded by the ⌘K palette and /search). */
export const GET: RequestHandler = async ({ params }) => {
	if (!LOCALE_CODES.includes(params.lang)) error(404, 'Not found');
	return json(await searchIndex(params.lang));
};
