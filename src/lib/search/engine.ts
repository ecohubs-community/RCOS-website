import MiniSearch, { type SearchResult } from 'minisearch';
import { KIND_ORDER, type SearchDoc, type SearchKind } from './types';

/**
 * Search in the browser over the prerendered index (/search-index/<lang>.json),
 * fetched once per language when it is first needed.
 */
export type Engine = { search: (q: string) => SearchDoc[]; jump: (q: string) => SearchDoc | null };

const engines = new Map<string, Promise<Engine>>();

export function loadEngine(locale: string): Promise<Engine> {
	let engine = engines.get(locale);
	if (!engine) {
		engine = fetch(`/search-index/${locale}.json`)
			.then((r) => {
				if (!r.ok) throw new Error(`search index: ${r.status}`);
				return r.json() as Promise<SearchDoc[]>;
			})
			.then(build);
		// A failed fetch may succeed on the next try.
		engine.catch(() => engines.delete(locale));
		engines.set(locale, engine);
	}
	return engine;
}

/** "2.3.4", "§2.3" or "2.3." → the number, else null. */
export const refIn = (q: string) => /^§?\s*(\d+\.\d+(?:\.\d+)?)\.?$/.exec(q.trim())?.[1] ?? null;

function build(docs: SearchDoc[]): Engine {
	const byRef = new Map(docs.filter((d) => d.ref).map((d) => [d.ref!, d]));
	const byId = new Map(docs.map((d) => [d.id, d]));
	const mini = new MiniSearch<SearchDoc>({
		fields: ['title', 'text', 'context'],
		searchOptions: { prefix: true, fuzzy: 0.2, boost: { title: 3, context: 0.5 } }
	});
	mini.addAll(docs);
	return {
		jump: (q) => {
			const ref = refIn(q);
			return ref ? (byRef.get(ref) ?? null) : null;
		},
		search: (q) =>
			q.trim()
				? mini
						.search(q)
						.slice(0, 60)
						.flatMap((r: SearchResult) => byId.get(String(r.id)) ?? [])
				: []
	};
}

/** Results grouped by kind, in display order, at most `per` per group. */
export function grouped(results: SearchDoc[], per = Infinity) {
	return KIND_ORDER.map((kind) => ({
		kind,
		docs: results.filter((d) => d.kind === kind).slice(0, per)
	})).filter((g) => g.docs.length) as { kind: SearchKind; docs: SearchDoc[] }[];
}
