import { error } from '@sveltejs/kit';
import { loadMarkdownPage } from '$lib/server/page-load';
import { localeEntries } from '$lib/server/entries';
import type { EntryGenerator, PageServerLoad } from './$types';

const SLUGS = ['land-commons-anti-privatization'] as const;

export const entries: EntryGenerator = () => localeEntries(SLUGS.map((slug) => ({ slug })));

export const load: PageServerLoad = async ({ params }) => {
	const slug = SLUGS.find((s) => s === params.slug);
	if (!slug) error(404, 'Not found');
	return {
		...(await loadMarkdownPage(`safeguards/${slug}`, params.lang)),
		path: `/safeguards/${slug}`
	};
};
