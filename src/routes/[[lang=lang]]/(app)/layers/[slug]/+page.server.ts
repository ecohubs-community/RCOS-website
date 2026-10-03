import { error } from '@sveltejs/kit';
import { guidePage, sitePaths } from '$lib/server/site';
import { localeEntries } from '$lib/server/entries';
import { DEFAULT_LOCALE } from '$lib/i18n/languages';
import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = async () =>
	localeEntries(
		(await sitePaths()).flatMap((p) => {
			const m = /^\/layers\/([a-z0-9-]+)$/.exec(p);
			return m ? [{ slug: m[1] }] : [];
		})
	);

export const load: PageServerLoad = async ({ params }) => {
	const locale = params.lang ?? DEFAULT_LOCALE;
	const page = await guidePage(`/layers/${params.slug}`, locale);
	if (!page) error(404, 'Not found');
	return { locale, page };
};
