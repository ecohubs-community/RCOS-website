<script lang="ts">
	import './layout.css';
	import { onMount } from 'svelte';
	import { graph } from '$lib/stores/graph';
	import { sidebarOpen, initTheme } from '$lib/stores/ui';
	import AppShell from '$lib/components/layout/AppShell.svelte';
	// The two font files nearly every page needs: body text and headings.
	import textFont from '@fontsource-variable/stack-sans-text/files/stack-sans-text-latin-wght-normal.woff2?url';
	import pridiBold from '@fontsource/pridi/files/pridi-latin-700-normal.woff2?url';

	let { children, data } = $props();

	// Initialize graph store from server data
	$effect(() => {
		if (data.graph) {
			graph.set(data.graph);
		}
	});

	// Theme: saved choice, else system setting (app.html already applied it pre-paint)
	onMount(() => initTheme());

	// Persist sidebar state on mobile
	$effect(() => {
		if (typeof window !== 'undefined') {
			if ($sidebarOpen) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = '';
			}
		}
	});
</script>

<svelte:head>
	<link rel="preload" href={textFont} as="font" type="font/woff2" crossorigin="anonymous" />
	<link rel="preload" href={pridiBold} as="font" type="font/woff2" crossorigin="anonymous" />
</svelte:head>

<AppShell>
	{@render children()}
</AppShell>
