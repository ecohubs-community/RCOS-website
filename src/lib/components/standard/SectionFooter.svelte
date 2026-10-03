<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import type { SectionView } from '$lib/server/standard';
	import IconFilePencil from '~icons/tabler/file-pencil';
	import IconShieldCheck from '~icons/tabler/shield-check';

	/** Where a section is put into practice (templates) and what tests it (stress tests). */
	let { practice, testedBy }: Pick<SectionView, 'practice' | 'testedBy'> = $props();
	const label = 'font-ui text-[11px] font-semibold tracking-[0.08em] text-ink-muted uppercase';
</script>

<div
	class="mt-3.5 grid grid-cols-[repeat(auto-fit,minmax(min(100%,15rem),1fr))] gap-x-4 gap-y-3 rounded-xl border border-dashed border-forest-200 px-4 py-3.5"
>
	{#if practice.length}
		<div class="flex flex-col gap-1.5">
			<p class={label}>{m.std_put_into_practice()}</p>
			{#each practice as t (t.href)}
				<a
					href={t.href}
					class="inline-flex items-start gap-1.5 text-sm leading-snug font-medium text-heading hover:underline"
				>
					<IconFilePencil class="mt-0.5 size-3.75 shrink-0 text-forest-600" />
					<span>{t.template} <span class="font-normal text-ink-muted">· {t.section}</span></span>
				</a>
			{/each}
		</div>
	{/if}
	{#if testedBy.length}
		<div class="flex flex-col gap-1.5">
			<p class={label}>{m.std_tested_by()}</p>
			{#each testedBy as t (t.href)}
				<a
					href={t.href}
					class="inline-flex items-start gap-1.5 text-sm leading-snug font-medium text-guide-ink hover:underline"
				>
					<IconShieldCheck class="mt-0.5 size-3.75 shrink-0 text-clay-600" />
					<span>{t.title}</span>
				</a>
			{/each}
		</div>
	{/if}
</div>
