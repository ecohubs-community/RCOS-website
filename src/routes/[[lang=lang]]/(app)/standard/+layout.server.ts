import { standardNav } from '$lib/server/standard';
import { loadCoreManifest } from '$lib/server/downloads';
import { DEFAULT_LOCALE } from '$lib/i18n/languages';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ params }) => {
	const locale = params.lang ?? DEFAULT_LOCALE;
	const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;
	const core = loadCoreManifest()?.entries.find((e) => e.slug === 'rcos-core/v0-1');
	const files = core?.files[locale] ?? core?.files[DEFAULT_LOCALE] ?? {};
	return {
		nav: await standardNav(locale),
		downloads: {
			pdf: files.pdf ?? null,
			md: files.md ?? null,
			print: `${prefix}/standard/core/0.1/print`
		}
	};
};
