<script lang="ts">
	import { page } from '$app/state';
	import { Dialog } from 'bits-ui';
	import { m } from '$lib/paraglide/messages.js';
	import ContentsRail from '$lib/components/standard/ContentsRail.svelte';
	import IconListTree from '~icons/tabler/list-tree';
	import IconChevronDown from '~icons/tabler/chevron-down';
	import IconX from '~icons/tabler/x';

	let { data, children } = $props();
	let drawerOpen = $state(false);

	const current = $derived(page.url.pathname);
	const pageTitle = $derived((page.data as { page?: { title: string } }).page?.title ?? '');
</script>

<!-- Inside the standard: the contents column on desktop, a drawer on small
     screens. Sticky offsets come from --header-h (see theme.css). -->
<div
	class="mx-auto grid w-full max-w-360 flex-1 grid-cols-1 gap-x-12 px-4 [--scroll-offset:calc(var(--header-h)+1.25rem)] sm:px-6 lg:grid-cols-[16.5rem_minmax(0,1fr)] lg:px-8 max-lg:[--scroll-offset:calc(var(--header-h)+4.25rem)]"
>
	<aside
		aria-label={m.std_contents()}
		class="sticky top-(--header-h) hidden max-h-[calc(100dvh-var(--header-h))] overflow-y-auto border-r border-line-soft py-7 pr-4 lg:block"
	>
		<ContentsRail nav={data.nav} {current} />
	</aside>

	<div
		class="sticky top-(--header-h) z-(--z-sticky) -mx-4 border-b border-line bg-paper/95 backdrop-blur-sm sm:-mx-6 lg:hidden"
	>
		<Dialog.Root bind:open={drawerOpen}>
			<Dialog.Trigger
				class="flex min-h-12 w-full items-center gap-2.5 px-4 text-left text-ink sm:px-6"
			>
				<IconListTree class="size-4.5 text-accent-ink" />
				<span class="min-w-0 flex-1 truncate font-ui text-sm font-semibold">{pageTitle}</span>
				<span class="inline-flex items-center gap-1 font-ui text-[13px] text-ink-faint"
					>{m.std_open_contents()}<IconChevronDown class="size-3.5" /></span
				>
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay class="fixed inset-0 z-(--z-overlay) bg-forest-900/35" />
				<Dialog.Content
					class="fixed inset-y-0 left-0 z-(--z-drawer) w-[min(88vw,21.25rem)] overflow-y-auto bg-paper px-4 pt-3 pb-8 shadow-sheet"
				>
					<div class="mb-3 flex items-center justify-between">
						<Dialog.Title class="font-serif text-lg font-bold text-ink"
							>{m.std_contents()}</Dialog.Title
						>
						<Dialog.Close
							aria-label={m.nav_close_menu()}
							class="inline-flex size-11 items-center justify-center rounded-lg text-ink hover:bg-selected"
						>
							<IconX class="size-5" />
						</Dialog.Close>
					</div>
					<ContentsRail nav={data.nav} {current} onnavigate={() => (drawerOpen = false)} />
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	</div>

	<div class="min-w-0">
		{@render children()}
	</div>
</div>
