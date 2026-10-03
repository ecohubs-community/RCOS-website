<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import SEO from '$lib/components/seo/SEO.svelte';
	import MarkdownPageView from '$lib/components/site/MarkdownPageView.svelte';
	import { localized } from '$lib/i18n/path';

	let { data } = $props();
</script>

<SEO
	title={data.page.title}
	description={data.page.summary ?? m.mega_refimpl_desc()}
	url="/reference-implementations"
	locale={data.locale}
/>

<MarkdownPageView
	page={data.page}
	locale={data.locale}
	crumbs={[
		{ label: m.site_library(), href: localized('/library', data.locale) },
		{ label: data.page.title }
	]}
/>
