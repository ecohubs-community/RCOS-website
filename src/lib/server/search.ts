/**
 * What the search page indexes, per locale: the standard, the content pages and
 * the markdown pages. Titles and a short text for each; phase 6 replaces this
 * with a full index and the ⌘K palette.
 */
import { standardPage, standardPaths } from './standard';
import { guidePage, sitePaths, stressTestPage, templatePage } from './site';
import { PAGE_KEYS, readPage } from './pages';
import { localizePath } from './docs';

export type SearchKind = 'standard' | 'template' | 'guide' | 'test' | 'page';
export type SearchDocument = {
	id: string;
	url: string;
	title: string;
	kind: SearchKind;
	body: string;
};

const text = (html: string) =>
	html
		.replace(/<[^>]+>/g, ' ')
		.replace(/\s+/g, ' ')
		.trim()
		.slice(0, 600);

/** Where each markdown page lives. */
const PAGE_PATH: Record<string, string> = {
	layers: '/layers',
	templates: '/templates',
	'stress-tests': '/stress-tests'
};

export async function searchDocuments(locale: string): Promise<SearchDocument[]> {
	const docs: SearchDocument[] = [];
	for (const path of await standardPaths()) {
		const p = await standardPage(path, locale);
		if (!p) continue;
		docs.push({
			id: path,
			url: localizePath(path, locale),
			title: p.fullTitle,
			kind: 'standard',
			body: [text(p.introHtml), ...p.sections.map((s) => s.title)].join(' ')
		});
	}
	for (const path of await sitePaths()) {
		const t = path.startsWith('/templates/')
			? await templatePage(path, locale)
			: path.startsWith('/layers/')
				? await guidePage(path, locale)
				: path.startsWith('/stress-tests/')
					? await stressTestPage(path, locale)
					: null;
		if (!t) continue;
		const kind: SearchKind = path.startsWith('/templates/')
			? 'template'
			: path.startsWith('/layers/')
				? 'guide'
				: 'test';
		docs.push({
			id: path,
			url: localizePath(path, locale),
			title: t.title,
			kind,
			body:
				('summary' in t && t.summary ? t.summary + ' ' : '') +
				t.sections.map((s) => s.title).join(' ')
		});
	}
	for (const key of PAGE_KEYS) {
		const page = await readPage(key, locale);
		if (!page) continue;
		const path = PAGE_PATH[key] ?? `/${key}`;
		if (docs.some((d) => d.id === path)) continue;
		docs.push({
			id: path,
			url: localizePath(path, locale),
			title: page.title,
			kind: 'page',
			body: text(page.html)
		});
	}
	return docs;
}
