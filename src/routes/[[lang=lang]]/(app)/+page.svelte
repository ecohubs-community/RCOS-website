<script lang="ts">
	import { Tabs } from 'bits-ui';
	import ClickToLoad from '$lib/components/embed/ClickToLoad.svelte';
	import SEO from '$lib/components/seo/SEO.svelte';
	import LayerRings from '$lib/components/home/LayerRings.svelte';
	import { buildHomeSchema } from '$lib/utils/jsonld';
	import { m } from '$lib/paraglide/messages.js';
	import { localized } from '$lib/i18n/path';
	import { DEFAULT_LOCALE } from '$lib/i18n/languages';
	import { GITHUB_HREF, MODULES } from '$lib/nav/site-nav';
	import IconArrowDown from '~icons/tabler/arrow-down';
	import IconArrowRight from '~icons/tabler/arrow-right';
	import IconDownload from '~icons/tabler/download';
	import IconBook2 from '~icons/tabler/book-2';
	import IconStack2 from '~icons/tabler/stack-2';
	import IconPuzzle from '~icons/tabler/puzzle';
	import IconFilePencil from '~icons/tabler/file-pencil';
	import IconShieldCheck from '~icons/tabler/shield-check';
	import IconShieldLock from '~icons/tabler/shield-lock';
	import IconBuildingCommunity from '~icons/tabler/building-community';
	import IconBooks from '~icons/tabler/books';
	import IconSeedling from '~icons/tabler/seedling';
	import IconHomeHeart from '~icons/tabler/home-heart';
	import IconMessages from '~icons/tabler/messages';
	import IconCode from '~icons/tabler/code';
	import IconHandClick from '~icons/tabler/hand-click';
	import IconPlus from '~icons/tabler/plus';
	import IconHeadphones from '~icons/tabler/headphones';
	import story1 from '$lib/assets/rcos-story/rcos-story-1.webp';
	import story2 from '$lib/assets/rcos-story/rcos-story-2.webp';
	import story3 from '$lib/assets/rcos-story/rcos-story-3.webp';
	import story4 from '$lib/assets/rcos-story/rcos-story-4.webp';
	import story5 from '$lib/assets/rcos-story/rcos-story-5.webp';

	let { data } = $props();

	const locale = $derived(data.locale ?? DEFAULT_LOCALE);
	const href = (path: string) => (path.startsWith('http') ? path : localized(path, locale));

	// The story: one beat per step, with the layer that would have answered it.
	const story = [
		{
			title: m.home_story_step1_title,
			body: m.home_story_step1_body,
			img: story1,
			alt: m.home_story_step1_alt,
			layer: 1
		},
		{
			title: m.home_story_step2_title,
			body: m.home_story_step2_body,
			img: story2,
			alt: m.home_story_step2_alt,
			layer: null
		},
		{
			title: m.home_story_step3_title,
			body: m.home_story_step3_body,
			img: story3,
			alt: m.home_story_step3_alt,
			layer: 4
		},
		{
			title: m.home_story_step4_title,
			body: m.home_story_step4_body,
			img: story4,
			alt: m.home_story_step4_alt,
			layer: 6
		},
		{
			title: m.home_story_step5_title,
			body: m.home_story_step5_body,
			img: story5,
			alt: m.home_story_step5_alt,
			layer: null
		}
	];
	const layerPath = [
		'/layers/0-identity-scope',
		'/layers/1-membership-system',
		'/layers/2-governance-decision-logic',
		'/layers/3-economic-resource-system',
		'/layers/4-conflict-repair-accountability',
		'/layers/5-operations-coordination',
		'/layers/6-evolution-adaptation'
	];
	const layerShort = [
		m.layer_short_0,
		m.layer_short_1,
		m.layer_short_2,
		m.layer_short_3,
		m.layer_short_4,
		m.layer_short_5,
		m.layer_short_6
	];

	// Real clauses from RCOS Core v0.1: the question, and the rules that make sure it gets answered.
	const examples = [
		{
			question: m.home_what_example_exit_question,
			layer: 1,
			clauses: [
				{ num: '3.6.2', text: m.home_clause_3_6_2 },
				{ num: '3.6.5', text: m.home_clause_3_6_5 }
			],
			path: '/standard/core/0.1/layer-1-membership-system#3.6'
		},
		{
			question: m.home_what_example_purpose_question,
			layer: 0,
			clauses: [{ num: '2.1.1', text: m.home_clause_2_1_1 }],
			path: '/standard/core/0.1/layer-0-identity-scope#2.1'
		}
	];

	const parts = [
		{
			icon: IconBook2,
			name: m.home_parts_core_name,
			what: m.home_parts_core_what,
			path: '/standard/core/0.1'
		},
		{
			icon: IconStack2,
			name: m.home_parts_layers_name,
			what: m.home_parts_layers_what,
			path: '/layers'
		},
		{
			icon: IconPuzzle,
			name: m.home_parts_modules_name,
			what: m.home_parts_modules_what,
			path: '/standard/modules'
		},
		{
			icon: IconFilePencil,
			name: m.home_parts_templates_name,
			what: m.home_parts_templates_what,
			path: '/templates'
		},
		{
			icon: IconShieldCheck,
			name: m.home_parts_stress_tests_name,
			what: m.home_parts_stress_tests_what,
			path: '/stress-tests'
		}
	];

	type Step = { title: () => string; body: () => string; cta: () => string; path: string };
	const audiences: {
		key: string;
		icon: typeof IconSeedling;
		label: () => string;
		pitch: () => string;
		steps: Step[];
	}[] = [
		{
			key: 'founders',
			icon: IconSeedling,
			label: m.home_who_founders_title,
			pitch: m.home_who_founders_body,
			steps: [
				{
					title: m.home_start_step1_title,
					body: m.home_start_step1_body,
					cta: m.home_start_step1_cta,
					path: '/layers'
				},
				{
					title: m.home_pick_purpose_title,
					body: m.home_pick_purpose_body,
					cta: m.home_start_step3_cta,
					path: '/templates/layer-0'
				},
				{
					title: m.home_pick_modules_title,
					body: m.home_pick_modules_body,
					cta: m.home_pick_modules_cta,
					path: '/standard/modules'
				}
			]
		},
		{
			key: 'existing',
			icon: IconHomeHeart,
			label: m.home_who_existing_title,
			pitch: m.home_who_existing_body,
			steps: [
				{
					title: m.home_start_step2_title,
					body: m.home_start_step2_body,
					cta: m.home_start_step2_cta,
					path: '/toolkit/self-assessment'
				},
				{
					title: m.home_pick_others_title,
					body: m.home_pick_others_body,
					cta: m.home_pick_others_cta,
					path: '/stress-tests'
				},
				{
					title: m.home_pick_gaps_title,
					body: m.home_pick_gaps_body,
					cta: m.home_start_step3_cta,
					path: '/templates#downloads'
				}
			]
		},
		{
			key: 'facilitators',
			icon: IconMessages,
			label: m.home_who_facilitators_title,
			pitch: m.home_who_facilitators_body,
			steps: [
				{
					title: m.home_pick_language_title,
					body: m.home_start_step1_body,
					cta: m.home_start_step1_cta,
					path: '/layers'
				},
				{
					title: m.home_pick_cases_title,
					body: m.home_pick_cases_body,
					cta: m.mega_facilitation,
					path: '/toolkit/facilitation-worksheet'
				},
				{
					title: m.home_pick_document_title,
					body: m.home_pick_document_body,
					cta: m.home_start_step3_cta,
					path: '/templates#downloads'
				}
			]
		},
		{
			key: 'builders',
			icon: IconCode,
			label: m.home_who_builders_title,
			pitch: m.home_who_builders_body,
			steps: [
				{
					title: m.home_pick_standard_title,
					body: m.home_pick_standard_body,
					cta: m.home_pick_standard_cta,
					path: '/standard/core/0.1'
				},
				{
					title: m.home_pick_data_title,
					body: m.home_pick_data_body,
					cta: m.site_data,
					path: '/data'
				},
				{
					title: m.home_pick_licence_title,
					body: m.home_pick_licence_body,
					cta: m.home_pick_licence_cta,
					path: GITHUB_HREF
				}
			]
		}
	];
	let audience = $state('founders');

	const more = [
		{
			icon: IconShieldLock,
			title: m.mega_safeguards,
			desc: m.mega_safeguards_desc,
			path: '/safeguards'
		},
		{
			icon: IconBuildingCommunity,
			title: m.mega_refimpl,
			desc: m.mega_refimpl_desc,
			path: '/reference-implementations'
		},
		{ icon: IconBooks, title: m.site_library, desc: m.site_library_lead, path: '/library' }
	];

	const eyebrow = 'font-ui text-[13px] font-semibold tracking-[0.08em] text-accent-ink uppercase';
	const h2 =
		'font-serif text-[clamp(1.875rem,3.6vw,2.75rem)] leading-tight font-bold text-balance text-heading';
	const lead = 'text-lg leading-relaxed text-pretty text-ink-2';
</script>

<svelte:head>
	<!-- The video poster above the fold comes from YouTube's image host. -->
	<link rel="preconnect" href="https://i.ytimg.com" />
</svelte:head>

<SEO
	title={m.site_name()}
	description={m.site_description()}
	url="/"
	type="website"
	jsonLd={buildHomeSchema(locale, m.site_description())}
	locale={data.locale}
/>

<div
	class="mx-auto flex w-full max-w-7xl flex-col gap-24 px-4 pt-10 pb-24 sm:px-6 lg:gap-28 lg:px-8 lg:pt-16"
>
	<!-- Hero, next to the intro video -->
	<section class="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
		<div class="flex flex-col gap-6">
			<p class={eyebrow}>{m.home_hero_eyebrow()}</p>
			<h1
				class="font-serif text-[clamp(2.375rem,5vw,3.75rem)] leading-[1.08] font-bold text-balance text-heading"
			>
				{m.home_title()}
			</h1>
			<p class="{lead} text-xl">{m.home_hero_lead()}</p>
			<div class="flex flex-wrap gap-3">
				<a
					href="#story"
					class="inline-flex h-12 items-center gap-2 rounded-xl bg-brand px-5 font-ui font-semibold text-white hover:opacity-90"
					>{m.home_cta_how_it_works()}<IconArrowDown class="size-4" /></a
				>
				<a
					href={href('/templates#downloads')}
					class="inline-flex h-12 items-center gap-2 rounded-xl border border-line bg-card px-5 font-ui font-semibold text-ink hover:border-forest-400"
					><IconDownload class="size-4" />{m.home_cta_download_templates()}</a
				>
			</div>
			<p class="text-sm text-ink-muted">
				{m.home_already()}
				<a href={href('/standard/core/0.1')} class="font-semibold text-accent-ink hover:underline"
					>{m.home_read_standard()} →</a
				>
			</p>
			<ul
				class="flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-5 font-ui text-sm text-ink-2"
			>
				<li>{m.home_fact_open()}</li>
				<li>{m.home_fact_layers()}</li>
				<li>{m.home_fact_languages()}</li>
			</ul>
		</div>
		<div class="flex flex-col gap-3">
			<div class="overflow-hidden rounded-2xl shadow-panel">
				<ClickToLoad
					src="https://www.youtube-nocookie.com/embed/YNQN5PxXPt0"
					title={m.home_video_title()}
					provider="YouTube"
					poster="https://i.ytimg.com/vi/YNQN5PxXPt0/hqdefault.jpg"
					eager
				/>
			</div>
			<p class="text-sm text-ink-muted">{m.home_video_note()}</p>
		</div>
	</section>

	<!-- Podcast band -->
	<section
		aria-labelledby="podcast"
		class="-my-8 grid items-center gap-6 rounded-3xl border border-line bg-card px-5 py-6 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]"
	>
		<div class="flex gap-4">
			<span
				class="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-guide-chip text-guide-accent"
				><IconHeadphones class="size-5.5" /></span
			>
			<div>
				<h2 id="podcast" class="font-serif text-xl font-semibold text-heading">
					{m.home_podcast_title()}
				</h2>
				<p class="text-ink-2">{m.home_podcast_body()}</p>
			</div>
		</div>
		<ClickToLoad
			src="https://player.rss.com/the-regenerative-future-podcast/2620815?theme=dark&v=2&skip=false"
			title="Redesigning Community: Inside the Regenerative Community Operating System"
			provider="RSS.com"
			kind="audio"
		/>
	</section>

	<!-- The story -->
	<section id="story" aria-labelledby="story-title" class="scroll-mt-24">
		<div class="mb-10 flex max-w-3xl flex-col gap-3">
			<p class={eyebrow}>{m.home_story_eyebrow()}</p>
			<h2 id="story-title" class={h2}>{m.home_story_heading()}</h2>
		</div>
		<ol class="grid gap-4 md:grid-cols-5">
			{#each story as step, i (i)}
				<li
					class={[
						'flex flex-col gap-2 overflow-hidden rounded-2xl border px-4.5 pb-5',
						i === 4 ? 'border-forest-300 bg-hover' : 'border-line bg-card'
					]}
				>
					<!-- The illustration fills the card's top edge (the card's padding is undone). -->
					<img
						src={step.img}
						alt={step.alt()}
						width="800"
						height="600"
						loading="lazy"
						decoding="async"
						class="-mx-4.5 mb-2 aspect-4/3 w-[calc(100%+2.25rem)] max-w-none object-cover"
					/>
					<span class="font-mono text-sm font-bold text-accent-ink">0{i + 1}</span>
					<h3 class="font-ui text-[17px] leading-snug font-semibold text-heading">
						{step.title()}
					</h3>
					<p class="text-[15px] leading-normal text-ink-2">{step.body()}</p>
					{#if step.layer !== null}
						<a
							href={href(layerPath[step.layer])}
							class="mt-auto pt-2 font-ui text-xs font-semibold text-accent-ink hover:underline"
							>{m.layer_label({ n: step.layer })} · {layerShort[step.layer]()}</a
						>
					{/if}
				</li>
			{/each}
		</ol>
		<p class="mt-8 max-w-3xl font-serif text-2xl font-bold text-heading">
			{m.home_story_punchline()}
		</p>
	</section>

	<!-- What RCOS is: questions become numbered rules -->
	<section aria-labelledby="what-title">
		<div class="mb-8 flex max-w-3xl flex-col gap-3">
			<p class={eyebrow}>{m.home_what_eyebrow()}</p>
			<h2 id="what-title" class={h2}>{m.home_what_heading()}</h2>
			<p class={lead}>{m.home_what_body()}</p>
		</div>
		<div class="grid gap-5 lg:grid-cols-2">
			{#each examples as ex (ex.path)}
				<a
					href={href(ex.path)}
					class="flex flex-col overflow-hidden rounded-2xl border border-line bg-card hover:border-forest-300"
				>
					<div class="flex flex-col gap-2 px-5 py-5">
						<p class="font-ui text-[11px] font-semibold tracking-[0.08em] text-ink-faint uppercase">
							{m.home_what_question_label()}
						</p>
						<p class="font-serif text-xl font-semibold text-heading">“{ex.question()}”</p>
					</div>
					<div class="flex flex-1 flex-col gap-2.5 border-t border-line bg-hover px-5 py-4">
						<p
							class="font-ui text-[11px] font-semibold tracking-[0.08em] text-accent-ink uppercase"
						>
							{m.home_what_rule_label()} · {m.layer_label({ n: ex.layer })}
						</p>
						{#each ex.clauses as c (c.num)}
							<p class="flex gap-3 text-[15px] text-ink">
								<span class="shrink-0 pt-0.5 font-mono text-sm font-semibold text-accent-ink"
									>§{c.num}</span
								>{c.text()}
							</p>
						{/each}
					</div>
				</a>
			{/each}
		</div>
		<div class="mt-5 flex flex-wrap items-center justify-between gap-3">
			<p class="text-sm text-ink-muted">{m.home_what_must_note()}</p>
			<a
				href={href('/standard/core/0.1')}
				class="inline-flex items-center gap-1.5 font-ui text-sm font-semibold text-accent-ink hover:underline"
				>{m.home_what_read_core()}<IconArrowRight class="size-4" /></a
			>
		</div>
	</section>

	<!-- The seven layers as rings, and the modules beside them -->
	<section aria-labelledby="layers-title">
		<div class="mb-8 flex max-w-3xl flex-col gap-3">
			<p class={eyebrow}>{m.home_layers_eyebrow()}</p>
			<h2 id="layers-title" class={h2}>{m.home_layers_heading()}</h2>
			<p class={lead}>{m.home_layers_body()}</p>
		</div>
		<div class="grid items-center gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-14">
			<div class="flex min-w-0 flex-col gap-3.5">
				<p class="flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] text-ink-2">
					<span
						class="rounded-md bg-brand px-2 py-0.5 font-ui text-xs font-semibold tracking-[0.06em] text-white uppercase"
						>{m.home_rings_core()}</span
					>
					{m.home_rings_core_note()} ·
					<span class="inline-flex items-center gap-1 font-medium text-accent-ink"
						><IconHandClick class="size-4" />{m.home_rings_tap()}</span
					>
				</p>
				<LayerRings {locale} />
			</div>
			<div
				class="flex flex-col gap-4.5 rounded-3xl border border-dashed border-clay-300 bg-guide px-6 py-6"
			>
				<p class="font-ui text-xs font-semibold tracking-[0.06em] text-guide-accent uppercase">
					{m.mega_modules()}
				</p>
				<h3 class="font-serif text-2xl font-semibold text-heading">{m.home_modules_title()}</h3>
				<ul class="flex flex-col gap-2.5">
					{#each MODULES as mod (mod.href)}
						<li>
							<a
								href={href(mod.href)}
								class="flex items-center gap-3 rounded-xl border border-guide-line bg-card px-3.5 py-3 hover:border-clay-500"
							>
								<span
									class="inline-flex size-8 shrink-0 items-center justify-center rounded-full border-[1.5px] border-dashed border-clay-500 text-clay-800"
									><IconPlus class="size-4" /></span
								>
								<span class="flex flex-col">
									<span class="font-ui text-[15px] font-semibold text-heading">{mod.label()}</span>
									{#if mod.desc}<span class="text-sm text-ink-muted">{mod.desc()}</span>{/if}
								</span>
							</a>
						</li>
					{/each}
				</ul>
				<p class="text-sm text-guide-ink">{m.home_modules_body()}</p>
				<a
					href={href('/standard/modules')}
					class="inline-flex items-center gap-1.5 self-start font-ui text-sm font-semibold text-guide-accent hover:underline"
					>{m.home_modules_all()}<IconArrowRight class="size-4" /></a
				>
			</div>
		</div>
	</section>

	<!-- Five parts -->
	<section aria-labelledby="parts-title">
		<div class="mb-8 flex max-w-3xl flex-col gap-3">
			<p class={eyebrow}>{m.home_parts_eyebrow()}</p>
			<h2 id="parts-title" class={h2}>{m.home_parts_heading()}</h2>
			<p class={lead}>{m.home_parts_body()}</p>
		</div>
		<ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
			{#each parts as part (part.path)}
				<li>
					<a
						href={href(part.path)}
						class="flex h-full flex-col gap-2.5 rounded-2xl border border-line bg-card px-4.5 py-5 hover:border-forest-300"
					>
						<span
							class="inline-flex size-10 items-center justify-center rounded-xl bg-hover text-accent-ink"
							><part.icon class="size-5" /></span
						>
						<h3 class="font-ui text-[17px] font-semibold text-heading">{part.name()}</h3>
						<p class="text-[15px] leading-normal text-ink-2">{part.what()}</p>
					</a>
				</li>
			{/each}
		</ul>
	</section>

	<!-- Start where you are -->
	<section
		aria-labelledby="start-title"
		class="rounded-3xl border border-line bg-hover px-5 py-8 sm:px-8 sm:py-10"
	>
		<div class="mb-6 flex max-w-3xl flex-col gap-3">
			<p class={eyebrow}>{m.home_start_eyebrow()}</p>
			<h2 id="start-title" class={h2}>{m.home_pick_heading()}</h2>
		</div>
		<Tabs.Root bind:value={audience}>
			<Tabs.List class="flex flex-wrap gap-2">
				{#each audiences as a (a.key)}
					<Tabs.Trigger
						value={a.key}
						class="inline-flex h-10 items-center gap-2 rounded-full border border-line bg-card px-4 font-ui text-sm font-semibold text-ink hover:border-forest-400 data-[state=active]:border-brand data-[state=active]:bg-brand data-[state=active]:text-white"
						><a.icon class="size-4" />{a.label()}</Tabs.Trigger
					>
				{/each}
			</Tabs.List>
			{#each audiences as a (a.key)}
				<Tabs.Content value={a.key} class="mt-6 flex flex-col gap-6">
					<p class="max-w-2xl text-lg text-ink-2">{a.pitch()}</p>
					<ol class="grid gap-4 md:grid-cols-3">
						{#each a.steps as step, i (i)}
							<li class="flex flex-col gap-2 rounded-2xl border border-line bg-card px-5 py-5">
								<span
									class="inline-flex size-8 items-center justify-center rounded-full bg-brand font-ui text-sm font-bold text-white"
									>{i + 1}</span
								>
								<h3 class="font-ui text-[17px] font-semibold text-heading">{step.title()}</h3>
								<p class="flex-1 text-[15px] text-ink-2">{step.body()}</p>
								<a
									href={href(step.path)}
									class="inline-flex items-center gap-1.5 self-start pt-1 font-ui text-sm font-semibold text-accent-ink hover:underline"
									>{step.cta()}<IconArrowRight class="size-4" /></a
								>
							</li>
						{/each}
					</ol>
				</Tabs.Content>
			{/each}
		</Tabs.Root>
	</section>

	<!-- Also in the knowledge base -->
	<section aria-labelledby="more-title">
		<h2 id="more-title" class="mb-5 font-serif text-2xl font-semibold text-heading">
			{m.home_more_heading()}
		</h2>
		<ul class="grid gap-4 sm:grid-cols-3">
			{#each more as item (item.path)}
				<li>
					<a
						href={href(item.path)}
						class="flex h-full gap-3 rounded-2xl border border-line bg-card px-4.5 py-4 hover:border-forest-300"
					>
						<item.icon class="mt-0.5 size-5 shrink-0 text-accent-ink" />
						<span class="flex flex-col gap-1">
							<span class="font-ui text-[15.5px] font-semibold text-heading">{item.title()}</span>
							<span class="line-clamp-2 text-sm text-ink-muted">{item.desc()}</span>
						</span>
					</a>
				</li>
			{/each}
		</ul>
	</section>
</div>
