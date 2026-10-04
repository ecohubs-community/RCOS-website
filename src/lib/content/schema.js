// @ts-check
/**
 * Schemas for the content documents (content/**.yaml), English side.
 *
 * Objects are strict, so a misspelled field is an error instead of silently
 * ignored text. Translation overlays are checked against the English document
 * instead (see check.mjs): an overlay is valid when merging it into English
 * and splitting again gives the overlay back.
 */
import { z } from 'zod';

const CLAUSE_REF = /^\d+\.\d+\.\d+$/;
const SECTION_REF = /^\d+\.\d+$/;
const text = z.string().min(1);
const slug = z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, 'lowercase-hyphenated');

/** Frontmatter every article has. */
const article = {
	kind: z.string(),
	legacyPath: z.string().regex(/^[a-z0-9/-]+$/),
	/** URL segment when it differs from the file name (e.g. appendix-a-glossary → glossary) */
	slug: slug.optional(),
	// Some ids are digits only, and YAML reads those as numbers; ids are compared as strings.
	id: z.union([z.string().min(6), z.number().int()]),
	title: text,
	parentId: z
		.union([z.string().min(6), z.number().int()])
		.nullable()
		.optional(),
	order: z.number().int(),
	summary: text.optional()
};

// --- Standard chapters --------------------------------------------------------

export const clauseBlock = z.strictObject({
	id: z.string().regex(CLAUSE_REF),
	kind: z.literal('clause'),
	ref: z.string().regex(CLAUSE_REF),
	text,
	items: z.array(text).min(1).optional()
});

export const mdBlock = z.strictObject({
	id: z.string().regex(/^b\d+$/),
	kind: z.literal('md'),
	md: text
});

export const chapterSection = z.strictObject({
	id: z.string(),
	ref: z.string().regex(SECTION_REF).optional(),
	title: text,
	blocks: z.array(z.discriminatedUnion('kind', [clauseBlock, mdBlock]))
});

export const chapter = z.strictObject({
	...article,
	kind: z.literal('chapter'),
	intro: z.string().optional(),
	sections: z.array(chapterSection).optional()
});

// --- Glossary ---------------------------------------------------------------------

export const glossary = z.strictObject({
	...article,
	kind: z.literal('glossary'),
	intro: z.string(),
	terms: z
		.array(
			z.strictObject({
				key: slug,
				term: text,
				definition: text,
				// false: too common to underline in rule text (Community, Member, …)
				autolink: z.boolean().optional()
			})
		)
		.min(1)
});

// --- Templates ----------------------------------------------------------------------

export const templateSection = z.strictObject({
	id: slug,
	title: text,
	blocks: z.array(
		z.discriminatedUnion('kind', [
			z.strictObject({
				id: z.literal('clauses'),
				kind: z.literal('clauses'),
				refs: z.array(z.string().regex(CLAUSE_REF)).min(1),
				note: text.optional()
			}),
			z.strictObject({
				id: z.literal('rationale'),
				kind: z.literal('rationale'),
				summary: text,
				body: text
			}),
			z.strictObject({
				id: z.literal('instructions'),
				kind: z.literal('instructions'),
				summary: text,
				body: text
			}),
			z.strictObject({ id: z.string().regex(/^m\d+$/), kind: z.literal('md'), md: text })
		])
	)
});

export const template = z.strictObject({
	...article,
	kind: z.literal('template'),
	preamble: z.string(),
	sections: z.array(templateSection).min(1)
});

export const index = z.strictObject({ ...article, kind: z.literal('index') });

// --- Prose: layer guides and stress tests -------------------------------------------

const stressTest = {
	severity: z.enum(['high', 'medium', 'low']).optional(),
	stage: z.array(z.enum(['forming', 'growth', 'mature'])).optional(),
	layers: z.array(z.number().int().min(0).max(6)).min(1).optional(),
	invariants: z.array(z.string().regex(/^\d\.\d$/)).optional(),
	remediationReady: z.boolean().optional(),
	tags: z.array(text).optional(),
	symptoms: z.array(text).optional(),
	preventsWith: z.array(z.string()).optional(),
	cascade: z
		.array(
			z.strictObject({
				test: z.string(),
				relation: z.enum(['feeds', 'enables']),
				note: text
			})
		)
		.optional(),
	related: z.array(z.string()).optional()
};

export const doc = z.strictObject({
	...article,
	...stressTest,
	kind: z.literal('doc'),
	headingLevel: z.number().int().min(2).max(4),
	head: z.string(),
	sections: z.array(z.strictObject({ id: slug, title: text, md: z.string() }))
});

export const document = z.discriminatedUnion('kind', [chapter, glossary, template, index, doc]);

// --- Overlay frame ------------------------------------------------------------------

export const overlayFrame = z.looseObject({
	lang: z.enum(['de', 'es', 'fr', 'pt-br']),
	sourceHash: z.string().regex(/^([0-9a-f]{8}|outdated:.*)$/)
});

// --- ownership.yaml -------------------------------------------------------------------

export const ownership = z.strictObject({
	owners: z.record(z.string().regex(CLAUSE_REF), z.string()),
	dispositions: z.record(
		z.string().regex(CLAUSE_REF),
		z.strictObject({
			disposition: z.enum(['satisfied_by_platform', 'not_a_definition']),
			note: text
		})
	),
	sections: z.record(
		z.string(),
		z.strictObject({
			disposition: z.enum(['authored', 'filled_from_decision', 'derived', 'instance_record']),
			note: text
		})
	),
	glossary: z.record(slug, z.string())
});
