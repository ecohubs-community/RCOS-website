// @ts-check
/**
 * The published standard data (static/downloads/standard/<standard>/<version>/),
 * which RCOS-compass and anyone else building on RCOS consume.
 *
 * This is the contract. build-standard-data writes it as schema.json next to
 * the data (JSON Schema, draft 2020-12), so consumers can validate without
 * importing code from this repository.
 */
import { z } from 'zod';

const LOCALES = ['en', 'de', 'es', 'fr', 'pt-br'];
const CLAUSE_REF = /^\d+\.\d+\.\d+$/;
const SECTION_KEY = /^[a-z0-9-]+\.[a-z0-9-]+$/;

/** One value per locale; English is always present. */
const perLocale = (/** @type {z.ZodType} */ value) =>
	z.object(Object.fromEntries(LOCALES.map((l) => [l, l === 'en' ? value : value.optional()])));

export const clause = z
	.strictObject({
		ref: z
			.string()
			.regex(CLAUSE_REF)
			.describe('Number as written in the standard, e.g. 2.1.1. Can change between versions.'),
		layer: z.number().int().min(0).max(6),
		specSection: z.strictObject({ ref: z.string(), title: z.string() }).nullable(),
		normativity: z.enum(['MUST', 'SHOULD', 'MAY', 'INFORMATIVE']),
		key: z
			.string()
			.describe('Stable identifier, e.g. l0.purpose-definition.1. Use this to link to a clause.'),
		i18n: perLocale(z.string()),
		disposition: z.enum(['defined_by_section', 'satisfied_by_platform', 'not_a_definition']),
		dispositionNote: z.string().optional(),
		referencedBy: z.array(z.string().regex(SECTION_KEY)),
		owner: z
			.string()
			.regex(SECTION_KEY)
			.nullable()
			.describe('The one template section that answers this clause.')
	})
	.describe('A numbered rule of the standard');

export const section = z
	.strictObject({
		key: z.string().regex(SECTION_KEY).describe('<artifact>.<section>'),
		artifact: z.string(),
		order: z.number().int(),
		clauseRefs: z.array(z.string().regex(CLAUSE_REF)),
		i18n: perLocale(
			z.strictObject({
				title: z.string(),
				whyItMatters: z.string().nullable(),
				whatToDefine: z.string().nullable(),
				placeholders: z.array(z.string()),
				question: z
					.string()
					.optional()
					.describe('The plain-language question this section answers (guidance)'),
				prompts: z.array(z.string()).optional().describe('What an answer should cover (guidance)'),
				examples: z
					.array(z.string())
					.optional()
					.describe("Example answers, each one community's rule; not recommendations (guidance)")
			})
		),
		disposition: z.enum(['authored', 'filled_from_decision', 'derived', 'instance_record']),
		dispositionNote: z.string().nullable(),
		ownsClauses: z.array(z.string().regex(CLAUSE_REF))
	})
	.describe('A section of a template (artifact): one thing a community writes down');

export const artifact = z
	.strictObject({
		key: z.string(),
		sourceId: z.string(),
		layer: z.number().int().min(0).max(6),
		order: z.number().int(),
		i18n: perLocale(z.strictObject({ title: z.string(), summary: z.string().nullable() })),
		mandatory: z.boolean(),
		sectionKeys: z.array(z.string().regex(SECTION_KEY))
	})
	.describe('A template a community fills in');

export const specSection = z
	.strictObject({
		ref: z.string().regex(/^\d+\.\d+$/),
		layer: z.number().int().min(0).max(6),
		i18n: perLocale(
			z.strictObject({
				title: z.string(),
				inShort: z.string(),
				questions: z.array(
					z.strictObject({
						id: z.string(),
						question: z.string(),
						answer: z.string(),
						ref: z.string().nullable().describe('The clause or section that answers it')
					})
				)
			})
		)
	})
	.describe('Guidance for a section of the standard. Non-normative: it never adds rules.');

export const glossaryTerm = z.strictObject({
	key: z.string(),
	i18n: perLocale(z.strictObject({ term: z.string(), definition: z.string() })),
	definedBy: z.string().regex(SECTION_KEY).optional()
});

export const meta = z.strictObject({
	standard: z.string(),
	version: z.string(),
	generated: z.string(),
	licence: z.string(),
	attribution: z.string(),
	source: z.string().url(),
	defaultLocale: z.literal('en'),
	locales: z.array(z.enum(LOCALES)),
	layers: z.array(z.strictObject({ n: z.number().int(), name: z.string() })),
	counts: z.record(z.string(), z.number().int())
});

/** File name → schema of its content. */
export const PUBLISHED = {
	'clauses.yaml': z.array(clause),
	'sections.yaml': z.array(section),
	'artifacts.yaml': z.array(artifact),
	'glossary.yaml': z.array(glossaryTerm),
	'specSections.yaml': z.array(specSection),
	'meta.yaml': meta
};

/** One JSON Schema document describing every published file. */
export function publishedJsonSchema() {
	return {
		$schema: 'https://json-schema.org/draft/2020-12/schema',
		title: 'RCOS standard data',
		description:
			'Schemas for the files published under /downloads/standard/<standard>/<version>/. Licence of the data: CC BY 4.0.',
		$defs: Object.fromEntries(
			Object.entries(PUBLISHED).map(([file, schema]) => [
				file.replace(/\.yaml$/, ''),
				z.toJSONSchema(schema)
			])
		)
	};
}
