import { error } from '@sveltejs/kit';
import { standardPrint } from '$lib/server/standard';
import { DEFAULT_LOCALE, LOCALE_CODES } from '$lib/i18n/languages';
import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = () =>
	LOCALE_CODES.map((code) => (code === DEFAULT_LOCALE ? {} : { lang: code }));

export const load: PageServerLoad = async ({ params }) => {
	const locale = params.lang ?? DEFAULT_LOCALE;
	const doc = await standardPrint(locale);
	if (!doc) error(404, 'Not found');
	return { doc, locale, date: new Date().toISOString().slice(0, 10) };
};
