// @ts-check
/** Shared markdown helpers for the content parsers. */

/**
 * Split markdown into blank-line separated chunks, keeping each chunk's lines
 * verbatim. A `<details>…</details>` element stays one chunk even though it
 * contains blank lines.
 * @param {string} text
 * @returns {string[]}
 */
export function chunks(text) {
	const raw = text
		.split(/\n[ \t]*\n/)
		.map((c) => c.replace(/^\n+|\n+$/g, ''))
		.filter((c) => c.trim() !== '');
	/** @type {string[]} */
	const out = [];
	/** @type {string | null} */
	let open = null;
	for (const c of raw) {
		if (open !== null) {
			open += '\n\n' + c;
			if (!isUnclosed(open)) {
				out.push(open);
				open = null;
			}
			continue;
		}
		if (isUnclosed(c)) open = c;
		else out.push(c);
	}
	if (open !== null) out.push(open);
	return out;
}

/** A chunk that opens a `<details>` element or a code fence and does not close it. */
function isUnclosed(/** @type {string} */ chunk) {
	if (fenceCount(chunk) % 2 === 1) return true;
	return /^<details\b/.test(chunk) && !/<\/details>\s*$/.test(chunk);
}

const fenceCount = (/** @type {string} */ s) => (s.match(/^```/gm) ?? []).length;

/**
 * Split at headings of one level (`## ` by default), ignoring any inside code
 * fences.
 * @param {string} body
 * @param {number} [level]
 * @returns {{ head: string, sections: string[] }} text before the first heading, and each heading with its content
 */
export function splitSections(body, level = 2) {
	const heading = new RegExp(`^#{${level}} `);
	const lines = body.split('\n');
	/** @type {string[][]} */
	const parts = [[]];
	let inFence = false;
	for (const line of lines) {
		if (/^```/.test(line)) inFence = !inFence;
		if (!inFence && heading.test(line)) parts.push([]);
		parts[parts.length - 1].push(line);
	}
	const [head, ...sections] = parts.map((p) => p.join('\n'));
	return { head, sections };
}

/** Trim leading and trailing blank lines (not spaces: a hard break is two trailing spaces). */
export const trimBlank = (/** @type {string} */ s) => s.replace(/^\n+|\n+$/g, '');

/**
 * Heading id as rehype-slug (github-slugger) makes it: lowercase, drop
 * punctuation, spaces to hyphens. "2.1 Purpose Definition" → "21-purpose-definition".
 * @param {string} heading
 */
export function headingSlug(heading) {
	return heading
		.toLowerCase()
		.replace(/[^\p{L}\p{N}\p{M}\s_-]/gu, '')
		.replace(/\s/g, '-');
}
