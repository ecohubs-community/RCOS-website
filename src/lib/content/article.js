// @ts-check
/**
 * A content document as a markdown article, and back.
 *
 * toArticle() is what the site and the download builds read (via
 * build-articles). fromArticle() turns a translated article into an overlay,
 * which is how translation runs through the same markdown prompt as before.
 */
import matter from 'gray-matter';
import { parseChapter } from './chapter.js';
import { parseTemplate } from './template.js';
import { parseGlossary } from './glossary.js';
import { parseDoc } from './doc.js';
import { emitBody, frontmatterOf } from './emit.js';
import { merge, split } from './overlay.js';

/**
 * @param {any} en English document
 * @param {Record<string, any> | undefined} overlay translation overlay (without lang/sourceHash), or none for English
 * @param {string} locale
 * @param {(ref: string) => string} clauseHref
 * @returns {string} the article: frontmatter + markdown body
 */
export function toArticle(en, overlay, locale, clauseHref) {
	const doc = overlay ? merge(en, overlay) : en;
	const fm = frontmatterOf(doc);
	if (locale !== 'en') fm.lang = locale;
	return matter.stringify(emitBody(doc, locale, clauseHref), fm);
}

/**
 * Parse an article body of the document's kind. For translations, `en` supplies
 * the ids, so text is matched to the English structure.
 * @param {any} en
 * @param {string} body
 * @param {string} locale
 * @param {(ref: string) => string} clauseHref
 */
export function parseBody(en, body, locale, clauseHref) {
	const isEn = locale === 'en';
	switch (en.kind) {
		case 'chapter':
			return parseChapter(body);
		case 'template':
			return parseTemplate(
				body,
				locale,
				clauseHref,
				isEn ? undefined : en.sections.map((/** @type {any} */ s) => s.id)
			);
		case 'glossary':
			return parseGlossary(body, isEn ? undefined : en.terms.map((/** @type {any} */ t) => t.key));
		case 'doc':
			return parseDoc(
				body,
				en.headingLevel ?? 3,
				isEn ? undefined : en.sections.map((/** @type {any} */ s) => s.id)
			);
		case 'index':
			return {};
		default:
			throw new Error(`Unknown content kind: ${en.kind}`);
	}
}

/**
 * A translated article → its overlay. Throws when the translation's structure
 * differs from English (a missing clause, a reordered section), because writing
 * it would attach text to the wrong rule.
 * @param {any} en
 * @param {string} article translated article (frontmatter + body)
 * @param {string} locale
 * @param {(ref: string) => string} clauseHref
 * @returns {Record<string, any>}
 */
export function fromArticle(en, article, locale, clauseHref) {
	const { data, content } = matter(article);
	const { lang: _lang, sourceHash: _hash, ...fm } = data;
	const translated = { ...en, ...fm, ...parseBody(en, content, locale, clauseHref) };
	return split(en, translated) ?? {};
}
