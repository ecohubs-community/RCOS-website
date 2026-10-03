<script lang="ts">
	import type { RenderedPart } from '$lib/server/standard';
	import { standardContext } from './context';
	import KeywordChip from './KeywordChip.svelte';
	import Term from './Term.svelte';

	let { parts }: { parts: RenderedPart[] } = $props();
	const ctx = standardContext();
</script>

{#each parts as part, i (i)}
	{#if part.t === 'text'}{part.text}{:else if part.t === 'html'}
		<!-- eslint-disable-next-line svelte/no-at-html-tags -- inline markdown of our own content, rendered at build time -->
		{@html part.html}{:else if part.t === 'kw'}<KeywordChip
			text={part.text}
			kind={part.kind}
		/>{:else if part.t === 'layer'}<a
			href={part.href}
			title={ctx().layerTitles[part.n]}
			class="font-medium text-link underline decoration-link-line underline-offset-3 hover:decoration-link"
			>{part.text}</a
		>{:else if part.t === 'term'}<Term key={part.key} text={part.text} />{/if}
{/each}
