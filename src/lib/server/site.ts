/**
 * The content pages outside the standard, built from their YAML: templates,
 * layer guides and stress tests, with their hubs. Like standard.ts, everything
 * is rendered at prerender time and the pages receive finished data.
 */
import { resolveAll, refsIn } from '$lib/content/refs.js';
import { siteRoute } from '$lib/content/routes.js';
import { renderBlock, renderInline } from '$lib/content/render.js';
import { headingSlug } from '$lib/content/markdown.js';
import { escapeTemplatePlaceholders } from './template-markdown.js';
import { getTemplateDownloads, type TemplateDownloads } from './downloads';
import {
	fileName,
	loadStore,
	localized,
	localizeLinks,
	localizePath,
	type Doc,
	type Loaded,
	type Store
} from './docs';
import { DEFAULT_LOCALE } from '$lib/i18n/languages';

export type Severity = 'high' | 'medium' | 'low';

export type LayerRef = { n: number; title: string; href: string };

export type TemplateBlock =
	| { kind: 'clauses'; clauses: { ref: string; href: string; html: string }[] }
	| { kind: 'details'; type: 'rationale' | 'instructions'; summary: string; html: string }
	| { kind: 'html'; html: string };

export type TemplateSection = {
	id: string;
	title: string;
	/** Heading ids of the markdown era (English and translated), so old links still land */
	legacyAnchors: string[];
	blocks: TemplateBlock[];
	guide: { question: string; prompts: string[]; examples: string[]; lang: string } | null;
};

export type TemplateCard = {
	path: string;
	title: string;
	summary: string | null;
	/** "§2.1" of its first RCOS reference */
	ref: string | null;
	sections: number;
};

export type TemplatePage = {
	path: string;
	layer: LayerRef;
	title: string;
	preambleHtml: string;
	sections: TemplateSection[];
	siblings: TemplateCard[];
	downloads: TemplateDownloads | null;
	fallback: boolean;
};

export type TemplateLayer = {
	path: string;
	layer: LayerRef;
	question: string | null;
	templates: TemplateCard[];
	downloads: TemplateDownloads | null;
};

export type GuidePage = {
	path: string;
	layer: LayerRef;
	title: string;
	headHtml: string;
	sections: { id: string; title: string; html: string }[];
	invariants: Invariant[];
	links: { rules: string; templates: string };
	fallback: boolean;
};

export type Invariant = { id: string; code: string; name: string; href: string };

export type TestCard = {
	path: string;
	title: string;
	summary: string | null;
	severity: Severity | null;
	layers: number[];
};

export type StressTestPage = TestCard & {
	stage: string[];
	symptoms: string[];
	headHtml: string;
	sections: { id: string; title: string; html: string }[];
	preventsWith: { href: string; title: string }[];
	cascade: { href: string; title: string; relation: string; note: string }[];
	tests: { ref: string; href: string }[];
	invariants: Invariant[];
	fallback: boolean;
};

// --- Helpers ----------------------------------------------------------------------------

/** Typed links resolved, internal links localized, then markdown → HTML. */
function md(text: string, store: Store, locale: string, inline = false): string {
	const out = localizeLinks(resolveAll(text, store.targets), locale);
	return inline ? renderInline(out) : renderBlock(out);
}

const route = (d: Loaded) => siteRoute(d.file);
const byRoute = (store: Store, path: string) => store.all.find((d) => route(d) === path);
const plain = (s: string) => s.replace(/\*\*/g, '').trim();
/** Template and layer-guide docs have their layer in the path. */
const layerFromPath = (d: Loaded) => Number(/layer-(\d)/.exec(d.file)?.[1] ?? -1);

const guideOf = (store: Store, n: number) =>
	store.all.find((d) => route(d)?.startsWith(`/layers/${n}-`));

function layerRef(store: Store, n: number, locale: string): LayerRef {
	const g = guideOf(store, n);
	const title = g ? plain(localized(g, locale).doc.title).replace(/^[^-–—]+[-–—]\s*/, '') : '';
	return { n, title, href: localizePath(g ? route(g)! : '/layers', locale) };
}

function templateCard(d: Loaded, locale: string): TemplateCard {
	const { doc } = localized(d, locale);
	const quote = /^>\s*(.+)$/m.exec(doc.preamble ?? '');
	return {
		path: localizePath(route(d)!, locale),
		title: doc.title,
		summary: quote ? quote[1].replace(/\*\*/g, '') : null,
		ref: refsIn(d.en.preamble ?? '').find((r: string) => r.startsWith('§')) ?? null,
		sections: d.en.sections.length
	};
}

function templatesOfLayer(store: Store, n: number): Loaded[] {
	return store.all
		.filter((d) => d.en.kind === 'template' && layerFromPath(d) === n)
		.sort((a, b) => a.en.order - b.en.order);
}

/** Invariants of a layer, from its guide: "**Invariant 2.1: Name**". */
function invariantsOf(store: Store, n: number, locale: string): Invariant[] {
	const g = guideOf(store, n);
	if (!g) return [];
	const { doc } = localized(g, locale);
	const section = doc.sections.find((s: Doc) => s.id === 'layer-invariants');
	const href = localizePath(route(g)!, locale);
	return [
		...String(section?.md ?? '').matchAll(/\*\*[^*\d]*?(\d)\.(\d)\s*[:：]\s*([^*]+)\*\*/g)
	].map(([, a, b, name]) => ({
		id: `inv-${a}-${b}`,
		code: `INV-${a}.${b}`,
		name: name.trim(),
		href: `${href}#inv-${a}-${b}`
	}));
}

// --- Templates ----------------------------------------------------------------------------

export async function templatePage(path: string, locale: string): Promise<TemplatePage | null> {
	const store = await loadStore();
	const d = byRoute(store, path);
	if (!d || d.en.kind !== 'template') return null;
	const { doc, fallback } = localized(d, locale);
	const n = layerFromPath(d);
	const guide = store.guides.get(n);
	const guideDoc = guide ? localized(guide, locale).doc : null;
	const guideLang = locale === DEFAULT_LOCALE || guide?.overlays[locale] ? locale : DEFAULT_LOCALE;
	const clauseText = clauseTexts(store, locale);
	const name = fileName(d);
	const placeholderMd = (text: string) => md(escapeTemplatePlaceholders(text), store, locale);

	const sections: TemplateSection[] = doc.sections.map((s: Doc, i: number) => {
		const g = guideDoc?.templates.find((t: Doc) => t.key === `${name}.${s.id}`);
		const legacy = [...new Set([headingSlug(s.title), headingSlug(d.en.sections[i].title)])].filter(
			(a) => a !== s.id
		);
		return {
			id: s.id,
			title: s.title,
			legacyAnchors: legacy,
			guide: g
				? {
						question: g.question,
						prompts: g.prompts ?? [],
						examples: g.examples ?? [],
						lang: guideLang
					}
				: null,
			blocks: s.blocks.flatMap((b: Doc): TemplateBlock[] => {
				if (b.kind === 'clauses')
					return [
						{
							kind: 'clauses',
							clauses: b.refs.map((ref: string) => ({
								ref,
								href: localizePath(store.targets.anchors.get(ref) ?? '/standard', locale),
								html: renderInline(clauseText.get(ref) ?? '')
							}))
						}
					];
				if (b.kind === 'rationale' || b.kind === 'instructions')
					return [
						{ kind: 'details', type: b.kind, summary: b.summary, html: md(b.body, store, locale) }
					];
				// A lone rule separates sections in the downloads; the page has headings.
				if (b.md.trim() === '---') return [];
				return [{ kind: 'html', html: placeholderMd(b.md) }];
			})
		};
	});

	return {
		path,
		layer: layerRef(store, n, locale),
		title: doc.title,
		// The preamble has no placeholders, and escaping would break its blockquote.
		preambleHtml: md(
			String(doc.preamble ?? '')
				.replace(/\n*---\s*$/, '')
				// The layer and the references are shown in the page header.
				.replace(/^- \*\*[^*]+:\*\*.*$/gm, '')
				.trim(),
			store,
			locale
		),
		sections,
		siblings: templatesOfLayer(store, n).map((t) => templateCard(t, locale)),
		downloads: getTemplateDownloads(d.en.legacyPath, locale),
		fallback
	};
}

/** Clause ref → its text in a language, for the clause lists on template pages. */
function clauseTexts(store: Store, locale: string): Map<string, string> {
	const out = new Map<string, string>();
	for (const d of store.all) {
		if (d.en.kind !== 'chapter') continue;
		for (const s of localized(d, locale).doc.sections ?? [])
			for (const b of s.blocks ?? []) if (b.kind === 'clause') out.set(b.ref, b.text);
	}
	return out;
}

export async function templateLayer(n: number, locale: string): Promise<TemplateLayer | null> {
	const store = await loadStore();
	const index = byRoute(store, `/templates/layer-${n}`);
	if (!index) return null;
	const g = guideOf(store, n);
	return {
		path: `/templates/layer-${n}`,
		layer: layerRef(store, n, locale),
		question: g ? plain(localized(g, locale).doc.head ?? '') : null,
		templates: templatesOfLayer(store, n).map((t) => templateCard(t, locale)),
		downloads: getTemplateDownloads(index.en.legacyPath, locale)
	};
}

export async function templatesHub(locale: string) {
	const layers = [];
	for (let n = 0; n <= 6; n++) {
		const layer = await templateLayer(n, locale);
		if (layer) layers.push(layer);
	}
	return { layers, downloads: getTemplateDownloads('rcos-templates', locale) };
}

// --- Layer guides --------------------------------------------------------------------------

export async function guidePage(path: string, locale: string): Promise<GuidePage | null> {
	const store = await loadStore();
	const d = byRoute(store, path);
	if (!d || !path.startsWith('/layers/')) return null;
	const { doc, fallback } = localized(d, locale);
	const n = layerFromPath(d);
	const chapter = store.targets.anchors.get(`${n + 2}.1`)?.split('#')[0] ?? '/standard/core/0.1';
	return {
		path,
		layer: layerRef(store, n, locale),
		title: plain(doc.title),
		headHtml: md(doc.head ?? '', store, locale, true),
		sections: doc.sections.map((s: Doc) => ({
			id: s.id,
			title: plain(s.title),
			html: md(
				s.id === 'layer-invariants'
					? // "Invariant 2.1:" is shown as INV-2.1 everywhere (Q-9), with an anchor to link to.
						s.md.replace(
							/\*\*[^*\d]*?(\d)\.(\d)\s*[:：]\s*/g,
							(_m: string, a: string, b: string) =>
								`<span id="inv-${a}-${b}"></span>**INV-${a}.${b} · `
						)
					: s.md,
				store,
				locale
			)
		})),
		invariants: invariantsOf(store, n, locale),
		links: {
			rules: localizePath(chapter, locale),
			templates: localizePath(`/templates/layer-${n}`, locale)
		},
		fallback
	};
}

export async function layersHub(locale: string) {
	const store = await loadStore();
	const layers = [];
	for (let n = 0; n <= 6; n++) {
		const g = guideOf(store, n);
		if (!g) continue;
		const { doc } = localized(g, locale);
		layers.push({
			...layerRef(store, n, locale),
			question: plain(doc.head ?? ''),
			rules: localizePath(
				store.targets.anchors.get(`${n + 2}.1`)?.split('#')[0] ?? '/standard/core/0.1',
				locale
			),
			templates: localizePath(`/templates/layer-${n}`, locale),
			invariants: invariantsOf(store, n, locale).length
		});
	}
	return { layers };
}

// --- Stress tests ----------------------------------------------------------------------------

const isTest = (d: Loaded) => !!route(d)?.startsWith('/stress-tests/');

function testCard(d: Loaded, locale: string): TestCard {
	const { doc } = localized(d, locale);
	return {
		path: localizePath(route(d)!, locale),
		title: doc.title,
		summary: doc.summary ?? null,
		severity: d.en.severity ?? null,
		layers: d.en.layers ?? []
	};
}

export async function stressTestPage(path: string, locale: string): Promise<StressTestPage | null> {
	const store = await loadStore();
	const d = byRoute(store, path);
	if (!d || !isTest(d)) return null;
	const { doc, fallback } = localized(d, locale);
	const byLegacy = (p: string) => store.all.find((x) => x.en.legacyPath === p);
	const link = (p: string) => {
		const t = byLegacy(p);
		return t
			? { href: localizePath(route(t)!, locale), title: localized(t, locale).doc.title }
			: null;
	};
	const invariants = (d.en.layers ?? []).flatMap((n: number) => invariantsOf(store, n, locale));
	return {
		...testCard(d, locale),
		stage: d.en.stage ?? [],
		symptoms: doc.symptoms ?? [],
		headHtml: md(doc.head ?? '', store, locale),
		sections: doc.sections.map((s: Doc) => ({
			id: s.id,
			title: plain(s.title),
			html: md(s.md, store, locale)
		})),
		preventsWith: (d.en.preventsWith ?? []).flatMap((p: string) => link(p) ?? []),
		cascade: (doc.cascade ?? []).flatMap((c: Doc) => {
			const l = link(c.test);
			return l ? [{ ...l, relation: c.relation, note: c.note }] : [];
		}),
		tests: (d.en.tests ?? []).map((ref: string) => ({
			ref,
			href: localizePath(store.targets.anchors.get(ref) ?? '/standard', locale)
		})),
		invariants: invariants.filter((inv: Invariant) =>
			(d.en.invariants ?? []).includes(inv.code.slice(4))
		),
		fallback
	};
}

/** Stress tests grouped by their primary layer (the first in `layers`, Q-15). */
export async function stressTestsHub(locale: string) {
	const store = await loadStore();
	const rank = { high: 0, medium: 1, low: 2 };
	const tests = store.all.filter(isTest).map((d) => testCard(d, locale));
	const groups = [];
	for (let n = 0; n <= 6; n++) {
		groups.push({
			layer: layerRef(store, n, locale),
			tests: tests
				.filter((t) => t.layers[0] === n)
				.sort(
					(a, b) =>
						rank[a.severity ?? 'low'] - rank[b.severity ?? 'low'] ||
						a.title.localeCompare(b.title, locale)
				)
		});
	}
	return { groups, total: tests.length };
}

/** Invariant coverage: which stress tests exercise each layer invariant. */
export async function coverage(locale: string) {
	const store = await loadStore();
	const tests = store.all.filter(isTest);
	const layers = [];
	let covered = 0;
	let total = 0;
	for (let n = 0; n <= 6; n++) {
		const invariants = invariantsOf(store, n, locale).map((inv) => {
			const by = tests
				.filter((t) => (t.en.invariants ?? []).includes(inv.code.slice(4)))
				.map((t) => ({
					href: localizePath(route(t)!, locale),
					title: localized(t, locale).doc.title
				}))
				.sort((a, b) => a.title.localeCompare(b.title, locale));
			total++;
			if (by.length) covered++;
			return { ...inv, tests: by };
		});
		layers.push({ layer: layerRef(store, n, locale), invariants });
	}
	return { layers, covered, total };
}

// --- Prerendering ---------------------------------------------------------------------------

/** Every page built from YAML here, for prerendering and the sitemap. */
export async function sitePaths(): Promise<string[]> {
	const store = await loadStore();
	return store.all.flatMap((d) => route(d) ?? []);
}

/** Every page with the locales it exists in and its source file per locale (for the sitemap). */
export async function siteSitemap(): Promise<
	{ path: string; locales: string[]; files: Record<string, string> }[]
> {
	const store = await loadStore();
	return store.all.flatMap((d) => {
		const path = route(d);
		if (!path) return [];
		const files: Record<string, string> = { [DEFAULT_LOCALE]: d.file };
		for (const [locale, o] of Object.entries(d.overlays)) files[locale] = o.file;
		return [{ path, locales: Object.keys(files), files }];
	});
}

/** The source files of a page per locale (for page dates). */
export async function siteSources(path: string): Promise<Record<string, string> | null> {
	const store = await loadStore();
	const d = byRoute(store, path);
	if (!d) return null;
	const files: Record<string, string> = { [DEFAULT_LOCALE]: d.file };
	for (const [locale, o] of Object.entries(d.overlays)) files[locale] = o.file;
	return files;
}
