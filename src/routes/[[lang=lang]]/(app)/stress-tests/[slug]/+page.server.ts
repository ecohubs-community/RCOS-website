import { error } from '@sveltejs/kit';
import { sitePaths, stressTestPage } from '$lib/server/site';
import { localeEntries } from '$lib/server/entries';
import { DEFAULT_LOCALE } from '$lib/i18n/languages';
import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = async () =>
	localeEntries(
		(await sitePaths()).flatMap((p) => {
			const m = /^\/stress-tests\/([a-z0-9-]+)$/.exec(p);
			return m ? [{ slug: m[1] }] : [];
		})
	);

export const load: PageServerLoad = async ({ params }) => {
	const locale = params.lang ?? DEFAULT_LOCALE;
	const path = `/stress-tests/${params.slug}`;
	const page = await stressTestPage(path, locale);
	if (!page) error(404, 'Not found');
	return { locale, page, path };
};
