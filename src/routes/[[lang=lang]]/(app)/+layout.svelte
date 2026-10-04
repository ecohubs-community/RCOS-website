<script lang="ts">
	import './layout.css';
	import { onMount } from 'svelte';
	import { initTheme } from '$lib/stores/ui';
	import SiteHeader from '$lib/components/shell/SiteHeader.svelte';
	import SiteFooter from '$lib/components/shell/SiteFooter.svelte';
	import Analytics from '$lib/components/consent/Analytics.svelte';
	import ConsentBanner from '$lib/components/consent/ConsentBanner.svelte';
	// The two font files nearly every page needs: body text and headings.
	import textFont from '@fontsource-variable/stack-sans-text/files/stack-sans-text-latin-wght-normal.woff2?url';
	import pridiBold from '@fontsource/pridi/files/pridi-latin-700-normal.woff2?url';

	let { children } = $props();

	// Theme: saved choice, else system setting (app.html already applied it pre-paint)
	onMount(() => initTheme());
</script>

<svelte:head>
	<link rel="preload" href={textFont} as="font" type="font/woff2" crossorigin="anonymous" />
	<link rel="preload" href={pridiBold} as="font" type="font/woff2" crossorigin="anonymous" />
</svelte:head>

<div class="flex min-h-screen flex-col bg-paper text-ink">
	<SiteHeader />
	<main id="main" class="flex min-w-0 flex-1 flex-col">
		{@render children()}
	</main>
	<SiteFooter />
</div>

<Analytics />
<ConsentBanner />
