<script lang="ts">
	import { Command, Dialog } from 'bits-ui';
	import { goto } from '$app/navigation';
	import { m } from '$lib/paraglide/messages.js';
	import { getLocale } from '$lib/paraglide/runtime.js';
	import { localized } from '$lib/i18n/path';
	import { loadEngine, grouped, type Engine } from '$lib/search/engine';
	import { palette } from './palette.svelte';
	import { KIND_LABEL } from './kinds';
	import IconSearch from '~icons/tabler/search';
	import IconGavel from '~icons/tabler/gavel';
	import IconArrowRight from '~icons/tabler/arrow-right';

	/**
	 * ⌘K search over the YAML-built index. The index loads when the palette first
	 * opens; typing a clause number (2.3.4) offers a direct jump.
	 */
	let query = $state('');
	let engine = $state<Engine | null>(null);
	let failed = $state(false);

	$effect(() => {
		if (!palette.open || engine) return;
		loadEngine(getLocale())
			.then((e) => (engine = e))
			.catch(() => (failed = true));
	});

	const jump = $derived(engine?.jump(query) ?? null);
	const groups = $derived(engine ? grouped(engine.search(query), 6) : []);

	function onkeydown(e: KeyboardEvent) {
		if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
			e.preventDefault();
			palette.open = !palette.open;
		}
	}

	function go(url: string) {
		palette.open = false;
		query = '';
		goto(url);
	}
</script>

<svelte:window {onkeydown} />

<Dialog.Root bind:open={palette.open}>
	<Dialog.Portal>
		<Dialog.Overlay class="fixed inset-0 z-(--z-overlay) bg-forest-900/35" />
		<Dialog.Content
			class="fixed inset-x-3 top-[8vh] z-(--z-drawer) mx-auto max-w-2xl overflow-hidden rounded-2xl border border-line bg-card shadow-pop"
		>
			<Dialog.Title class="sr-only">{m.search_palette_label()}</Dialog.Title>
			<Command.Root shouldFilter={false} loop label={m.search_palette_label()}>
				<div class="flex items-center gap-2.5 border-b border-line px-4">
					<IconSearch class="size-5 shrink-0 text-ink-faint" aria-hidden="true" />
					<Command.Input
						bind:value={query}
						placeholder={m.nav_search_placeholder()}
						class="h-14 min-w-0 flex-1 border-0 bg-transparent p-0 text-base text-ink placeholder:text-ink-faint focus:ring-0 focus:outline-none focus-visible:outline-none"
					/>
					<kbd
						class="hidden rounded-md border border-line px-1.5 font-mono text-[11px] text-ink-faint sm:block"
						>Esc</kbd
					>
				</div>
				<Command.List class="max-h-[min(65vh,34rem)] overflow-y-auto px-2 py-2">
					<Command.Viewport>
						{#if !engine}
							<p class="px-3 py-6 text-center text-sm text-ink-muted">
								{failed ? m.search_no_results() : m.search_loading()}
							</p>
						{:else if !query.trim()}
							<p class="px-3 py-6 text-center text-sm text-ink-muted">{m.search_hint()}</p>
						{:else}
							{#if jump}
								<Command.Group>
									<Command.GroupItems>
										<Command.Item
											value="jump"
											onSelect={() => go(jump.url)}
											class="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 data-selected:bg-selected"
										>
											<IconGavel class="size-4.5 shrink-0 text-accent-ink" />
											<span class="font-ui text-sm font-semibold text-heading"
												>{m.search_jump({ ref: jump.ref ?? '' })}</span
											>
											<span class="truncate text-sm text-ink-muted">{jump.context}</span>
										</Command.Item>
									</Command.GroupItems>
								</Command.Group>
							{/if}
							<Command.Empty class="px-3 py-6 text-center text-sm text-ink-muted"
								>{m.search_no_results()}</Command.Empty
							>
							{#each groups as g (g.kind)}
								<Command.Group class="pt-1">
									<Command.GroupHeading
										class="px-3 pt-2 pb-1 font-ui text-[11px] font-semibold tracking-[0.08em] text-ink-faint uppercase"
									>
										{KIND_LABEL[g.kind]()}
									</Command.GroupHeading>
									<Command.GroupItems>
										{#each g.docs as d (d.id)}
											<Command.Item
												value={d.id}
												onSelect={() => go(d.url)}
												class="flex cursor-pointer flex-col gap-0.5 rounded-xl px-3 py-2 data-selected:bg-selected"
											>
												<span class="flex items-baseline gap-2">
													<span
														class={[
															'font-ui text-sm font-semibold text-heading',
															d.kind === 'clause' && 'font-mono text-accent-ink'
														]}>{d.title}</span
													>
													{#if d.context}<span class="truncate text-xs text-ink-faint"
															>{d.context}</span
														>{/if}
												</span>
												{#if d.text}<span class="line-clamp-1 text-[13px] text-ink-muted"
														>{d.text}</span
													>{/if}
											</Command.Item>
										{/each}
									</Command.GroupItems>
								</Command.Group>
							{/each}
						{/if}
					</Command.Viewport>
				</Command.List>
				{#if query.trim()}
					<a
						href={localized(`/search?q=${encodeURIComponent(query)}`, getLocale())}
						onclick={() => (palette.open = false)}
						class="flex items-center justify-end gap-1.5 border-t border-line px-4 py-2.5 font-ui text-[13px] font-semibold text-accent-ink hover:underline"
						>{m.search_see_all()}<IconArrowRight class="size-3.5" /></a
					>
				{/if}
			</Command.Root>
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
