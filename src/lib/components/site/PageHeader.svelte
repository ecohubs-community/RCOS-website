<script lang="ts">
	import type { Snippet } from 'svelte';
	import IconChevronRight from '~icons/tabler/chevron-right';

	/** The top of a content page: breadcrumb, eyebrow, title, lead, and anything extra. */
	let {
		crumbs = [],
		eyebrow,
		title,
		lead,
		children
	}: {
		crumbs?: { label: string; href?: string }[];
		eyebrow?: Snippet;
		title: string;
		lead?: string | null;
		children?: Snippet;
	} = $props();
</script>

<header class="flex flex-col gap-4 border-b border-line pb-7">
	{#if crumbs.length}
		<nav
			aria-label="Breadcrumb"
			class="flex flex-wrap items-center gap-1.5 font-ui text-[13px] text-ink-faint"
		>
			{#each crumbs as c, i (i)}
				{#if i > 0}<IconChevronRight class="size-3 opacity-60" aria-hidden="true" />{/if}
				{#if c.href}
					<a href={c.href} class="hover:text-heading">{c.label}</a>
				{:else}
					<span class="font-medium text-ink-2" aria-current="page">{c.label}</span>
				{/if}
			{/each}
		</nav>
	{/if}
	{#if eyebrow}
		<div
			class="flex flex-wrap items-center gap-2.5 font-mono text-[13px] font-semibold text-accent-ink"
		>
			{@render eyebrow()}
		</div>
	{/if}
	<h1
		class="font-serif text-[clamp(2rem,4vw,2.75rem)] leading-tight font-bold text-balance text-heading"
	>
		{title}
	</h1>
	{#if lead}
		<p class="max-w-3xl text-lg leading-relaxed text-pretty text-ink-2">{lead}</p>
	{/if}
	{@render children?.()}
</header>
