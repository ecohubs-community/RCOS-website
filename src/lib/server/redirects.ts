/**
 * Permanent redirects from the URLs of the markdown era to where the pages
 * live now. Built from the content itself (each document's legacyPath and its
 * new route), so no page can be forgotten.
 *
 * hooks.server.ts answers the old URLs with a 308. The articles route also
 * lists them as prerender entries, so the build records each redirect and
 * adapter-vercel serves it as a static route. Old links, bookmarks, downloaded
 * documents and search results keep working for good.
 */
import { loadDocuments } from '$lib/content/load.js';
import { standardRoute } from '$lib/content/routes.js';
import { articleUrl } from '$lib/content/refs.js';

let map: Promise<Map<string, string>> | undefined;

export function redirects(): Promise<Map<string, string>> {
	map ??= loadDocuments().then((docs) => {
		const out = new Map<string, string>();
		for (const { file, en } of docs) {
			const to = standardRoute(file, en);
			if (!to) continue;
			out.set(articleUrl(en.legacyPath), to);
			// The numbered file name was linked by mistake in places (e.g. the
			// old home page); send it to the same page.
			out.set(`/articles/${en.legacyPath}`, to);
		}
		return out;
	});
	return map;
}

/**
 * @param pathname without locale prefix
 * @returns the new path, or null when the URL did not move
 */
export async function redirectFor(pathname: string): Promise<string | null> {
	const clean = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;
	return (await redirects()).get(clean) ?? null;
}
