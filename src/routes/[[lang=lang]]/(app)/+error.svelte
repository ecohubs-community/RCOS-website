<script lang="ts">
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages.js';
	import { getLocale } from '$lib/paraglide/runtime.js';
	import { localized } from '$lib/i18n/path';
	import { palette } from '$lib/components/search/palette.svelte';
	import IconSearch from '~icons/tabler/search';

	/** Error page inside the site shell; a real 404 for unknown pages. */
	const notFound = $derived(page.status === 404);
</script>

<svelte:head>
	<title>{notFound ? m.error_not_found_title() : m.error_title()} - RCOS</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<div class="mx-auto flex w-full max-w-2xl flex-col items-start gap-5 px-4 py-24 sm:px-6">
	<p class="font-mono text-sm font-semibold text-accent-ink">{page.status}</p>
	<h1 class="font-serif text-4xl font-bold text-heading">
		{notFound ? m.error_not_found_title() : m.error_title()}
	</h1>
	<p class="text-lg text-ink-2">{notFound ? m.error_not_found_body() : m.error_body()}</p>
	<div class="flex flex-wrap gap-3">
		<a
			href={localized('/', getLocale())}
			class="inline-flex h-11 items-center rounded-xl bg-brand px-4 font-ui font-semibold text-white hover:opacity-90"
			>{m.error_home()}</a
		>
		<a
			href={localized('/search', getLocale())}
			onclick={(e) => {
				e.preventDefault();
				palette.open = true;
			}}
			class="inline-flex h-11 items-center gap-2 rounded-xl border border-line bg-card px-4 font-ui font-semibold text-ink hover:border-forest-400"
			><IconSearch class="size-4" />{m.error_search()}</a
		>
	</div>
</div>
