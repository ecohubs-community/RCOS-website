<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import SEO from '$lib/components/seo/SEO.svelte';
	import MarkdownPageView from '$lib/components/site/MarkdownPageView.svelte';
	import { localized } from '$lib/i18n/path';

	let { data } = $props();
</script>

<SEO
	title={data.page.title}
	description={data.page.summary ?? ''}
	url={data.path}
	type="article"
	locale={data.locale}
/>

<MarkdownPageView
	page={data.page}
	locale={data.locale}
	crumbs={[
		{ label: m.mega_safeguards(), href: localized('/safeguards', data.locale) },
		{ label: data.page.title }
	]}
/>
