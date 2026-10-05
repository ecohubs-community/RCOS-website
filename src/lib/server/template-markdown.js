// Shared markdown helpers for rendering RCOS template articles.
//
// The templates use angle-bracket fill-in placeholders such as `<YYYY-MM-DD>`,
// `<role>`, `<link to decision record>`, and `<A member has not contributed…>`.
// Markdown/HTML parsers read those as raw HTML tags. Some placeholder names
// happen to be real tag names (`<A …>` → `<a>`, `<link …>`, `<p…>`), which causes
// three separate breakages we have observed on the live site and in downloads:
//   1. An unclosed `<a …>` swallows following content AND disables markdown link
//      parsing for the rest of the document.
//   2. Void/real tags render as empty elements, so the placeholder text vanishes.
//   3. Pandoc drops the same tags entirely, so docx/odt downloads lose the
//      placeholder text.
//
// We escape every `<`/`>` to an HTML entity EXCEPT the two structural tags the
// templates genuinely rely on (`<details>` / `<summary>`), and we leave fenced
// code blocks untouched — the markdown renderer escapes their contents for the
// web and pandoc renders them verbatim for downloads.

// Real structural tags to preserve. Case-sensitive: the genuine tags are always
// lowercase, whereas placeholders like `<Summary of the change.>` are not (and
// also carry extra words, so they would not match this pattern anyway).
const STRUCTURAL_TAG_SOURCE =
	'</?(?:details|summary)(?:\\s+data-kind="(?:rationale|instructions)")?\\s*>';

/**
 * Escape stray `<`/`>` on a single prose line while preserving whitelisted
 * `<details>`/`<summary>` structural tags verbatim.
 * @param {string} text
 * @returns {string}
 */
function escapeAnglesPreservingTags(text) {
	const re = new RegExp(`${STRUCTURAL_TAG_SOURCE}|[<>]`, 'g');
	return text.replace(re, (m) => (m.length > 1 ? m : m === '<' ? '&lt;' : '&gt;'));
}

/**
 * Escape angle-bracket template placeholders so they render as literal text,
 * without touching fenced code blocks or the structural `<details>`/`<summary>`
 * tags. Safe to run on both the web-render input (before marked) and the
 * download input (before pandoc, after `<details>` flattening).
 * @param {string} md
 * @returns {string}
 */
export function escapeTemplatePlaceholders(md) {
	const lines = md.split('\n');
	let inFence = false;
	let fenceChar = '';
	let fenceLen = 0;
	for (let i = 0; i < lines.length; i++) {
		const m = lines[i].match(/^\s{0,3}(`{3,}|~{3,})(.*)$/);
		if (m) {
			const marker = m[1];
			if (!inFence) {
				inFence = true;
				fenceChar = marker[0];
				fenceLen = marker.length;
				continue;
			}
			if (marker[0] === fenceChar && marker.length >= fenceLen && m[2].trim() === '') {
				inFence = false;
				continue;
			}
		}
		if (inFence) continue;
		lines[i] = escapeAnglesPreservingTags(lines[i]);
	}
	return lines.join('\n');
}
