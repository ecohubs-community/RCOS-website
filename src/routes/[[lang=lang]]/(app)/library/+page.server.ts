import { localeEntries } from '$lib/server/entries';
import { DEFAULT_LOCALE } from '$lib/i18n/languages';
import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = () => localeEntries([{}]);
export const load: PageServerLoad = ({ params }) => ({ locale: params.lang ?? DEFAULT_LOCALE });
