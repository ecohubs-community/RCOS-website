<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import SEO from '$lib/components/seo/SEO.svelte';
	import { buildPageLd } from '$lib/utils/jsonld';
	import MarkdownPageView from '$lib/components/site/MarkdownPageView.svelte';
	import SelfAssessment from '$lib/components/site/SelfAssessment.svelte';
	import { localized } from '$lib/i18n/path';

	let { data } = $props();

	const crumbs = $derived([
		{ label: m.site_toolkit(), href: localized('/toolkit', data.locale) },
		{ label: data.page.title }
	]);
	const jsonLd = $derived(
		buildPageLd({
			title: data.page.title,
			description: data.page.summary ?? data.page.excerpt,
			path: data.path,
			inLanguage: data.page.lang,
			locale: data.locale,
			crumbs
		})
	);
</script>

<SEO
	title={data.page.title}
	description={data.page.summary ?? data.page.excerpt}
	url={data.path}
	locale={data.locale}
	{jsonLd}
/>

<MarkdownPageView page={data.page} locale={data.locale} {crumbs}>
	{#if data.assessment}
		<div class="mt-10"><SelfAssessment assessment={data.assessment} /></div>
	{/if}
</MarkdownPageView>
