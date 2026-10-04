import { DEFAULT_LOCALE, LOCALE_CODES } from '$lib/i18n/languages';

/** Prerender entries for every locale: the default one unprefixed, the others with `lang`. */
export function localeEntries<T extends Record<string, string>>(
	list: T[]
): (T & { lang?: string })[] {
	return list.flatMap((p) =>
		LOCALE_CODES.map((code) => (code === DEFAULT_LOCALE ? p : { ...p, lang: code }))
	);
}
