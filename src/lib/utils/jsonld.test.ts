import { describe, expect, it } from 'vitest';
import {
	buildDownloadsSchema,
	buildGlossarySchema,
	buildPageLd,
	buildStandardSchema
} from './jsonld';

describe('structured data', () => {
	it('marks a chapter as part of the draft standard, under CC BY', () => {
		const ld = buildStandardSchema({
			title: 'Identity & Scope',
			path: '/standard/core/0.1/layer-0-identity-scope',
			locale: 'de',
			inLanguage: 'de'
		});
		expect(ld['@type']).toBe('TechArticle');
		expect(ld.url).toMatch(/\/de\/standard\/core\/0\.1\/layer-0-identity-scope$/);
		expect(ld.isPartOf).toMatchObject({ version: '0.1', creativeWorkStatus: 'Draft' });
	});

	it('lists glossary terms with anchors and downloads with media types', () => {
		const set = buildGlossarySchema(
			[{ key: 'invariant', term: 'Invariant', definition: 'A hard limit.' }],
			{
				title: 'Glossary',
				path: '/standard/core/0.1/glossary',
				locale: 'en'
			}
		);
		expect((set.hasDefinedTerm as { url: string }[])[0].url).toMatch(/#term-invariant$/);
		const [md, docx] = buildDownloadsSchema(
			'Purpose Charter',
			{ md: '/downloads/en/a.md', docx: '/downloads/en/a.docx' },
			'en'
		);
		expect(md.encodingFormat).toBe('text/markdown');
		expect(String(docx.encodingFormat)).toContain('wordprocessingml');
	});

	it('builds breadcrumbs from the crumbs a page shows, without the locale prefix', () => {
		const [, crumbs] = buildPageLd({
			title: 'Founder Informal Veto',
			path: '/stress-tests/founder-informal-veto',
			locale: 'de',
			crumbs: [
				{ label: 'Stresstests', href: '/de/stress-tests' },
				{ label: 'Founder Informal Veto' }
			]
		});
		const items = crumbs.itemListElement as { item: string }[];
		expect(items.map((i) => i.item.replace(/^https?:\/\/[^/]+/, ''))).toEqual([
			'/de',
			'/de/stress-tests',
			'/de/stress-tests/founder-informal-veto'
		]);
	});
});
