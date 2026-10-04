<script lang="ts">
	import { Accordion, Dialog } from 'bits-ui';
	import { MediaQuery } from 'svelte/reactivity';
	import { m } from '$lib/paraglide/messages.js';
	import type { SectionView } from '$lib/server/standard';
	import Prose from '$lib/components/ui/Prose.svelte';
	import { guide, closeGuide } from './guide.svelte';
	import IconBulb from '~icons/tabler/bulb';
	import IconX from '~icons/tabler/x';
	import IconQuote from '~icons/tabler/quote';
	import IconGavel from '~icons/tabler/gavel';
	import IconMessagePlus from '~icons/tabler/message-plus';

	/**
	 * The guide for one section: in short, why it matters, examples, common
	 * questions. On wide screens a panel docked under the header that leaves the
	 * page usable; below that a modal sheet over everything.
	 */
	let { sections, locale }: { sections: SectionView[]; locale: string } = $props();

	const wide = new MediaQuery('min-width: 80rem');
	const section = $derived(sections.find((s) => s.id === guide.section && s.guide));
	const g = $derived(section?.guide);

	let body = $state<HTMLElement>();
	// Jump links inside the sheet; a hash link would move the page instead.
	function show(id: string) {
		body?.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	const tabs = $derived(
		g
			? [
					['guide-short', m.std_in_short()],
					...(g.why.length ? [['guide-why', m.std_why_it_matters()]] : []),
					...(g.examples.length ? [['guide-examples', m.std_examples()]] : []),
					...(g.questions.length ? [['guide-questions', m.std_common_questions()]] : [])
				]
			: []
	);
	const label = 'font-ui text-[11px] font-semibold tracking-[0.08em] text-guide-accent uppercase';
	const issue = $derived(
		section
			? `https://github.com/ecohubs-community/RCOS-website/issues/new?title=${encodeURIComponent(`Guidance §${section.ref} ${section.title}`)}`
			: ''
	);
</script>

<Dialog.Root bind:open={() => !!g, (open) => !open && closeGuide()}>
	<Dialog.Portal>
		{#if !wide.current}
			<Dialog.Overlay class="fixed inset-0 z-(--z-overlay) bg-forest-900/30" />
		{/if}
		<Dialog.Content
			trapFocus={!wide.current}
			preventScroll={!wide.current}
			interactOutsideBehavior={wide.current ? 'ignore' : 'close'}
			class="fixed inset-y-0 right-0 z-(--z-drawer) flex w-[min(28.75rem,100vw)] flex-col border-l border-guide-line bg-guide-panel shadow-sheet xl:top-(--header-h) xl:z-(--z-sticky)"
		>
			{#if section && g}
				<div class="flex flex-col gap-3 border-b border-guide-line px-5 pt-4.5 pb-3.5">
					<div class="flex items-center justify-between gap-3">
						<span
							class="inline-flex items-center gap-2 font-ui text-[10.5px] font-bold tracking-[0.08em] text-guide-accent uppercase"
						>
							<span
								class="inline-flex size-6.5 items-center justify-center rounded-full bg-guide-chip"
								><IconBulb class="size-3.75" /></span
							>{m.std_guidance_label()}
						</span>
						<Dialog.Close
							aria-label={m.std_close_guidance()}
							class="inline-flex size-9 items-center justify-center rounded-lg bg-guide text-guide-ink hover:bg-guide-chip"
						>
							<IconX class="size-4.5" />
						</Dialog.Close>
					</div>
					<Dialog.Title
						class="flex items-baseline gap-2.5 font-serif text-2xl leading-tight font-semibold text-heading"
					>
						<span class="font-mono text-[15px] text-accent-ink">{section.ref}</span>{section.title}
					</Dialog.Title>
					<Dialog.Description class="sr-only">{m.std_guidance_note()}</Dialog.Description>
					<div class="flex flex-wrap gap-1.5">
						{#each tabs as [id, text] (id)}
							<button
								type="button"
								onclick={() => show(id)}
								class="h-7.5 rounded-full border border-guide-line bg-card px-3 font-ui text-[12.5px] font-semibold text-guide-ink hover:bg-guide-chip"
								>{text}</button
							>
						{/each}
					</div>
				</div>

				<div bind:this={body} class="flex flex-1 flex-col gap-6.5 overflow-y-auto px-5 pt-5 pb-7">
					{#if g.lang !== locale}
						<p class="rounded-lg bg-guide px-3 py-2 text-[13px] text-guide-ink">
							{m.std_guidance_english()}
						</p>
					{/if}

					<section id="guide-short" class="flex scroll-mt-3 flex-col gap-2" lang={g.lang}>
						<h3 class={label}>{m.std_in_short()}</h3>
						<Prose
							html={g.inShortHtml}
							class="font-serif text-[19px] leading-snug text-pretty text-ink"
						/>
					</section>

					{#if g.why.length}
						<section id="guide-why" class="flex scroll-mt-3 flex-col gap-3">
							<h3 class={label}>{m.std_why_it_matters()}</h3>
							{#each g.why as why (why.source.href)}
								<div class="flex flex-col gap-1">
									<Prose html={why.html} class="text-[15.5px] leading-relaxed text-pretty" />
									<a
										href={why.source.href}
										class="text-[12.5px] text-guide-ink underline hover:text-guide-ink"
										>{m.std_from_template({
											template: why.source.template,
											section: why.source.section
										})}</a
									>
								</div>
							{/each}
						</section>
					{/if}

					{#if g.examples.length}
						<section id="guide-examples" class="flex scroll-mt-3 flex-col gap-2.5" lang={g.lang}>
							<h3 class={label}>{m.std_examples()}</h3>
							{#each g.examples as ex, i (i)}
								<figure
									class="flex flex-col gap-1.5 rounded-xl border border-guide-line bg-card px-3.5 py-3"
								>
									<blockquote class="flex gap-3">
										<IconQuote class="mt-0.5 size-4.5 shrink-0 text-clay-500" />
										<p class="font-serif text-base leading-snug text-ink">{ex.text}</p>
									</blockquote>
									<figcaption class="pl-7.5 text-[12px] text-guide-ink">
										<a href={ex.source.href} class="underline hover:text-guide-ink"
											>{m.std_from_template({
												template: ex.source.template,
												section: ex.source.section
											})}</a
										>
									</figcaption>
								</figure>
							{/each}
							<p class="text-[12.5px] text-guide-ink">{m.std_examples_note()}</p>
						</section>
					{/if}

					{#if g.questions.length}
						<section id="guide-questions" class="flex scroll-mt-3 flex-col gap-2" lang={g.lang}>
							<h3 class={label}>{m.std_common_questions()}</h3>
							<Accordion.Root
								type="single"
								bind:value={() => guide.question ?? '', (v) => (guide.question = v || null)}
								class="flex flex-col gap-2"
							>
								{#each g.questions as q (q.id)}
									<Accordion.Item
										value={q.id}
										class="rounded-xl border border-line bg-card data-[state=open]:border-guide-line data-[state=open]:bg-guide"
										{@attach (el) => {
											if (guide.question === q.id) el.scrollIntoView({ block: 'nearest' });
										}}
									>
										<Accordion.Header>
											<Accordion.Trigger
												class="flex min-h-12 w-full items-center justify-between gap-3 px-3.5 py-2.5 text-left text-[15px] font-semibold text-ink"
											>
												{q.question}
												<span
													aria-hidden="true"
													class="shrink-0 text-guide-accent transition-transform [[data-state=open]_&]:rotate-45"
													>+</span
												>
											</Accordion.Trigger>
										</Accordion.Header>
										<Accordion.Content class="flex flex-col gap-2 px-3.5 pb-3.5">
											<Prose html={q.answerHtml} class="text-[14.5px] leading-relaxed" />
											{#if q.ref}
												<a
													href="#{q.ref}"
													onclick={() => !wide.current && closeGuide()}
													class="inline-flex h-7 items-center gap-1.5 self-start rounded-full border border-forest-200 bg-forest-50 px-2.5 font-mono text-xs font-semibold text-forest-800 hover:border-forest-400"
													><IconGavel class="size-3.25" />{m.std_see_ref({ ref: q.ref })}</a
												>
											{/if}
										</Accordion.Content>
									</Accordion.Item>
								{/each}
							</Accordion.Root>
						</section>
					{/if}
				</div>

				<div
					class="flex items-center justify-between gap-3 border-t border-guide-line px-5 py-3.5 text-[13px]"
				>
					<span class="text-guide-ink">{m.std_guide_unclear()}</span>
					<a
						href={issue}
						rel="noopener"
						target="_blank"
						class="inline-flex items-center gap-1.5 font-semibold text-guide-accent hover:text-guide-ink"
						><IconMessagePlus class="size-3.75" />{m.std_guide_improve()}</a
					>
				</div>
			{/if}
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
