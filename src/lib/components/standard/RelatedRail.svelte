<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import type { ClassValue } from 'svelte/elements';
	import type { RelatedView } from '$lib/server/standard';
	import LayerChip from '$lib/components/ui/LayerChip.svelte';
	import IconBulb from '~icons/tabler/bulb';
	import IconFilePencil from '~icons/tabler/file-pencil';
	import IconFolder from '~icons/tabler/folder';
	import IconChecklist from '~icons/tabler/checklist';
	import IconArrowRight from '~icons/tabler/arrow-right';
	import IconChevronRight from '~icons/tabler/chevron-right';

	/**
	 * Where a layer is explained, put into practice, and tested. The template
	 * and stress-test lists start collapsed: the card closes a chapter, and the
	 * full lists would bury the next/previous links.
	 */
	let { related, class: className }: { related: RelatedView; class?: ClassValue } = $props();
	const uid = $props.id();

	const DOT = {
		high: 'bg-severity-high',
		medium: 'bg-severity-medium',
		low: 'bg-clay-300',
		other: 'bg-severity-low'
	} as const;
	const LABEL = $derived({
		high: m.std_sev_high(),
		medium: m.std_sev_medium(),
		low: m.std_sev_low(),
		other: m.std_also_involves({ n: related.layer })
	});
	const levels = $derived(
		(['high', 'medium', 'low', 'other'] as const).filter((l) =>
			related.tests.some((t) => t.level === l)
		)
	);
	// A <summary> holding the group's heading, its count and an open/closed chevron.
	const summary =
		'-mx-2 flex cursor-pointer list-none items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-hover [&::-webkit-details-marker]:hidden';
	const groupTitle =
		'flex flex-1 justify-between font-ui text-[11px] font-semibold tracking-[0.08em] text-ink-muted uppercase';
	const chevron = 'size-3.5 shrink-0 text-ink-faint transition-transform group-open:rotate-90';
</script>

<section
	aria-labelledby="{uid}-title"
	class={['flex flex-col gap-4 rounded-2xl border border-line bg-card p-4.5', className]}
>
	<h2
		id="{uid}-title"
		class="flex items-center gap-2 font-ui text-[13px] font-semibold text-heading"
	>
		<LayerChip n={related.layer} size="xs" />
		{m.std_related_to({ n: related.layer })}
	</h2>

	{#if related.guide}
		<a
			href={related.guide.href}
			class="flex gap-2.5 rounded-xl bg-hover px-3 py-2.5 text-heading hover:bg-selected"
		>
			<IconBulb class="mt-px size-4.5 shrink-0 text-accent-ink" />
			<span class="flex flex-col">
				<span class="text-sm leading-snug font-semibold">{m.std_guide()}</span>
				<span class="text-[12.5px] leading-snug text-ink-muted">{related.guide.question}</span>
			</span>
		</a>
	{/if}

	{#if related.templates.length}
		<details class="group">
			<summary class={summary}>
				<IconChevronRight class={chevron} aria-hidden="true" />
				<h3 class={groupTitle}>
					{m.std_templates()}<span class="font-mono tracking-normal"
						>{related.templates.length}</span
					>
				</h3>
			</summary>
			<div class="flex flex-col gap-1 pt-1">
				{#each related.templates as t (t.href)}
					<a
						href={t.href}
						class="flex items-center gap-2 py-1.25 text-[13.5px] leading-snug text-ink hover:text-heading"
					>
						<IconFilePencil class="size-3.75 shrink-0 text-accent-ink" />
						<span class="flex-1">{t.title}</span>
						{#if t.ref}<span class="font-mono text-[11px] text-ink-faint">{t.ref}</span>{/if}
					</a>
				{/each}
				{#if related.templatesHref}
					<a
						href={related.templatesHref}
						class="inline-flex items-center gap-1.5 pt-1 font-ui text-[13px] font-semibold text-accent-ink hover:underline"
						><IconFolder class="size-3.75" />{m.std_all_layer_templates({ n: related.layer })}</a
					>
				{/if}
			</div>
		</details>
	{/if}

	{#if related.tests.length}
		<details class="group border-t border-line-soft pt-3">
			<summary class={summary}>
				<IconChevronRight class={chevron} aria-hidden="true" />
				<h3 class={groupTitle}>
					{m.std_stress_tests()}<span class="font-mono tracking-normal">{related.tests.length}</span
					>
				</h3>
			</summary>
			<div class="flex flex-col gap-1 pt-1">
				{#each related.tests as t (t.href)}
					<a
						href={t.href}
						class="flex items-start gap-2 py-1.25 text-[13.5px] leading-snug text-ink hover:text-guide-ink"
					>
						<span class="mt-1.25 size-2 shrink-0 rounded-full {DOT[t.level]}" title={LABEL[t.level]}
						></span>
						<span class="flex-1">{t.title}</span>
					</a>
				{/each}
				<p class="flex flex-wrap gap-x-3 gap-y-1 pt-1 text-[11.5px] text-ink-muted">
					{#each levels as l (l)}
						<span class="inline-flex items-center gap-1.25"
							><span class="size-1.75 rounded-full {DOT[l]}"></span>{LABEL[l]}</span
						>
					{/each}
				</p>
			</div>
		</details>
	{/if}

	<a
		href={related.selfCheckHref}
		class="flex items-center justify-between gap-2 border-t border-line-soft pt-3 text-[13.5px] font-semibold text-accent-ink hover:underline"
	>
		<span class="inline-flex items-center gap-2"
			><IconChecklist class="size-4" />{m.std_check_community()}</span
		>
		<IconArrowRight class="size-3.75" />
	</a>
</section>
