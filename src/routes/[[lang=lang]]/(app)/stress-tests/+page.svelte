<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import SEO from '$lib/components/seo/SEO.svelte';
	import { buildPageLd } from '$lib/utils/jsonld';
	import PageHeader from '$lib/components/site/PageHeader.svelte';
	import HubSteps from '$lib/components/site/HubSteps.svelte';
	import LayerChip from '$lib/components/ui/LayerChip.svelte';
	import Prose from '$lib/components/ui/Prose.svelte';
	import SeverityDot from '$lib/components/site/SeverityDot.svelte';
	import CoverageMatrix from '$lib/components/site/CoverageMatrix.svelte';
	import { localized } from '$lib/i18n/path';

	let { data } = $props();
	const title = $derived(data.page?.title ?? m.mega_stress_tests());

	const crumbs = $derived([
		{ label: m.site_library(), href: localized('/library', data.locale) },
		{ label: title }
	]);
	const jsonLd = $derived(
		buildPageLd({
			title: title,
			description: m.hub_stress_tests_lead(),
			path: '/stress-tests',
			locale: data.locale,
			crumbs
		})
	);
</script>

<SEO
	{title}
	description={m.hub_stress_tests_lead()}
	url="/stress-tests"
	locale={data.locale}
	{jsonLd}
/>

<div class="mx-auto w-full max-w-6xl px-4 pt-8 pb-20 sm:px-6 lg:px-8 lg:pt-12">
	<PageHeader {crumbs} {title} lead={m.hub_stress_tests_lead()} />
	<HubSteps
		heading={m.hub_how_to_use()}
		steps={[
			{
				title: m.hub_stress_tests_step1_title(),
				body: m.hub_stress_tests_step1_body(),
				href: localized('/toolkit/self-assessment', data.locale),
				cta: m.home_start_step2_cta()
			},
			{
				title: m.hub_stress_tests_step2_title(),
				body: m.hub_stress_tests_step2_body(),
				href: localized('/toolkit/facilitation-worksheet', data.locale),
				cta: m.hub_stress_tests_step2_cta()
			},
			{ title: m.hub_stress_tests_step3_title(), body: m.hub_stress_tests_step3_body() }
		]}
	/>

	<!-- Grouped by primary layer (Q-15). The old category pages redirect to these anchors. -->
	<div class="mt-10 flex flex-col gap-10">
		{#each data.hub.groups.filter((g) => g.tests.length) as g (g.layer.n)}
			<section
				id="layer-{g.layer.n}"
				aria-labelledby="layer-{g.layer.n}-title"
				class="scroll-mt-24"
			>
				<h2
					id="layer-{g.layer.n}-title"
					class="mb-4 flex items-center gap-3 font-serif text-2xl font-semibold text-heading"
				>
					<LayerChip n={g.layer.n} size="sm" />
					<a href={g.layer.href} class="hover:underline"
						>{m.layer_label({ n: g.layer.n })} · {g.layer.title}</a
					>
					<span class="font-ui text-sm font-normal text-ink-faint"
						>{m.site_tests_count({ n: g.tests.length })}</span
					>
				</h2>
				<ul class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
					{#each g.tests as t (t.path)}
						<li>
							<a
								href={t.path}
								class="flex h-full flex-col gap-1.5 rounded-2xl border border-line bg-card px-4.5 py-4 hover:border-clay-300"
							>
								<span
									class="flex items-center gap-2 font-ui text-[15.5px] font-semibold text-heading"
								>
									<SeverityDot severity={t.severity} />{t.title}
								</span>
								{#if t.summary}<span class="text-sm text-ink-muted">{t.summary}</span>{/if}
								{#if t.layers.length > 1}
									<span class="mt-auto flex items-center gap-1 pt-1 font-ui text-xs text-ink-faint">
										{m.site_also_layers()}
										{#each t.layers.slice(1) as n (n)}<LayerChip {n} size="xs" />{/each}
									</span>
								{/if}
							</a>
						</li>
					{/each}
				</ul>
			</section>
		{/each}
	</div>

	<div class="mt-14"><CoverageMatrix coverage={data.coverage} /></div>

	{#if data.page}
		<section aria-labelledby="about" class="mt-14 max-w-190 border-t border-line pt-10">
			<h2 id="about" class="sr-only">{m.site_about_page()}</h2>
			<Prose html={data.page.html} lang={data.page.lang} />
		</section>
	{/if}
</div>
