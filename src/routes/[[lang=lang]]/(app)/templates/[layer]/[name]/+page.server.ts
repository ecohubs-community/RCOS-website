import { error } from '@sveltejs/kit';
import { sitePaths, templatePage } from '$lib/server/site';
import { localeEntries } from '$lib/server/entries';
import { DEFAULT_LOCALE } from '$lib/i18n/languages';
import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = async () =>
	localeEntries(
		(await sitePaths()).flatMap((p) => {
			const m = /^\/templates\/(layer-\d)\/([a-z0-9-]+)$/.exec(p);
			return m ? [{ layer: m[1], name: m[2] }] : [];
		})
	);

export const load: PageServerLoad = async ({ params }) => {
	const locale = params.lang ?? DEFAULT_LOCALE;
	const page = await templatePage(`/templates/${params.layer}/${params.name}`, locale);
	if (!page) error(404, 'Not found');
	return { locale, page };
};
