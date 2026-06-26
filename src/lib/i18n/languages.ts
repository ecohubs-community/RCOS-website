/**
 * Single source of truth for supported locales.
 *
 * Add a locale here and it becomes available to:
 *   - the URL matcher (src/params/lang.ts)
 *   - the language switcher (src/lib/components/i18n/LanguageSwitcher.svelte)
 *   - the locale negotiator in hooks.server.ts
 *   - the sitemap and hreflang emitters
 *   - the downloads pipeline (Phase 4)
 *
 * `default: true` MUST be set on exactly one locale. The default locale is served
 * UNPREFIXED (canonical URL: /articles/...). All other locales get a prefix
 * (/de/articles/..., /es/articles/...).
 */

export type Locale = {
	code: string; // BCP-47 / ISO 639-1, used as URL prefix and hreflang value
	englishName: string; // for tooltips, screen readers, fallback labels
	nativeName: string; // shown in the language switcher
	default?: boolean;
};

export const LOCALES: readonly Locale[] = [
	// Region tags reflect the actual variant of each bundle, not an aspiration:
	// the English source is US-spelling (behavior/organize) and the Spanish is
	// neutral/pan-Hispanic (informal "tú", no "vosotros"), so they are labelled
	// honestly rather than as British/Castilian. German and French are the
	// European standard (Germany German with ß; France French).
	{ code: 'en', englishName: 'English (US)', nativeName: 'English (US)', default: true },
	{ code: 'de', englishName: 'German (Germany)', nativeName: 'Deutsch (Deutschland)' },
	{ code: 'es', englishName: 'Spanish (International)', nativeName: 'Español (Internacional)' },
	{ code: 'fr', englishName: 'French (France)', nativeName: 'Français (France)' },
	{ code: 'pt-br', englishName: 'Portuguese (Brazil)', nativeName: 'Português (Brasil)' }
	// Add more as translations land:
	// { code: 'pt-pt', englishName: 'Portuguese (Portugal)', nativeName: 'Português (Portugal)' },
] as const;

export const DEFAULT_LOCALE: string = LOCALES.find((l) => l.default)?.code ?? 'en';
export const LOCALE_CODES: readonly string[] = LOCALES.map((l) => l.code);

/** Type guard for runtime locale validation. */
export function isLocale(value: unknown): value is string {
	return typeof value === 'string' && LOCALE_CODES.includes(value);
}

/** Look up a locale's metadata; falls back to the default locale. */
export function getLocale(code: string | undefined | null): Locale {
	return LOCALES.find((l) => l.code === code) ?? LOCALES.find((l) => l.default)!;
}
