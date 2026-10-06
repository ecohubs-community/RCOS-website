<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import SEO from '$lib/components/seo/SEO.svelte';
	import { buildDownloadsSchema, buildPageLd } from '$lib/utils/jsonld';
	import PageHeader from '$lib/components/site/PageHeader.svelte';
	import LayerChip from '$lib/components/ui/LayerChip.svelte';
	import Prose from '$lib/components/ui/Prose.svelte';
	import LocaleFallbackBanner from '$lib/components/i18n/LocaleFallbackBanner.svelte';
	import TemplateDownloads from '$lib/components/templates/TemplateDownloads.svelte';
	import { localized } from '$lib/i18n/path';
	import IconQuote from '~icons/tabler/quote';
	import IconGavel from '~icons/tabler/gavel';
	import IconFilePencil from '~icons/tabler/file-pencil';

	let { data } = $props();
	const p = $derived(data.page);
	// The preamble's quote, or else what the template covers.
	const description = $derived(
		p.preambleHtml
			.replace(/<[^>]+>/g, '')
			.replace(/\s+/g, ' ')
			.trim() || `${p.title}: ${p.sections.map((s) => s.title).join(', ')}.`
	);
	const label = 'font-ui text-[11px] font-semibold tracking-[0.08em] text-ink-faint uppercase';

	const crumbs = $derived([
		{ label: m.mega_templates(), href: localized('/templates', data.locale) },
		{
			label: m.layer_label({ n: p.layer.n }),
			href: localized(`/templates/layer-${p.layer.n}`, data.locale)
		},
		{ label: p.title }
	]);
	const jsonLd = $derived([
		...buildPageLd({
			title: p.title,
			description,
			path: p.path,
			locale: data.locale,
			inLanguage: p.fallback ? 'en' : data.locale,
			datePublished: p.dates.published,
			dateModified: p.dates.modified,
			crumbs
		}),
		...(p.downloads?.type === 'single'
			? buildDownloadsSchema(p.title, p.downloads.files, p.downloads.servedLocale)
			: [])
	]);
</script>

<SEO title={p.title} {description} url={p.path} type="article" locale={data.locale} {jsonLd} />

<div
	class="mx-auto grid w-full max-w-6xl grid-cols-1 gap-x-12 px-4 pt-8 pb-20 sm:px-6 lg:grid-cols-[minmax(0,1fr)_17rem] lg:px-8 lg:pt-12"
>
	<article class="min-w-0">
		<PageHeader {crumbs} title={p.title}>
			{#snippet eyebrow()}
				<LayerChip n={p.layer.n} size="xs" />
				<a href={p.layer.href} class="hover:underline"
					>{m.layer_label({ n: p.layer.n })} · {p.layer.title}</a
				>
			{/snippet}
			{#if p.preambleHtml}<Prose html={p.preambleHtml} class="text-base" />{/if}
		</PageHeader>

		{#if p.fallback}
			<div class="mt-6"><LocaleFallbackBanner servedLang="en" requestedLang={data.locale} /></div>
		{/if}
		{#if p.downloads && p.downloads.type === 'single'}
			<div class="mt-6"><TemplateDownloads downloads={p.downloads} /></div>
		{/if}

		{#each p.sections as s (s.id)}
			<section id={s.id} class="scroll-mt-24 border-b border-line-soft pt-10 pb-8 last:border-b-0">
				{#each s.legacyAnchors as a (a)}<span id={a} class="block scroll-mt-24"></span>{/each}
				<h2 class="font-serif text-[1.625rem] leading-snug font-semibold text-heading">
					{s.title}
				</h2>
				{#if s.guide}
					<p class="mt-2 font-serif text-lg text-pretty text-guide-ink" lang={s.guide.lang}>
						{s.guide.question}
					</p>
				{/if}

				<div class="mt-4 flex flex-col gap-4">
					{#each s.blocks as b, i (i)}
						{#if b.kind === 'clauses'}
							<details class="group rounded-xl border border-line bg-card px-4 py-3">
								<summary
									class="flex cursor-pointer items-center gap-2 font-ui text-sm font-semibold text-heading"
								>
									<IconGavel class="size-4 text-accent-ink" />{m.site_clauses()}
									<span class="font-mono text-xs font-normal text-ink-muted"
										>{b.clauses.map((c) => c.ref).join(', ')}</span
									>
								</summary>
								<ul class="mt-3 flex flex-col gap-2">
									{#each b.clauses as c (c.ref)}
										<li class="grid grid-cols-[3.5rem_minmax(0,1fr)] gap-x-2 text-sm">
											<a
												href={c.href}
												class="font-mono text-xs font-semibold text-accent-ink hover:underline"
												>{c.ref}</a
											>
											<!-- eslint-disable-next-line svelte/no-at-html-tags -- clause text of the standard, rendered at build time -->
											<span class="text-ink-2">{@html c.html}</span>
										</li>
									{/each}
								</ul>
							</details>
						{:else if b.kind === 'details'}
							<details
								class={[
									'rounded-xl border px-4 py-3',
									b.type === 'rationale' ? 'border-guide-line bg-guide' : 'border-line bg-paper-2'
								]}
								open={b.type === 'instructions'}
							>
								<summary class="cursor-pointer font-ui text-sm font-semibold text-heading"
									>{b.summary}</summary
								>
								<Prose html={b.html} class="mt-2 text-[15px]" />
							</details>
						{:else}
							<Prose html={b.html} />
						{/if}
					{/each}
				</div>

				{#if s.guide && (s.guide.prompts.length || s.guide.examples.length)}
					<div
						class="mt-5 grid gap-4 rounded-xl border border-dashed border-clay-300 bg-guide px-4 py-4 md:grid-cols-2"
						lang={s.guide.lang}
					>
						{#if s.guide.prompts.length}
							<div class="flex flex-col gap-2">
								<p class={label}>{m.site_what_to_cover()}</p>
								<ul
									class="flex list-disc flex-col gap-1.5 pl-4 text-sm text-guide-ink marker:text-clay-500"
								>
									{#each s.guide.prompts as q, i (i)}<li>{q}</li>{/each}
								</ul>
							</div>
						{/if}
						{#if s.guide.examples.length}
							<div class="flex flex-col gap-2">
								<p class={label}>{m.std_examples()}</p>
								{#each s.guide.examples as ex, i (i)}
									<blockquote class="flex gap-2.5 text-sm text-ink">
										<IconQuote class="mt-0.5 size-4 shrink-0 text-clay-500" /><span
											class="font-serif">{ex}</span
										>
									</blockquote>
								{/each}
								<p class="text-xs text-guide-ink">{m.std_examples_note()}</p>
							</div>
						{/if}
					</div>
				{/if}
			</section>
		{/each}
	</article>

	<aside class="hidden lg:block">
		<div class="sticky top-[calc(var(--header-h)+1.5rem)] flex flex-col gap-7 pt-2">
			<nav aria-labelledby="on-this-page" class="flex flex-col gap-0.5">
				<p id="on-this-page" class="pb-2 {label}">{m.std_on_this_page()}</p>
				{#each p.sections as s (s.id)}
					<a
						href="#{s.id}"
						class="border-l-2 border-transparent py-1 pl-3 text-[13.5px] leading-snug text-ink-muted hover:border-line hover:text-heading"
						>{s.title}</a
					>
				{/each}
			</nav>
			<nav aria-labelledby="siblings" class="flex flex-col gap-1">
				<p id="siblings" class="pb-1 {label}">{m.site_other_templates({ n: p.layer.n })}</p>
				{#each p.siblings as t (t.path)}
					<a
						href={t.path}
						aria-current={t.path === localized(p.path, data.locale) ? 'page' : undefined}
						class="flex items-center gap-2 py-1 text-[13.5px] text-ink hover:text-heading aria-[current=page]:font-semibold aria-[current=page]:text-heading"
						><IconFilePencil class="size-3.75 shrink-0 text-accent-ink" />{t.title}</a
					>
				{/each}
			</nav>
		</div>
	</aside>
</div>
