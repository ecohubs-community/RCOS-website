// @ts-check
/**
 * Markdown → HTML for content blocks (trusted: it is our own content, rendered
 * at prerender time). Typed links must be resolved before rendering.
 */
import { Marked } from 'marked';

const marked = new Marked({ gfm: true, breaks: false, async: false });

/** @param {string} md */
export const renderBlock = (md) => /** @type {string} */ (marked.parse(md));

/** @param {string} md */
export const renderInline = (md) => /** @type {string} */ (marked.parseInline(md));
