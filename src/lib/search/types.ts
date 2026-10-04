/** What the search index holds; shared by the server (builds it) and the browser (searches it). */
export type SearchKind =
	| 'clause'
	| 'section'
	| 'term'
	| 'template'
	| 'template-section'
	| 'test'
	| 'guide'
	| 'page';

export type SearchDoc = {
	id: string;
	kind: SearchKind;
	/** Page URL with anchor, already in the index's language */
	url: string;
	title: string;
	/** Plain text, clipped */
	text: string;
	/** Where it lives ("Layer 0 — Identity & Scope · Invariants") */
	context: string;
	/** Clause or section number of the core, for jump-to-number */
	ref?: string;
};

/** Order of the groups in results. */
export const KIND_ORDER: SearchKind[] = [
	'clause',
	'section',
	'term',
	'template',
	'template-section',
	'guide',
	'test',
	'page'
];
