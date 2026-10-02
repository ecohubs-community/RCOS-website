// @ts-check
/**
 * Standard chapters: markdown ⇄ structured data.
 *
 * Plain JS (with JSDoc types) and relative imports only, so both the Node build
 * scripts and SvelteKit can import it.
 *
 * Shape:
 *   intro      markdown before the first `## ` heading
 *   sections   one per `## ` heading: { id, ref?, title, blocks }
 *   blocks     { id, kind: 'clause', ref, text, items? }   a numbered rule
 *              { id, kind: 'md', md }                       anything else, verbatim
 *
 * Clauses are structured because everything downstream needs them as data:
 * anchors, keywords, tooltips, ownership, Compass. Everything else stays
 * verbatim markdown for now, so that emit(parse(md)) === md and the migration
 * can be proven lossless. Tables and lists can become typed blocks later, one at
 * a time, behind the same proof.
 */

/**
 * @typedef {{ id: string, kind: 'clause', ref: string, text: string, items?: string[] }} ClauseBlock
 * @typedef {{ id: string, kind: 'md', md: string }} MdBlock
 * @typedef {ClauseBlock | MdBlock} Block
 * @typedef {{ id: string, ref?: string, title: string, blocks: Block[] }} Section
 * @typedef {{ intro: string, sections: Section[] }} ChapterBody
 */

import { chunks, splitSections } from './markdown.js';

const CLAUSE = /^(\d+\.\d+\.\d+)\s+(.*)$/;
const SECTION = /^##\s+(.*)$/;
const NUMBERED_TITLE = /^(\d+\.\d+)\s+(.+)$/;
const ITEM = /^- (.*)$/;

/**
 * A chunk that starts with a clause number: the clause text runs until the first
 * `- ` line; the `- ` lines after it are the clause's list.
 * @param {string} chunk
 * @param {string} id
 * @returns {ClauseBlock | null}
 */
function parseClause(chunk, id) {
	const lines = chunk.split('\n');
	const head = CLAUSE.exec(lines[0]);
	if (!head) return null;
	const text = [head[2]];
	let i = 1;
	while (i < lines.length && !ITEM.test(lines[i])) text.push(lines[i++]);
	/** @type {string[]} */
	const items = [];
	for (; i < lines.length; i++) {
		const item = ITEM.exec(lines[i]);
		// Anything after the list that is not a list item: not a clause shape we know.
		if (!item) return null;
		items.push(item[1]);
	}
	/** @type {ClauseBlock} */
	const block = { id, kind: 'clause', ref: head[1], text: text.join('\n') };
	if (items.length) block.items = items;
	return block;
}

/**
 * @param {string} body markdown without frontmatter
 * @returns {ChapterBody}
 */
export function parseChapter(body) {
	const { head: intro, sections: parts } = splitSections(body);
	/** @type {Section[]} */
	const sections = parts.map((part, s) => {
		const [headingLine, ...rest] = part.split('\n');
		const heading = SECTION.exec(headingLine)?.[1] ?? '';
		const numbered = NUMBERED_TITLE.exec(heading);
		/** @type {Block[]} */
		const blocks = [];
		let md = 0;
		for (const chunk of chunks(rest.join('\n'))) {
			const clause = parseClause(chunk, '');
			if (clause) {
				clause.id = clause.ref;
				blocks.push(clause);
			} else {
				blocks.push({ id: `b${++md}`, kind: 'md', md: chunk });
			}
		}
		/** @type {Section} */
		const section = numbered
			? { id: numbered[1], ref: numbered[1], title: numbered[2], blocks }
			: { id: `s${s + 1}`, title: heading, blocks };
		return section;
	});
	return { intro: intro.replace(/^\n+|\n+$/g, ''), sections };
}

/** @param {Block} block */
function emitBlock(block) {
	if (block.kind === 'md') return block.md;
	const lines = [`${block.ref} ${block.text}`];
	for (const item of block.items ?? []) lines.push(`- ${item}`);
	return lines.join('\n');
}

/**
 * @param {ChapterBody} chapter
 * @returns {string} markdown without frontmatter, ending in one newline
 */
export function emitChapter(chapter) {
	const out = [];
	if (chapter.intro) out.push(chapter.intro);
	for (const section of chapter.sections) {
		out.push(`## ${section.ref ? `${section.ref} ${section.title}` : section.title}`);
		for (const block of section.blocks) out.push(emitBlock(block));
	}
	return out.join('\n\n') + '\n';
}
