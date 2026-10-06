<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import SEO from '$lib/components/seo/SEO.svelte';
	import { buildPageLd } from '$lib/utils/jsonld';
	import MarkdownPageView from '$lib/components/site/MarkdownPageView.svelte';
	import { localized } from '$lib/i18n/path';

	let { data } = $props();

	const crumbs = $derived([
		{ label: m.mega_safeguards(), href: localized('/safeguards', data.locale) },
		{ label: data.page.title }
	]);
	const jsonLd = $derived(
		buildPageLd({
			title: data.page.title,
			description: data.page.summary ?? data.page.excerpt,
			path: data.path,
			inLanguage: data.page.lang,
			datePublished: data.page.datePublished,
			dateModified: data.page.dateModified,
			locale: data.locale,
			crumbs
		})
	);
</script>

<SEO
	title={data.page.title}
	description={data.page.summary ?? data.page.excerpt}
	url={data.path}
	type="article"
	locale={data.locale}
	{jsonLd}
/>

<MarkdownPageView page={data.page} locale={data.locale} {crumbs} />
