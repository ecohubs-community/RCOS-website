<script lang="ts">
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { searchIndex, setQuery, query } from '$lib/stores/search';
	import { onMount } from 'svelte';
	import MiniSearch from 'minisearch';
	import type { SearchResult } from '$lib/stores/search';
	import SearchResults from '$lib/components/search/SearchResults.svelte';
	import SEO from '$lib/components/seo/SEO.svelte';
	import { m } from '$lib/paraglide/messages.js';

	let { data } = $props();

	onMount(() => {
		const idx = MiniSearch.loadJSON(JSON.stringify(data.searchIndex), {
			fields: ['title', 'body'],
			storeFields: ['id', 'url', 'title', 'kind'],
			searchOptions: {
				fuzzy: 0.2,
				prefix: true,
				boost: { title: 2 }
			}
		}) as MiniSearch<SearchResult>;
		searchIndex.set(idx);
	});

	$effect(() => {
		if (!browser) return;
		const q = $page.url.searchParams.get('q') ?? '';
		setQuery(q);
	});
</script>

<!-- Interim container (was in the old AppShell); the page is rebuilt in phase 5. -->
<div class="mx-auto w-full max-w-7xl px-lg py-xl">
	<SEO title={m.search_title()} url="/search" noindex={true} locale={data.locale} />

	<section class="space-y-6">
		<header>
			<h1 class="text-3xl font-bold text-gradient">{m.search_title()}</h1>
			<p class="text-text-secondary">
				{m.search_results_for()} <strong>{$query || m.search_empty_query()}</strong>
			</p>
		</header>

		<SearchResults />
	</section>
</div>
