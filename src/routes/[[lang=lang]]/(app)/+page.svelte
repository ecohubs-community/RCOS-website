<script lang="ts">
	import { articleBySlug, rootArticles } from '$lib/stores/graph';
	import Card from '$lib/components/common/Card.svelte';
	import Button from '$lib/components/common/Button.svelte';
	import IconBolt from '~icons/tabler/bolt';
	import IconBook2 from '~icons/tabler/book-2';
	import IconClockExclamation from '~icons/tabler/clock-exclamation';
	import IconCode from '~icons/tabler/code';
	import IconDoorExit from '~icons/tabler/door-exit';
	import IconFilePencil from '~icons/tabler/file-pencil';
	import IconHelpHexagon from '~icons/tabler/help-hexagon';
	import IconHomeHeart from '~icons/tabler/home-heart';
	import IconMessages from '~icons/tabler/messages';
	import IconPuzzle from '~icons/tabler/puzzle';
	import IconSeedling from '~icons/tabler/seedling';
	import IconShieldCheck from '~icons/tabler/shield-check';
	import IconStack2 from '~icons/tabler/stack-2';
	import IconWriting from '~icons/tabler/writing';
	import IconArrowDown from '~icons/tabler/arrow-down';
	import IconArrowRight from '~icons/tabler/arrow-right';
	import IconArrowUpRight from '~icons/tabler/arrow-up-right';
	import IconBookmark from '~icons/tabler/bookmark';
	import IconDownload from '~icons/tabler/download';
	import IconInfoCircle from '~icons/tabler/info-circle';
	import SEO from '$lib/components/seo/SEO.svelte';
	import { buildHomeSchema } from '$lib/utils/jsonld';
	import { m } from '$lib/paraglide/messages.js';
	import { localized } from '$lib/i18n/path';
	import { DEFAULT_LOCALE } from '$lib/i18n/languages';

	let { data } = $props();

	const locale = $derived(data.locale ?? DEFAULT_LOCALE);
	const href = (path: string) => localized(path, locale);

	// The story, one beat per step. Icons carry the mood so the text can stay short.
	// Messages are referenced as functions (not built from key strings), so the
	// bundle only carries the messages this page uses.
	const storySteps = [
		{
			key: 'step1',
			icon: IconDoorExit,
			title: m.home_story_step1_title,
			body: m.home_story_step1_body
		},
		{
			key: 'step2',
			icon: IconClockExclamation,
			title: m.home_story_step2_title,
			body: m.home_story_step2_body
		},
		{
			key: 'step3',
			icon: IconBolt,
			title: m.home_story_step3_title,
			body: m.home_story_step3_body
		},
		{
			key: 'step4',
			icon: IconWriting,
			title: m.home_story_step4_title,
			body: m.home_story_step4_body
		},
		{
			key: 'step5',
			icon: IconHelpHexagon,
			title: m.home_story_step5_title,
			body: m.home_story_step5_body
		}
	];

	// Real clauses from RCOS Core v0.1. Numbers stay in code; wording is per-locale
	// in the message bundles, copied from the translated spec.
	const examples = [
		{
			question: m.home_what_example_exit_question,
			layer: 1,
			clauses: [
				{ num: '3.6.2', text: m.home_clause_3_6_2 },
				{ num: '3.6.5', text: m.home_clause_3_6_5 }
			],
			path: '/articles/rcos-core/v0-1/layer-1-membership-system'
		},
		{
			question: m.home_what_example_purpose_question,
			layer: 0,
			clauses: [{ num: '2.1.1', text: m.home_clause_2_1_1 }],
			path: '/articles/rcos-core/v0-1/layer-0-identity-scope'
		}
	];

	const layerSlugs = [
		'layer-0-identity-scope',
		'layer-1-membership-system',
		'layer-2-governance-decision-logic',
		'layer-3-economic-resource-system',
		'layer-4-conflict-repair-accountability',
		'layer-5-operations-coordination',
		'layer-6-evolution-adaptation'
	];
	const layerQuestions = [
		m.home_layers_q0,
		m.home_layers_q1,
		m.home_layers_q2,
		m.home_layers_q3,
		m.home_layers_q4,
		m.home_layers_q5,
		m.home_layers_q6
	];
	// Layers the story touches: leaving (1), the fight (4), fixing the rule (6).
	const storyLayers = new Set([1, 4, 6]);

	const layers = $derived(
		layerSlugs.map((slug, n) => ({
			n,
			path: `/articles/rcos-layers/${slug}`,
			// Localized title from the content graph; the number alone is a safe fallback.
			title: $articleBySlug.get(`rcos-layers/${slug}`)?.title ?? `Layer ${n}`,
			question: layerQuestions[n]()
		}))
	);

	const parts = $derived([
		{
			key: 'core',
			icon: IconBook2,
			name: m.home_parts_core_name,
			what: m.home_parts_core_what,
			use: m.home_parts_core_use,
			path: '/articles/rcos-core/v0-1',
			example: `§3.6.1 “${m.home_clause_3_6_1()}”`
		},
		{
			key: 'layers',
			icon: IconStack2,
			name: m.home_parts_layers_name,
			what: m.home_parts_layers_what,
			use: m.home_parts_layers_use,
			path: '/articles/rcos-layers',
			example: m.home_parts_layers_example()
		},
		{
			key: 'modules',
			icon: IconPuzzle,
			name: m.home_parts_modules_name,
			what: m.home_parts_modules_what,
			use: m.home_parts_modules_use,
			path: '/articles/rcos-modules',
			example: m.home_parts_modules_example()
		},
		{
			key: 'templates',
			icon: IconFilePencil,
			name: m.home_parts_templates_name,
			what: m.home_parts_templates_what,
			use: m.home_parts_templates_use,
			path: '/articles/rcos-templates',
			example: m.home_parts_templates_example()
		},
		{
			key: 'stress_tests',
			icon: IconShieldCheck,
			name: m.home_parts_stress_tests_name,
			what: m.home_parts_stress_tests_what,
			use: m.home_parts_stress_tests_use,
			path: '/articles/rcos-stress-tests',
			example: m.home_parts_stress_tests_example()
		}
	]);

	const audiences = [
		{
			key: 'founders',
			title: m.home_who_founders_title,
			body: m.home_who_founders_body,
			icon: IconSeedling
		},
		{
			key: 'existing',
			title: m.home_who_existing_title,
			body: m.home_who_existing_body,
			icon: IconHomeHeart
		},
		{
			key: 'facilitators',
			title: m.home_who_facilitators_title,
			body: m.home_who_facilitators_body,
			icon: IconMessages
		},
		{
			key: 'builders',
			title: m.home_who_builders_title,
			body: m.home_who_builders_body,
			icon: IconCode
		}
	];

	const startSteps = [
		{
			key: 'step1',
			title: m.home_start_step1_title,
			body: m.home_start_step1_body,
			cta: m.home_start_step1_cta,
			path: '/articles/rcos-layers'
		},
		{
			key: 'step2',
			title: m.home_start_step2_title,
			body: m.home_start_step2_body,
			cta: m.home_start_step2_cta,
			path: '/articles/rcos-stress-tests/self-assessment'
		},
		{
			key: 'step3',
			title: m.home_start_step3_title,
			body: m.home_start_step3_body,
			cta: m.home_start_step3_cta,
			path: '/articles/rcos-templates#downloads'
		}
	];

	// Root articles the "five parts" section doesn't already cover.
	const coveredRoots = new Set([
		'rcos-core',
		'rcos-layers',
		'rcos-modules',
		'rcos-templates',
		'rcos-stress-tests'
	]);
	const moreArticles = $derived($rootArticles.filter((a) => !coveredRoots.has(a.slug)));
</script>

<SEO
	title={m.site_name()}
	description={m.site_description()}
	url="/"
	type="website"
	jsonLd={buildHomeSchema(locale, m.site_description())}
	locale={data.locale}
/>

{#snippet sectionHeader(eyebrow: string, heading: string, body?: string)}
	<div class="max-w-3xl mb-10">
		<p class="text-sm font-semibold uppercase tracking-wider text-primary mb-3">{eyebrow}</p>
		<h2 class="text-3xl md:text-4xl font-bold font-serif text-text-primary leading-tight">
			{heading}
		</h2>
		{#if body}
			<p class="text-lg text-text-secondary mt-4 leading-relaxed">{body}</p>
		{/if}
	</div>
{/snippet}

<div class="space-y-24 pb-12">
	<!-- Hero -->
	<section
		class="relative rounded-2xl overflow-hidden bg-linear-to-br from-forest-50 to-blue-50 dark:from-forest-900 dark:to-blue-900 border border-border"
	>
		<div
			class="absolute inset-0 opacity-10 dark:opacity-20"
			style="background-image: radial-gradient(var(--color-primary) 1px, transparent 1px); background-size: 24px 24px;"
		></div>

		<div class="relative z-10 px-xl py-3xl text-center max-w-3xl mx-auto">
			<p class="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
				{m.home_hero_eyebrow()}
			</p>
			<h1
				class="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-gradient mb-6 leading-tight"
			>
				{m.home_title()}
			</h1>
			<p class="text-lg md:text-xl text-text-secondary mb-8 leading-relaxed">
				{m.home_hero_lead()}
			</p>

			<div class="flex flex-wrap justify-center gap-4">
				<Button variant="primary" size="lg" href="#story" class="gap-2">
					{m.home_cta_how_it_works()}
					<IconArrowDown class="w-4 h-4" />
				</Button>
				<Button
					variant="secondary"
					size="lg"
					href={href('/articles/rcos-templates#downloads')}
					class="gap-2"
				>
					<IconDownload class="w-4 h-4" />
					{m.home_cta_download_templates()}
				</Button>
				<Button variant="outline" size="lg" href={href('/articles')}
					>{m.home_cta_explore_articles()}</Button
				>
			</div>
		</div>
	</section>

	<!-- 1. The story -->
	<section id="story" class="scroll-mt-24">
		{@render sectionHeader(m.home_story_eyebrow(), m.home_story_heading())}

		<ol class="relative max-w-3xl border-l-2 border-border ml-5 space-y-10">
			{#each storySteps as step, i (step.key)}
				<li class="relative pl-10">
					<span
						class="absolute -left-[21px] top-0 flex items-center justify-center w-10 h-10 rounded-full border-2 border-background
              {i === 2
							? 'bg-highlight text-white'
							: i === storySteps.length - 1
								? 'bg-primary text-white'
								: 'bg-surface-elevated text-text-secondary'}"
						aria-hidden="true"
					>
						<step.icon class="w-5 h-5" />
					</span>
					<h3 class="text-xl font-bold text-text-primary mb-1 pt-1.5">
						{step.title()}
					</h3>
					<p class="text-text-secondary leading-relaxed">{step.body()}</p>
				</li>
			{/each}
		</ol>

		<p class="max-w-3xl mt-10 text-2xl md:text-3xl font-serif font-bold text-primary">
			{m.home_story_punchline()}
		</p>
	</section>

	<!-- 2. What RCOS is: questions become numbered rules -->
	<section>
		{@render sectionHeader(m.home_what_eyebrow(), m.home_what_heading(), m.home_what_body())}

		<p class="text-text-secondary mb-6 max-w-3xl">{m.home_what_examples_intro()}</p>

		<div class="grid gap-6 lg:grid-cols-2">
			{#each examples as ex (ex.path)}
				<a
					href={href(ex.path)}
					class="group block rounded-xl border border-border bg-surface overflow-hidden transition-all hover:border-primary-light/50 hover:shadow-lg"
				>
					<div class="p-lg">
						<p class="text-xs font-semibold uppercase tracking-wider text-text-tertiary mb-2">
							{m.home_what_question_label()}
						</p>
						<p class="text-xl font-serif font-bold text-text-primary">“{ex.question()}”</p>
					</div>
					<div class="p-lg bg-primary/5 dark:bg-primary/10 border-t border-border">
						<p
							class="text-xs font-semibold uppercase tracking-wider text-primary mb-3 flex items-center gap-2"
						>
							<IconArrowDown class="w-4 h-4" />
							{m.home_what_rule_label()} · {layers[ex.layer].title}
						</p>
						<ul class="space-y-2">
							{#each ex.clauses as clause (clause.num)}
								<li class="flex gap-3 text-text-primary">
									<span class="font-mono text-sm font-semibold text-primary shrink-0 pt-0.5"
										>§{clause.num}</span
									>
									<span>{clause.text()}</span>
								</li>
							{/each}
						</ul>
					</div>
				</a>
			{/each}
		</div>

		<div class="mt-6 flex flex-col sm:flex-row sm:items-center gap-4 justify-between max-w-full">
			<p class="text-sm text-text-tertiary flex gap-2 max-w-2xl">
				<IconInfoCircle class="w-5 h-5 shrink-0" />
				<span>{m.home_what_must_note()}</span>
			</p>
			<Button variant="ghost" href={href('/articles/rcos-core/v0-1')} class="gap-2 shrink-0">
				{m.home_what_read_core()}
				<IconArrowRight class="w-4 h-4" />
			</Button>
		</div>
	</section>

	<!-- 3. The seven layers -->
	<section>
		{@render sectionHeader(m.home_layers_eyebrow(), m.home_layers_heading(), m.home_layers_body())}

		<!-- Listed top-down from 6 to 0 so it reads like a stack resting on its foundation -->
		<ol class="space-y-2 max-w-4xl">
			{#each [...layers].reverse() as layer (layer.n)}
				<li>
					<a
						href={href(layer.path)}
						class="group flex items-center gap-4 rounded-lg border px-4 py-3 transition-colors hover:border-primary-light/50 hover:bg-surface-elevated
              {storyLayers.has(layer.n)
							? 'border-highlight/50 bg-highlight/5'
							: 'border-border bg-surface'}"
					>
						<span
							class="flex items-center justify-center w-9 h-9 rounded-md bg-primary text-white font-bold font-mono shrink-0"
							>{layer.n}</span
						>
						<span class="flex-1 min-w-0">
							<span
								class="block font-semibold text-text-primary group-hover:text-primary transition-colors"
								>{layer.title}</span
							>
							<span class="block text-sm text-text-secondary">{layer.question}</span>
						</span>
						{#if storyLayers.has(layer.n)}
							<span
								class="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-highlight-dark dark:text-highlight shrink-0"
							>
								<IconBookmark class="w-4 h-4" />
								{m.home_layers_in_story()}
							</span>
						{/if}
						{#if layer.n === 0}
							<span
								class="hidden sm:inline text-xs font-semibold uppercase tracking-wider text-text-tertiary shrink-0"
								>{m.home_layers_foundation()}</span
							>
						{/if}
					</a>
				</li>
			{/each}
		</ol>

		<div class="mt-6 flex flex-col sm:flex-row sm:items-center gap-4 justify-between max-w-4xl">
			<p class="text-sm text-text-secondary flex gap-2 max-w-2xl">
				<IconBookmark class="w-5 h-5 shrink-0 text-highlight-dark dark:text-highlight" />
				<span>{m.home_layers_story_note()}</span>
			</p>
			<Button variant="ghost" href={href('/articles/rcos-layers')} class="gap-2 shrink-0">
				{m.home_layers_read_more()}
				<IconArrowRight class="w-4 h-4" />
			</Button>
		</div>
	</section>

	<!-- 4. The five parts -->
	<section>
		{@render sectionHeader(m.home_parts_eyebrow(), m.home_parts_heading(), m.home_parts_body())}

		<!-- Two cards over three on wide screens; on two columns the last one spans the row -->
		<div class="grid gap-6 md:grid-cols-2 xl:grid-cols-6">
			{#each parts as part, i (part.key)}
				{@const name = part.name()}
				{@const span =
					i < 2
						? 'xl:col-span-3'
						: i === parts.length - 1
							? 'md:col-span-2 xl:col-span-2'
							: 'xl:col-span-2'}
				<Card href={href(part.path)} class="h-full flex flex-col group {span}">
					<div class="flex items-center gap-3 mb-4">
						<span
							class="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary-light/20 text-primary-dark dark:text-primary"
						>
							<part.icon class="w-5 h-5" />
						</span>
						<h3
							class="text-xl font-bold text-text-primary group-hover:text-primary transition-colors"
						>
							{name}
						</h3>
					</div>
					<p class="text-text-primary font-medium mb-2">{part.what()}</p>
					<p class="text-text-secondary text-sm mb-4">{part.use()}</p>
					<div class="mt-auto pt-4 border-t border-border">
						<p class="text-xs font-semibold uppercase tracking-wider text-text-tertiary mb-1">
							{m.home_parts_example_label()}
						</p>
						<p class="text-sm text-text-secondary italic">{part.example}</p>
					</div>
				</Card>
			{/each}
		</div>
	</section>

	<!-- 5. Who it's for -->
	<section>
		{@render sectionHeader(m.home_who_eyebrow(), m.home_who_heading())}

		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each audiences as a (a.key)}
				<div class="rounded-xl border border-border bg-surface p-lg">
					<a.icon class="w-7 h-7 text-primary mb-3" />
					<h3 class="font-bold text-text-primary mb-2">{a.title()}</h3>
					<p class="text-sm text-text-secondary">{a.body()}</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- 6. Where to start -->
	<section
		class="rounded-2xl border border-border bg-linear-to-br from-forest-50 to-amber-50 dark:from-forest-900/60 dark:to-soil-900/60 p-xl md:p-2xl"
	>
		{@render sectionHeader(m.home_start_eyebrow(), m.home_start_heading())}

		<ol class="grid gap-6 md:grid-cols-3">
			{#each startSteps as step, i (step.key)}
				<li class="flex flex-col">
					<span
						class="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold mb-4"
						>{i + 1}</span
					>
					<h3 class="text-lg font-bold text-text-primary mb-2">
						{step.title()}
					</h3>
					<p class="text-text-secondary mb-4 flex-1">{step.body()}</p>
					<Button
						variant={i === 2 ? 'primary' : 'outline'}
						href={href(step.path)}
						class="gap-2 self-start"
					>
						{step.cta()}
						<IconArrowRight class="w-4 h-4" />
					</Button>
				</li>
			{/each}
		</ol>
	</section>

	<!-- 7. Watch & listen -->
	<section>
		<div class="max-w-3xl mb-8">
			<h2 class="text-3xl font-bold font-serif text-text-primary">{m.home_media_heading()}</h2>
			<p class="text-text-secondary mt-2">{m.home_media_body()}</p>
		</div>

		<div class="grid gap-6 lg:grid-cols-2 items-start">
			<div class="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
				<iframe
					src="https://www.youtube-nocookie.com/embed/YNQN5PxXPt0"
					title={m.home_video_title()}
					loading="lazy"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
					class="w-full h-full"
				></iframe>
			</div>
			<div class="space-y-4">
				<iframe
					src="https://player.rss.com/the-regenerative-future-podcast/2620815?theme=dark&v=2&skip=false"
					width="100%"
					height="195px"
					title="Redesigning Community: Inside the Regenerative Com"
					loading="lazy"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
					scrolling="no"
					class="rounded-xl"
					><a href="https://rss.com/podcasts/the-regenerative-future-podcast/2620815/"
						>Redesigning Community: Inside the Regenerative Com | RSS.com</a
					></iframe
				>
				<Button
					variant="outline"
					href="https://ecohubs.community"
					target="_blank"
					rel="noopener"
					class="gap-2"
				>
					{m.home_cta_learn_more()}
					<IconArrowUpRight class="w-4 h-4" />
				</Button>
			</div>
		</div>
	</section>

	<!-- More root articles not covered above (e.g. safeguards, reference implementations) -->
	{#if moreArticles.length > 0}
		<section>
			<h2 class="text-2xl font-bold font-serif text-text-primary mb-6">{m.home_more_heading()}</h2>
			<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each moreArticles as article (article.id)}
					<Card href={href(`/articles/${article.slug}`)} class="h-full flex flex-col">
						<h3 class="text-lg font-bold text-text-primary mb-2">{article.title}</h3>
						{#if article.summary}
							<p class="text-sm text-text-secondary line-clamp-3">{article.summary}</p>
						{/if}
					</Card>
				{/each}
			</div>
		</section>
	{/if}
</div>
