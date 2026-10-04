import { m } from '$lib/paraglide/messages.js';
import type { SearchKind } from '$lib/search/types';

/** Group headings for search results. */
export const KIND_LABEL: Record<SearchKind, () => string> = {
	clause: m.search_kind_clause,
	section: m.search_kind_section,
	term: m.search_kind_term,
	template: m.search_kind_template,
	'template-section': m.search_kind_template_section,
	guide: m.search_kind_guide,
	test: m.search_kind_test,
	page: m.search_kind_page
};
