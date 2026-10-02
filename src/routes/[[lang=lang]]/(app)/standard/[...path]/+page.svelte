<script lang="ts">
	import { setContext } from 'svelte';
	import { m } from '$lib/paraglide/messages.js';
	import SEO from '$lib/components/seo/SEO.svelte';
	import LocaleFallbackBanner from '$lib/components/i18n/LocaleFallbackBanner.svelte';
	import Prose from '$lib/components/ui/Prose.svelte';
	import LayerChip from '$lib/components/ui/LayerChip.svelte';
	import Clause from '$lib/components/standard/Clause.svelte';
	import IconArrowLeft from '~icons/tabler/arrow-left';
	import IconArrowRight from '~icons/tabler/arrow-right';
	import IconChevronRight from '~icons/tabler/chevron-right';

	let { data } = $props();
	const p = $derived(data.page);

	// Term popovers read the definitions of the terms used on this page.
	setContext('standard-terms', () => p.terms);

	const description = $derived(
		p.introHtml
			.replace(/<[^>]+>/g, '')
			.replace(/\s+/g, ' ')
			.trim()
			.slice(0, 200) || p.fullTitle
	);
	const isChapter = $derived(p.number !== null);
	const citation = $derived(
		isChapter
			? `RCOS-Core v0.1, §${p.number} “${p.fullTitle.replace(/^\d+\.\s*/, '')}”. EcoHubs, 2026. CC BY 4.0.`
			: ''
	);
</script>

<SEO
	title={p.fullTitle}
	{description}
	url={data.canonicalPath}
	type="article"
	locale={data.locale}
/>

<div class="grid grid-cols-1 gap-x-12 xl:grid-cols-[minmax(0,1fr)_16rem]">
	<article class="mx-auto w-full max-w-190 min-w-0 pt-6 pb-20 lg:pt-10">
		{#if p.fallback}
			<div class="mb-6"><LocaleFallbackBanner servedLang="en" requestedLang={data.locale} /></div>
		{/if}

		<nav
			aria-label="Breadcrumb"
			class="mb-7 flex flex-wrap items-center gap-1.5 font-ui text-[13px] text-ink-faint"
		>
			<a href={data.nav.start[0].path} class="hover:text-heading">{m.std_breadcrumb_standard()}</a>
			{#if isChapter}
				<IconChevronRight class="size-3 opacity-60" aria-hidden="true" />
				<span>{m.std_version_label()}</span>
			{/if}
			<IconChevronRight class="size-3 opacity-60" aria-hidden="true" />
			<span class="font-medium text-ink-2" aria-current="page">{p.title}</span>
		</nav>

		<header class="flex flex-col gap-4.5 border-b border-line pb-7">
			{#if isChapter}
				<div class="flex flex-wrap items-center gap-2.5">
					<span class="font-mono text-[13px] font-semibold text-accent-ink"
						>{m.std_version_label()} · §{p.number}</span
					>
					<span
						class={[
							'rounded px-1.75 py-0.5 font-ui text-[10.5px] font-bold tracking-[0.08em] uppercase',
							p.normative ? 'bg-brand text-white' : 'bg-paper-2 text-ink-muted'
						]}>{p.normative ? m.std_normative() : m.std_informative()}</span
					>
					<span
						class="rounded bg-clay-200 px-1.75 py-0.5 font-ui text-[10.5px] font-bold tracking-[0.08em] text-clay-900 uppercase"
						>{m.std_draft()}</span
					>
				</div>
			{/if}
			<h1
				class="flex items-center gap-4 font-serif text-[clamp(2rem,4vw,2.875rem)] leading-tight font-bold text-balance text-heading"
			>
				{#if p.layer !== null}
					<LayerChip
						n={p.layer}
						size="md"
						class="size-[clamp(2.75rem,5vw,3.5rem)] rounded-xl text-[0.62em]"
					/>
				{/if}
				{p.title}
			</h1>
			{#if p.introHtml}
				<Prose html={p.introHtml} class="text-lg leading-relaxed" />
			{/if}
		</header>

		{#each p.sections as section (section.id)}
			<section id={section.id} class="scroll-mt-(--scroll-offset) pt-11">
				{#each section.legacyAnchors as legacy (legacy)}
					<!-- Heading id of the markdown era, so old links still land here. -->
					<span id={legacy} class="block scroll-mt-(--scroll-offset)"></span>
				{/each}
				<h2
					class="mb-4.5 flex items-baseline gap-3.5 font-serif text-[1.625rem] leading-snug font-semibold text-heading"
				>
					{#if section.ref}
						<a
							href="#{section.id}"
							title={m.std_section_link()}
							class="font-mono text-base font-semibold text-forest-600 hover:text-heading hover:underline"
							>{section.ref}</a
						>
					{/if}
					<span class="min-w-0 flex-1">{section.title}</span>
				</h2>
				{#if section.blocks.length}
					<ol class="flex flex-col gap-0.5">
						{#each section.blocks as block, i (i)}
							{#if block.kind === 'clause'}
								<Clause ref={block.ref} parts={block.parts} items={block.items} />
							{:else}
								<li class="list-none py-2"><Prose html={block.html} /></li>
							{/if}
						{/each}
					</ol>
				{/if}
			</section>
		{/each}

		{#if p.glossary.length}
			<dl class="mt-8 flex flex-col divide-y divide-line-soft">
				{#each p.glossary as t (t.key)}
					<div id="term-{t.key}" class="scroll-mt-(--scroll-offset) py-4 target:bg-kw-must">
						<dt class="font-serif text-lg font-semibold text-heading">{t.term}</dt>
						<dd class="mt-1 text-ink-2"><Prose html={t.definitionHtml} /></dd>
					</div>
				{/each}
			</dl>
		{/if}

		{#if citation}
			<div class="mt-11 flex flex-col gap-1.5 rounded-xl border border-line bg-card px-4.5 py-4">
				<p class="font-ui text-[11px] font-semibold tracking-[0.08em] text-ink-faint uppercase">
					{m.std_how_to_cite()}
				</p>
				<p class="font-mono text-[13px] leading-relaxed text-ink-2">{citation}</p>
			</div>
		{/if}

		{#if p.prev || p.next}
			<nav aria-label={m.std_contents()} class="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
				{#if p.prev}
					<a
						href={p.prev.path}
						class="flex flex-col gap-0.5 rounded-2xl border border-line bg-card px-4.5 py-4 hover:border-forest-300"
					>
						<span class="flex items-center gap-1.5 font-ui text-xs text-ink-faint"
							><IconArrowLeft class="size-3.5" />{m.std_previous()} · §{p.prev.number}</span
						>
						<span class="font-ui text-[15.5px] font-semibold text-ink">{p.prev.title}</span>
					</a>
				{:else}<span></span>{/if}
				{#if p.next}
					<a
						href={p.next.path}
						class="flex flex-col gap-0.5 rounded-2xl border border-line bg-card px-4.5 py-4 text-right hover:border-forest-300"
					>
						<span class="flex items-center justify-end gap-1.5 font-ui text-xs text-ink-faint"
							>{m.std_next()} · §{p.next.number}<IconArrowRight class="size-3.5" /></span
						>
						<span class="font-ui text-[15.5px] font-semibold text-ink">{p.next.title}</span>
					</a>
				{/if}
			</nav>
		{/if}
	</article>

	{#if p.sections.some((s) => s.ref)}
		<aside
			aria-label={m.std_on_this_page()}
			class="sticky top-(--header-h) hidden max-h-[calc(100dvh-var(--header-h))] overflow-y-auto py-10 xl:block"
		>
			<p class="pb-2 font-ui text-[11px] font-semibold tracking-[0.08em] text-ink-faint uppercase">
				{m.std_on_this_page()}
			</p>
			<nav class="flex flex-col gap-0.5">
				{#each p.sections.filter((s) => s.ref) as s (s.id)}
					<a
						href="#{s.id}"
						class="flex gap-2 border-l-2 border-transparent py-1 pl-3 text-[13.5px] leading-snug text-ink-muted hover:text-heading"
					>
						<span class="w-6 shrink-0 pt-px font-mono text-[11.5px] text-forest-600">{s.ref}</span
						>{s.title}
					</a>
				{/each}
			</nav>
		</aside>
	{/if}
</div>
