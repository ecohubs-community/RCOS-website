import { coverage, stressTestsHub } from '$lib/server/site';
import { readPage } from '$lib/server/pages';
import { localeEntries } from '$lib/server/entries';
import { DEFAULT_LOCALE } from '$lib/i18n/languages';
import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = () => localeEntries([{}]);

export const load: PageServerLoad = async ({ params }) => {
	const locale = params.lang ?? DEFAULT_LOCALE;
	return {
		locale,
		hub: await stressTestsHub(locale),
		coverage: await coverage(locale),
		page: await readPage('stress-tests', locale)
	};
};
