<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import { PUBLIC_SITE_URL } from '$lib/config/site';
	import { localeUrl } from '$lib/i18n/path';
	import Prose from '$lib/components/ui/Prose.svelte';
	import ClauseText from '$lib/components/standard/ClauseText.svelte';
	import { setStandardContext } from '$lib/components/standard/context';

	/**
	 * RCOS-Core on one page, made for paper: cover, contents, every chapter.
	 * `pnpm content:pdf` prints it to the PDF download. Terms are plain text
	 * here (no popovers on paper).
	 */
	let { data } = $props();
	const doc = $derived(data.doc);

	setStandardContext(() => ({ terms: {}, layerTitles: {}, glossaryPath: null }));

	const plain = (html: string) => html.replace(/<[^>]+>/g, '').trim();
	const title = $derived(plain(doc.cover.introHtml));
	const online = $derived(localeUrl(PUBLIC_SITE_URL, '/standard/core/0.1', data.locale));
</script>

<svelte:head>
	<title>{m.std_version_label()} · {title}</title>
	<meta name="robots" content="noindex" />
	<link rel="canonical" href={online} />
</svelte:head>

<div class="min-h-screen bg-white font-sans text-ink scheme-light">
	<div class="mx-auto max-w-184 px-6 py-12 print:max-w-none print:p-0">
		<!-- Cover -->
		<section
			class="flex min-h-[90vh] break-after-page flex-col justify-between gap-12 print:min-h-[240mm]"
		>
			<div class="flex flex-col gap-6 pt-[12vh]">
				<p class="flex items-center gap-3 font-mono text-sm font-semibold text-accent-ink">
					{m.std_version_label()}
					<span
						class="rounded bg-clay-200 px-1.75 py-0.5 font-ui text-[10.5px] font-bold tracking-[0.08em] text-clay-900 uppercase"
						>{m.std_draft()}</span
					>
				</p>
				<h1 class="font-serif text-5xl leading-tight font-bold text-balance text-heading">
					{title}
				</h1>
				{#each doc.cover.sections as s (s.id)}
					<p class="font-serif text-2xl text-forest-700">{s.title}</p>
					{#each s.blocks as b, i (i)}
						{#if b.kind === 'html'}<Prose html={b.html} class="text-base" />{/if}
					{/each}
				{/each}
			</div>
			<div class="flex flex-col gap-1 border-t border-line pt-4 font-ui text-sm text-ink-muted">
				<p>{m.std_print_online({ url: online })}</p>
				<p>{m.std_print_date({ date: data.date })} · {m.std_print_license()}</p>
				{#if doc.fallback}<p>{m.std_print_partly_english()}</p>{/if}
			</div>
		</section>

		<!-- Contents -->
		<nav aria-labelledby="toc" class="break-after-page">
			<h2 id="toc" class="mb-6 font-serif text-3xl font-bold text-heading">{m.std_contents()}</h2>
			<ol class="flex flex-col">
				{#each doc.chapters as c (c.anchor)}
					<li class="border-b border-line-soft">
						<a href="#{c.anchor}" class="flex gap-4 py-2.5 text-ink">
							<span class="w-8 shrink-0 font-mono text-sm font-semibold text-accent-ink"
								>{c.number}</span
							>
							<span class="flex-1">{c.fullTitle.replace(/^\d+\.\s*/, '')}</span>
						</a>
					</li>
				{/each}
			</ol>
		</nav>

		{#each doc.chapters as c (c.anchor)}
			<article id={c.anchor} class="break-before-page pt-2">
				<header class="flex flex-col gap-3 border-b border-line pb-5">
					<p class="font-mono text-[13px] font-semibold text-accent-ink">
						{m.std_version_label()} · §{c.number} ·
						{c.normative ? m.std_normative() : m.std_informative()}
					</p>
					<h2 class="font-serif text-[2rem] leading-tight font-bold text-balance text-heading">
						{c.fullTitle.replace(/^\d+\.\s*/, '')}
					</h2>
					{#if c.introHtml}<Prose html={c.introHtml} class="text-base" />{/if}
				</header>

				{#each c.sections as section (section.id)}
					<section id={section.ref} class="pt-7">
						<h3
							class="mb-3 flex items-baseline gap-3 font-serif text-xl font-semibold break-after-avoid text-heading"
						>
							{#if section.ref}<span class="font-mono text-sm text-forest-600">{section.ref}</span
								>{/if}
							{section.title}
						</h3>
						<ol class="flex flex-col gap-1">
							{#each section.blocks as block, i (i)}
								{#if block.kind === 'clause'}
									<li
										id={block.ref}
										class="grid break-inside-avoid grid-cols-[3.5rem_minmax(0,1fr)] gap-x-2 py-1.5"
									>
										<span class="pt-0.5 font-mono text-[12px] font-semibold text-accent-ink"
											>{block.ref}</span
										>
										<div class="flex flex-col gap-1.5">
											<p class="leading-relaxed"><ClauseText parts={block.parts} /></p>
											{#if block.items.length}
												<ul
													class="flex list-disc flex-col gap-1 pl-5 text-ink-2 marker:text-forest-400"
												>
													{#each block.items as item, j (j)}
														<li><ClauseText parts={item} /></li>
													{/each}
												</ul>
											{/if}
										</div>
									</li>
								{:else}
									<li class="list-none py-1.5"><Prose html={block.html} /></li>
								{/if}
							{/each}
						</ol>
					</section>
				{/each}

				{#if c.glossary.length}
					<dl class="mt-6 flex flex-col divide-y divide-line-soft">
						{#each c.glossary as t (t.key)}
							<div id="term-{t.key}" class="break-inside-avoid py-3">
								<dt class="font-serif text-lg font-semibold text-heading">{t.term}</dt>
								<dd class="mt-0.5 text-ink-2"><Prose html={t.definitionHtml} /></dd>
							</div>
						{/each}
					</dl>
				{/if}
			</article>
		{/each}
	</div>
</div>
