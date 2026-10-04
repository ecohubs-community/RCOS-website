<script lang="ts">
	import { NavigationMenu } from 'bits-ui';
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages.js';
	import { getLocale } from '$lib/paraglide/runtime.js';
	import { localized } from '$lib/i18n/path';
	import { ABOUT_ECOHUBS_HREF, STANDARD_HREF } from '$lib/nav/site-nav';
	import logo from '$lib/assets/logo.webp';
	import LanguageSwitcher from '$lib/components/i18n/LanguageSwitcher.svelte';
	import MegaStandard from './MegaStandard.svelte';
	import MegaLayers from './MegaLayers.svelte';
	import MegaToolkit from './MegaToolkit.svelte';
	import HeaderSearch from './HeaderSearch.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import MobileDrawer from './MobileDrawer.svelte';
	import IconChevronDown from '~icons/tabler/chevron-down';
	import IconArrowUpRight from '~icons/tabler/arrow-up-right';
	import IconBook2 from '~icons/tabler/book-2';

	const availableLocales = $derived(page.data.availableLocales as string[] | undefined);
	const href = (path: string) => localized(path, getLocale());

	/** The open mega menu ('' when closed); drives the page backdrop. */
	let openMenu = $state('');

	const menus = [
		{ value: 'standard', label: m.nav_standard, panel: MegaStandard },
		{ value: 'layers', label: m.nav_layers, panel: MegaLayers },
		{ value: 'toolkit', label: m.nav_toolkit, panel: MegaToolkit }
	];
</script>

<a
	href="#main"
	class="sr-only z-(--z-popover) rounded-lg bg-brand px-4 py-2 font-ui text-sm font-semibold text-brand-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
	>{m.skip_to_content()}</a
>

<!-- The header and its mega panels share one stacking context above every
     in-page layer (see --z-header), so panels never slide under the sidebar. -->
<header
	class="sticky top-0 z-(--z-header) h-(--header-h) border-b border-line bg-paper/92 backdrop-blur-md"
>
	<div class="mx-auto flex h-full max-w-7xl items-center gap-2 px-4 sm:px-6 lg:px-8">
		<a href={href('/')} class="mr-3 flex shrink-0 items-center gap-2">
			<img src={logo} alt="" width="38" height="38" class="size-9.5" />
			<span class="flex flex-col">
				<span class="font-serif text-[19px] leading-[19px] font-bold tracking-tight text-ink"
					>{m.site_brand()}</span
				>
				<span class="font-ui text-xs font-bold text-ink-faint">{m.site_tagline()}</span>
			</span>
		</a>

		<NavigationMenu.Root bind:value={openMenu} aria-label={m.nav_main()} class="hidden lg:block">
			<NavigationMenu.List class="flex items-center gap-0.5">
				{#each menus as menu (menu.value)}
					<NavigationMenu.Item value={menu.value}>
						<NavigationMenu.Trigger
							class="group inline-flex h-10 items-center gap-1 rounded-lg px-3 font-ui text-[15px] font-medium text-ink hover:bg-selected data-[state=open]:bg-selected"
						>
							{menu.label()}
							<IconChevronDown
								class="size-3.5 opacity-60 transition-transform group-data-[state=open]:rotate-180"
							/>
						</NavigationMenu.Trigger>
						<NavigationMenu.Content class="w-full">
							<menu.panel />
						</NavigationMenu.Content>
					</NavigationMenu.Item>
				{/each}
			</NavigationMenu.List>
			<!-- Full-width panel directly under the header -->
			<NavigationMenu.Viewport
				class="absolute inset-x-0 top-full border-b border-line bg-card shadow-panel data-[state=closed]:hidden"
			/>
		</NavigationMenu.Root>

		<div class="flex-1"></div>

		<div class="hidden 2xl:block"><HeaderSearch /></div>
		<div class="2xl:hidden"><HeaderSearch variant="icon" /></div>

		<div class="hidden items-center gap-0.5 lg:flex">
			<ThemeToggle />
			<LanguageSwitcher {availableLocales} />
			<a
				href={ABOUT_ECOHUBS_HREF}
				class="inline-flex h-10 items-center gap-1 rounded-lg px-2.5 font-ui text-sm font-medium text-ink hover:bg-selected"
			>
				{m.nav_about()}
				<IconArrowUpRight class="size-3.5" />
			</a>
			<a
				href={href(STANDARD_HREF)}
				class="ml-1.5 inline-flex h-10 items-center gap-2 rounded-lg bg-brand px-4 font-ui text-sm font-semibold whitespace-nowrap text-white hover:bg-forest-800"
			>
				<IconBook2 class="size-4.5" />
				{m.nav_cta_standard()}
			</a>
		</div>

		<div class="lg:hidden"><MobileDrawer {availableLocales} /></div>
	</div>
</header>

{#if openMenu}
	<!-- Dims the page under an open mega menu; a click closes it. -->
	<button
		type="button"
		tabindex="-1"
		aria-hidden="true"
		class="fixed inset-x-0 top-(--header-h) bottom-0 z-(--z-backdrop) hidden cursor-default bg-forest-900/12 lg:block"
		onclick={() => (openMenu = '')}
	></button>
{/if}
