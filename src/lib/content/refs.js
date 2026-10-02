// @ts-check
/**
 * Typed links inside content: `[label](rcos:…)` instead of a hard-coded path.
 *
 *   rcos:§2.1              a section of the standard
 *   rcos:§2.1.3            a clause
 *   rcos:template/<name>   a template, optionally #<anchor>
 *   rcos:test/<name>       a stress test, optionally #<anchor>
 *   rcos:guide/<slug>      a layer guide, optionally #<anchor>
 *
 * The content says what it links to; resolveRefs() decides where that lives.
 * When pages move (phase 3: the standard; phase 5: flat stress-test URLs), only
 * this resolver changes, never the content.
 */
import { standardRoute } from './routes.js';

/**
 * @typedef {{
 *   anchors: Map<string, string>,
 *   docs: Map<string, string>
 * }} RefTargets  anchors: "2.1" or "2.1.3" → URL with anchor; docs: "template/x" etc. → legacyPath
 */

/**
 * Collect link targets from the English documents.
 * @param {Array<{ file: string, en: any }>} docs
 * @returns {RefTargets}
 */
export function refTargets(docs) {
	/** @type {RefTargets} */
	const t = { anchors: new Map(), docs: new Map() };
	for (const { file, en } of docs) {
		const name =
			file
				.split('/')
				.pop()
				?.replace(/\.yaml$/, '') ?? '';
		if (en.kind === 'template') t.docs.set(`template/${name}`, en.legacyPath);
		if (en.legacyPath.startsWith('rcos-stress-tests/')) t.docs.set(`test/${name}`, en.legacyPath);
		if (en.legacyPath.startsWith('rcos-layers/')) t.docs.set(`guide/${name}`, en.legacyPath);
		const page = en.kind === 'chapter' ? standardRoute(file, en) : null;
		if (!page) continue;
		// Sections and clauses are addressed by their number: #2.1, #2.1.3.
		for (const s of en.sections ?? []) {
			if (!s.ref) continue;
			t.anchors.set(s.ref, `${page}#${s.ref}`);
			for (const b of s.blocks) if (b.kind === 'clause') t.anchors.set(b.ref, `${page}#${b.ref}`);
		}
	}
	return t;
}

/** Article URL path for a legacy path: numeric chapter prefixes are not part of slugs. */
const articleUrl = (/** @type {string} */ legacyPath) =>
	`/articles/${legacyPath
		.split('/')
		.map((s) => s.replace(/^\d\d-/, ''))
		.join('/')}`;

/**
 * @param {string} ref without the `rcos:` scheme
 * @param {RefTargets} t
 * @returns {string | null} the URL, or null when the target does not exist
 */
export function resolveRef(ref, t) {
	const [target, fragment] = ref.split('#');
	if (target.startsWith('§')) return t.anchors.get(target.slice(1)) ?? null;
	const legacy = t.docs.get(target);
	if (!legacy) return null;
	return articleUrl(legacy) + (fragment ? `#${fragment}` : '');
}

const LINK = /\]\(rcos:([^)\s]+)\)/g;

/**
 * Replace every `](rcos:…)` in a string with its URL.
 * @param {string} text
 * @param {RefTargets} t
 * @returns {string}
 */
export function resolveRefs(text, t) {
	return text.replace(LINK, (_m, ref) => {
		const url = resolveRef(ref, t);
		if (!url) throw new Error(`Unknown link target rcos:${ref}`);
		return `](${url})`;
	});
}

/**
 * Apply resolveRefs to every string in a document.
 * @template T
 * @param {T} value
 * @param {RefTargets} t
 * @returns {T}
 */
export function resolveAll(value, t) {
	if (typeof value === 'string')
		return /** @type {T} */ (value.includes('](rcos:') ? resolveRefs(value, t) : value);
	if (Array.isArray(value)) return /** @type {T} */ (value.map((v) => resolveAll(v, t)));
	if (value && typeof value === 'object')
		return /** @type {T} */ (
			Object.fromEntries(Object.entries(value).map(([k, v]) => [k, resolveAll(v, t)]))
		);
	return value;
}

/** All `rcos:` targets in a string. */
export const refsIn = (/** @type {string} */ text) => [...text.matchAll(LINK)].map((m) => m[1]);

/**
 * The reverse of resolveRefs: turn hard-coded article links into `rcos:` refs.
 * A link is only rewritten when resolving the new ref gives back exactly the
 * same URL, so linkify never changes where a link goes.
 * @param {string} text
 * @param {RefTargets} t
 * @returns {string}
 */
export function linkify(text, t) {
	const byUrl = inverse(t);
	return text.replace(/\[([^\]]*)\]\((\/(?:articles|standard)\/[^)\s?]+)\)/g, (whole, label, url) => {
		const [base, fragment] = url.split('#');
		/** @type {string | undefined} */
		let ref = byUrl.anchors.get(url);
		if (!ref) {
			const doc = byUrl.docs.get(base);
			if (doc) ref = fragment ? `${doc}#${fragment}` : doc;
		}
		return ref && resolveRef(ref, t) === url ? `[${label}](rcos:${ref})` : whole;
	});
}

/** @type {WeakMap<RefTargets, { anchors: Map<string, string>, docs: Map<string, string> }>} */
const inverses = new WeakMap();
/** @param {RefTargets} t */
function inverse(t) {
	let inv = inverses.get(t);
	if (!inv) {
		inv = { anchors: new Map(), docs: new Map() };
		for (const [ref, url] of t.anchors) inv.anchors.set(url, `§${ref}`);
		for (const [ref, legacy] of t.docs) inv.docs.set(articleUrl(legacy), ref);
		inverses.set(t, inv);
	}
	return inv;
}

/**
 * Apply linkify to every string in a document.
 * @template T
 * @param {T} value
 * @param {RefTargets} t
 * @returns {T}
 */
export function linkifyAll(value, t) {
	if (typeof value === 'string')
		return /** @type {T} */ (value.includes('](/articles/') ? linkify(value, t) : value);
	if (Array.isArray(value)) return /** @type {T} */ (value.map((v) => linkifyAll(v, t)));
	if (value && typeof value === 'object')
		return /** @type {T} */ (
			Object.fromEntries(Object.entries(value).map(([k, v]) => [k, linkifyAll(v, t)]))
		);
	return value;
}
