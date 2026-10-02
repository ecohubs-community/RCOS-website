<script lang="ts">
	import { theme, toggleTheme } from '$lib/stores/ui';
	import { m } from '$lib/paraglide/messages.js';
	import IconSun from '~icons/tabler/sun';
	import IconMoon from '~icons/tabler/moon';
	import IconSunMoon from '~icons/tabler/sun-moon';

	let { withLabel = false }: { withLabel?: boolean } = $props();
</script>

<!-- Shows what a click switches to; a neutral icon until the theme is known. -->
<button
	type="button"
	onclick={toggleTheme}
	aria-label={withLabel ? undefined : m.nav_toggle_theme()}
	class={[
		'inline-flex items-center gap-1.5 rounded-lg text-ink hover:bg-selected',
		withLabel
			? 'h-10 border border-line bg-card px-3 font-ui text-[13px]'
			: 'size-10 justify-center'
	]}
>
	{#if $theme === 'dark'}
		<IconSun class="size-5" />
	{:else if $theme === 'light'}
		<IconMoon class="size-5" />
	{:else}
		<IconSunMoon class="size-5" />
	{/if}
	{#if withLabel}
		{$theme === 'dark' ? m.nav_light_mode() : m.nav_dark_mode()}
	{/if}
</button>
