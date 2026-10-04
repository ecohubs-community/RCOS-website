import { error } from '@sveltejs/kit';
import { redirects } from '$lib/server/redirects';
import { DEFAULT_LOCALE, LOCALE_CODES } from '$lib/i18n/languages';
import type { EntryGenerator, PageServerLoad } from './$types';

/**
 * /articles/… was the markdown-era site. Every old URL answers a 308 from
 * hooks.server.ts; listing them as prerender entries makes the build record
 * each redirect, which adapter-vercel serves as a static route.
 */
export const entries: EntryGenerator = async () =>
	[...(await redirects()).keys()].flatMap((from) => {
		const slug = from.replace(/^\/articles\/?/, '');
		return LOCALE_CODES.map((code) => (code === DEFAULT_LOCALE ? { slug } : { lang: code, slug }));
	});

// Only reached for an /articles URL that never existed.
export const load: PageServerLoad = () => error(404, 'Not found');
