// @ts-check
/**
 * Templates (the artifacts communities fill in): markdown ⇄ structured data.
 *
 * Shape:
 *   preamble   markdown before the first `## ` (layer / status / reference list,
 *              summary quote, separator)
 *   sections   one per `## ` heading: { id, title, blocks }
 *   blocks     { kind: 'clauses', refs, note? }     "*RCOS clauses: [2.1.1](…), …*"
 *              { kind: 'rationale' | 'instructions', summary, body }
 *              { kind: 'md', md }                    everything else, verbatim
 *
 * The clause line is stored as refs only: its links are rebuilt from the
 * standard (chapter and section of each clause), so a renumbered clause or a
 * renamed section can never leave a stale link behind.
 */
import { chunks, splitSections, trimBlank } from './markdown.js';

/**
 * Each block has a stable id within its section ('clauses', 'rationale',
 * 'instructions', 'm1', 'm2', …), so translations attach to the right block even
 * if the English text gains a block.
 * @typedef {{ id?: string, kind: 'clauses', refs: string[], note?: string }} ClausesBlock
 * @typedef {{ id?: string, kind: 'rationale' | 'instructions', summary: string, body: string }} DetailsBlock
 * @typedef {{ id?: string, kind: 'md', md: string }} MdBlock
 * @typedef {ClausesBlock | DetailsBlock | MdBlock} TemplateBlock
 * @typedef {{ id: string, title: string, blocks: TemplateBlock[] }} TemplateSection
 * @typedef {{ preamble: string, sections: TemplateSection[] }} TemplateBody
 * @typedef {(ref: string) => string} ClauseHref  clause ref → link path
 */

/** "RCOS clauses: " in each locale (Spanish and Portuguese share the wording). */
export const CLAUSES_LABEL = {
	en: 'RCOS clauses: ',
	de: 'RCOS-Klauseln: ',
	es: 'Cláusulas RCOS: ',
	fr: 'Clauses RCOS : ',
	'pt-br': 'Cláusulas RCOS: '
};

const DETAILS =
	/^<details data-kind="(rationale|instructions)">\n<summary>(.*)<\/summary>\n\n([\s\S]*?)\n\n<\/details>$/;

/**
 * Section ids are the English heading, slugged, and shared by every locale, so
 * translations can be matched by id.
 * @param {string} title
 */
export const sectionId = (title) =>
	title
		.toLowerCase()
		.normalize('NFD')
		.replace(/[̀-ͯ]/g, '')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');

/**
 * @param {string} chunk
 * @param {string} locale
 * @param {ClauseHref} href
 * @returns {ClausesBlock | null}
 */
function parseClauses(chunk, locale, href) {
	const label = CLAUSES_LABEL[/** @type {keyof typeof CLAUSES_LABEL} */ (locale)];
	if (!chunk.startsWith(`*${label}`) || !chunk.endsWith('*') || chunk.includes('\n')) return null;
	const inner = chunk.slice(1 + label.length, -1);
	const refs = [];
	const link = /^\[(\d+\.\d+\.\d+)\]\(([^)]+)\)/;
	let rest = inner;
	for (;;) {
		const m = link.exec(rest);
		if (!m) return null;
		refs.push(m[1]);
		rest = rest.slice(m[0].length);
		if (!rest.startsWith(', [')) break;
		rest = rest.slice(2);
	}
	/** @type {ClausesBlock} */
	const block = { kind: 'clauses', refs };
	if (rest) block.note = rest;
	// Only accept the structured form if it reproduces the line exactly.
	return emitClauses(block, locale, href) === chunk ? block : null;
}

/**
 * @param {ClausesBlock} block
 * @param {string} locale
 * @param {ClauseHref} href
 */
function emitClauses(block, locale, href) {
	const label = CLAUSES_LABEL[/** @type {keyof typeof CLAUSES_LABEL} */ (locale)];
	const links = block.refs.map((ref) => `[${ref}](${href(ref)})`).join(', ');
	return `*${label}${links}${block.note ?? ''}*`;
}

/**
 * @param {string} body markdown without frontmatter
 * @param {string} locale
 * @param {ClauseHref} href
 * @param {string[]} [ids] section ids to use (the English ones, for translations)
 * @returns {TemplateBody}
 */
export function parseTemplate(body, locale, href, ids) {
	const { head: preamble, sections: parts } = splitSections(body);
	const sections = parts.map((part, i) => {
		const [headingLine, ...rest] = part.split('\n');
		const title = headingLine.replace(/^##\s+/, '');
		let md = 0;
		/** @type {TemplateBlock[]} */
		const blocks = chunks(rest.join('\n')).map((chunk) => {
			const clauses = parseClauses(chunk, locale, href);
			if (clauses) return { id: 'clauses', ...clauses };
			const details = DETAILS.exec(chunk);
			if (details) {
				const kind = /** @type {'rationale' | 'instructions'} */ (details[1]);
				return { id: kind, kind, summary: details[2], body: details[3] };
			}
			return { id: `m${++md}`, kind: /** @type {const} */ ('md'), md: chunk };
		});
		return { id: ids?.[i] ?? sectionId(title), title, blocks };
	});
	return { preamble: trimBlank(preamble), sections };
}

/**
 * @param {TemplateBlock} block
 * @param {string} locale
 * @param {ClauseHref} href
 */
function emitBlock(block, locale, href) {
	if (block.kind === 'md') return block.md;
	if (block.kind === 'clauses') return emitClauses(block, locale, href);
	return `<details data-kind="${block.kind}">\n<summary>${block.summary}</summary>\n\n${block.body}\n\n</details>`;
}

/**
 * @param {TemplateBody} tpl
 * @param {string} locale
 * @param {ClauseHref} href
 */
export function emitTemplate(tpl, locale, href) {
	const out = [];
	if (tpl.preamble) out.push(tpl.preamble);
	for (const section of tpl.sections) {
		out.push(`## ${section.title}`);
		for (const block of section.blocks) out.push(emitBlock(block, locale, href));
	}
	return out.join('\n\n') + '\n';
}
