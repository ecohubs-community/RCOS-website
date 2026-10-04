<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import SEO from '$lib/components/seo/SEO.svelte';
	import { buildPageLd } from '$lib/utils/jsonld';
	import PageHeader from '$lib/components/site/PageHeader.svelte';
	import LayerChip from '$lib/components/ui/LayerChip.svelte';
	import {
		LAYERS,
		MODULES,
		REFERENCE,
		START_HERE,
		TOOLKIT,
		STANDARD_HREF
	} from '$lib/nav/site-nav';
	import { localized } from '$lib/i18n/path';
	import IconDatabase from '~icons/tabler/database';

	/** Everything in the knowledge base, in one place (the old /articles listing). */
	let { data } = $props();
	const href = (p: string) => localized(p, data.locale);
	const h2 = 'mb-4 font-serif text-2xl font-semibold text-heading';
	const card =
		'flex h-full flex-col gap-1 rounded-2xl border border-line bg-card px-4.5 py-4 hover:border-forest-300';
	const pill =
		'rounded-lg border border-line px-2.5 py-1 font-ui text-[13px] font-semibold text-ink-2 hover:border-forest-300 hover:text-heading';

	const crumbs = $derived([{ label: m.site_library() }]);
	const jsonLd = $derived(
		buildPageLd({
			title: m.site_library(),
			description: m.site_library_lead(),
			path: '/library',
			locale: data.locale,
			crumbs
		})
	);
</script>

<SEO
	title={m.site_library()}
	description={m.site_library_lead()}
	url="/library"
	locale={data.locale}
	{jsonLd}
/>

<div class="mx-auto w-full max-w-6xl px-4 pt-8 pb-20 sm:px-6 lg:px-8 lg:pt-12">
	<PageHeader title={m.site_library()} lead={m.site_library_lead()} />

	<div class="mt-10 flex flex-col gap-14">
		<section aria-labelledby="standard">
			<h2 id="standard" class={h2}>
				<a href={href(STANDARD_HREF)} class="hover:underline">{m.nav_standard()}</a>
			</h2>
			<ul class="grid gap-3 sm:grid-cols-3">
				{#each [...START_HERE, ...MODULES] as item (item.href)}
					<li>
						<a href={href(item.href)} class={card}>
							<span class="font-ui text-[15.5px] font-semibold text-heading">{item.label()}</span>
							{#if item.desc}<span class="text-sm text-ink-muted">{item.desc()}</span>{/if}
						</a>
					</li>
				{/each}
			</ul>
			<p class="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-sm">
				{#each REFERENCE as item (item.href)}
					<a href={href(item.href)} class="text-ink-2 hover:text-heading"
						><span class="font-mono text-xs text-accent-ink">{item.num}</span> {item.label()}</a
					>
				{/each}
			</p>
		</section>

		<section aria-labelledby="layers">
			<h2 id="layers" class={h2}>
				<a href={href('/layers')} class="hover:underline">{m.nav_layers()}</a>
			</h2>
			<ol class="flex flex-col gap-2.5">
				{#each LAYERS as l (l.n)}
					<li
						class="flex flex-col gap-3 rounded-2xl border border-line bg-card px-4.5 py-3.5 sm:flex-row sm:items-center"
					>
						<LayerChip n={l.n} size="sm" />
						<div class="min-w-0 flex-1">
							<p class="font-ui text-[15px] font-semibold text-heading">{l.name()}</p>
							<p class="text-sm text-ink-muted">{l.question()}</p>
						</div>
						<div class="flex flex-wrap gap-2">
							<a href={href(l.guide)} class={pill}>{m.mega_col_guide()}</a>
							<a href={href(l.rules)} class={pill}>{m.mega_col_rules()} {l.sec}</a>
							<a href={href(l.templates)} class={pill}>{m.mega_col_templates()}</a>
						</div>
					</li>
				{/each}
			</ol>
		</section>

		<section aria-labelledby="toolkit">
			<h2 id="toolkit" class={h2}>
				<a href={href('/toolkit')} class="hover:underline">{m.site_toolkit()}</a>
			</h2>
			<ul class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
				{#each TOOLKIT.flatMap((g) => g.items) as item (item.href)}
					{#if item.href !== '/library'}
						<li>
							<a href={href(item.href)} class="{card} flex-row gap-3">
								{#if item.icon}<item.icon class="mt-0.5 size-5 shrink-0 text-accent-ink" />{/if}
								<span class="flex flex-col gap-1">
									<span class="font-ui text-[15.5px] font-semibold text-heading"
										>{item.label()}</span
									>
									{#if item.desc}<span class="text-sm text-ink-muted">{item.desc()}</span>{/if}
								</span>
							</a>
						</li>
					{/if}
				{/each}
				<li>
					<a href={href('/data')} class="{card} flex-row gap-3">
						<IconDatabase class="mt-0.5 size-5 shrink-0 text-accent-ink" />
						<span class="flex flex-col gap-1">
							<span class="font-ui text-[15.5px] font-semibold text-heading">{m.site_data()}</span>
							<span class="text-sm text-ink-muted">{m.site_data_licence()}</span>
						</span>
					</a>
				</li>
			</ul>
		</section>
	</div>
</div>
