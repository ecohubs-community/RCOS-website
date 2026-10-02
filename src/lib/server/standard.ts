/**
 * The standard (content/standard/**) as the reader pages need it.
 *
 * Everything here runs at prerender time: clauses are tokenized, markdown is
 * rendered, links are resolved and localized, and the page receives finished
 * data. Nothing matches or parses in the browser.
 */
import { loadDocuments } from '$lib/content/load.js';
import { merge } from '$lib/content/overlay.js';
import { articleUrl, refTargets, refsIn, resolveAll } from '$lib/content/refs.js';
import { standardRoute } from '$lib/content/routes.js';
import { tokenize, termForms, type Part } from '$lib/content/tokenize.js';
import { renderBlock, renderInline } from '$lib/content/render.js';
import { headingSlug } from '$lib/content/markdown.js';
import { DEFAULT_LOCALE } from '$lib/i18n/languages';
import { PUBLIC_SITE_URL } from '$lib/config/site';

// YAML documents are checked by the content schema, not by TypeScript.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Doc = Record<string, any>;
type Loaded = Awaited<ReturnType<typeof loadDocuments>>[number];

export type RenderedPart =
	| { t: 'text'; text: string }
	| { t: 'html'; html: string }
	| { t: 'kw'; text: string; kind: string }
	| { t: 'layer'; text: string; n: number; href: string }
	| { t: 'term'; text: string; key: string };

export type BlockView =
	| { kind: 'clause'; ref: string; parts: RenderedPart[]; items: RenderedPart[][] }
	| { kind: 'html'; html: string };

export type SectionView = {
	/** Anchor: the section number (2.1), or a slug for unnumbered sections */
	id: string;
	ref?: string;
	title: string;
	/** Heading ids of the markdown era (#21-purpose-definition), kept so old links land */
	legacyAnchors: string[];
	blocks: BlockView[];
};

export type PageLink = { path: string; title: string; number: string | null };

/** The right rail of a layer chapter: where the layer is explained, applied and tested. */
export type RelatedView = {
	layer: number;
	guide: { href: string; question: string } | null;
	templates: { href: string; title: string; ref: string | null }[];
	templatesHref: string | null;
	/** level: the test's severity when it is mainly about this layer, else "other" */
	tests: { href: string; title: string; level: 'high' | 'medium' | 'other' }[];
	selfCheckHref: string;
};

export type StandardPage = {
	path: string;
	kind: 'chapter' | 'glossary';
	/** "2", "A", or null for pages outside the numbered chapters */
	number: string | null;
	layer: number | null;
	/** Title without number or "Layer N —" prefix */
	title: string;
	/** Title as written in the standard ("2. Layer 0 — Identity & Scope") */
	fullTitle: string;
	normative: boolean;
	introHtml: string;
	sections: SectionView[];
	glossary: { key: string; term: string; definitionHtml: string }[];
	/** Glossary terms marked on this page */
	terms: Record<string, { term: string; definitionHtml: string }>;
	/** Layer number → title, for the tooltips of Layer links */
	layerTitles: Record<number, string>;
	/** Path of the glossary page, for "Open glossary" */
	glossaryPath: string | null;
	related: RelatedView | null;
	prev: PageLink | null;
	next: PageLink | null;
	/** The page has no translation for the requested locale and shows English */
	fallback: boolean;
};

export type NavItem = PageLink & {
	layer: number | null;
	sections: { id: string; ref?: string; title: string }[];
};

export type StandardNav = {
	start: NavItem[];
	layers: NavItem[];
	modules: NavItem[];
	reference: NavItem[];
	/** Clause or section number → page path, for jump-to-clause */
	anchors: Record<string, string>;
};

// --- Loading -----------------------------------------------------------------------

let loaded: Promise<{ pages: Map<string, Loaded>; all: Loaded[] }> | undefined;

function load() {
	loaded ??= loadDocuments().then((all) => {
		const pages = new Map<string, Loaded>();
		for (const d of all) {
			const path = standardRoute(d.file, d.en);
			if (path) pages.set(path, d);
		}
		return { pages, all };
	});
	return loaded;
}

/** Every page of the standard, for prerendering. */
export async function standardPaths(): Promise<string[]> {
	return [...(await load()).pages.keys()];
}

function localized(d: Loaded, locale: string): { doc: Doc; fallback: boolean } {
	if (locale === DEFAULT_LOCALE) return { doc: d.en, fallback: false };
	const overlay = d.overlays[locale];
	if (!overlay) return { doc: d.en, fallback: true };
	const { lang: _l, sourceHash: _h, ...text } = overlay.data;
	return { doc: merge(d.en, text), fallback: false };
}

// --- Chapter identity -------------------------------------------------------------------

const fileName = (d: Loaded) =>
	d.file
		.split('/')
		.pop()!
		.replace(/\.yaml$/, '');

/** "02-layer-0-…" → "2"; "appendix-a-…" → "A"; anything else → null. */
function chapterNumber(d: Loaded): string | null {
	const name = fileName(d);
	const num = /^(\d\d)-/.exec(name);
	if (num) return String(Number(num[1]));
	const appendix = /^appendix-([a-z])-/.exec(name);
	return appendix ? appendix[1].toUpperCase() : null;
}

/** Chapters 2–8 are Layers 0–6. */
function layerOf(d: Loaded): number | null {
	const n = Number(chapterNumber(d));
	return d.file.includes('/rcos-core/') && n >= 2 && n <= 8 ? n - 2 : null;
}

/** "2. Layer 0 — Identity & Scope" → "Identity & Scope"; "Appendix A — Glossary" → "Glossary". */
function shortTitle(title: string, d: Loaded): string {
	let t = title.replace(/^\d+\.\s*/, '');
	if (layerOf(d) !== null || /^appendix-/.test(fileName(d))) t = t.replace(/^[^—]+—\s*/, '');
	return t;
}

// --- Rendering ------------------------------------------------------------------------------

/** Prefix internal links with the locale (EN is unprefixed). */
function localizeLinks(md: string, locale: string): string {
	if (locale === DEFAULT_LOCALE) return md;
	return md.replace(/\]\(\/(standard|articles)(\/|\))/g, `](/${locale}/$1$2`);
}

const localizePath = (path: string, locale: string) =>
	locale === DEFAULT_LOCALE ? path : `/${locale}${path}`;

function renderParts(
	parts: Part[],
	locale: string,
	layerHref: (n: number) => string
): RenderedPart[] {
	return parts.map((p): RenderedPart => {
		if (p.t === 'md') return { t: 'html', html: renderInline(localizeLinks(p.md, locale)) };
		if (p.t === 'layer') return { ...p, href: localizePath(layerHref(p.n), locale) };
		return p;
	});
}

export async function standardPage(path: string, locale: string): Promise<StandardPage | null> {
	const { pages, all } = await load();
	const d = pages.get(path);
	if (!d) return null;
	const { doc: raw, fallback } = localized(d, locale);
	const targets = refTargets(all);
	const doc = resolveAll(raw, targets);

	// Glossary, for term tooltips (in the page's language).
	const glossaryDoc = [...pages.values()].find((p) => p.en.kind === 'glossary');
	const glossary = glossaryDoc ? localized(glossaryDoc, locale).doc : { terms: [] };
	const forms = termForms(glossary.terms, locale);

	const layerPaths = new Map<number, string>();
	const layerTitles: Record<number, string> = {};
	for (const [p, x] of pages) {
		const n = layerOf(x);
		if (n === null) continue;
		layerPaths.set(n, p);
		layerTitles[n] = shortTitle(localized(x, locale).doc.title, x);
	}
	const glossaryPath = [...pages].find(([, x]) => x.en.kind === 'glossary')?.[0] ?? null;
	const layerHref = (n: number) => layerPaths.get(n) ?? '/standard/core/0.1';

	const used = new Set<string>();
	const sections: SectionView[] = (doc.sections ?? []).map((s: Doc, i: number) => {
		const seen = new Set<string>();
		const enSection = d.en.sections?.[i];
		const legacy = new Set<string>();
		for (const t of [s, enSection]) {
			if (t) legacy.add(headingSlug(t.ref ? `${t.ref} ${t.title}` : t.title));
		}
		const blocks: BlockView[] = (s.blocks ?? []).map((b: Doc): BlockView => {
			if (b.kind === 'clause') {
				const ctx = { locale, terms: forms, seen };
				const clause = {
					kind: 'clause' as const,
					ref: b.ref,
					parts: renderParts(tokenize(b.text, ctx), locale, layerHref),
					items: (b.items ?? []).map((item: string) =>
						renderParts(tokenize(item, ctx), locale, layerHref)
					)
				};
				for (const k of seen) used.add(k);
				return clause;
			}
			return { kind: 'html', html: renderBlock(localizeLinks(b.md, locale)) };
		});
		const id = s.ref ?? headingSlug(s.title);
		legacy.delete(id);
		return { id, ref: s.ref, title: s.title, legacyAnchors: [...legacy], blocks };
	});

	const terms: StandardPage['terms'] = {};
	for (const t of glossary.terms as Doc[]) {
		if (used.has(t.key))
			terms[t.key] = { term: t.term, definitionHtml: renderInline(t.definition) };
	}

	const order = await chapterOrder();
	const at = order.findIndex((p) => p.path === path);
	const link = (p: PageLink | undefined): PageLink | null =>
		p ? { ...p, path: localizePath(p.path, locale), title: titleIn(p.path, locale, pages) } : null;

	return {
		path,
		kind: d.en.kind === 'glossary' ? 'glossary' : 'chapter',
		number: chapterNumber(d),
		layer: layerOf(d),
		title: shortTitle(doc.title, d),
		fullTitle: doc.title,
		normative: (d.en.sections ?? []).some((s: Doc) =>
			s.blocks?.some((b: Doc) => b.kind === 'clause' && /\bMUST\b/.test(b.text))
		),
		introHtml: doc.intro ? renderBlock(localizeLinks(doc.intro, locale)) : '',
		sections,
		glossary:
			d.en.kind === 'glossary'
				? doc.terms.map((t: Doc) => ({
						key: t.key,
						term: t.term,
						definitionHtml: renderInline(localizeLinks(t.definition, locale))
					}))
				: [],
		terms,
		layerTitles,
		glossaryPath: glossaryPath && localizePath(glossaryPath, locale),
		related: layerOf(d) === null ? null : related(layerOf(d)!, all, locale),
		prev: at > 0 ? link(order[at - 1]) : null,
		next: at >= 0 && at < order.length - 1 ? link(order[at + 1]) : null,
		fallback
	};
}

/** Guide, templates and stress tests of a layer (still article pages until phase 5). */
function related(layer: number, all: Loaded[], locale: string): RelatedView {
	const href = (legacyPath: string) => localizePath(articleUrl(legacyPath), locale);
	const text = (d: Loaded) => localized(d, locale).doc;
	const under = (prefix: string) => all.filter((d) => d.en.legacyPath.startsWith(prefix));

	const guide = under('rcos-layers/').find((d) =>
		d.en.legacyPath.startsWith(`rcos-layers/layer-${layer}-`)
	);
	const templates = under(`rcos-templates/layer-${layer}/`)
		.filter((d) => d.en.kind === 'template')
		.sort((a, b) => a.en.order - b.en.order)
		.map((d) => ({
			href: href(d.en.legacyPath),
			title: text(d).title,
			ref: refsIn(d.en.preamble ?? '').find((r: string) => r.startsWith('§')) ?? null
		}));
	const index = all.find((d) => d.en.legacyPath === `rcos-templates/layer-${layer}`);

	const rank = { high: 0, medium: 1, other: 2 };
	const tests = under('rcos-stress-tests/')
		.filter((d) => d.en.layers?.includes(layer))
		.map((d) => ({
			href: href(d.en.legacyPath),
			title: text(d).title,
			level: (d.en.layers[0] === layer
				? d.en.severity
				: 'other') as RelatedView['tests'][number]['level']
		}))
		.sort((a, b) => rank[a.level] - rank[b.level] || a.title.localeCompare(b.title, locale));

	return {
		layer,
		guide: guide
			? {
					href: href(guide.en.legacyPath),
					question: String(text(guide).head ?? '').replace(/\*\*/g, '')
				}
			: null,
		templates,
		templatesHref: index ? href(index.en.legacyPath) : null,
		tests,
		selfCheckHref: href('rcos-stress-tests/self-assessment')
	};
}

function titleIn(path: string, locale: string, pages: Map<string, Loaded>): string {
	const d = pages.get(path)!;
	return shortTitle(localized(d, locale).doc.title, d);
}

/** The core's numbered chapters and appendices, in reading order. */
async function chapterOrder(): Promise<PageLink[]> {
	const { pages } = await load();
	return [...pages.entries()]
		.filter(([p, d]) => p.startsWith('/standard/core/') && chapterNumber(d) !== null)
		.sort(([, a], [, b]) => a.en.order - b.en.order)
		.map(([path, d]) => ({ path, title: d.en.title, number: chapterNumber(d) }));
}

// --- Navigation --------------------------------------------------------------------------------

export async function standardNav(locale: string): Promise<StandardNav> {
	const { pages } = await load();
	const item = (path: string): NavItem => {
		const d = pages.get(path)!;
		const { doc } = localized(d, locale);
		return {
			path: localizePath(path, locale),
			title: shortTitle(doc.title, d),
			number: chapterNumber(d),
			layer: layerOf(d),
			sections: (doc.sections ?? [])
				.filter((s: Doc) => s.ref)
				.map((s: Doc) => ({ id: s.ref, ref: s.ref, title: s.title }))
		};
	};
	const core = (await chapterOrder()).map((p) => item(p.path));
	const nav: StandardNav = {
		start: [item('/standard'), ...core.filter((c) => c.number === '0' || c.number === '1')],
		layers: core.filter((c) => c.layer !== null),
		modules: [...pages.keys()]
			.filter((p) => /^\/standard\/modules\/[^/]+$/.test(p))
			.sort()
			.map(item),
		reference: core.filter((c) => c.layer === null && c.number !== '0' && c.number !== '1'),
		anchors: {}
	};
	for (const [path, d] of pages) {
		for (const s of d.en.sections ?? []) {
			if (!s.ref) continue;
			nav.anchors[s.ref] = localizePath(path, locale);
			for (const b of s.blocks)
				if (b.kind === 'clause') nav.anchors[b.ref] = localizePath(path, locale);
		}
	}
	return nav;
}

// --- Print ------------------------------------------------------------------------------------

export type PrintChapter = StandardPage & { anchor: string };

export type StandardPrint = {
	/** The version page (title and status list), for the cover */
	cover: StandardPage;
	chapters: PrintChapter[];
	fallback: boolean;
};

/**
 * The whole core on one page, for printing and the PDF. Links between
 * chapters become links inside the document; every other site link becomes
 * absolute, so it still works from a downloaded file.
 */
export async function standardPrint(locale: string): Promise<StandardPrint | null> {
	const cover = await standardPage('/standard/core/0.1', locale);
	if (!cover) return null;
	const order = await chapterOrder();
	const chapters: PrintChapter[] = [];
	for (const { path } of order) {
		const page = await standardPage(path, locale);
		if (page) chapters.push({ ...page, anchor: `ch-${path.split('/').pop()}` });
	}
	const anchors = new Map(chapters.map((c) => [c.path, c.anchor]));
	const href = (url: string) => {
		const m = /^(?:\/[a-z]{2}(?:-[a-z]{2})?)?(\/standard\/[^#?]*)(?:#(.*))?$/.exec(url);
		const chapter = m && anchors.get(m[1]);
		if (chapter) return m[2] ? `#${m[2]}` : `#${chapter}`;
		return url.startsWith('/') ? PUBLIC_SITE_URL + url : url;
	};
	const fix = <T>(value: T): T => {
		if (typeof value === 'string')
			return value.replace(/href="([^"]*)"/g, (_m, u) => `href="${href(u)}"`) as T;
		if (Array.isArray(value)) return value.map(fix) as T;
		if (value && typeof value === 'object')
			return Object.fromEntries(
				Object.entries(value).map(([k, v]) => [k, k === 'href' ? href(String(v)) : fix(v)])
			) as T;
		return value;
	};
	return {
		cover: fix(cover),
		chapters: fix(chapters),
		fallback: cover.fallback || chapters.some((c) => c.fallback)
	};
}

/** Every page with the locales it exists in and its source file per locale (for the sitemap). */
export async function standardSitemap(): Promise<
	{ path: string; locales: string[]; files: Record<string, string> }[]
> {
	const { pages } = await load();
	return [...pages.entries()].map(([path, d]) => {
		const files: Record<string, string> = { [DEFAULT_LOCALE]: d.file };
		for (const [locale, o] of Object.entries(d.overlays)) files[locale] = o.file;
		return { path, locales: Object.keys(files), files };
	});
}
