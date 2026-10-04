import { DEFAULT_LOCALE } from '$lib/i18n/languages';
import type { PageServerLoad } from './$types';

export const prerender = true;

// The results are found in the browser, from /search-index/<lang>.json.
export const load: PageServerLoad = ({ params }) => ({ locale: params.lang ?? DEFAULT_LOCALE });
