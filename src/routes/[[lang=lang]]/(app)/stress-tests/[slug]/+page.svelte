<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import SEO from '$lib/components/seo/SEO.svelte';
	import { buildPageLd } from '$lib/utils/jsonld';
	import PageHeader from '$lib/components/site/PageHeader.svelte';
	import LayerChip from '$lib/components/ui/LayerChip.svelte';
	import Prose from '$lib/components/ui/Prose.svelte';
	import SeverityDot from '$lib/components/site/SeverityDot.svelte';
	import LocaleFallbackBanner from '$lib/components/i18n/LocaleFallbackBanner.svelte';
	import { localized } from '$lib/i18n/path';
	import IconFilePencil from '~icons/tabler/file-pencil';
	import IconGavel from '~icons/tabler/gavel';
	import IconArrowRight from '~icons/tabler/arrow-right';

	let { data } = $props();
	const p = $derived(data.page);
	const STAGE: Record<string, () => string> = {
		forming: m.site_stage_forming,
		growth: m.site_stage_growth,
		mature: m.site_stage_mature
	};
	const SEVERITY: Record<string, () => string> = {
		high: m.self_assessment_severity_high,
		medium: m.self_assessment_severity_medium,
		low: m.self_assessment_severity_low
	};
	const RELATION: Record<string, () => string> = {
		feeds: m.site_relation_feeds,
		enables: m.site_relation_enables
	};
	const label = 'font-ui text-[11px] font-semibold tracking-[0.08em] text-ink-faint uppercase';

	const crumbs = $derived([
		{ label: m.mega_stress_tests(), href: localized('/stress-tests', data.locale) },
		{
			label: m.layer_label({ n: p.layers[0] }),
			href: localized(`/stress-tests#layer-${p.layers[0]}`, data.locale)
		},
		{ label: p.title }
	]);
	const jsonLd = $derived(
		buildPageLd({
			title: p.title,
			description: p.summary ?? '',
			path: data.path,
			locale: data.locale,
			datePublished: p.dates.published,
			dateModified: p.dates.modified,
			crumbs
		})
	);
</script>

<SEO
	title={p.title}
	description={p.summary ?? ''}
	url={data.path}
	type="article"
	locale={data.locale}
	{jsonLd}
/>

<div
	class="mx-auto grid w-full max-w-6xl grid-cols-1 gap-x-12 px-4 pt-8 pb-20 sm:px-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:px-8 lg:pt-12"
>
	<article class="min-w-0">
		<PageHeader {crumbs} title={p.title} lead={p.summary}>
			{#snippet eyebrow()}
				<span class="inline-flex items-center gap-1.5 font-ui"
					><SeverityDot severity={p.severity} />{p.severity ? SEVERITY[p.severity]() : ''}</span
				>
				<span aria-hidden="true">·</span>
				{#each p.layers as n (n)}<LayerChip {n} size="xs" />{/each}
				{#if p.stage.length}
					<span aria-hidden="true">·</span>
					<span class="font-ui font-normal text-ink-muted"
						>{m.site_stage()}: {p.stage.map((s) => STAGE[s]?.() ?? s).join(', ')}</span
					>
				{/if}
			{/snippet}
		</PageHeader>
		{#if p.fallback}
			<div class="mt-6"><LocaleFallbackBanner servedLang="en" requestedLang={data.locale} /></div>
		{/if}
		{#if p.headHtml}<Prose html={p.headHtml} class="mt-6" />{/if}
		{#each p.sections as s (s.id)}
			<section id={s.id} class="scroll-mt-24 pt-9">
				{#each s.legacyAnchors as a (a)}<span id={a} class="block scroll-mt-24"></span>{/each}
				<h2 class="mb-3 font-serif text-[1.5rem] font-semibold text-heading">{s.title}</h2>
				<Prose html={s.html} />
			</section>
		{/each}
	</article>

	<aside class="mt-10 lg:mt-0">
		<div class="flex flex-col gap-7 pt-2 lg:sticky lg:top-[calc(var(--header-h)+1.5rem)]">
			{#if p.preventsWith.length}
				<div class="flex flex-col gap-1.5">
					<p class="pb-1 {label}">{m.site_prevented_by()}</p>
					{#each p.preventsWith as t (t.href)}
						<a href={t.href} class="flex items-center gap-2 text-[14px] text-ink hover:text-heading"
							><IconFilePencil class="size-4 shrink-0 text-accent-ink" />{t.title}</a
						>
					{/each}
				</div>
			{/if}
			{#if p.tests.length}
				<div class="flex flex-col gap-1.5">
					<p class="pb-1 {label}">{m.site_tests_rules()}</p>
					<div class="flex flex-wrap gap-1.5">
						{#each p.tests as t (t.ref)}
							<a
								href={t.href}
								class="inline-flex items-center gap-1 rounded-full border border-forest-200 bg-forest-50 px-2.5 py-0.5 font-mono text-xs font-semibold text-forest-800 hover:border-forest-400"
								><IconGavel class="size-3" />§{t.ref}</a
							>
						{/each}
					</div>
				</div>
			{/if}
			{#if p.invariants.length}
				<div class="flex flex-col gap-1.5">
					<p class="pb-1 {label}">{m.site_invariants_at_stake()}</p>
					{#each p.invariants as inv (inv.id)}
						<a href={inv.href} class="text-[13.5px] leading-snug text-ink hover:text-heading"
							><span class="font-mono text-xs font-semibold text-accent-ink">{inv.code}</span>
							{inv.name}</a
						>
					{/each}
				</div>
			{/if}
			{#if p.cascade.length}
				<div class="flex flex-col gap-2">
					<p class="pb-1 {label}">{m.site_can_trigger()}</p>
					{#each p.cascade as c (c.href)}
						<a href={c.href} class="flex flex-col gap-0.5 text-[13.5px] hover:text-heading">
							<span class="flex items-center gap-1.5 font-semibold text-guide-ink"
								><IconArrowRight class="size-3.5" /><span class="font-normal text-ink-faint"
									>{RELATION[c.relation]?.() ?? c.relation}</span
								>{c.title}</span
							>
							<span class="text-ink-muted">{c.note}</span>
						</a>
					{/each}
				</div>
			{/if}
		</div>
	</aside>
</div>
