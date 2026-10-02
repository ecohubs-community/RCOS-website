// @ts-check
/**
 * Typed links inside content: `[label](rcos:…)` instead of a hard-coded path.
 *
 *   rcos:§2.1              a section of the standard
 *   rcos:§2.1.3            a clause (links to its section until clause anchors exist)
 *   rcos:template/<name>   a template, optionally #<anchor>
 *   rcos:test/<name>       a stress test, optionally #<anchor>
 *   rcos:guide/<slug>      a layer guide, optionally #<anchor>
 *
 * The content says what it links to; resolveRefs() decides where that lives.
 * When pages move (phase 3: the standard; phase 5: flat stress-test URLs), only
 * this resolver changes, never the content.
 */
import { headingSlug } from './markdown.js';

/**
 * @typedef {{
 *   sections: Map<string, { path: string, anchor: string }>,
 *   docs: Map<string, string>
 * }} RefTargets  sections: "2.1" → page and anchor; docs: "template/x" etc. → legacyPath
 */

/**
 * Collect link targets from the English documents.
 * @param {Array<{ file: string, en: any }>} docs
 * @returns {RefTargets}
 */
export function refTargets(docs) {
	/** @type {RefTargets} */
	const t = { sections: new Map(), docs: new Map() };
	for (const { file, en } of docs) {
		const name =
			file
				.split('/')
				.pop()
				?.replace(/\.yaml$/, '') ?? '';
		if (en.kind === 'template') t.docs.set(`template/${name}`, en.legacyPath);
		if (en.legacyPath.startsWith('rcos-stress-tests/')) t.docs.set(`test/${name}`, en.legacyPath);
		if (en.legacyPath.startsWith('rcos-layers/')) t.docs.set(`guide/${name}`, en.legacyPath);
		if (en.kind === 'chapter' && /^rcos-core\/v0-1\/\d\d-/.test(en.legacyPath)) {
			for (const s of en.sections ?? []) {
				if (!s.ref) continue;
				t.sections.set(s.ref, { path: en.legacyPath, anchor: headingSlug(`${s.ref} ${s.title}`) });
			}
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
	const section = /^§(\d+\.\d+)(?:\.\d+)?$/.exec(target);
	if (section) {
		const s = t.sections.get(section[1]);
		return s ? `${articleUrl(s.path)}#${s.anchor}` : null;
	}
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
 * same URL, so linkify never changes where a link goes. A link whose label is a
 * clause number (2.1.3 or §2.1.3) becomes a clause ref, otherwise a section ref.
 * @param {string} text
 * @param {RefTargets} t
 * @returns {string}
 */
export function linkify(text, t) {
	const byUrl = inverse(t);
	return text.replace(/\[([^\]]*)\]\((\/articles\/[^)\s?]+)\)/g, (whole, label, url) => {
		const [base, fragment] = url.split('#');
		const sectionRef = byUrl.sections.get(url);
		/** @type {string | undefined} */
		let ref;
		if (sectionRef) {
			const clause = /^§?(\d+\.\d+\.\d+)$/.exec(label.trim());
			ref = clause && clause[1].startsWith(`${sectionRef}.`) ? `§${clause[1]}` : `§${sectionRef}`;
		} else {
			const doc = byUrl.docs.get(base);
			if (doc) ref = fragment ? `${doc}#${fragment}` : doc;
		}
		return ref && resolveRef(ref, t) === url ? `[${label}](rcos:${ref})` : whole;
	});
}

/** @type {WeakMap<RefTargets, { sections: Map<string, string>, docs: Map<string, string> }>} */
const inverses = new WeakMap();
/** @param {RefTargets} t */
function inverse(t) {
	let inv = inverses.get(t);
	if (!inv) {
		inv = { sections: new Map(), docs: new Map() };
		for (const [ref, s] of t.sections) inv.sections.set(`${articleUrl(s.path)}#${s.anchor}`, ref);
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
