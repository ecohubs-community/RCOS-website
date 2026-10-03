import { loadMarkdownPage } from '$lib/server/page-load';
import { localeEntries } from '$lib/server/entries';
import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = () => localeEntries([{}]);
export const load: PageServerLoad = ({ params }) => loadMarkdownPage('safeguards', params.lang);
