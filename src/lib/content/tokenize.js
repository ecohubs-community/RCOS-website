// @ts-check
/**
 * Clause text → parts the reader renders: plain text, RFC 2119 keywords,
 * "Layer N" links, glossary terms, and inline markdown (links, emphasis, code).
 *
 * Runs on the server at prerender time, so pages ship finished markup and no
 * matching happens in the browser.
 *
 *   { t: 'text', text }
 *   { t: 'md', md }                            inline markdown, rendered as HTML
 *   { t: 'kw', text, kind }                    kind: must | must-not | should | should-not | may
 *   { t: 'layer', text, n }
 *   { t: 'term', text, key }                   first use of a glossary term in its section
 */

/**
 * RFC 2119 keywords as each translation writes them (normalize-rfc-keywords
 * and the translation prompt set these; plurals and negations included).
 * Longer phrases first, so "MUST NOT" wins over "MUST".
 * @type {Record<string, Array<[string, string]>>}
 */
const KEYWORDS = {
	en: [
		['MUST NOT', 'must-not'],
		['SHOULD NOT', 'should-not'],
		['MUST', 'must'],
		['SHOULD', 'should'],
		['MAY', 'may']
	],
	de: [
		['DARF NICHT', 'must-not'],
		['DÜRFEN NICHT', 'must-not'],
		['SOLLTE NICHT', 'should-not'],
		['SOLLTEN NICHT', 'should-not'],
		['MUSS', 'must'],
		['MÜSSEN', 'must'],
		['SOLLTE', 'should'],
		['SOLLTEN', 'should'],
		['KANN', 'may'],
		['KÖNNEN', 'may']
	],
	es: [
		['NO DEBE', 'must-not'],
		['NO DEBEN', 'must-not'],
		['NO DEBERÍA', 'should-not'],
		['NO DEBERÍAN', 'should-not'],
		['DEBE', 'must'],
		['DEBEN', 'must'],
		['DEBERÍA', 'should'],
		['DEBERÍAN', 'should'],
		['PUEDE', 'may'],
		['PUEDEN', 'may']
	],
	fr: [
		['NE DOIT PAS', 'must-not'],
		['NE DOIVENT PAS', 'must-not'],
		['NE DEVRAIT PAS', 'should-not'],
		['NE DEVRAIENT PAS', 'should-not'],
		['DOIT PAS', 'must-not'],
		['DOIVENT PAS', 'must-not'],
		['DOIT', 'must'],
		['DOIVENT', 'must'],
		['DEVRAIT', 'should'],
		['DEVRAIENT', 'should'],
		['PEUT', 'may'],
		['PEUVENT', 'may']
	],
	'pt-br': [
		['NÃO DEVE', 'must-not'],
		['NÃO DEVEM', 'must-not'],
		['NÃO DEVERIA', 'should-not'],
		['NÃO DEVERIAM', 'should-not'],
		['DEVE', 'must'],
		['DEVEM', 'must'],
		['DEVERIA', 'should'],
		['DEVERIAM', 'should'],
		['PODE', 'may'],
		['PODEM', 'may']
	]
};

/** "Layer" in each language (as the translated standard writes it). */
const LAYER_WORD = { en: 'Layer', de: 'Schicht', es: 'Capa', fr: 'Couche', 'pt-br': 'Camada' };

/** Inline markdown spans that pass through untouched: links, bold, italic, code. */
const INLINE_MD = /\[[^\]]*\]\([^)]*\)|\*\*[^*]+\*\*|\*[^*\s][^*]*\*|_[^_\s][^_]*_|`[^`]+`/g;

const escape = (/** @type {string} */ s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
/** Whole words only; \b does not understand ä, é, ç. */
const word = (/** @type {string} */ s) => `(?<![\\p{L}\\p{N}])${s}(?![\\p{L}\\p{N}])`;

/**
 * @typedef {{ key: string, forms: string[] }} TermForms
 * @typedef {{ t: 'text', text: string } | { t: 'md', md: string } | { t: 'kw', text: string, kind: string }
 *   | { t: 'layer', text: string, n: number } | { t: 'term', text: string, key: string }} Part
 */

/**
 * Glossary terms → the forms to look for in rule text. A parenthetical
 * ("Rendición de cuentas (Accountability)") is dropped; English also matches a
 * simple plural. Terms marked autolink: false are skipped.
 * @param {Array<{ key: string, term: string, autolink?: boolean }>} terms
 * @param {string} locale
 * @returns {TermForms[]}
 */
export function termForms(terms, locale) {
	return terms
		.filter((t) => t.autolink !== false)
		.map((t) => {
			const base = t.term.replace(/\s*\([^)]*\)\s*$/, '').trim();
			const variants = base.split(/\s*\/\s*/).filter(Boolean);
			const forms = new Set(variants);
			if (locale === 'en') for (const v of variants) if (!/s$/i.test(v)) forms.add(`${v}s`);
			return { key: t.key, forms: [...forms] };
		});
}

/** @type {Map<string, RegExp>} */
const cache = new Map();

/**
 * @param {string} locale
 * @param {TermForms[]} terms
 */
function matcher(locale, terms) {
	const id = `${locale}|${terms.map((t) => t.key).join(',')}`;
	let re = cache.get(id);
	if (!re) {
		const kws = (KEYWORDS[locale] ?? KEYWORDS.en).map(([k]) => escape(k));
		const layer = `${escape(LAYER_WORD[/** @type {keyof typeof LAYER_WORD} */ (locale)] ?? 'Layer')} [0-6]`;
		const forms = terms
			.flatMap((t) => t.forms)
			.sort((a, b) => b.length - a.length)
			.map(escape);
		// Keywords are case-sensitive (they are capitals on purpose); terms are not.
		re = new RegExp(
			`(?<kw>${word(`(?:${kws.join('|')})`)})|(?<layer>${word(layer)})` +
				(forms.length ? `|(?<term>(?i:${word(`(?:${forms.join('|')})`)}))` : ''),
			'gu'
		);
		cache.set(id, re);
	}
	re.lastIndex = 0;
	return re;
}

/**
 * @param {string} text clause text (may contain inline markdown)
 * @param {{ locale: string, terms: TermForms[], seen: Set<string> }} ctx
 *   seen: glossary keys already marked in this section (shared across its clauses)
 * @returns {Part[]}
 */
export function tokenize(text, { locale, terms, seen }) {
	/** @type {Part[]} */
	const parts = [];
	const kinds = new Map((KEYWORDS[locale] ?? KEYWORDS.en).map(([k, kind]) => [k, kind]));
	const byForm = new Map(terms.flatMap((t) => t.forms.map((f) => [f.toLowerCase(), t.key])));

	/** @param {string} plain */
	const scan = (plain) => {
		const re = matcher(locale, terms);
		let last = 0;
		for (const m of plain.matchAll(re)) {
			const g = /** @type {Record<string, string | undefined>} */ (m.groups);
			const at = /** @type {number} */ (m.index);
			if (g.term) {
				const key = byForm.get(g.term.toLowerCase());
				if (!key || seen.has(key)) continue; // only the first use per section
				seen.add(key);
			}
			if (at > last) parts.push({ t: 'text', text: plain.slice(last, at) });
			if (g.kw) parts.push({ t: 'kw', text: g.kw, kind: /** @type {string} */ (kinds.get(g.kw)) });
			else if (g.layer) parts.push({ t: 'layer', text: g.layer, n: Number(g.layer.slice(-1)) });
			else if (g.term)
				parts.push({
					t: 'term',
					text: g.term,
					key: /** @type {string} */ (byForm.get(g.term.toLowerCase()))
				});
			last = at + m[0].length;
		}
		if (last < plain.length) parts.push({ t: 'text', text: plain.slice(last) });
	};

	let last = 0;
	for (const m of text.matchAll(INLINE_MD)) {
		const at = /** @type {number} */ (m.index);
		if (at > last) scan(text.slice(last, at));
		parts.push({ t: 'md', md: m[0] });
		last = at + m[0].length;
	}
	if (last < text.length) scan(text.slice(last));
	return parts;
}
