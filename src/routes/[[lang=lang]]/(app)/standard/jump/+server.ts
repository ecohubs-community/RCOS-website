import { redirect } from '@sveltejs/kit';
import { standardNav } from '$lib/server/standard';
import { DEFAULT_LOCALE } from '$lib/i18n/languages';
import type { RequestHandler } from './$types';

/** Jump-to-clause without JavaScript: /standard/jump?ref=2.3.4 → the clause. */
export const prerender = false;

export const GET: RequestHandler = async ({ url, params }) => {
	const locale = params.lang ?? DEFAULT_LOCALE;
	const ref = (url.searchParams.get('ref') ?? '').trim().replace(/^§/, '');
	const nav = await standardNav(locale);
	const page = nav.anchors[ref];
	redirect(303, page ? `${page}#${ref}` : nav.start[0].path);
};
