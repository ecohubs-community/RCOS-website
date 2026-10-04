import { writable } from 'svelte/store';
import MiniSearch from 'minisearch';

export type SearchResult = {
	id: string;
	/** Page URL, already in the page's language */
	url: string;
	title: string;
	kind: 'standard' | 'template' | 'guide' | 'test' | 'toolkit' | 'library';
};

export const searchIndex = writable<MiniSearch<SearchResult>>();
export const query = writable('');
export const results = writable<SearchResult[]>([]);
export const status = writable<'idle' | 'loading' | 'ready'>('idle');

// Keep as alias for backwards compatibility with SearchResults component
export const filteredResults = results;

export function setQuery(q: string) {
	query.set(q);
	runSearch();
}

function runSearch() {
	let idx: MiniSearch<SearchResult> | undefined;
	searchIndex.subscribe((v) => (idx = v))();

	let q: string | undefined;
	query.subscribe((v) => (q = v))();

	if (!idx) {
		results.set([]);
		status.set('idle');
		return;
	}

	if (!q?.trim()) {
		results.set([]);
		status.set('ready');
		return;
	}

	status.set('loading');
	const raw = idx.search(q, { fuzzy: 0.2, prefix: true });
	const mapped: SearchResult[] = raw.map((doc) => ({
		id: doc.id,
		url: doc.url,
		title: doc.title,
		kind: doc.kind
	}));
	results.set(mapped);
	status.set('ready');
}
