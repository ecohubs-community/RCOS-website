<script lang="ts">
	import { Accordion, Dialog } from 'bits-ui';
	import { afterNavigate } from '$app/navigation';
	import { m } from '$lib/paraglide/messages.js';
	import { getLocale } from '$lib/paraglide/runtime.js';
	import { localized } from '$lib/i18n/path';
	import {
		ABOUT_ECOHUBS_HREF,
		LAYERS,
		MODULES,
		REFERENCE,
		STANDARD_HREF,
		START_HERE,
		TOOLKIT
	} from '$lib/nav/site-nav';
	import LayerChip from '$lib/components/ui/LayerChip.svelte';
	import HeaderSearch from './HeaderSearch.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import LanguageSwitcher from '$lib/components/i18n/LanguageSwitcher.svelte';
	import IconMenu2 from '~icons/tabler/menu-2';
	import IconX from '~icons/tabler/x';
	import IconPlus from '~icons/tabler/plus';
	import IconBook2 from '~icons/tabler/book-2';
	import IconArrowUpRight from '~icons/tabler/arrow-up-right';

	let { availableLocales }: { availableLocales?: string[] } = $props();

	let open = $state(false);
	const href = (path: string) => localized(path, getLocale());

	afterNavigate(() => (open = false));

	const sectionTrigger =
		'group flex min-h-14 w-full items-center justify-between border-b border-line px-5 text-left font-ui text-[17px] font-semibold text-ink';
	const sectionBody = 'flex flex-col border-b border-line bg-card px-5 pt-2 pb-4';
	const groupTitle =
		'pt-3 pb-1 font-ui text-xs font-semibold tracking-[0.06em] text-ink-faint uppercase';
	const pill =
		'rounded-full bg-hover px-2.5 py-1.5 font-ui text-[13px] font-medium text-accent-ink';
</script>

<Dialog.Root bind:open>
	<Dialog.Trigger
		aria-label={m.nav_open_menu()}
		class="inline-flex size-11 items-center justify-center rounded-lg border border-line bg-card text-ink"
	>
		<IconMenu2 class="size-5.5" />
	</Dialog.Trigger>
	<Dialog.Portal>
		<Dialog.Overlay class="fixed inset-0 z-(--z-overlay) bg-forest-900/35" />
		<Dialog.Content
			class="fixed inset-y-0 right-0 z-(--z-drawer) flex w-full max-w-100 flex-col overflow-y-auto bg-paper shadow-sheet"
		>
			<div
				class="sticky top-0 z-1 flex items-center justify-between border-b border-line bg-paper px-4 py-3"
			>
				<Dialog.Title class="font-serif text-lg font-bold text-ink">{m.nav_menu()}</Dialog.Title>
				<Dialog.Close
					aria-label={m.nav_close_menu()}
					class="inline-flex size-11 items-center justify-center rounded-lg text-ink hover:bg-selected"
				>
					<IconX class="size-5.5" />
				</Dialog.Close>
			</div>

			<div class="flex flex-col gap-3 p-4">
				<HeaderSearch variant="drawer" />
				<a
					href={href(STANDARD_HREF)}
					class="flex h-12 items-center justify-center gap-2 rounded-xl bg-brand font-ui text-[15px] font-semibold text-brand-ink"
				>
					<IconBook2 class="size-4.5" />
					{m.nav_open_standard()}
				</a>
			</div>

			<Accordion.Root type="single" class="border-t border-line">
				<Accordion.Item value="standard">
					<Accordion.Header>
						<Accordion.Trigger class={sectionTrigger}>
							{m.nav_standard()}
							<IconPlus class="size-4.5 transition-transform group-data-[state=open]:rotate-45" />
						</Accordion.Trigger>
					</Accordion.Header>
					<Accordion.Content class={sectionBody}>
						<p class={groupTitle}>{m.mega_start_here()}</p>
						{#each START_HERE as item (item.href)}
							<a
								href={href(item.href)}
								class="flex min-h-10 items-center gap-2.5 text-[15px] text-ink"
							>
								<span class="w-5.5 font-mono text-xs text-forest-600">{item.num}</span
								>{item.label()}
							</a>
						{/each}
						<p class={groupTitle}>{m.mega_seven_layers()}</p>
						{#each LAYERS as layer (layer.n)}
							<a
								href={href(layer.rules)}
								class="flex min-h-10 items-center gap-2.5 text-[15px] text-ink"
							>
								<span class="w-5.5 font-mono text-xs text-forest-600">{layer.n + 2}</span>
								{m.layer_label({ n: layer.n })} — {layer.name()}
							</a>
						{/each}
						<p class={groupTitle}>{m.mega_modules()} · {m.mega_optional()}</p>
						{#each MODULES as mod (mod.href)}
							<a
								href={href(mod.href)}
								class="flex min-h-10 items-center gap-2.5 text-[15px] text-ink"
							>
								<span class="w-5.5 font-mono text-xs text-clay-600">+</span>{mod.label()}
							</a>
						{/each}
						<p class={groupTitle}>{m.mega_reference()}</p>
						{#each REFERENCE as item (item.href)}
							<a
								href={href(item.href)}
								class="flex min-h-10 items-center gap-2.5 text-[15px] text-ink"
							>
								<span class="w-5.5 font-mono text-xs text-forest-600">{item.num}</span
								>{item.label()}
							</a>
						{/each}
					</Accordion.Content>
				</Accordion.Item>

				<Accordion.Item value="layers">
					<Accordion.Header>
						<Accordion.Trigger class={sectionTrigger}>
							{m.nav_layers()}
							<IconPlus class="size-4.5 transition-transform group-data-[state=open]:rotate-45" />
						</Accordion.Trigger>
					</Accordion.Header>
					<Accordion.Content class={sectionBody}>
						{#each [...LAYERS].reverse() as layer (layer.n)}
							<div class="flex flex-col gap-1 border-b border-line-soft py-2.5 last:border-b-0">
								<span class="flex items-center gap-2.5">
									<LayerChip n={layer.n} size="xs" class="size-6 text-xs" />
									<span class="font-ui text-[15px] font-semibold text-ink">{layer.name()}</span>
								</span>
								<span class="flex gap-1.5 pl-8.5">
									<a href={href(layer.guide)} class={pill}>{m.mega_col_guide()}</a>
									<a href={href(layer.rules)} class={pill}>{m.mega_col_rules()} {layer.sec}</a>
									<a href={href(layer.templates)} class={pill}>{m.mega_col_templates()}</a>
								</span>
							</div>
						{/each}
					</Accordion.Content>
				</Accordion.Item>

				<Accordion.Item value="toolkit">
					<Accordion.Header>
						<Accordion.Trigger class={sectionTrigger}>
							{m.nav_toolkit()}
							<IconPlus class="size-4.5 transition-transform group-data-[state=open]:rotate-45" />
						</Accordion.Trigger>
					</Accordion.Header>
					<Accordion.Content class={sectionBody}>
						{#each TOOLKIT as group (group.title)}
							<p class={groupTitle}>{group.title()}</p>
							{#each group.items as item (item.href)}
								<a
									href={href(item.href)}
									class="flex min-h-11 items-center gap-3 text-[15px] text-ink"
								>
									{#if item.icon}<item.icon class="size-4.5 text-accent-ink" />{/if}
									{item.label()}
								</a>
							{/each}
						{/each}
					</Accordion.Content>
				</Accordion.Item>
			</Accordion.Root>

			<div class="flex flex-col gap-1 px-5 pt-4 pb-8 text-[15px]">
				<a href={ABOUT_ECOHUBS_HREF} class="flex min-h-11 items-center gap-1.5 text-ink">
					{m.nav_about_ecohubs()}
					<IconArrowUpRight class="size-4" />
				</a>
				<div class="flex gap-2 pt-2">
					<LanguageSwitcher {availableLocales} />
					<ThemeToggle withLabel />
				</div>
			</div>
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
