<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import SEO from '$lib/components/seo/SEO.svelte';
	import { buildPageLd } from '$lib/utils/jsonld';
	import PageHeader from '$lib/components/site/PageHeader.svelte';
	import { TOOLKIT } from '$lib/nav/site-nav';
	import { localized } from '$lib/i18n/path';

	let { data } = $props();

	const crumbs = $derived([
		{ label: m.site_library(), href: localized('/library', data.locale) },
		{ label: m.site_toolkit() }
	]);
	const jsonLd = $derived(
		buildPageLd({
			title: m.site_toolkit(),
			description: m.site_toolkit_lead(),
			path: '/toolkit',
			locale: data.locale,
			crumbs
		})
	);
</script>

<SEO
	title={m.site_toolkit()}
	description={m.site_toolkit_lead()}
	url="/toolkit"
	locale={data.locale}
	{jsonLd}
/>

<div class="mx-auto w-full max-w-5xl px-4 pt-8 pb-20 sm:px-6 lg:px-8 lg:pt-12">
	<PageHeader {crumbs} title={m.site_toolkit()} lead={m.site_toolkit_lead()} />
	<div class="mt-10 flex flex-col gap-10">
		{#each TOOLKIT as group, i (i)}
			<section aria-labelledby="group-{i}">
				<h2
					id="group-{i}"
					class="mb-4 font-ui text-[11px] font-semibold tracking-[0.08em] text-ink-faint uppercase"
				>
					{group.title()}
				</h2>
				<ul class="grid gap-3 sm:grid-cols-2">
					{#each group.items as item (item.href)}
						<li>
							<a
								href={localized(item.href, data.locale)}
								class="flex h-full gap-3 rounded-2xl border border-line bg-card px-4.5 py-4 hover:border-forest-300"
							>
								{#if item.icon}<item.icon class="mt-0.5 size-5 shrink-0 text-accent-ink" />{/if}
								<span class="flex flex-col gap-1">
									<span class="font-ui text-[15.5px] font-semibold text-heading"
										>{item.label()}</span
									>
									{#if item.desc}<span class="text-sm text-ink-muted">{item.desc()}</span>{/if}
								</span>
							</a>
						</li>
					{/each}
				</ul>
			</section>
		{/each}
	</div>
</div>
