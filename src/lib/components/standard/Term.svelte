<script lang="ts">
	import { getContext } from 'svelte';
	import type { StandardPage } from '$lib/server/standard';

	/**
	 * A glossary term in rule text. Phase 3.3 turns this into a popover with the
	 * definition; for now the definition is the native tooltip.
	 */
	let { key, text }: { key: string; text: string } = $props();
	const terms = getContext<() => StandardPage['terms']>('standard-terms');
	const definition = $derived(terms?.()[key]);
</script>

<span
	class="cursor-help underline decoration-clay-500 decoration-dotted decoration-[1.5px] underline-offset-4"
	title={definition
		? `${definition.term}: ${definition.definitionHtml.replace(/<[^>]+>/g, '')}`
		: undefined}>{text}</span
>
