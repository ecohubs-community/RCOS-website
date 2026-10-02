// @ts-check
/**
 * Appendix A, the glossary: markdown ⇄ { intro, terms }.
 *
 * Each term is `**Term**` + hard line break + definition. Terms are data
 * because the site turns them into tooltips and Compass links them to sections.
 * Keys are the English term, slugged, matching the published glossary.yaml.
 */
import { chunks } from './markdown.js';
import { sectionId } from './template.js';

/**
 * @typedef {{ key: string, term: string, definition: string }} Term
 * @typedef {{ intro: string, terms: Term[] }} Glossary
 */

// The hard break after the term is two spaces; one translation left them out,
// which ran term and definition together. Accept both; always emit the break.
const TERM = /^\*\*([^*]+)\*\*(?: {2})?\n([\s\S]+)$/;

/**
 * @param {string} body
 * @param {string[]} [keys] English keys, for translations (matched by position)
 * @returns {Glossary}
 */
export function parseGlossary(body, keys) {
	const intro = [];
	/** @type {Term[]} */
	const terms = [];
	for (const chunk of chunks(body)) {
		const m = TERM.exec(chunk);
		if (m) {
			const i = terms.length;
			terms.push({ key: keys?.[i] ?? sectionId(m[1]), term: m[1], definition: m[2] });
		} else if (!terms.length) {
			intro.push(chunk);
		} else {
			throw new Error(`Glossary: unexpected text after the terms: ${chunk.slice(0, 60)}`);
		}
	}
	if (keys && keys.length !== terms.length) {
		throw new Error(`Glossary: ${terms.length} terms, English has ${keys.length}`);
	}
	return { intro: intro.join('\n\n'), terms };
}

/** @param {Glossary} g */
export function emitGlossary(g) {
	const parts = g.intro ? [g.intro] : [];
	for (const t of g.terms) parts.push(`**${t.term}**  \n${t.definition}`);
	return parts.join('\n\n') + '\n';
}
