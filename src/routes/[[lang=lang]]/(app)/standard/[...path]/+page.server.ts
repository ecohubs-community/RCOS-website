import { error } from '@sveltejs/kit';
import { standardPage, standardPaths } from '$lib/server/standard';
import { DEFAULT_LOCALE, LOCALE_CODES } from '$lib/i18n/languages';
import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = async () => {
	const paths = await standardPaths();
	return paths.flatMap((p) => {
		const path = p.replace(/^\/standard\/?/, '');
		return LOCALE_CODES.map((code) => (code === DEFAULT_LOCALE ? { path } : { lang: code, path }));
	});
};

export const load: PageServerLoad = async ({ params }) => {
	const locale = params.lang ?? DEFAULT_LOCALE;
	const path = params.path ? `/standard/${params.path}` : '/standard';
	const page = await standardPage(path, locale);
	if (!page) error(404, 'Not found');
	return { page, locale, canonicalPath: path };
};
