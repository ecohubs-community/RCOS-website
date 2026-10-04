/**
 * The standard (content/standard/**) as the reader pages need it.
 *
 * Everything here runs at prerender time: clauses are tokenized, markdown is
 * rendered, links are resolved and localized, and the page receives finished
 * data. Nothing matches or parses in the browser.
 */
import {
	fileName,
	loadStore,
	localized,
	localizeLinks,
	localizePath,
	type Doc,
	type Loaded,
	type Store as DocStore
} from './docs';
import { refTargets, refsIn, resolveAll } from '$lib/content/refs.js';
import { siteRoute, standardRoute } from '$lib/content/routes.js';
import { tokenize, termForms, type Part } from '$lib/content/tokenize.js';
import { renderBlock, renderInline } from '$lib/content/render.js';
import { headingSlug } from '$lib/content/markdown.js';
import { DEFAULT_LOCALE } from '$lib/i18n/languages';
import { PUBLIC_SITE_URL } from '$lib/config/site';

export type RenderedPart =
	| { t: 'text'; text: string }
	| { t: 'html'; html: string }
	| { t: 'kw'; text: string; kind: string }
	| { t: 'layer'; text: string; n: number; href: string }
	| { t: 'term'; text: string; key: string };

export type BlockView =
	| {
			kind: 'clause';
			ref: string;
			parts: RenderedPart[];
			items: RenderedPart[][];
			/** A common question answered by this clause (opens the guide there) */
			question: string | null;
	  }
	| { kind: 'html'; html: string };

/** A template section, as a link target. */
export type TemplateLink = { href: string; template: string; section: string };

/** Plain-language help for one section of the standard (non-normative). */
export type GuideView = {
	inShortHtml: string;
	/** "Why it matters": the rationale of the template sections that own this section's clauses */
	why: { html: string; source: TemplateLink }[];
	examples: { text: string; source: TemplateLink }[];
	questions: { id: string; question: string; answerHtml: string; ref: string | null }[];
	/** Language the guidance is written in (English until it is translated) */
	lang: string;
};

export type SectionView = {
	/** Anchor: the section number (2.1), or a slug for unnumbered sections */
	id: string;
	ref?: string;
	title: string;
	/** Heading ids of the markdown era (#21-purpose-definition), kept so old links land */
	legacyAnchors: string[];
	blocks: BlockView[];
	guide: GuideView | null;
	/** Template sections where a community writes what this section asks for */
	practice: TemplateLink[];
	/** Stress tests that exercise this section */
	testedBy: { href: string; title: string; severity: string | null }[];
};

export type PageLink = { path: string; title: string; number: string | null };

/** The right rail of a layer chapter: where the layer is explained, applied and tested. */
export type RelatedView = {
	layer: number;
	guide: { href: string; question: string } | null;
	templates: { href: string; title: string; ref: string | null }[];
	templatesHref: string | null;
	/** level: the test's severity when it is mainly about this layer, else "other" */
	tests: { href: string; title: string; level: 'high' | 'medium' | 'low' | 'other' }[];
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

type Store = DocStore & { pages: Map<string, Loaded> };
let loaded: Promise<Store> | undefined;

function load() {
	loaded ??= loadStore().then((store) => {
		const pages = new Map<string, Loaded>();
		for (const d of store.all) {
			const route = standardRoute(d.file, d.en);
			if (route) pages.set(route, d);
		}
		return { ...store, pages };
	});
	return loaded;
}

/** Every page of the standard, for prerendering. */
export async function standardPaths(): Promise<string[]> {
	return [...(await load()).pages.keys()];
}

// --- Chapter identity -------------------------------------------------------------------

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
	const store = await load();
	const { pages, all } = store;
	const d = pages.get(path);
	if (!d) return null;
	const { doc: raw, fallback } = localized(d, locale);
	const targets = store.targets;
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

	const layer = layerOf(d);
	const help = layer === null ? null : guidanceFor(layer, store, locale, targets);

	const used = new Set<string>();
	const sections: SectionView[] = (doc.sections ?? []).map((s: Doc, i: number) => {
		const guide = s.ref ? (help?.sections.get(s.ref) ?? null) : null;
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
					),
					question: guide?.questions.find((q) => q.ref === b.ref)?.id ?? null
				};
				for (const k of seen) used.add(k);
				return clause;
			}
			return { kind: 'html', html: renderBlock(localizeLinks(b.md, locale)) };
		});
		const id = s.ref ?? headingSlug(s.title);
		legacy.delete(id);
		return {
			id,
			ref: s.ref,
			title: s.title,
			legacyAnchors: [...legacy],
			blocks,
			guide,
			practice: s.ref ? (help?.practice.get(s.ref) ?? []) : [],
			testedBy: s.ref ? (help?.testedBy.get(s.ref) ?? []) : []
		};
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
	const href = (d: Loaded) => localizePath(siteRoute(d.file) ?? '/', locale);
	const text = (d: Loaded) => localized(d, locale).doc;
	const under = (prefix: string) => all.filter((d) => d.en.legacyPath.startsWith(prefix));

	const guide = under('rcos-layers/').find((d) =>
		d.en.legacyPath.startsWith(`rcos-layers/layer-${layer}-`)
	);
	const templates = under(`rcos-templates/layer-${layer}/`)
		.filter((d) => d.en.kind === 'template')
		.sort((a, b) => a.en.order - b.en.order)
		.map((d) => ({
			href: href(d),
			title: text(d).title,
			ref: refsIn(d.en.preamble ?? '').find((r: string) => r.startsWith('§')) ?? null
		}));
	const index = all.find((d) => d.en.legacyPath === `rcos-templates/layer-${layer}`);

	const rank = { high: 0, medium: 1, low: 2, other: 3 };
	const tests = under('rcos-stress-tests/')
		.filter((d) => d.en.layers?.includes(layer))
		.map((d) => ({
			href: href(d),
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
					href: href(guide),
					question: String(text(guide).head ?? '').replace(/\*\*/g, '')
				}
			: null,
		templates,
		templatesHref: index ? href(index) : null,
		tests,
		selfCheckHref: localizePath('/toolkit/self-assessment', locale)
	};
}

// --- Guidance ---------------------------------------------------------------------------------

type LayerHelp = {
	sections: Map<string, GuideView>;
	practice: Map<string, TemplateLink[]>;
	testedBy: Map<string, SectionView['testedBy']>;
};

/**
 * Everything the guidance adds to a layer's sections: "In short" and questions
 * (content/guidance), "Why it matters" and examples from the template sections
 * that own the section's clauses (ownership.yaml, as in RCOS-compass), the
 * templates to put it into practice, and the stress tests that exercise it.
 */
const helpCache = new Map<string, LayerHelp>();

function guidanceFor(
	layer: number,
	store: Store,
	locale: string,
	targets: ReturnType<typeof refTargets>
): LayerHelp {
	const key = `${layer}|${locale}`;
	let help = helpCache.get(key);
	if (!help) helpCache.set(key, (help = buildHelp(layer, store, locale, targets)));
	return help;
}

function buildHelp(
	layer: number,
	{ all, guides, owners }: Store,
	locale: string,
	targets: ReturnType<typeof refTargets>
): LayerHelp {
	const help: LayerHelp = { sections: new Map(), practice: new Map(), testedBy: new Map() };
	const md = (text: string) => renderInline(localizeLinks(resolveAll(text, targets), locale));
	const inLayer = (ref: string) => Number(ref.split('.')[0]) - 2 === layer;

	// Template sections by key, in the page's language.
	const templates = new Map<string, { link: TemplateLink; section: Doc }>();
	for (const t of all) {
		if (t.en.kind !== 'template') continue;
		const { doc } = localized(t, locale);
		const name = fileName(t);
		for (const section of doc.sections) {
			templates.set(`${name}.${section.id}`, {
				link: {
					href: `${localizePath(siteRoute(t.file) ?? '/', locale)}#${section.id}`,
					template: doc.title,
					section: section.title
				},
				section
			});
		}
	}
	// Each section's owning template sections, in clause order.
	const owning = new Map<string, string[]>();
	for (const [clause, key] of owners) {
		const ref = clause.split('.').slice(0, 2).join('.');
		if (!inLayer(ref)) continue;
		const list = owning.get(ref) ?? [];
		if (!list.includes(key)) list.push(key);
		owning.set(ref, list);
	}
	for (const [ref, keys] of owning)
		help.practice.set(
			ref,
			keys.flatMap((k) => templates.get(k)?.link ?? [])
		);

	for (const t of all) {
		for (const ref of t.en.tests ?? []) {
			if (!inLayer(ref)) continue;
			const list = help.testedBy.get(ref) ?? [];
			list.push({
				href: localizePath(siteRoute(t.file) ?? '/', locale),
				title: localized(t, locale).doc.title,
				severity: t.en.severity ?? null
			});
			help.testedBy.set(ref, list);
		}
	}

	const g = guides.get(layer);
	if (!g) return help;
	const { doc: guide } = localized(g, locale);
	const lang = locale === DEFAULT_LOCALE || g.overlays[locale] ? locale : DEFAULT_LOCALE;
	const examplesOf = new Map<string, string[]>(
		guide.templates.map((t: Doc) => [t.key, t.examples ?? []])
	);
	for (const s of guide.sections as Doc[]) {
		const keys = owning.get(s.ref) ?? [];
		help.sections.set(s.ref, {
			inShortHtml: md(s.inShort),
			why: keys.flatMap((k) => {
				const t = templates.get(k);
				const rationale = t?.section.blocks.find((b: Doc) => b.kind === 'rationale');
				return t && rationale ? [{ html: md(rationale.body), source: t.link }] : [];
			}),
			examples: keys.flatMap((k) => {
				const t = templates.get(k);
				return t ? (examplesOf.get(k) ?? []).map((text) => ({ text, source: t.link })) : [];
			}),
			questions: (s.questions ?? []).map((q: Doc) => ({
				id: q.id,
				question: q.question,
				answerHtml: md(q.answer),
				ref: q.ref ?? null
			})),
			lang
		});
	}
	return help;
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
