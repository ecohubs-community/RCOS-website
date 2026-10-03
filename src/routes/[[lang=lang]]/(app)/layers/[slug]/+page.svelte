<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import SEO from '$lib/components/seo/SEO.svelte';
	import PageHeader from '$lib/components/site/PageHeader.svelte';
	import LayerChip from '$lib/components/ui/LayerChip.svelte';
	import Prose from '$lib/components/ui/Prose.svelte';
	import LocaleFallbackBanner from '$lib/components/i18n/LocaleFallbackBanner.svelte';
	import { localized } from '$lib/i18n/path';
	import IconGavel from '~icons/tabler/gavel';
	import IconFilePencil from '~icons/tabler/file-pencil';

	let { data } = $props();
	const p = $derived(data.page);
	const label = 'font-ui text-[11px] font-semibold tracking-[0.08em] text-ink-faint uppercase';
</script>

<SEO
	title={p.title}
	description={p.headHtml.replace(/<[^>]+>/g, '')}
	url={p.path}
	type="article"
	locale={data.locale}
/>

<div
	class="mx-auto grid w-full max-w-6xl grid-cols-1 gap-x-12 px-4 pt-8 pb-20 sm:px-6 lg:grid-cols-[minmax(0,1fr)_17rem] lg:px-8 lg:pt-12"
>
	<article class="min-w-0">
		<PageHeader
			crumbs={[
				{ label: m.nav_layers(), href: localized('/layers', data.locale) },
				{ label: m.layer_label({ n: p.layer.n }) }
			]}
			title={p.layer.title || p.title}
		>
			{#snippet eyebrow()}
				<LayerChip n={p.layer.n} size="xs" />{m.layer_label({ n: p.layer.n })}
			{/snippet}
			<!-- eslint-disable-next-line svelte/no-at-html-tags -- the guide's question, rendered at build time -->
			<p class="font-serif text-xl text-pretty text-guide-ink">{@html p.headHtml}</p>
			<div class="flex flex-wrap gap-2">
				<a
					href={p.links.rules}
					class="inline-flex items-center gap-1.5 rounded-lg bg-brand px-3 py-1.5 font-ui text-sm font-semibold text-white hover:opacity-90"
					><IconGavel class="size-4" />{m.site_read_rules()}</a
				>
				<a
					href={p.links.templates}
					class="inline-flex items-center gap-1.5 rounded-lg border border-line px-3 py-1.5 font-ui text-sm font-semibold text-ink-2 hover:border-forest-300"
					><IconFilePencil class="size-4" />{m.site_see_templates()}</a
				>
			</div>
		</PageHeader>
		{#if p.fallback}
			<div class="mt-6"><LocaleFallbackBanner servedLang="en" requestedLang={data.locale} /></div>
		{/if}
		{#each p.sections as s (s.id)}
			<section id={s.id} class="scroll-mt-24 pt-9">
				<h2 class="mb-3 font-serif text-[1.5rem] font-semibold text-heading">{s.title}</h2>
				<Prose html={s.html} />
			</section>
		{/each}
	</article>
	<aside class="hidden lg:block">
		<div class="sticky top-[calc(var(--header-h)+1.5rem)] flex flex-col gap-7 pt-2">
			<nav aria-labelledby="on-this-page" class="flex flex-col gap-0.5">
				<p id="on-this-page" class="pb-2 {label}">{m.std_on_this_page()}</p>
				{#each p.sections as s (s.id)}
					<a
						href="#{s.id}"
						class="border-l-2 border-transparent py-1 pl-3 text-[13.5px] text-ink-muted hover:border-line hover:text-heading"
						>{s.title}</a
					>
				{/each}
			</nav>
			{#if p.invariants.length}
				<div class="flex flex-col gap-1.5">
					<p class="pb-1 {label}">{m.site_layer_invariants()}</p>
					{#each p.invariants as inv (inv.id)}
						<a href="#{inv.id}" class="text-[13.5px] leading-snug text-ink hover:text-heading"
							><span class="font-mono text-xs font-semibold text-forest-600">{inv.code}</span>
							{inv.name}</a
						>
					{/each}
				</div>
			{/if}
		</div>
	</aside>
</div>
