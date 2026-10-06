<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import type { StandardNav } from '$lib/server/standard';
	import LayerChip from '$lib/components/ui/LayerChip.svelte';
	import { toggleRail } from './rail';
	import IconExpand from '~icons/tabler/layout-sidebar-left-expand';
	import IconPlus from '~icons/tabler/plus';

	/** The collapsed contents rail: the seven layers and the modules as icons. */
	let { nav, current }: { nav: StandardNav; current: string } = $props();
</script>

<div class="flex flex-col items-center gap-1.5">
	<button
		type="button"
		onclick={toggleRail}
		aria-expanded="false"
		aria-label={m.std_expand()}
		title="{m.std_expand()}  ["
		class="mb-2 inline-flex size-9.5 items-center justify-center rounded-[9px] border border-line bg-card text-ink-2 hover:border-forest-300 hover:text-heading"
	>
		<IconExpand class="size-4.5" />
	</button>
	{#each nav.layers as item (item.path)}
		<a
			href={item.path}
			title="{item.number && `§${item.number} · `}{item.title}"
			aria-current={item.path === current ? 'page' : undefined}
			class="rounded-lg ring-forest-400 ring-offset-2 ring-offset-paper hover:scale-108 aria-[current=page]:ring-2"
		>
			<LayerChip n={item.layer ?? 0} class="size-8 rounded-lg" />
			<span class="sr-only">{item.title}</span>
		</a>
	{/each}
	<span class="my-1.5 h-px w-5 bg-line"></span>
	{#each nav.modules as item (item.path)}
		<a
			href={item.path}
			title={item.title}
			aria-current={item.path === current ? 'page' : undefined}
			data-open={current.startsWith(item.root ?? item.path) || undefined}
			class="inline-flex size-8 items-center justify-center rounded-full border-[1.5px] border-dashed border-clay-500 text-clay-800 hover:border-solid data-open:border-solid"
		>
			<IconPlus class="size-3.75" />
			<span class="sr-only">{item.title}</span>
		</a>
	{/each}
</div>
