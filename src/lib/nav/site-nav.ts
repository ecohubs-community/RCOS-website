/**
 * Every link in the site header, mobile drawer and footer, in one place.
 *
 * Paths are locale-neutral (`localized()` adds the prefix).
 *
 * Labels are message functions, not strings, so they are evaluated in the
 * active locale at render time and each page ships only the messages it uses.
 */
import type { Component } from 'svelte';
import { m } from '$lib/paraglide/messages.js';
import IconFilePencil from '~icons/tabler/file-pencil';
import IconMessages from '~icons/tabler/messages';
import IconChecklist from '~icons/tabler/checklist';
import IconShieldCheck from '~icons/tabler/shield-check';
import IconShieldLock from '~icons/tabler/shield-lock';
import IconBuildingCommunity from '~icons/tabler/building-community';
import IconBooks from '~icons/tabler/books';
import IconPlant2 from '~icons/tabler/plant-2';
import IconSeedling from '~icons/tabler/seedling';

type Msg = () => string;

export interface NavLink {
	label: Msg;
	href: string;
	desc?: Msg;
	/** Short marker shown before the label: a § number, chapter number or appendix letter. */
	num?: string;
	icon?: Component;
}

const CORE = '/standard/core/0.1';

export const STANDARD_HREF = CORE;
export const ABOUT_ECOHUBS_HREF = 'https://ecohubs.community';
export const GITHUB_HREF = 'https://github.com/ecohubs-community/RCOS-website';

const LAYER_SLUGS = [
	'layer-0-identity-scope',
	'layer-1-membership-system',
	'layer-2-governance-decision-logic',
	'layer-3-economic-resource-system',
	'layer-4-conflict-repair-accountability',
	'layer-5-operations-coordination',
	'layer-6-evolution-adaptation'
] as const;

const LAYER_NAMES: Msg[] = [
	m.layer_name_0,
	m.layer_name_1,
	m.layer_name_2,
	m.layer_name_3,
	m.layer_name_4,
	m.layer_name_5,
	m.layer_name_6
];

const LAYER_QUESTIONS: Msg[] = [
	m.home_layers_q0,
	m.home_layers_q1,
	m.home_layers_q2,
	m.home_layers_q3,
	m.home_layers_q4,
	m.home_layers_q5,
	m.home_layers_q6
];

export interface NavLayer {
	n: number;
	name: Msg;
	question: Msg;
	/** Plain-language guide */
	guide: string;
	/** The chapter in the standard */
	rules: string;
	templates: string;
	/** Chapter number in the standard: Layer N is §N+2 */
	sec: string;
}

export const LAYERS: NavLayer[] = LAYER_SLUGS.map((slug, n) => ({
	n,
	name: LAYER_NAMES[n],
	question: LAYER_QUESTIONS[n],
	guide: `/layers/${slug.replace(/^layer-/, '')}`,
	rules: `${CORE}/${slug}`,
	templates: `/templates/layer-${n}`,
	sec: `§${n + 2}`
}));

export const START_HERE: NavLink[] = [
	{ num: '→', label: m.mega_about_core, desc: m.mega_about_core_desc, href: '/standard' },
	{ num: '0', label: m.mega_intro, desc: m.mega_intro_desc, href: `${CORE}/introduction` },
	{
		num: '1',
		label: m.mega_compliance,
		desc: m.mega_compliance_desc,
		href: `${CORE}/rcos-compliance-model`
	}
];

export const MODULES: NavLink[] = [
	{
		icon: IconPlant2,
		label: m.mega_module_permaculture,
		desc: m.mega_module_permaculture_desc,
		href: '/standard/modules/permaculture'
	},
	{
		icon: IconSeedling,
		label: m.mega_module_minimal,
		desc: m.mega_module_minimal_desc,
		href: '/standard/modules/minimal-permaculture'
	}
];

export const REFERENCE: NavLink[] = [
	{ num: '9', label: m.mega_ref_non_normative, href: `${CORE}/non-normative-sections` },
	{ num: '10', label: m.mega_ref_auditing, href: `${CORE}/compliance-auditing` },
	{
		num: '11',
		label: m.mega_ref_versioning,
		href: `${CORE}/versioning-governance-of-the-standard`
	},
	{ num: 'A', label: m.mega_ref_glossary, href: `${CORE}/glossary` },
	{
		num: 'B',
		label: m.mega_ref_examples,
		href: `${CORE}/example-artifacts`
	},
	{
		num: 'C',
		label: m.mega_ref_refimpl,
		href: `${CORE}/reference-implementation-summary`
	}
];

export const LAYERS_INTRO_HREF = '/layers';

export interface NavGroup {
	title: Msg;
	items: NavLink[];
}

export const TOOLKIT: NavGroup[] = [
	{
		title: m.mega_group_write,
		items: [
			{
				icon: IconFilePencil,
				label: m.mega_templates,
				desc: m.mega_templates_desc,
				href: '/templates#downloads'
			},
			{
				icon: IconMessages,
				label: m.mega_facilitation,
				desc: m.mega_facilitation_desc,
				href: '/toolkit/facilitation-worksheet'
			}
		]
	},
	{
		title: m.mega_group_check,
		items: [
			{
				icon: IconChecklist,
				label: m.mega_self_assessment,
				desc: m.mega_self_assessment_desc,
				href: '/toolkit/self-assessment'
			},
			{
				icon: IconShieldCheck,
				label: m.mega_stress_tests,
				desc: m.mega_stress_tests_desc,
				href: '/stress-tests'
			}
		]
	},
	{
		title: m.mega_group_deeper,
		items: [
			{
				icon: IconShieldLock,
				label: m.mega_safeguards,
				desc: m.mega_safeguards_desc,
				href: '/safeguards'
			},
			{
				icon: IconBuildingCommunity,
				label: m.mega_refimpl,
				desc: m.mega_refimpl_desc,
				href: '/reference-implementations'
			},
			{
				icon: IconBooks,
				label: m.mega_all_articles,
				desc: m.mega_all_articles_desc,
				href: '/library'
			}
		]
	}
];

export const FOOTER_STANDARD: NavLink[] = [
	{ label: m.mega_about_core, href: '/standard' },
	{ label: m.footer_core_version, href: CORE },
	{ label: m.mega_seven_layers, href: LAYERS_INTRO_HREF },
	{ label: m.mega_modules, href: '/standard/modules' },
	{ label: m.mega_ref_glossary, href: `${CORE}/glossary` }
];

export const FOOTER_TOOLKIT: NavLink[] = [
	{ label: m.mega_templates, href: '/templates#downloads' },
	{ label: m.mega_self_assessment, href: '/toolkit/self-assessment' },
	{ label: m.mega_stress_tests, href: '/stress-tests' },
	{ label: m.mega_safeguards, href: '/safeguards' }
];

export const FOOTER_ECOHUBS: NavLink[] = [
	{ label: m.footer_link_about_us, href: ABOUT_ECOHUBS_HREF },
	{ label: m.footer_link_join_us, href: 'https://ecohubs.community/membership' },
	{ label: m.footer_link_github, href: GITHUB_HREF }
];

export const PRIVACY_HREF = 'https://ecohubs.community/privacy';
export const TERMS_HREF = 'https://ecohubs.community/terms';
