<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import { getLocale } from '$lib/paraglide/runtime.js';
	import { localized } from '$lib/i18n/path';
	import { palette } from '$lib/components/search/palette.svelte';
	import IconSearch from '~icons/tabler/search';

	/**
	 * Opens the ⌘K palette. Without JavaScript it is a link to the search page,
	 * which then works as a plain form.
	 */
	let {
		variant = 'header',
		onopen
	}: { variant?: 'header' | 'drawer' | 'icon'; onopen?: () => void } = $props();

	function open(e: MouseEvent) {
		e.preventDefault();
		onopen?.();
		palette.open = true;
	}
</script>

<a
	href={localized('/search', getLocale())}
	onclick={open}
	aria-label={m.search_open()}
	aria-haspopup="dialog"
	class={variant === 'icon'
		? 'inline-flex size-10 items-center justify-center rounded-lg text-ink hover:bg-selected'
		: [
				'flex items-center gap-2 rounded-full bg-paper-2 pr-2.5 pl-3.5 text-ink-faint hover:text-ink-muted',
				variant === 'header' ? 'h-10 w-56 text-sm' : 'h-11.5 w-full text-base'
			]}
>
	<IconSearch class={variant === 'icon' ? 'size-5' : 'size-4.5 shrink-0'} aria-hidden="true" />
	{#if variant !== 'icon'}
		<span class="min-w-0 flex-1 truncate">{m.nav_search_placeholder()}</span>
		{#if variant === 'header'}
			<kbd class="rounded-md border border-line bg-card px-1.5 font-mono text-[11px] text-ink-faint"
				>⌘K</kbd
			>
		{/if}
	{/if}
</a>
