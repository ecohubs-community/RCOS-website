<script lang="ts">
	import { Popover } from 'bits-ui';
	import { m } from '$lib/paraglide/messages.js';
	import { standardContext } from './context';
	import Prose from '$lib/components/ui/Prose.svelte';
	import IconArrowRight from '~icons/tabler/arrow-right';

	/**
	 * A glossary term in rule text (first use per section). Opens its
	 * definition on hover, focus + Enter, or tap; Esc closes it.
	 */
	let { key, text }: { key: string; text: string } = $props();
	const ctx = standardContext();
	const definition = $derived(ctx().terms[key]);
</script>

{#if definition}
	<Popover.Root>
		<Popover.Trigger
			openOnHover
			openDelay={250}
			class="cursor-help underline decoration-clay-500 decoration-dotted decoration-[1.5px] underline-offset-4 hover:decoration-clay-800 focus-visible:rounded-sm"
			>{text}</Popover.Trigger
		>
		<Popover.Portal>
			<Popover.Content
				side="bottom"
				align="start"
				sideOffset={6}
				collisionPadding={12}
				class="z-(--z-popover) flex w-[min(20rem,calc(100vw-1.5rem))] flex-col gap-1.5 rounded-2xl border border-line bg-card px-4 py-3.5 shadow-pop"
			>
				<p
					class="flex items-center justify-between font-ui text-[10.5px] font-bold tracking-[0.08em] text-ink-muted uppercase"
				>
					<span>{m.std_definition()}</span>
					<span class="font-mono font-medium tracking-normal normal-case"
						>{m.std_glossary_source()}</span
					>
				</p>
				<p class="font-serif text-[17px] font-semibold text-heading">{definition.term}</p>
				<Prose html={definition.definitionHtml} class="text-sm leading-normal text-ink-2" />
				{#if ctx().glossaryPath}
					<a
						href="{ctx().glossaryPath}#term-{key}"
						class="inline-flex items-center gap-1 self-start pt-0.5 font-ui text-[13px] font-semibold text-accent-ink hover:underline"
						>{m.std_open_glossary()}<IconArrowRight class="size-3.25" /></a
					>
				{/if}
			</Popover.Content>
		</Popover.Portal>
	</Popover.Root>
{:else}{text}{/if}
