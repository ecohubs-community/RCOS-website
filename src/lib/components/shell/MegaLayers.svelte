<script lang="ts">
	import { NavigationMenu } from 'bits-ui';
	import { m } from '$lib/paraglide/messages.js';
	import { getLocale } from '$lib/paraglide/runtime.js';
	import { localized } from '$lib/i18n/path';
	import { LAYERS, LAYERS_INTRO_HREF } from '$lib/nav/site-nav';
	import LayerChip from '$lib/components/ui/LayerChip.svelte';
	import IconArrowRight from '~icons/tabler/arrow-right';

	const href = (path: string) => localized(path, getLocale());
	// Layer 6 on top, as in the ring diagram: the foundation sits at the bottom.
	const layersTopDown = [...LAYERS].reverse();
	const row = 'grid grid-cols-[minmax(0,1fr)_5.5rem_5.5rem_6.25rem] items-center gap-2';
	const cell = 'font-ui text-[13px] font-medium text-accent-ink hover:underline';
</script>

<div class="mx-auto grid max-w-7xl grid-cols-[16.25rem_minmax(0,1fr)] gap-10 px-8 pt-7 pb-8">
	<div class="flex flex-col gap-3 border-r border-line-soft pr-8">
		<p class="font-serif text-[22px] leading-tight font-semibold text-heading">
			{m.mega_layers_title()}
		</p>
		<p class="text-sm text-ink-muted">{m.mega_layers_body()}</p>
		<NavigationMenu.Link
			href={href(LAYERS_INTRO_HREF)}
			class="mt-1 inline-flex items-center gap-1.5 self-start font-ui text-sm font-semibold text-accent-ink"
		>
			{m.mega_layers_what()}
			<IconArrowRight class="size-4" />
		</NavigationMenu.Link>
	</div>
	<div class="flex flex-col">
		<div
			class={[
				row,
				'px-2.5 pb-2 font-ui text-xs font-semibold tracking-[0.06em] text-ink-faint uppercase'
			]}
		>
			<span>{m.mega_col_layer()}</span><span>{m.mega_col_guide()}</span><span
				>{m.mega_col_rules()}</span
			><span>{m.mega_col_templates()}</span>
		</div>
		{#each layersTopDown as layer (layer.n)}
			<div class={[row, 'rounded-lg border-t border-line-soft px-2.5 py-1.5 hover:bg-hover']}>
				<span class="flex min-w-0 items-center gap-2.5">
					<LayerChip n={layer.n} size="xs" class="size-6.5 text-[13px]" />
					<span class="truncate font-ui text-sm font-medium text-ink">{layer.name()}</span>
				</span>
				<NavigationMenu.Link href={href(layer.guide)} class={cell}
					>{m.mega_col_guide()}</NavigationMenu.Link
				>
				<NavigationMenu.Link href={href(layer.rules)} class={[cell, 'font-mono']}
					>{layer.sec}</NavigationMenu.Link
				>
				<NavigationMenu.Link href={href(layer.templates)} class={cell}
					>{m.mega_col_templates()}</NavigationMenu.Link
				>
			</div>
		{/each}
	</div>
</div>
