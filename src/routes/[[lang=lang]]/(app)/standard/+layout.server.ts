import { standardNav } from '$lib/server/standard';
import { DEFAULT_LOCALE } from '$lib/i18n/languages';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ params }) => {
	const locale = params.lang ?? DEFAULT_LOCALE;
	return { nav: await standardNav(locale) };
};
