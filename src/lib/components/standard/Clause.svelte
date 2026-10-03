<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import type { RenderedPart } from '$lib/server/standard';
	import ClauseText from './ClauseText.svelte';
	import IconLink from '~icons/tabler/link';
	import IconCheck from '~icons/tabler/check';

	let { ref, parts, items }: { ref: string; parts: RenderedPart[]; items: RenderedPart[][] } =
		$props();

	let copied = $state(false);

	// Exception to the no-DOM-API rule: the clipboard has no declarative form.
	async function copyLink() {
		const url = new URL(`#${ref}`, location.href).href;
		try {
			await navigator.clipboard.writeText(url);
			copied = true;
			setTimeout(() => (copied = false), 1500);
		} catch {
			location.hash = ref;
		}
	}
</script>

<li
	id={ref}
	class="group/clause -mx-2.5 grid scroll-mt-(--scroll-offset) grid-cols-[3.75rem_minmax(0,1fr)_2rem] gap-x-2.5 rounded-xl px-2.5 py-2.5 hover:bg-hover target:bg-kw-must target:ring-1 target:ring-forest-300"
>
	<a
		href="#{ref}"
		class="pt-0.5 font-mono text-[13px] font-semibold text-accent-ink hover:underline">{ref}</a
	>
	<div class="flex min-w-0 flex-col gap-2">
		<p class="text-[16.5px] leading-relaxed text-pretty text-ink"><ClauseText {parts} /></p>
		{#if items.length}
			<ul class="flex flex-col gap-1.5 pl-0.5">
				{#each items as item, i (i)}
					<li class="flex gap-2.5 text-base leading-normal text-ink-2">
						<span class="mt-2.5 size-1.5 shrink-0 rounded-full bg-forest-400"></span>
						<span><ClauseText parts={item} /></span>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
	<button
		type="button"
		onclick={copyLink}
		aria-label={copied ? m.std_link_copied() : m.std_copy_link({ ref })}
		title={copied ? m.std_link_copied() : m.std_copy_link({ ref })}
		class="inline-flex size-7.5 items-center justify-center rounded-md text-ink-faint opacity-0 group-hover/clause:opacity-100 hover:bg-selected hover:text-accent-ink focus-visible:opacity-100"
	>
		{#if copied}<IconCheck class="size-4" />{:else}<IconLink class="size-4" />{/if}
	</button>
	<span class="sr-only" aria-live="polite">{copied ? m.std_link_copied() : ''}</span>
</li>
