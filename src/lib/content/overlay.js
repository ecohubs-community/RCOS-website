// @ts-check
/**
 * Translations as overlays.
 *
 * The English document holds the structure (ids, refs, numbers, links between
 * things). A translation file holds only the translatable text, at the same
 * place in the structure:
 *
 *   - objects keep their shape;
 *   - lists of objects with an identity (`id`, `ref`, `test` or `key`) become
 *     maps keyed by that identity, so an insertion in English cannot shift a
 *     translation onto the wrong entry;
 *   - translatable fields (TRANSLATABLE) are copied whole: strings, and lists
 *     of strings such as clause items or symptoms.
 *
 * merge(en, split(en, translated)) deep-equals translated, for any document
 * whose structure matches English. split() throws when it does not, because a
 * guess there would attach text to the wrong rule.
 */

/** Field names that carry text to translate. */
export const TRANSLATABLE = new Set([
	'title',
	'summary',
	'intro',
	'head',
	'preamble',
	'text',
	'items',
	'md',
	'body',
	'note',
	'symptoms',
	'tags',
	'term',
	'definition'
]);

const IDENTITY = ['id', 'ref', 'test', 'key'];

/** @param {unknown} v */
const isObject = (v) => typeof v === 'object' && v !== null && !Array.isArray(v);

/** @param {unknown[]} list */
function identityOf(list) {
	if (!list.length || !list.every(isObject)) return null;
	return (
		IDENTITY.find((k) => list.every((el) => typeof (/** @type {any} */ (el)[k]) === 'string')) ??
		null
	);
}

/**
 * @param {any} en
 * @param {any} tr
 * @param {string} [at] path, for error messages
 * @returns {any} the overlay, or undefined when there is nothing to translate here
 */
export function split(en, tr, at = '') {
	if (Array.isArray(en)) {
		const id = identityOf(en);
		if (!id) return undefined;
		if (!Array.isArray(tr) || tr.length !== en.length) {
			throw new Error(`${at}: ${tr?.length ?? 'no'} entries, English has ${en.length}`);
		}
		/** @type {Record<string, any>} */
		const out = {};
		en.forEach((el, i) => {
			if (tr[i][id] !== el[id])
				throw new Error(`${at}[${i}]: ${id} ${tr[i][id]}, English has ${el[id]}`);
			const sub = split(el, tr[i], `${at}.${el[id]}`);
			if (sub !== undefined) out[el[id]] = sub;
		});
		return Object.keys(out).length ? out : undefined;
	}
	if (isObject(en)) {
		if (!isObject(tr)) throw new Error(`${at}: expected an object`);
		/** @type {Record<string, any>} */
		const out = {};
		for (const [k, v] of Object.entries(en)) {
			if (TRANSLATABLE.has(k) && (typeof v === 'string' || isStringList(v))) {
				if (tr[k] !== undefined) out[k] = tr[k];
				continue;
			}
			const sub = split(v, tr[k], `${at}.${k}`);
			if (sub !== undefined) out[k] = sub;
		}
		for (const k of Object.keys(tr)) {
			if (!(k in en) && TRANSLATABLE.has(k)) out[k] = tr[k];
		}
		return Object.keys(out).length ? out : undefined;
	}
	return undefined;
}

/** @param {unknown} v */
const isStringList = (v) => Array.isArray(v) && v.every((x) => typeof x === 'string');

/**
 * @param {any} en
 * @param {any} overlay
 * @returns {any} the translated document; English wherever the overlay is silent
 */
export function merge(en, overlay) {
	if (overlay === undefined) return structuredClone(en);
	if (Array.isArray(en)) {
		const id = identityOf(en);
		if (!id) return structuredClone(en);
		return en.map((el) => merge(el, overlay[el[id]]));
	}
	if (isObject(en)) {
		/** @type {Record<string, any>} */
		const out = {};
		for (const [k, v] of Object.entries(en)) {
			if (TRANSLATABLE.has(k) && (typeof v === 'string' || isStringList(v))) {
				out[k] = overlay[k] !== undefined ? structuredClone(overlay[k]) : structuredClone(v);
			} else {
				out[k] = merge(v, overlay[k]);
			}
		}
		for (const [k, v] of Object.entries(overlay)) {
			if (!(k in en) && TRANSLATABLE.has(k)) out[k] = structuredClone(v);
		}
		return out;
	}
	return en;
}
