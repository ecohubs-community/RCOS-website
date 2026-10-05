<script lang="ts">
	import { page } from '$app/state';
	import { browser } from '$app/environment';
	import IconCheck from '~icons/tabler/check';
	import IconChevronDown from '~icons/tabler/chevron-down';
	import IconWorld from '~icons/tabler/world';
	import { LOCALES, DEFAULT_LOCALE, getLocale, type Locale } from '$lib/i18n/languages';
	import { localizePath } from '$lib/i18n/path';
	import { m } from '$lib/paraglide/messages.js';

	/**
	 * Locales for which the current page has a real translation. Items not in this
	 * list still navigate (with English fallback) but render dimmed with an
	 * "en fallback" badge — an honest signal of in-progress coverage.
	 *
	 * Omit on pages that don't have per-page coverage data; the switcher then
	 * treats every locale as fully translated.
	 *
	 * `inline` (the mobile drawer): the list opens in the flow below the button,
	 * full width, instead of as a dropdown that would leave the drawer.
	 */
	let { availableLocales, inline = false }: { availableLocales?: string[]; inline?: boolean } =
		$props();

	let open = $state(false);
	let buttonEl: HTMLButtonElement | undefined = $state();

	const currentLocale = $derived(page.data.locale ?? DEFAULT_LOCALE);
	const current = $derived(getLocale(currentLocale));

	function targetUrl(target: Locale): string {
		const path = localizePath(page.url.pathname, target.code);
		// search/hash are only meaningful at runtime — during prerender they're
		// inaccessible (and don't matter, since the prerender crawler only follows paths).
		if (!browser) return path;
		return path + page.url.search + page.url.hash;
	}

	function hasTranslation(code: string): boolean {
		if (!availableLocales) return true;
		return availableLocales.includes(code);
	}

	function onSelect(target: Locale) {
		// Year-long cookie so an unprefixed visit (the canonical default URL)
		// remembers the user's last choice. The actual navigation is handled by
		// the underlying <a href>, so middle-click / "open in new tab" still work.
		document.cookie = `lang=${target.code}; path=/; max-age=31536000; samesite=lax`;
		open = false;
	}

	function onKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape' && open) {
			open = false;
			buttonEl?.focus();
		}
	}

	function onDocClick(e: MouseEvent) {
		if (!(e.target as HTMLElement).closest('[data-lang-switcher]')) open = false;
	}

	// Hide the switcher entirely when there's only one locale registered —
	// no UI clutter while we're still in pre-translation phases.
	const hasMultiple = $derived(LOCALES.length > 1);
</script>

<svelte:window onkeydown={onKeydown} onclick={onDocClick} />

{#if hasMultiple}
	<div class={inline ? 'flex w-full flex-col' : 'relative'} data-lang-switcher>
		<button
			bind:this={buttonEl}
			type="button"
			class={[
				'inline-flex items-center gap-1.5 rounded-md text-sm text-ink hover:bg-hover',
				inline ? 'min-h-11 self-start px-3' : 'px-2 py-1.5'
			]}
			aria-haspopup="listbox"
			aria-expanded={open}
			aria-label={m.language_switcher_aria_label({ language: current.englishName })}
			onclick={() => (open = !open)}
		>
			<IconWorld class="size-4" />
			<span class="font-medium uppercase tracking-wide text-xs">{current.code}</span>
			<IconChevronDown class="size-3 opacity-60" />
		</button>

		<!--
		  Always render the list (hidden via class when closed) so the SvelteKit
		  prerender crawler discovers locale-prefixed URLs and prerenders them.
		  A `{#if open}` block would make the <a href>s invisible to SSR.
		-->
		<ul
			role="listbox"
			class={[
				'rounded-md border border-line bg-card py-1',
				inline ? 'mt-1 w-full' : 'absolute right-0 z-(--z-popover) mt-1 min-w-56 shadow-lg',
				!open && 'hidden'
			]}
		>
			{#each LOCALES as locale (locale.code)}
				{@const isCurrent = locale.code === currentLocale}
				{@const translated = hasTranslation(locale.code)}
				<li role="option" aria-selected={isCurrent}>
					<!-- Full page load: messages are compiled per locale and read the
					     locale from the URL when the page loads. -->
					<a
						href={targetUrl(locale)}
						data-sveltekit-reload
						onclick={() => onSelect(locale)}
						class={[
							'flex items-center justify-between gap-3 px-3 py-2 text-sm hover:bg-hover',
							inline && 'min-h-11',
							isCurrent ? 'font-semibold text-accent-ink' : 'text-ink',
							!translated && !isCurrent && 'opacity-60'
						]}
						title={!translated && !isCurrent ? m.language_switcher_fallback_tooltip() : undefined}
					>
						<span class="flex flex-col items-start">
							<span>{locale.nativeName}</span>
							{#if locale.nativeName !== locale.englishName}
								<span class="text-xs text-ink-faint">{locale.englishName}</span>
							{/if}
						</span>
						{#if isCurrent}
							<IconCheck class="size-4 shrink-0 text-accent-ink" />
						{:else if !translated}
							<span class="shrink-0 text-[10px] tracking-wide text-ink-faint uppercase">
								{m.language_switcher_fallback_badge()}
							</span>
						{/if}
					</a>
				</li>
			{/each}
		</ul>
	</div>
{/if}
