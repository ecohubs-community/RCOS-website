<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import { getLocale } from '$lib/paraglide/runtime.js';
	import { localized } from '$lib/i18n/path';
	import IconSearch from '~icons/tabler/search';

	/**
	 * A plain GET form to the search page, so search works without JavaScript.
	 * Phase 6 replaces this with a ⌘K palette over a YAML-built index.
	 */
	let { variant = 'header' }: { variant?: 'header' | 'drawer' } = $props();

	let input: HTMLInputElement | undefined = $state();

	function onkeydown(e: KeyboardEvent) {
		if (variant === 'header' && (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
			e.preventDefault();
			input?.focus();
		}
	}
</script>

<svelte:window {onkeydown} />

<form
	method="GET"
	action={localized('/search', getLocale())}
	role="search"
	class={[
		'flex items-center gap-2 rounded-full bg-paper-2 pr-2.5 pl-3.5 text-ink-faint',
		variant === 'header' ? 'h-10 w-56' : 'h-11.5 w-full'
	]}
>
	<IconSearch class="size-4.5 shrink-0" aria-hidden="true" />
	<input
		bind:this={input}
		type="search"
		name="q"
		placeholder={m.nav_search_placeholder()}
		aria-label={m.nav_search_button()}
		class={[
			'min-w-0 flex-1 border-0 bg-transparent p-0 text-ink placeholder:text-ink-faint focus:ring-0 focus:outline-none',
			variant === 'header' ? 'text-sm' : 'text-base'
		]}
	/>
	{#if variant === 'header'}
		<kbd class="rounded-md border border-line bg-card px-1.5 font-mono text-[11px] text-ink-faint"
			>⌘K</kbd
		>
	{/if}
</form>
