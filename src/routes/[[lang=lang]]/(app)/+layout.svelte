<script lang="ts">
	import './layout.css';
	import { onMount } from 'svelte';
	import { graph } from '$lib/stores/graph';
	import { sidebarOpen, initTheme } from '$lib/stores/ui';
	import AppShell from '$lib/components/layout/AppShell.svelte';

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

<AppShell>
	{@render children()}
</AppShell>
