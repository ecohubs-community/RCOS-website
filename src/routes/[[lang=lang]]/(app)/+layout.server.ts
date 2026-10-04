import { DEFAULT_LOCALE } from '$lib/i18n/languages';
import type { LayoutServerLoad } from './$types';

export const prerender = true;

// The URL is authoritative for the locale: `params.lang` is set only when the URL
// has a non-default prefix (/de/…). Never the cookie or Accept-Language: the page's
// own load reads the URL too, and the two must agree (see hooks.server.ts).
export const load: LayoutServerLoad = ({ params }) => ({ locale: params.lang ?? DEFAULT_LOCALE });
