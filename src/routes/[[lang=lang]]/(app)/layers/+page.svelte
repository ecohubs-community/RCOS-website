<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import SEO from '$lib/components/seo/SEO.svelte';
	import { buildPageLd } from '$lib/utils/jsonld';
	import PageHeader from '$lib/components/site/PageHeader.svelte';
	import LayerChip from '$lib/components/ui/LayerChip.svelte';
	import Prose from '$lib/components/ui/Prose.svelte';
	import { localized } from '$lib/i18n/path';

	let { data } = $props();
	const title = $derived(data.page?.title ?? m.nav_layers());
	const link =
		'rounded-lg border border-line px-2.5 py-1 font-ui text-[13px] font-semibold text-ink-2 hover:border-forest-300 hover:text-heading';

	const crumbs = $derived([
		{ label: m.site_library(), href: localized('/library', data.locale) },
		{ label: title }
	]);
	const jsonLd = $derived(
		buildPageLd({
			title: title,
			description: m.mega_layers_body(),
			path: '/layers',
			locale: data.locale,
			crumbs
		})
	);
</script>

<SEO {title} description={m.mega_layers_body()} url="/layers" locale={data.locale} {jsonLd} />

<div class="mx-auto w-full max-w-5xl px-4 pt-8 pb-20 sm:px-6 lg:px-8 lg:pt-12">
	<PageHeader {crumbs} {title} lead={m.mega_layers_body()}>
		{#if data.page}<Prose html={data.page.html} lang={data.page.lang} />{/if}
	</PageHeader>

	<!-- Listed from 6 down to 0, so the stack rests on its foundation. -->
	<ol class="mt-8 flex flex-col gap-3">
		{#each [...data.hub.layers].reverse() as l (l.n)}
			<li
				class="flex flex-col gap-3 rounded-2xl border border-line bg-card px-4.5 py-4 sm:flex-row sm:items-center"
			>
				<LayerChip n={l.n} size="md" />
				<div class="min-w-0 flex-1">
					<a href={l.href} class="font-ui text-base font-semibold text-heading hover:underline"
						>{m.layer_label({ n: l.n })} · {l.title}</a
					>
					<p class="text-sm text-ink-muted">{l.question}</p>
				</div>
				<div class="flex flex-wrap gap-2">
					<a href={l.href} class={link}>{m.mega_col_guide()}</a>
					<a href={l.rules} class={link}>{m.mega_col_rules()}</a>
					<a href={l.templates} class={link}>{m.mega_col_templates()}</a>
				</div>
			</li>
		{/each}
	</ol>
</div>
