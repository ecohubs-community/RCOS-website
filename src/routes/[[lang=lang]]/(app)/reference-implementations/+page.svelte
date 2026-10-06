<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import SEO from '$lib/components/seo/SEO.svelte';
	import { buildPageLd } from '$lib/utils/jsonld';
	import MarkdownPageView from '$lib/components/site/MarkdownPageView.svelte';
	import { localized } from '$lib/i18n/path';

	let { data } = $props();

	const crumbs = $derived([
		{ label: m.site_library(), href: localized('/library', data.locale) },
		{ label: data.page.title }
	]);
	const jsonLd = $derived(
		buildPageLd({
			title: data.page.title,
			description: data.page.summary ?? m.mega_refimpl_desc(),
			path: '/reference-implementations',
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
	description={data.page.summary ?? m.mega_refimpl_desc()}
	url="/reference-implementations"
	locale={data.locale}
	{jsonLd}
/>

<MarkdownPageView page={data.page} locale={data.locale} {crumbs} />
