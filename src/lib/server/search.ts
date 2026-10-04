/**
 * The search index, per locale, built from the YAML: every clause and section
 * of the standard, glossary terms, templates and their sections, stress tests,
 * layer guides and the markdown pages. Served as a static JSON file
 * (/search-index/<lang>.json) that the ⌘K palette and /search load on demand.
 */
import { siteRoute, standardRoute } from '$lib/content/routes.js';
import { fileName, loadStore, localized, localizePath, type Doc } from './docs';
import { PAGE_KEYS, readPage } from './pages';
import type { SearchDoc, SearchKind } from '$lib/search/types';

export type { SearchDoc, SearchKind };

/** Markdown and HTML to plain text. */
const plain = (s: string) =>
	String(s ?? '')
		.replace(/<[^>]+>/g, ' ')
		.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
		.replace(/[*_`>#|]+/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();
const clip = (s: string, n = 400) => (s.length > n ? `${s.slice(0, n)}…` : s);

export async function searchIndex(locale: string): Promise<SearchDoc[]> {
	const store = await loadStore();
	const out: SearchDoc[] = [];
	const add = (d: SearchDoc) => out.push({ ...d, text: clip(d.text) });

	for (const d of store.all) {
		const { doc } = localized(d, locale);
		const page = standardRoute(d.file, d.en);
		if (page) {
			const url = localizePath(page, locale);
			const chapter = plain(doc.title);
			for (const s of doc.sections ?? []) {
				const sectionUrl = s.ref ? `${url}#${s.ref}` : url;
				add({
					id: `${page}#${s.ref ?? s.id}`,
					ref: s.ref && page.startsWith('/standard/core/') ? s.ref : undefined,
					kind: 'section',
					url: sectionUrl,
					title: s.ref ? `§${s.ref} ${plain(s.title)}` : plain(s.title),
					text: plain(
						(s.blocks ?? [])
							.map((b: Doc) => (b.kind === 'clause' ? b.text : (b.md ?? '')))
							.join(' ')
					),
					context: chapter
				});
				for (const b of s.blocks ?? []) {
					if (b.kind !== 'clause') continue;
					add({
						id: `${page}#${b.ref}`,
						ref: page.startsWith('/standard/core/') ? b.ref : undefined,
						kind: 'clause',
						url: `${url}#${b.ref}`,
						title: `§${b.ref}`,
						text: plain([b.text, ...(b.items ?? [])].join(' ')),
						context: `${chapter} · ${plain(s.title)}`
					});
				}
			}
			for (const t of doc.terms ?? [])
				add({
					id: `${page}#term-${t.key}`,
					kind: 'term',
					url: `${url}#term-${t.key}`,
					title: t.term,
					text: plain(t.definition),
					context: chapter
				});
			continue;
		}

		const route = siteRoute(d.file);
		if (!route) continue;
		const url = localizePath(route, locale);
		if (d.en.kind === 'template') {
			add({
				id: route,
				kind: 'template',
				url,
				title: doc.title,
				text: plain(doc.preamble),
				context: ''
			});
			const guide = store.guides.get(Number(/layer-(\d)/.exec(route)?.[1]));
			const guideDoc = guide ? localized(guide, locale).doc : null;
			for (const s of doc.sections) {
				const g = guideDoc?.templates.find((t: Doc) => t.key === `${fileName(d)}.${s.id}`);
				add({
					id: `${route}#${s.id}`,
					kind: 'template-section',
					url: `${url}#${s.id}`,
					title: s.title,
					text: plain(
						[g?.question ?? '', ...s.blocks.map((b: Doc) => b.body ?? b.summary ?? '')].join(' ')
					),
					context: doc.title
				});
			}
		} else if (route.startsWith('/stress-tests/')) {
			add({
				id: route,
				kind: 'test',
				url,
				title: doc.title,
				text: plain([doc.summary ?? '', ...(doc.symptoms ?? [])].join(' ')),
				context: ''
			});
		} else if (route.startsWith('/layers/')) {
			add({
				id: route,
				kind: 'guide',
				url,
				title: plain(doc.title),
				text: plain(
					[doc.head ?? '', ...doc.sections.map((s: Doc) => `${s.title} ${s.md}`)].join(' ')
				),
				context: ''
			});
		}
	}

	for (const key of PAGE_KEYS) {
		const page = await readPage(key, locale);
		if (!page) continue;
		add({
			id: `/${key}`,
			kind: 'page',
			url: localizePath(`/${key}`, locale),
			title: page.title,
			text: plain(`${page.summary ?? ''} ${page.html}`),
			context: ''
		});
	}
	return out;
}
