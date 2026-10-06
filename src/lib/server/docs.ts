/**
 * The content documents as the site's pages read them, loaded once per build:
 * every YAML document with its translations, the guidance, clause ownership,
 * and the link targets. Shared by the standard (standard.ts) and the other
 * content pages (site.ts).
 */
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import yaml from 'js-yaml';
import { loadDocuments, loadGuidance } from '$lib/content/load.js';
import { clauseOwners } from '$lib/content/ownership.js';
import { merge } from '$lib/content/overlay.js';
import { refTargets } from '$lib/content/refs.js';
import { DEFAULT_LOCALE } from '$lib/i18n/languages';
import { getFileDates } from './dates';

// YAML documents are checked by the content schema, not by TypeScript.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Doc = Record<string, any>;
export type Loaded = Awaited<ReturnType<typeof loadDocuments>>[number];

export type Store = {
	all: Loaded[];
	/** Guidance per layer */
	guides: Map<number, Loaded>;
	/** Clause ref → owning template section key */
	owners: Map<string, string>;
	targets: ReturnType<typeof refTargets>;
};

let loaded: Promise<Store> | undefined;

export function loadStore(): Promise<Store> {
	loaded ??= (async () => {
		const [all, guidance, ownership] = await Promise.all([
			loadDocuments(),
			loadGuidance(),
			readFile(path.resolve('content/standard/rcos-core/0.1/ownership.yaml'), 'utf8').then(
				(raw) => yaml.load(raw) as Doc
			)
		]);
		return {
			all,
			guides: new Map(guidance.map((g) => [g.en.layer as number, g])),
			owners: clauseOwners(all, ownership),
			targets: refTargets(all)
		};
	})();
	return loaded;
}

/** The document in a language: English wherever the translation is silent. */
export function localized(d: Loaded, locale: string): { doc: Doc; fallback: boolean } {
	if (locale === DEFAULT_LOCALE) return { doc: d.en, fallback: false };
	const overlay = d.overlays[locale];
	if (!overlay) return { doc: d.en, fallback: true };
	const { lang: _l, sourceHash: _h, ...text } = overlay.data;
	return { doc: merge(d.en, text), fallback: false };
}

export type PageDates = { published: string | null; modified: string | null };

/**
 * When a page's text first appeared and last changed (git history): published
 * from the English file, modified from whichever of it and the served
 * translation changed last. Null when git has no trustworthy date.
 */
export async function datesOf(d: Loaded, locale: string): Promise<PageDates> {
	const dates = await getFileDates();
	const en = dates.get(d.file);
	const overlay = locale === DEFAULT_LOCALE ? undefined : d.overlays[locale];
	const tr = overlay ? dates.get(overlay.file) : undefined;
	const modified = [en?.modified, tr?.modified]
		.filter((x): x is string => !!x)
		.sort()
		.at(-1);
	return { published: en?.published ?? null, modified: modified ?? null };
}

export const fileName = (d: Loaded) =>
	d.file
		.split('/')
		.pop()!
		.replace(/\.yaml$/, '');

const SITE_PREFIXES =
	'standard|templates|layers|stress-tests|toolkit|safeguards|reference-implementations|library|data';

/** Prefix internal links in markdown with the locale (EN is unprefixed). */
export function localizeLinks(md: string, locale: string): string {
	if (locale === DEFAULT_LOCALE) return md;
	return md.replace(new RegExp(`\\]\\(\\/(${SITE_PREFIXES})(\\/|\\)|#)`, 'g'), `](/${locale}/$1$2`);
}

export const localizePath = (p: string, locale: string) =>
	locale === DEFAULT_LOCALE ? p : `/${locale}${p}`;
