<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import SEO from '$lib/components/seo/SEO.svelte';
	import { stripLocale } from '$lib/i18n/path';
	import {
		buildBreadcrumbSchema,
		buildDownloadsSchema,
		buildGlossarySchema,
		buildStandardSchema,
		textOf
	} from '$lib/utils/jsonld';
	import LocaleFallbackBanner from '$lib/components/i18n/LocaleFallbackBanner.svelte';
	import Prose from '$lib/components/ui/Prose.svelte';
	import LayerChip from '$lib/components/ui/LayerChip.svelte';
	import Clause from '$lib/components/standard/Clause.svelte';
	import OnThisPage from '$lib/components/standard/OnThisPage.svelte';
	import RelatedRail from '$lib/components/standard/RelatedRail.svelte';
	import ReadingModeToggle from '$lib/components/standard/ReadingModeToggle.svelte';
	import SectionFooter from '$lib/components/standard/SectionFooter.svelte';
	import GuideSheet from '$lib/components/standard/GuideSheet.svelte';
	import { closeGuide, openGuide } from '$lib/components/standard/guide.svelte';
	import { afterNavigate } from '$app/navigation';
	import IconBulb from '~icons/tabler/bulb';
	import { setStandardContext } from '$lib/components/standard/context';
	import { scrollSpy } from '$lib/components/standard/spy.svelte';
	import IconArrowLeft from '~icons/tabler/arrow-left';
	import IconArrowRight from '~icons/tabler/arrow-right';
	import IconChevronRight from '~icons/tabler/chevron-right';

	let { data } = $props();
	const p = $derived(data.page);

	// The guide belongs to this page: close it when the reader moves to another one
	// (but not for in-page links such as "See §2.3.4").
	afterNavigate(({ from, to }) => {
		if (from?.url.pathname !== to?.url.pathname) closeGuide();
	});

	// Rule text reads term definitions and layer names from the page.
	setStandardContext(() => p);

	// The intro, or else the chapter's first real paragraph or rule (some chapters have no intro).
	const firstText = $derived(
		p.sections
			.flatMap((s) => s.blocks)
			.map((b) =>
				textOf(
					b.kind === 'html' ? b.html : b.parts.map((x) => ('html' in x ? x.html : x.text)).join('')
				)
			)
			.find((t) => t.length > 40) ?? ''
	);
	const intro = $derived(textOf(p.introHtml));
	// A short intro (a label, a name) is followed by the first paragraph.
	const description = $derived(
		(intro.length >= 70 ? intro : [intro, firstText].filter(Boolean).join(' · ')) || p.fullTitle
	);
	const isChapter = $derived(p.number !== null);

	// A title that is unique across the standard: module pages say which module,
	// and a version page says which standard ("v0.1" alone appears three times).
	const seoTitle = $derived.by(() => {
		if (data.canonicalPath === '/standard/core/0.1') return m.std_version_label();
		const mod = data.nav.modules.find((x) =>
			data.canonicalPath.startsWith(stripLocale(x.root ?? x.path) + '/')
		);
		return mod ? `${p.fullTitle} · ${mod.title}` : p.fullTitle;
	});

	// Structured data: the page as part of RCOS-Core 0.1, its place in the
	// standard, the glossary's terms, and the downloads on the version page.
	const jsonLd = $derived.by(() => {
		const ld: Record<string, unknown>[] = [
			buildStandardSchema({
				title: seoTitle,
				description,
				path: data.canonicalPath,
				locale: data.locale,
				inLanguage: p.fallback ? 'en' : data.locale,
				datePublished: p.dates.published,
				dateModified: p.dates.modified
			}),
			buildBreadcrumbSchema(
				[
					{ name: m.std_breadcrumb_standard(), path: '/standard' },
					...(isChapter ? [{ name: m.std_version_label(), path: '/standard/core/0.1' }] : []),
					{ name: p.title, path: data.canonicalPath }
				],
				data.locale
			)
		];
		if (p.glossary.length)
			ld.push(
				buildGlossarySchema(
					p.glossary.map((t) => ({
						key: t.key,
						term: t.term,
						definition: textOf(t.definitionHtml)
					})),
					{ title: p.title, path: data.canonicalPath, locale: data.locale }
				)
			);
		if (data.canonicalPath === '/standard/core/0.1') {
			const { pdf, md } = data.downloads;
			ld.push(
				...buildDownloadsSchema(
					m.std_version_label(),
					Object.fromEntries(Object.entries({ pdf, md }).filter(([, v]) => v)) as Record<
						string,
						string
					>,
					data.locale
				)
			);
		}
		return ld;
	});
	const hasGuidance = $derived(p.sections.some((s) => s.guide));
	const citation = $derived(
		isChapter
			? `RCOS-Core v0.1, §${p.number} “${p.fullTitle.replace(/^\d+\.\s*/, '')}”. EcoHubs, 2026. CC BY 4.0.`
			: ''
	);
</script>

<SEO
	title={seoTitle}
	{description}
	url={data.canonicalPath}
	type="article"
	locale={data.locale}
	noindex={p.empty}
	{jsonLd}
/>

<div class="grid grid-cols-1 gap-x-12 xl:grid-cols-[minmax(0,1fr)_16rem]">
	<article class="mx-auto w-full max-w-190 min-w-0 pt-6 pb-20 lg:pt-10" {@attach scrollSpy(p.path)}>
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
			{#if hasGuidance}
				<ReadingModeToggle />
			{/if}
		</header>

		{#each p.sections as section (section.id)}
			<section
				id={section.id}
				data-spy={section.ref ? '' : undefined}
				class="scroll-mt-(--scroll-offset) pt-11"
			>
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
							class="font-mono text-base font-semibold text-accent-ink hover:text-heading hover:underline"
							>{section.ref}</a
						>
					{/if}
					<span class="min-w-0 flex-1">{section.title}</span>
					{#if section.guide}
						<button
							type="button"
							onclick={() => openGuide(section.id)}
							aria-label={m.std_guide_open({ ref: section.ref ?? '' })}
							title={m.std_guide_more()}
							class="inline-flex h-8 shrink-0 items-center gap-1.5 self-center rounded-full border border-transparent px-2.5 font-ui text-[12.5px] font-semibold text-guide-accent hover:border-guide-line hover:bg-guide-chip [.guided_&]:border-guide-line [.guided_&]:bg-guide"
						>
							<IconBulb class="size-4" /><span class="max-sm:sr-only">{m.std_guide_button()}</span>
						</button>
					{/if}
				</h2>
				{#if section.guide}
					<div
						class="-mt-1 mb-4 hidden items-start gap-3 rounded-xl border border-dashed border-clay-300 bg-guide px-3.5 py-3 [.guided_&]:flex"
					>
						<span
							class="mt-0.5 shrink-0 rounded bg-guide-chip px-1.5 py-0.5 font-ui text-[10.5px] font-bold tracking-[0.08em] text-guide-accent uppercase"
							>{m.std_in_short()}</span
						>
						<div class="flex min-w-0 flex-col gap-1.5">
							<Prose
								html={section.guide.inShortHtml}
								class="text-[15px] leading-normal text-guide-ink"
								lang={section.guide.lang}
							/>
							<button
								type="button"
								onclick={() => openGuide(section.id)}
								class="inline-flex items-center gap-1 self-start font-ui text-[13px] font-semibold text-clay-800 hover:underline"
								>{m.std_guide_more()} →</button
							>
						</div>
					</div>
				{/if}
				{#if section.blocks.length}
					<ol class="flex flex-col gap-0.5">
						{#each section.blocks as block, i (i)}
							{#if block.kind === 'clause'}
								<Clause
									ref={block.ref}
									parts={block.parts}
									items={block.items}
									question={block.question}
									onquestion={() => openGuide(section.id, block.question)}
								/>
							{:else}
								<li class="list-none py-2"><Prose html={block.html} /></li>
							{/if}
						{/each}
					</ol>
				{/if}
				{#if section.practice.length || section.testedBy.length}
					<SectionFooter practice={section.practice} testedBy={section.testedBy} />
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

		{#if p.related}
			<!-- Closes the page rather than sitting in the right rail, which keeps only "On this page". -->
			<RelatedRail related={p.related} class="mt-11" />
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
			class="sticky top-(--header-h) hidden max-h-[calc(100dvh-var(--header-h))] flex-col overflow-y-auto py-10 xl:flex"
		>
			<OnThisPage sections={p.sections.filter((s) => s.ref)} />
		</aside>
	{/if}
</div>

{#if hasGuidance}
	<GuideSheet sections={p.sections} locale={data.locale} />
{/if}
