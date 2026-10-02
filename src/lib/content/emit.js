// @ts-check
/**
 * Content documents (YAML) → the markdown articles the site and the download
 * builds read today.
 *
 * Each English document names its `kind` (which parser/emitter it uses) and its
 * `legacyPath` (the article path it replaces, e.g.
 * `rcos-core/v0-1/02-layer-0-identity-scope`). Translations are overlays (see
 * overlay.js) and inherit both.
 */
import { emitChapter } from './chapter.js';
import { emitTemplate } from './template.js';
import { emitGlossary } from './glossary.js';
import { emitDoc } from './doc.js';

/** Fields that are the body, per kind; everything else is frontmatter. */
export const BODY_KEYS = /** @type {const} */ ({
	chapter: ['intro', 'sections'],
	template: ['preamble', 'sections'],
	glossary: ['intro', 'terms'],
	doc: ['head', 'sections'],
	index: []
});

/** Not part of the article's frontmatter. */
const META_KEYS = new Set(['kind', 'legacyPath', 'headingLevel']);

/**
 * @param {any} doc merged document (English or translated)
 * @param {string} locale
 * @param {(ref: string) => string} clauseHref
 * @returns {string} markdown body
 */
export function emitBody(doc, locale, clauseHref) {
	switch (doc.kind) {
		case 'chapter':
			return emitChapter({ intro: doc.intro ?? '', sections: doc.sections ?? [] });
		case 'template':
			return emitTemplate(
				{ preamble: doc.preamble ?? '', sections: doc.sections ?? [] },
				locale,
				clauseHref
			);
		case 'glossary':
			return emitGlossary({ intro: doc.intro ?? '', terms: doc.terms ?? [] });
		case 'doc':
			return emitDoc({ head: doc.head ?? '', sections: doc.sections ?? [] }, doc.headingLevel ?? 3);
		case 'index':
			return '';
		default:
			throw new Error(`Unknown content kind: ${doc.kind}`);
	}
}

/**
 * The article frontmatter: every field that is neither body nor metadata.
 * @param {any} doc
 * @returns {Record<string, unknown>}
 */
export function frontmatterOf(doc) {
	const body = new Set(
		/** @type {readonly string[]} */ (
			BODY_KEYS[/** @type {keyof typeof BODY_KEYS} */ (doc.kind)] ?? []
		)
	);
	/** @type {Record<string, unknown>} */
	const out = {};
	for (const [k, v] of Object.entries(doc)) if (!body.has(k) && !META_KEYS.has(k)) out[k] = v;
	return out;
}
