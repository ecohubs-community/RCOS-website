import { error } from '@sveltejs/kit';
import { templateLayer } from '$lib/server/site';
import { localeEntries } from '$lib/server/entries';
import { DEFAULT_LOCALE } from '$lib/i18n/languages';
import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = () =>
	localeEntries([0, 1, 2, 3, 4, 5, 6].map((n) => ({ layer: `layer-${n}` })));

export const load: PageServerLoad = async ({ params }) => {
	const locale = params.lang ?? DEFAULT_LOCALE;
	const n = /^layer-([0-6])$/.exec(params.layer)?.[1];
	const layer = n === undefined ? null : await templateLayer(Number(n), locale);
	if (!layer) error(404, 'Not found');
	return { locale, layer };
};
