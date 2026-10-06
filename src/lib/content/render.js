// @ts-check
/**
 * Markdown → HTML for content blocks (trusted: it is our own content, rendered
 * at prerender time). Typed links must be resolved before rendering.
 */
import { Marked } from 'marked';

const marked = new Marked({
	gfm: true,
	breaks: false,
	async: false,
	// The page has its own h1; a "# " heading in the content becomes an h2.
	walkTokens(token) {
		if (token.type === 'heading' && token.depth === 1) token.depth = 2;
	}
});

/** @param {string} md */
export const renderBlock = (md) => /** @type {string} */ (marked.parse(md));

/** @param {string} md */
export const renderInline = (md) => /** @type {string} */ (marked.parseInline(md));
