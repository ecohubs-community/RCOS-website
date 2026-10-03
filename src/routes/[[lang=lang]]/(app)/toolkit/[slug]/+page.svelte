<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import SEO from '$lib/components/seo/SEO.svelte';
	import MarkdownPageView from '$lib/components/site/MarkdownPageView.svelte';
	import SelfAssessment from '$lib/components/site/SelfAssessment.svelte';
	import { localized } from '$lib/i18n/path';

	let { data } = $props();
</script>

<SEO
	title={data.page.title}
	description={data.page.summary ?? ''}
	url={data.path}
	locale={data.locale}
/>

<MarkdownPageView
	page={data.page}
	locale={data.locale}
	crumbs={[
		{ label: m.site_toolkit(), href: localized('/toolkit', data.locale) },
		{ label: data.page.title }
	]}
>
	{#if data.assessment}
		<div class="mt-10"><SelfAssessment assessment={data.assessment} /></div>
	{/if}
</MarkdownPageView>
