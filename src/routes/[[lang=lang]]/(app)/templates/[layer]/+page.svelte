<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import SEO from '$lib/components/seo/SEO.svelte';
	import PageHeader from '$lib/components/site/PageHeader.svelte';
	import LayerChip from '$lib/components/ui/LayerChip.svelte';
	import { localized } from '$lib/i18n/path';
	import IconFilePencil from '~icons/tabler/file-pencil';
	import IconDownload from '~icons/tabler/download';

	let { data } = $props();
	const l = $derived(data.layer);
	const title = $derived(m.site_templates_in_layer({ n: l.layer.n }));
</script>

<SEO {title} description={l.question ?? ''} url={l.path} locale={data.locale} />

<div class="mx-auto w-full max-w-5xl px-4 pt-8 pb-20 sm:px-6 lg:px-8 lg:pt-12">
	<PageHeader
		crumbs={[
			{ label: m.site_library(), href: localized('/library', data.locale) },
			{ label: m.mega_templates(), href: localized('/templates', data.locale) },
			{ label: m.layer_label({ n: l.layer.n }) }
		]}
		{title}
		lead={l.question}
	>
		{#snippet eyebrow()}
			<LayerChip n={l.layer.n} size="xs" />
			<a href={l.layer.href} class="hover:underline">{l.layer.title}</a>
		{/snippet}
	</PageHeader>

	<ul class="mt-8 grid gap-3 sm:grid-cols-2">
		{#each l.templates as t (t.path)}
			<li>
				<a
					href={t.path}
					class="flex h-full flex-col gap-1.5 rounded-2xl border border-line bg-card px-4.5 py-4 hover:border-forest-300"
				>
					<span class="flex items-center gap-2 font-ui text-[15.5px] font-semibold text-heading">
						<IconFilePencil class="size-4 shrink-0 text-forest-600" />{t.title}
						{#if t.ref}<span class="ml-auto font-mono text-[11px] font-normal text-ink-faint"
								>{t.ref}</span
							>{/if}
					</span>
					{#if t.summary}<span class="text-sm text-ink-muted">{t.summary}</span>{/if}
					<span class="mt-auto pt-1 font-ui text-xs text-ink-faint"
						>{m.site_sections({ n: t.sections })}</span
					>
				</a>
			</li>
		{/each}
	</ul>

	<a
		href={localized('/templates#downloads', data.locale)}
		class="mt-8 inline-flex items-center gap-2 font-ui text-sm font-semibold text-accent-ink hover:underline"
		><IconDownload class="size-4" />{m.downloads_all_link()}</a
	>
</div>
