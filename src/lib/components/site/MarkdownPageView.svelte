<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { MarkdownPage } from '$lib/server/pages';
	import LocaleFallbackBanner from '$lib/components/i18n/LocaleFallbackBanner.svelte';
	import Prose from '$lib/components/ui/Prose.svelte';
	import PageHeader from './PageHeader.svelte';

	/** A page whose copy is markdown (content/pages), with room for more below it. */
	let {
		page,
		locale,
		crumbs,
		children
	}: {
		page: MarkdownPage;
		locale: string;
		crumbs: { label: string; href?: string }[];
		children?: Snippet;
	} = $props();
</script>

<div class="mx-auto w-full max-w-190 px-4 pt-8 pb-20 sm:px-6 lg:pt-12">
	<PageHeader {crumbs} title={page.title} lead={page.summary} />
	{#if page.fallback}
		<div class="mt-6"><LocaleFallbackBanner servedLang={page.lang} requestedLang={locale} /></div>
	{/if}
	<Prose html={page.html} lang={page.lang} class="mt-8 prose-lg" />
	{@render children?.()}
</div>
