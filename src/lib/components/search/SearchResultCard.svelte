<script lang="ts">
	import type { SearchResult } from '$lib/stores/search';
	import { m } from '$lib/paraglide/messages.js';

	let { result }: { result: SearchResult } = $props();

	const KIND: Record<SearchResult['kind'], () => string> = {
		standard: m.nav_standard,
		template: m.mega_templates,
		guide: m.nav_layers,
		test: m.mega_stress_tests,
		toolkit: m.nav_toolkit,
		library: m.site_library
	};
</script>

<a
	href={result.url}
	class="flex items-start justify-between gap-3 rounded-xl border border-line bg-card px-4.5 py-3.5 hover:border-forest-300"
>
	<span class="font-ui text-[15.5px] font-semibold text-heading">{result.title}</span>
	<span class="shrink-0 rounded-full bg-paper-2 px-2 py-0.5 font-ui text-xs text-ink-muted"
		>{KIND[result.kind]()}</span
	>
</a>
