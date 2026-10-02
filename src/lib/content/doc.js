// @ts-check
/**
 * Prose documents (stress tests, layer guides): markdown ⇄ { head, sections }.
 *
 * Sections split at one heading level and keep their body verbatim. Section ids
 * are the English heading, slugged, and shared by every locale.
 */
import { splitSections, trimBlank } from './markdown.js';
import { sectionId } from './template.js';

/**
 * @typedef {{ id: string, title: string, md: string }} DocSection
 * @typedef {{ head: string, sections: DocSection[] }} Doc
 */

/**
 * @param {string} body
 * @param {number} level heading level the document is split at
 * @param {string[]} [ids] English section ids, for translations
 * @returns {Doc}
 */
export function parseDoc(body, level, ids) {
	const { head, sections } = splitSections(body, level);
	const marker = '#'.repeat(level) + ' ';
	return {
		head: trimBlank(head),
		sections: sections.map((part, i) => {
			const [headingLine, ...rest] = part.split('\n');
			const title = headingLine.slice(marker.length);
			return { id: ids?.[i] ?? sectionId(title), title, md: trimBlank(rest.join('\n')) };
		})
	};
}

/**
 * @param {Doc} doc
 * @param {number} level
 */
export function emitDoc(doc, level) {
	const marker = '#'.repeat(level) + ' ';
	const parts = doc.head ? [doc.head] : [];
	for (const s of doc.sections) {
		parts.push(marker + s.title);
		if (s.md) parts.push(s.md);
	}
	return parts.join('\n\n') + '\n';
}
