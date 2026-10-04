import { error } from '@sveltejs/kit';
import { loadMarkdownPage } from '$lib/server/page-load';
import { buildAssessment } from '$lib/server/assessment';
import { localeEntries } from '$lib/server/entries';
import type { EntryGenerator, PageServerLoad } from './$types';

const PAGES = {
	'self-assessment': 'toolkit/self-assessment',
	'facilitation-worksheet': 'toolkit/facilitation-worksheet'
} as const;

export const entries: EntryGenerator = () =>
	localeEntries(Object.keys(PAGES).map((slug) => ({ slug })));

export const load: PageServerLoad = async ({ params }) => {
	const key = PAGES[params.slug as keyof typeof PAGES];
	if (!key) error(404, 'Not found');
	const data = await loadMarkdownPage(key, params.lang);
	return {
		...data,
		path: `/toolkit/${params.slug}`,
		assessment: params.slug === 'self-assessment' ? await buildAssessment(data.locale) : null
	};
};
