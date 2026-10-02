<script lang="ts">
	import type { Component } from 'svelte';
	import IconMarkdown from '~icons/tabler/markdown';
	import IconFileTypeDoc from '~icons/tabler/file-type-doc';
	import IconChevronRight from '~icons/tabler/chevron-right';
	import IconDownload from '~icons/tabler/download';
	import IconFileDownload from '~icons/tabler/file-download';
	import IconLanguage from '~icons/tabler/language';
	import IconPackage from '~icons/tabler/package';
	import { page } from '$app/state';
	import type { ArticleDownloads } from '$lib/server/downloads';
	import { m } from '$lib/paraglide/messages.js';
	import { localized } from '$lib/i18n/path';
	import { DEFAULT_LOCALE, getLocale } from '$lib/i18n/languages';

	let { downloads }: { downloads: ArticleDownloads } = $props();

	const locale = $derived((page.data?.locale as string | undefined) ?? DEFAULT_LOCALE);

	// Format metadata is stable; the labels and hints come from the messages.
	const FORMAT_INFO: Record<string, { icon: Component; label: () => string; hint: () => string }> =
		{
			md: {
				icon: IconMarkdown,
				label: m.downloads_format_md_label,
				hint: m.downloads_format_md_hint
			},
			docx: {
				icon: IconFileTypeDoc,
				label: m.downloads_format_docx_label,
				hint: m.downloads_format_docx_hint
			},
			odt: {
				icon: IconFileTypeDoc,
				label: m.downloads_format_odt_label,
				hint: m.downloads_format_odt_hint
			}
		};

	const servedLocaleName = $derived(getLocale(downloads.servedLocale).englishName);
</script>

{#if downloads.type === 'index'}
	<section
		id="downloads"
		class="not-prose rounded-xl border border-border bg-surface/50 p-6 sm:p-8 my-8"
	>
		<header class="space-y-2 mb-6">
			<h2 class="text-2xl font-bold text-text-primary flex items-center gap-2">
				<IconPackage class="w-6 h-6 text-primary" />
				{m.downloads_heading_all()}
			</h2>
			<p class="text-text-secondary text-sm">
				{m.downloads_intro_all()}
			</p>
			<p class="text-text-tertiary text-xs">
				{m.downloads_generated({ date: downloads.generated })}
			</p>
			{#if downloads.isFallback}
				<p
					class="flex items-start gap-2 text-xs text-text-secondary border border-border bg-background rounded-md px-3 py-2"
				>
					<IconLanguage class="w-4 h-4 mt-0.5 text-primary shrink-0" />
					<span>{m.downloads_bundle_fallback({ served: servedLocaleName })}</span>
				</p>
			{/if}
		</header>

		<div class="grid gap-3 sm:grid-cols-3">
			{#each downloads.formats as fmt (fmt)}
				{@const info = FORMAT_INFO[fmt]}
				<a
					href={downloads.bundles[fmt]}
					download
					class="flex flex-col gap-1 rounded-lg border border-border bg-background hover:border-primary hover:bg-surface transition-colors p-4 group"
				>
					<span class="flex items-center gap-2 font-semibold text-text-primary">
						<info.icon class="w-5 h-5 text-primary" />
						{info.label()}
						<IconDownload class="w-4 h-4 ml-auto text-text-tertiary group-hover:text-primary" />
					</span>
					<span class="text-xs text-text-tertiary">{info.hint()}</span>
					<span class="text-xs text-text-tertiary"
						>{m.downloads_bundle_caption({ count: downloads.templates.length })}</span
					>
				</a>
			{/each}
		</div>

		<details class="mt-6 group">
			<summary
				class="cursor-pointer text-sm font-medium text-text-primary hover:text-primary list-none flex items-center gap-2"
			>
				<IconChevronRight class="w-4 h-4 transition-transform group-open:rotate-90" />
				{m.downloads_toggle_single()}
			</summary>
			<div class="mt-4 space-y-4 pl-2">
				{#each [...new Set(downloads.templates.map((t) => t.layer))] as layer (layer)}
					<div>
						<h3 class="text-sm font-semibold text-text-primary uppercase tracking-wide mb-2">
							{m.downloads_layer_label({ layer: layer.replace(/^layer-/, '') })}
						</h3>
						<ul class="space-y-1.5">
							{#each downloads.templates.filter((t) => t.layer === layer) as t (t.id)}
								<li class="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
									<a
										href={localized(`/articles/${t.slug}`, locale)}
										class="text-text-primary hover:text-primary font-medium"
									>
										{t.title}
									</a>
									{#if !t.isTranslated && locale !== DEFAULT_LOCALE}
										<span
											class="text-[10px] uppercase tracking-wide text-text-tertiary"
											title={m.downloads_template_fallback_tooltip()}
										>
											{m.language_switcher_fallback_badge()}
										</span>
									{/if}
									<span class="flex items-center gap-2 text-xs text-text-tertiary">
										{#each downloads.formats as fmt (fmt)}
											<a
												href={t.files[fmt]}
												download
												class="hover:text-primary underline-offset-2 hover:underline"
												title={m.downloads_format_download_as({
													title: t.title,
													format: FORMAT_INFO[fmt].label()
												})}>{fmt}</a
											>
										{/each}
									</span>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</details>
	</section>
{:else if downloads.type === 'single'}
	<section
		class="not-prose rounded-xl border border-border bg-surface/50 p-5 my-6 flex flex-col sm:flex-row sm:items-center gap-4 justify-between"
	>
		<div class="space-y-1">
			<h2 class="text-base font-semibold text-text-primary flex items-center gap-2">
				<IconDownload class="w-5 h-5 text-primary" />
				{m.downloads_heading_single()}
			</h2>
			<p class="text-xs text-text-tertiary">
				{m.downloads_generated_inline({ date: downloads.generated })}
				<a
					href={localized('/articles/rcos-templates#downloads', locale)}
					class="text-primary hover:underline"
				>
					{m.downloads_all_link()}
				</a>
			</p>
			{#if downloads.isFallback}
				<p class="text-xs text-text-secondary">
					{m.downloads_template_fallback_inline({ served: servedLocaleName })}
				</p>
			{/if}
		</div>
		<div class="flex flex-wrap gap-2">
			{#each downloads.formats as fmt (fmt)}
				{@const info = FORMAT_INFO[fmt]}
				<a
					href={downloads.files[fmt]}
					download
					title={info.hint()}
					class="inline-flex items-center gap-1.5 rounded-md border border-border bg-background hover:border-primary hover:bg-surface transition-colors px-3 py-1.5 text-sm font-medium text-text-primary"
				>
					<info.icon class="w-4 h-4 text-primary" />
					{info.label()}
				</a>
			{/each}
		</div>
	</section>
{:else if downloads.type === 'spec'}
	<section
		class="not-prose rounded-xl border border-border bg-surface/50 p-5 my-6 flex flex-col sm:flex-row sm:items-center gap-4 justify-between"
	>
		<div class="space-y-1">
			<h2 class="text-base font-semibold text-text-primary flex items-center gap-2">
				<IconFileDownload class="w-5 h-5 text-primary" />
				{m.downloads_heading_spec()}
			</h2>
			<p class="text-xs text-text-tertiary">
				{m.downloads_spec_intro({ date: downloads.generated })}
			</p>
			{#if downloads.isFallback}
				<p class="text-xs text-text-secondary">
					{m.downloads_template_fallback_inline({ served: servedLocaleName })}
				</p>
			{/if}
		</div>
		<div class="flex flex-wrap gap-2">
			{#each downloads.formats as fmt (fmt)}
				{@const info = FORMAT_INFO[fmt]}
				<a
					href={downloads.files[fmt]}
					download
					title={info.hint()}
					class="inline-flex items-center gap-1.5 rounded-md border border-border bg-background hover:border-primary hover:bg-surface transition-colors px-3 py-1.5 text-sm font-medium text-text-primary"
				>
					<info.icon class="w-4 h-4 text-primary" />
					{info.label()}
				</a>
			{/each}
		</div>
	</section>
{/if}
