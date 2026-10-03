<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import type { NavItem, StandardNav } from '$lib/server/standard';
	import LayerChip from '$lib/components/ui/LayerChip.svelte';
	import ClauseJump from './ClauseJump.svelte';
	import IconBook2 from '~icons/tabler/book-2';
	import IconPlus from '~icons/tabler/plus';

	/**
	 * The standard's contents: start here, the seven layers (the current one
	 * opens to its sections), modules, reference. Used in the sticky desktop
	 * column and inside the mobile drawer.
	 */
	let {
		nav,
		current,
		active = null,
		onnavigate
	}: {
		nav: StandardNav;
		current: string;
		active?: string | null;
		onnavigate?: () => void;
	} = $props();

	const groupTitle =
		'px-2.5 pb-1.5 font-ui text-[11px] font-semibold tracking-[0.08em] text-ink-faint uppercase';
	const isCurrent = (item: NavItem) => item.path === current;
</script>

<div class="flex flex-col gap-4.5">
	<div class="flex flex-col gap-2.5">
		<span
			class="flex h-10.5 items-center gap-2 rounded-xl border border-line bg-hover px-3 text-heading"
		>
			<IconBook2 class="size-4.5 text-accent-ink" />
			<span class="font-ui text-[13px] font-semibold">{m.std_version_label()}</span>
			<span
				class="rounded bg-clay-200 px-1.5 py-px font-ui text-[10.5px] font-bold tracking-[0.06em] text-clay-900 uppercase"
				>{m.std_draft()}</span
			>
		</span>
		<ClauseJump anchors={nav.anchors} {onnavigate} />
	</div>

	<nav aria-label={m.std_contents()} class="flex flex-col gap-4 text-sm">
		<div class="flex flex-col gap-px">
			<p class={groupTitle}>{m.mega_start_here()}</p>
			{#each nav.start as item (item.path)}
				<a
					href={item.path}
					onclick={onnavigate}
					aria-current={isCurrent(item) ? 'page' : undefined}
					class="flex gap-2.5 rounded-lg px-2.5 py-1.5 leading-snug text-ink-2 hover:bg-hover hover:text-heading aria-[current=page]:bg-selected aria-[current=page]:font-semibold aria-[current=page]:text-heading"
				>
					<span class="w-4.5 shrink-0 pt-px font-mono text-xs text-forest-600"
						>{item.number ?? '→'}</span
					>
					<span>{item.title}</span>
				</a>
			{/each}
		</div>

		<div class="flex flex-col gap-px">
			<p class={groupTitle}>{m.mega_seven_layers()}</p>
			{#each nav.layers as item (item.path)}
				<a
					href={item.path}
					onclick={onnavigate}
					aria-current={isCurrent(item) ? 'page' : undefined}
					class="flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 leading-snug text-ink-2 hover:bg-hover hover:text-heading aria-[current=page]:bg-selected aria-[current=page]:font-semibold aria-[current=page]:text-heading"
				>
					<LayerChip n={item.layer ?? 0} size="xs" />
					<span class="min-w-0 flex-1">{item.title}</span>
					<span class="font-mono text-[11px] text-ink-faint">§{item.number}</span>
				</a>
				{#if isCurrent(item) && item.sections.length}
					<div class="my-0.5 mb-1.5 ml-5 flex flex-col border-l-2 border-line-soft pl-2.5">
						{#each item.sections as s (s.id)}
							<a
								href="#{s.id}"
								onclick={onnavigate}
								aria-current={active === s.id ? 'location' : undefined}
								class="-ml-3 flex gap-2 border-l-2 border-transparent py-1 pr-2.5 pl-2.5 text-[13.5px] leading-snug text-ink-muted hover:text-heading aria-[current=location]:border-accent-ink aria-[current=location]:font-semibold aria-[current=location]:text-heading"
							>
								<span class="w-6 shrink-0 pt-px font-mono text-[11.5px] text-forest-600"
									>{s.ref}</span
								>
								<span>{s.title}</span>
							</a>
						{/each}
					</div>
				{/if}
			{/each}
		</div>

		<div class="flex flex-col gap-1">
			<p class="{groupTitle} flex items-center gap-1.5">
				{m.mega_modules()}
				<span
					class="rounded-full bg-clay-200 px-1.5 text-[10.5px] tracking-normal text-clay-900 normal-case"
					>{m.mega_optional()}</span
				>
			</p>
			{#each nav.modules as item (item.path)}
				<a
					href={item.path}
					onclick={onnavigate}
					aria-current={current.startsWith(item.path) ? 'page' : undefined}
					class="flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 leading-snug text-guide-ink hover:bg-guide aria-[current=page]:bg-guide aria-[current=page]:font-semibold"
				>
					<span
						class="inline-flex size-5 shrink-0 items-center justify-center rounded-full border-[1.5px] border-dashed border-clay-500 text-clay-800"
						><IconPlus class="size-2.75" /></span
					>
					{item.title}
				</a>
			{/each}
		</div>

		<div class="flex flex-col gap-px">
			<p class={groupTitle}>{m.mega_reference()}</p>
			{#each nav.reference as item (item.path)}
				<a
					href={item.path}
					onclick={onnavigate}
					aria-current={isCurrent(item) ? 'page' : undefined}
					class="flex gap-2.5 rounded-lg px-2.5 py-1.25 leading-snug text-ink-2 hover:bg-hover hover:text-heading aria-[current=page]:bg-selected aria-[current=page]:font-semibold aria-[current=page]:text-heading"
				>
					<span class="w-4.5 shrink-0 pt-px font-mono text-xs text-forest-600">{item.number}</span>
					<span>{item.title}</span>
				</a>
			{/each}
		</div>
	</nav>
</div>
