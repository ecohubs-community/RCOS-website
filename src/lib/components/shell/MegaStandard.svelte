<script lang="ts">
	import { NavigationMenu } from 'bits-ui';
	import { m } from '$lib/paraglide/messages.js';
	import { getLocale } from '$lib/paraglide/runtime.js';
	import { localized } from '$lib/i18n/path';
	import { LAYERS, MODULES, REFERENCE, START_HERE, STANDARD_HREF } from '$lib/nav/site-nav';
	import LayerChip from '$lib/components/ui/LayerChip.svelte';
	import IconArrowRight from '~icons/tabler/arrow-right';

	const href = (path: string) => localized(path, getLocale());
</script>

<div
	class="mx-auto grid max-w-7xl grid-cols-[19rem_minmax(0,1.45fr)_minmax(0,1fr)] gap-9 px-8 pt-6 pb-7"
>
	<div class="relative flex flex-col overflow-hidden rounded-2xl bg-brand p-5 text-brand-ink">
		<div class="dot-grid pointer-events-none absolute inset-0 opacity-20"></div>
		<div class="relative flex flex-col gap-3.5">
			<span
				class="self-start rounded-md bg-brand-accent px-2 py-0.5 font-ui text-[11px] font-semibold tracking-[0.08em] text-forest-900"
				>{m.mega_standard_badge()}</span
			>
			<p class="font-serif text-2xl leading-tight font-semibold text-white">
				{m.mega_standard_title()}
			</p>
			<NavigationMenu.Link
				href={href(STANDARD_HREF)}
				class="inline-flex h-10 items-center gap-2 self-start rounded-lg bg-brand-accent px-4 font-ui text-sm font-semibold text-forest-900 hover:bg-forest-200"
			>
				{m.mega_standard_open()}
				<IconArrowRight class="size-4" />
			</NavigationMenu.Link>
			<div class="flex flex-col gap-0.5 border-t border-white/15 pt-3.5">
				<p
					class="mb-1.5 font-ui text-[11px] font-semibold tracking-[0.08em] text-brand-accent uppercase"
				>
					{m.mega_start_here()}
				</p>
				{#each START_HERE as item (item.href)}
					<NavigationMenu.Link
						href={href(item.href)}
						class="-mx-2 flex items-start gap-3 rounded-xl p-2 text-white hover:bg-white/10"
					>
						<span
							class="inline-flex size-6.5 shrink-0 items-center justify-center rounded-full border-[1.5px] border-forest-400 font-mono text-xs font-bold text-forest-200"
							>{item.num}</span
						>
						<span class="flex min-w-0 flex-col">
							<span class="font-ui text-sm leading-snug font-semibold">{item.label()}</span>
							<span class="text-[12.5px] leading-snug text-brand-accent">{item.desc?.()}</span>
						</span>
					</NavigationMenu.Link>
				{/each}
			</div>
			<p
				class="mt-0.5 border-l-2 border-forest-400 pl-3 font-serif text-[15px] leading-snug text-forest-200"
			>
				“{m.mega_meta_invariant()}”
				<span class="mt-1 block font-ui text-[11px] tracking-[0.04em] text-forest-400 uppercase"
					>{m.mega_meta_invariant_label()}</span
				>
			</p>
		</div>
	</div>

	<div class="flex min-w-0 flex-col">
		<p
			class="mb-2 flex items-baseline gap-2 font-ui text-xs font-semibold tracking-[0.06em] text-ink-faint uppercase"
		>
			{m.mega_seven_layers()}
			<span class="font-medium tracking-normal normal-case">· {m.mega_required_core()}</span>
		</p>
		{#each LAYERS as layer (layer.n)}
			<NavigationMenu.Link
				href={href(layer.rules)}
				class="-mx-2.5 flex items-center gap-3 rounded-xl px-2.5 py-1.5 text-ink hover:bg-hover"
			>
				<LayerChip n={layer.n} />
				<span class="flex min-w-0 flex-1 flex-col">
					<span class="font-ui text-[14.5px] leading-snug font-semibold">{layer.name()}</span>
					<span class="truncate text-[12.5px] leading-snug text-ink-faint">{layer.question()}</span>
				</span>
				<span class="shrink-0 font-mono text-xs text-forest-600">{layer.sec}</span>
			</NavigationMenu.Link>
		{/each}
	</div>

	<div class="flex min-w-0 flex-col gap-5.5">
		<div class="flex flex-col gap-2">
			<p
				class="flex items-center gap-2 font-ui text-xs font-semibold tracking-[0.06em] text-ink-faint uppercase"
			>
				{m.mega_modules()}
				<span
					class="rounded-full bg-clay-200 px-2 py-px text-[11px] font-semibold tracking-normal text-clay-900 normal-case"
					>{m.mega_optional()}</span
				>
			</p>
			{#each MODULES as mod (mod.href)}
				<NavigationMenu.Link
					href={href(mod.href)}
					class="flex items-center gap-3 rounded-xl border-[1.5px] border-dashed border-clay-400 bg-guide px-3 py-2.5 text-guide-ink hover:border-solid hover:border-clay-600"
				>
					<span
						class="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-clay-200 text-clay-800"
					>
						{#if mod.icon}<mod.icon class="size-4.5" />{/if}
					</span>
					<span class="flex min-w-0 flex-col">
						<span class="font-ui text-sm leading-snug font-semibold">{mod.label()}</span>
						<span class="text-[12.5px] leading-snug text-clay-700">{mod.desc?.()}</span>
					</span>
				</NavigationMenu.Link>
			{/each}
		</div>
		<div class="flex flex-col gap-0.5">
			<p class="mb-1.5 font-ui text-xs font-semibold tracking-[0.06em] text-ink-faint uppercase">
				{m.mega_reference()}
			</p>
			{#each REFERENCE as item (item.href)}
				<NavigationMenu.Link
					href={href(item.href)}
					class="-ml-2 flex gap-2.5 rounded-md px-2 py-1 text-sm leading-snug text-ink hover:bg-hover hover:text-accent-ink"
				>
					<span class="w-5.5 shrink-0 pt-px font-mono text-xs text-forest-600">{item.num}</span>
					<span>{item.label()}</span>
				</NavigationMenu.Link>
			{/each}
		</div>
	</div>
</div>
