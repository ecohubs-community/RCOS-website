<script lang="ts">
	import { page } from '$app/state';
	import { browser } from '$app/environment';
	import { m } from '$lib/paraglide/messages.js';
	import SEO from '$lib/components/seo/SEO.svelte';
	import PageHeader from '$lib/components/site/PageHeader.svelte';
	import { KIND_LABEL } from '$lib/components/search/kinds';
	import { loadEngine, grouped, type Engine } from '$lib/search/engine';
	import { localized } from '$lib/i18n/path';
	import IconSearch from '~icons/tabler/search';
	import IconGavel from '~icons/tabler/gavel';

	/** All results for a query, grouped by kind. The palette's "see all", and search without ⌘K. */
	let { data } = $props();
	let engine = $state<Engine | null>(null);
	let failed = $state(false);

	const q = $derived(browser ? (page.url.searchParams.get('q') ?? '') : '');
	const jump = $derived(engine?.jump(q) ?? null);
	const groups = $derived(engine ? grouped(engine.search(q)) : []);

	$effect(() => {
		loadEngine(data.locale)
			.then((e) => (engine = e))
			.catch(() => (failed = true));
	});
</script>

<SEO title={m.search_title()} url="/search" noindex={true} locale={data.locale} />

<div class="mx-auto w-full max-w-3xl px-4 pt-8 pb-20 sm:px-6 lg:pt-12">
	<PageHeader title={m.search_title()}>
		<form
			method="GET"
			action={localized('/search', data.locale)}
			role="search"
			class="flex items-center gap-2 rounded-xl border border-line bg-card px-3.5 focus-within:ring-2 focus-within:ring-(--color-focus)"
		>
			<IconSearch class="size-5 shrink-0 text-ink-faint" aria-hidden="true" />
			<input
				type="search"
				name="q"
				value={q}
				placeholder={m.nav_search_placeholder()}
				aria-label={m.nav_search_button()}
				class="h-12 min-w-0 flex-1 border-0 bg-transparent p-0 text-base text-ink placeholder:text-ink-faint focus:ring-0 focus:outline-none"
			/>
			<button
				type="submit"
				class="rounded-lg bg-brand px-3 py-1.5 font-ui text-sm font-semibold text-white"
				>{m.nav_search_button()}</button
			>
		</form>
	</PageHeader>

	<div class="mt-8 flex flex-col gap-8" aria-live="polite">
		{#if !engine}
			<p class="text-ink-muted">{failed ? m.search_index_failed() : m.search_loading()}</p>
		{:else if !q.trim()}
			<p class="text-ink-muted">{m.search_hint()}</p>
		{:else}
			{#if jump}
				<a
					href={jump.url}
					class="flex items-center gap-3 rounded-xl border border-forest-300 bg-hover px-4 py-3 font-ui font-semibold text-heading"
				>
					<IconGavel class="size-5 text-accent-ink" />{m.search_jump({ ref: jump.ref ?? '' })}
					<span class="truncate text-sm font-normal text-ink-muted">{jump.context}</span>
				</a>
			{/if}
			{#each groups as g (g.kind)}
				<section aria-labelledby="group-{g.kind}">
					<h2
						id="group-{g.kind}"
						class="mb-2 font-ui text-[11px] font-semibold tracking-[0.08em] text-ink-faint uppercase"
					>
						{KIND_LABEL[g.kind]()} · {g.docs.length}
					</h2>
					<ul class="flex flex-col gap-2">
						{#each g.docs as d (d.id)}
							<li>
								<a
									href={d.url}
									class="flex flex-col gap-1 rounded-xl border border-line bg-card px-4 py-3 hover:border-forest-300"
								>
									<span class="flex flex-wrap items-baseline gap-x-2">
										<span
											class={[
												'font-ui font-semibold text-heading',
												d.kind === 'clause' && 'font-mono text-accent-ink'
											]}>{d.title}</span
										>
										{#if d.context}<span class="text-xs text-ink-faint">{d.context}</span>{/if}
									</span>
									{#if d.text}<span class="line-clamp-2 text-sm text-ink-muted">{d.text}</span>{/if}
								</a>
							</li>
						{/each}
					</ul>
				</section>
			{:else}
				{#if !jump}<p class="text-ink-muted">{m.search_no_results()}</p>{/if}
			{/each}
		{/if}
	</div>
</div>
