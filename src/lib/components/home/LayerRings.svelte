<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import { LAYERS } from '$lib/nav/site-nav';
	import { localized } from '$lib/i18n/path';
	import IconBook2 from '~icons/tabler/book-2';
	import IconFilePencil from '~icons/tabler/file-pencil';
	import IconX from '~icons/tabler/x';

	/**
	 * The seven layers as nested rings resting on Layer 0: an outer layer can
	 * never overrule an inner one. Select a ring for its question and links.
	 */
	let { locale }: { locale: string } = $props();
	let selected = $state<number | null>(null);

	// Geometry from the design: rings share their bottom point.
	const RAD = [54, 80, 106, 132, 158, 184, 210];
	const BOTTOM = 430;
	const labelY = (n: number) => (n === 0 ? BOTTOM - RAD[0] : BOTTOM - RAD[n] - RAD[n - 1] + 7);
	// Full class names so Tailwind finds them.
	const FILL = [
		'fill-layer-0',
		'fill-layer-1',
		'fill-layer-2',
		'fill-layer-3',
		'fill-layer-4',
		'fill-layer-5',
		'fill-layer-6'
	];
	const INK = [
		'fill-layer-ink-0',
		'fill-layer-ink-1',
		'fill-layer-ink-2',
		'fill-layer-ink-3',
		'fill-layer-ink-4',
		'fill-layer-ink-5',
		'fill-layer-ink-6'
	];
	const CHIP = [
		'bg-layer-0 text-layer-ink-0',
		'bg-layer-1 text-layer-ink-1',
		'bg-layer-2 text-layer-ink-2',
		'bg-layer-3 text-layer-ink-3',
		'bg-layer-4 text-layer-ink-4',
		'bg-layer-5 text-layer-ink-5',
		'bg-layer-6 text-layer-ink-6'
	];
	// Where the card sits, next to the ring's label (percent of the drawing's height):
	// above the label for the inner rings, below it for the outer ones.
	const POP = [
		'md:top-[85.5%] md:-translate-y-[calc(100%+1.4rem)]',
		'md:top-[68.9%] md:-translate-y-[calc(100%+1.4rem)]',
		'md:top-[57%] md:-translate-y-[calc(100%+1.4rem)]',
		'md:top-[45.2%] md:translate-y-[1.4rem]',
		'md:top-[33.4%] md:translate-y-[1.4rem]',
		'md:top-[21.6%] md:translate-y-[1.4rem]',
		'md:top-[9.8%] md:translate-y-[1.4rem]'
	];

	const SHORT = [
		m.layer_short_0,
		m.layer_short_1,
		m.layer_short_2,
		m.layer_short_3,
		m.layer_short_4,
		m.layer_short_5,
		m.layer_short_6
	];

	/** Layer 0's name on two balanced lines, inside the smallest ring. */
	function twoLines(text: string): [string, string] {
		const words = text.split(' ');
		let best: [string, string] = [text, ''];
		let width = Infinity;
		for (let i = 1; i < words.length; i++) {
			const a = words.slice(0, i).join(' ');
			const b = words.slice(i).join(' ');
			if (Math.max(a.length, b.length) < width)
				[best, width] = [[a, b], Math.max(a.length, b.length)];
		}
		return best;
	}
	const zero = $derived(twoLines(SHORT[0]()));

	const toggle = (n: number) => (selected = selected === n ? null : n);
	const layer = $derived(selected === null ? null : LAYERS[selected]);
</script>

<svelte:window onkeydown={(e) => e.key === 'Escape' && (selected = null)} />

<div class="relative mx-auto w-full max-w-140">
	<svg
		viewBox="0 0 440 440"
		role="group"
		aria-label={m.home_rings_aria()}
		class="block h-auto w-full overflow-visible"
	>
		{#each [...LAYERS].reverse() as l (l.n)}
			<circle
				cx="220"
				cy={BOTTOM - RAD[l.n]}
				r={RAD[l.n]}
				role="button"
				tabindex="0"
				aria-label="{m.layer_label({ n: l.n })}: {l.name()}"
				aria-pressed={selected === l.n}
				onclick={() => toggle(l.n)}
				onkeydown={(e) => {
					if (e.key === 'Enter' || e.key === ' ') {
						e.preventDefault();
						toggle(l.n);
					}
				}}
				class={[
					'cursor-pointer stroke-paper stroke-2 outline-none transition-[filter] hover:brightness-110 focus-visible:stroke-clay-600 focus-visible:stroke-4',
					FILL[l.n],
					selected === l.n && 'stroke-clay-600 stroke-4'
				]}
			/>
		{/each}
		<g class="pointer-events-none font-ui text-[13.5px] font-semibold">
			{#each LAYERS.filter((l) => l.n > 0) as l (l.n)}
				<text
					x="220"
					y={labelY(l.n)}
					text-anchor="middle"
					dominant-baseline="middle"
					class={[INK[l.n], selected === l.n && 'underline']}
				>
					<tspan class="font-mono font-bold opacity-75">{l.n}</tspan>&ensp;{SHORT[l.n]()}
				</text>
			{/each}
			<text
				x="220"
				y="362"
				text-anchor="middle"
				dominant-baseline="middle"
				class="fill-layer-ink-0 font-mono text-lg font-bold">0</text
			>
			{#each zero as line, i (i)}
				<text
					x="220"
					y={384 + i * 16}
					text-anchor="middle"
					dominant-baseline="middle"
					class={['fill-layer-ink-0 text-[12.5px]', selected === 0 && 'underline']}>{line}</text
				>
			{/each}
		</g>
	</svg>

	{#if layer}
		<div
			role="dialog"
			aria-label="{m.layer_label({ n: layer.n })}: {layer.name()}"
			class="relative mt-3 flex w-full flex-col gap-2.5 rounded-2xl border border-line bg-card p-5 shadow-pop md:absolute md:left-1/2 md:mt-0 md:w-82.5 md:-translate-x-1/2 {POP[
				layer.n
			]}"
		>
			<div class="flex items-center justify-between gap-3">
				<span class="flex items-center gap-2">
					<span
						class="inline-flex size-7 items-center justify-center rounded-md font-mono text-sm font-bold {CHIP[
							layer.n
						]}">{layer.n}</span
					>
					<span class="font-ui text-xs font-semibold tracking-[0.06em] text-ink-muted uppercase"
						>{m.layer_label({ n: layer.n })} · {layer.sec}</span
					>
				</span>
				<button
					type="button"
					onclick={() => (selected = null)}
					aria-label={m.home_rings_close()}
					class="inline-flex size-8 items-center justify-center rounded-lg bg-paper-2 text-ink-2 hover:bg-selected"
				>
					<IconX class="size-4" />
				</button>
			</div>
			<h3 class="font-serif text-[21px] leading-tight font-semibold text-heading">
				{layer.name()}
			</h3>
			<p class="text-[15px] leading-normal text-ink-2">{layer.question()}</p>
			<div class="flex flex-wrap gap-2 pt-1">
				<a
					href={localized(layer.rules, locale)}
					class="inline-flex h-9.5 items-center gap-1.5 rounded-lg bg-brand px-3.5 font-ui text-sm font-semibold text-white hover:opacity-90"
					><IconBook2 class="size-4" />{m.home_rings_rules()}</a
				>
				<a
					href={localized(layer.guide, locale)}
					class="inline-flex h-9.5 items-center rounded-lg border border-line px-3.5 font-ui text-sm font-medium text-ink hover:border-forest-400"
					>{m.home_rings_guide()}</a
				>
			</div>
			<a
				href={localized(layer.templates, locale)}
				class="inline-flex items-center gap-1.5 self-start font-ui text-[13px] font-medium text-accent-ink hover:underline"
				><IconFilePencil class="size-3.75" />{m.home_rings_templates()}</a
			>
		</div>
	{/if}
</div>
