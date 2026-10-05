<script lang="ts">
	import IconArrowRight from '~icons/tabler/arrow-right';

	/** "How to use this": three numbered steps under a hub's header, each with an optional link. */
	let {
		heading,
		steps
	}: {
		heading: string;
		steps: { title: string; body: string; href?: string; cta?: string }[];
	} = $props();
	const uid = $props.id();
</script>

<section aria-labelledby="{uid}-title" class="mt-8">
	<h2
		id="{uid}-title"
		class="mb-3 font-ui text-[13px] font-semibold tracking-[0.08em] text-accent-ink uppercase"
	>
		{heading}
	</h2>
	<ol class="grid gap-3 md:grid-cols-3">
		{#each steps as step, i (i)}
			<li class="flex flex-col gap-1.5 rounded-2xl border border-line bg-hover px-4.5 py-4">
				<span class="flex items-center gap-2.5">
					<span
						class="inline-flex size-6.5 shrink-0 items-center justify-center rounded-full bg-brand font-ui text-[13px] font-bold text-white"
						>{i + 1}</span
					>
					<h3 class="font-ui text-base font-semibold text-heading">{step.title}</h3>
				</span>
				<p class="flex-1 text-[15px] leading-normal text-ink-2">{step.body}</p>
				{#if step.href && step.cta}
					<a
						href={step.href}
						class="inline-flex items-center gap-1.5 self-start pt-1 font-ui text-sm font-semibold text-accent-ink hover:underline"
						>{step.cta}<IconArrowRight class="size-4" /></a
					>
				{/if}
			</li>
		{/each}
	</ol>
</section>
