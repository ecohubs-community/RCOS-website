<script lang="ts">
	import type { ClassValue } from 'svelte/elements';

	interface Props {
		n: number;
		size?: 'xs' | 'sm' | 'md';
		class?: ClassValue;
	}

	let { n, size = 'sm', class: className }: Props = $props();

	// Full class names, so Tailwind finds them when it scans this file.
	const FILL = [
		'bg-layer-0 text-layer-ink-0',
		'bg-layer-1 text-layer-ink-1',
		'bg-layer-2 text-layer-ink-2',
		'bg-layer-3 text-layer-ink-3',
		'bg-layer-4 text-layer-ink-4',
		'bg-layer-5 text-layer-ink-5',
		'bg-layer-6 text-layer-ink-6'
	];
	const SIZE = {
		xs: 'size-5 rounded-[5px] text-[11px]',
		sm: 'size-7 rounded-md text-[13px]',
		md: 'size-8 rounded-lg text-sm'
	};
</script>

<!-- The ring is transparent in light mode and an outline in dark mode, so the
     darkest layers stay visible on dark paper. -->
<span
	class={[
		'inline-flex shrink-0 items-center justify-center font-mono font-bold ring-1 ring-chip-ring',
		FILL[n],
		SIZE[size],
		className
	]}
	aria-hidden="true">{n}</span
>
