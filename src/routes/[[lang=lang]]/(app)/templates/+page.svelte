<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import SEO from '$lib/components/seo/SEO.svelte';
	import { buildPageLd } from '$lib/utils/jsonld';
	import PageHeader from '$lib/components/site/PageHeader.svelte';
	import HubSteps from '$lib/components/site/HubSteps.svelte';
	import LayerChip from '$lib/components/ui/LayerChip.svelte';
	import Prose from '$lib/components/ui/Prose.svelte';
	import TemplateDownloads from '$lib/components/templates/TemplateDownloads.svelte';
	import { localized } from '$lib/i18n/path';
	import IconFilePencil from '~icons/tabler/file-pencil';

	let { data } = $props();
	const title = $derived(data.page?.title ?? m.mega_templates());

	const crumbs = $derived([
		{ label: m.site_library(), href: localized('/library', data.locale) },
		{ label: title }
	]);
	const jsonLd = $derived(
		buildPageLd({
			title: title,
			description: m.hub_templates_lead(),
			path: '/templates',
			locale: data.locale,
			crumbs
		})
	);
</script>

<SEO {title} description={m.hub_templates_lead()} url="/templates" locale={data.locale} {jsonLd} />

<div class="mx-auto w-full max-w-6xl px-4 pt-8 pb-20 sm:px-6 lg:px-8 lg:pt-12">
	<PageHeader {crumbs} {title} lead={m.hub_templates_lead()} />
	<HubSteps
		heading={m.hub_how_to_use()}
		steps={[
			{ title: m.hub_templates_step1_title(), body: m.hub_templates_step1_body() },
			{ title: m.hub_templates_step2_title(), body: m.hub_templates_step2_body() },
			{ title: m.hub_templates_step3_title(), body: m.hub_templates_step3_body() }
		]}
	/>

	<div class="mt-10 flex flex-col gap-12">
		{#each data.hub.layers as l (l.layer.n)}
			<section
				id="layer-{l.layer.n}"
				aria-labelledby="layer-{l.layer.n}-title"
				class="scroll-mt-24"
			>
				<div class="mb-4 flex flex-wrap items-baseline justify-between gap-3">
					<h2
						id="layer-{l.layer.n}-title"
						class="flex items-center gap-3 font-serif text-2xl font-semibold text-heading"
					>
						<LayerChip n={l.layer.n} size="sm" />
						<a href={localized(l.path, data.locale)} class="hover:underline"
							>{m.layer_label({ n: l.layer.n })} · {l.layer.title}</a
						>
					</h2>
					{#if l.question}<p class="text-sm text-ink-muted">{l.question}</p>{/if}
				</div>
				<ul class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
					{#each l.templates as t (t.path)}
						<li>
							<a
								href={t.path}
								class="flex h-full flex-col gap-1.5 rounded-2xl border border-line bg-card px-4.5 py-4 hover:border-forest-300"
							>
								<span
									class="flex items-center gap-2 font-ui text-[15.5px] font-semibold text-heading"
								>
									<IconFilePencil class="size-4 shrink-0 text-accent-ink" />{t.title}
									{#if t.ref}<span class="ml-auto font-mono text-[11px] font-normal text-ink-faint"
											>{t.ref}</span
										>{/if}
								</span>
								{#if t.summary}<span class="line-clamp-3 text-sm text-ink-muted">{t.summary}</span
									>{/if}
							</a>
						</li>
					{/each}
				</ul>
			</section>
		{/each}
	</div>

	{#if data.hub.downloads}
		<div class="mt-12"><TemplateDownloads downloads={data.hub.downloads} /></div>
	{/if}

	{#if data.page}
		<section aria-labelledby="about" class="mt-14 max-w-190 border-t border-line pt-10">
			<h2 id="about" class="sr-only">{m.site_about_page()}</h2>
			<Prose html={data.page.html} lang={data.page.lang} />
		</section>
	{/if}
</div>
