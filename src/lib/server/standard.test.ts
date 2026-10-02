import { describe, expect, it } from 'vitest';
import { standardNav, standardPage, standardPaths } from './standard';

describe('standard pages', () => {
	it('lists every page of the standard', async () => {
		const paths = await standardPaths();
		expect(paths).toContain('/standard');
		expect(paths).toContain('/standard/core/0.1');
		expect(paths).toContain('/standard/core/0.1/layer-0-identity-scope');
		expect(paths).toContain('/standard/core/0.1/glossary');
		expect(paths).toContain('/standard/modules/permaculture/0.1');
		expect(paths).toHaveLength(24);
	});

	it('renders Layer 0 with tokenized clauses', async () => {
		const page = (await standardPage('/standard/core/0.1/layer-0-identity-scope', 'en'))!;
		expect(page.number).toBe('2');
		expect(page.layer).toBe(0);
		expect(page.title).toBe('Identity & Scope');
		expect(page.normative).toBe(true);
		expect(page.sections.map((s) => s.id)).toEqual(['2.1', '2.2', '2.3', '2.4', '2.5']);
		expect(page.sections[0].legacyAnchors).toEqual(['21-purpose-definition']);
		const clause = page.sections[0].blocks[2];
		expect(clause.kind).toBe('clause');
		if (clause.kind !== 'clause') return;
		expect(clause.ref).toBe('2.1.3');
		expect(clause.parts).toContainEqual({ t: 'kw', text: 'MUST', kind: 'must' });
		expect(clause.parts).toContainEqual({
			t: 'layer',
			text: 'Layer 2',
			n: 2,
			href: '/standard/core/0.1/layer-2-governance-decision-logic'
		});
		expect(Object.keys(page.terms)).toContain('invariant');
		expect(page.prev?.path).toBe('/standard/core/0.1/rcos-compliance-model');
		expect(page.next?.path).toBe('/standard/core/0.1/layer-1-membership-system');
	});

	it('renders the German translation with German keywords and localized links', async () => {
		const page = (await standardPage('/standard/core/0.1/layer-0-identity-scope', 'de'))!;
		expect(page.fallback).toBe(false);
		expect(page.title).toBe('Identität & Geltungsbereich');
		const clause = page.sections[0].blocks[0];
		if (clause.kind !== 'clause') throw new Error('expected a clause');
		expect(clause.parts).toContainEqual({ t: 'kw', text: 'MUSS', kind: 'must' });
		expect(page.next?.path).toBe('/de/standard/core/0.1/layer-1-membership-system');
		expect(page.sections[0].legacyAnchors).toContain('21-zweckdefinition');
	});

	it('builds the contents navigation and the clause index', async () => {
		const nav = await standardNav('en');
		expect(nav.start.map((i) => i.number)).toEqual([null, '0', '1']);
		expect(nav.layers.map((i) => i.layer)).toEqual([0, 1, 2, 3, 4, 5, 6]);
		expect(nav.reference.map((i) => i.number)).toEqual(['9', '10', '11', 'A', 'B', 'C']);
		expect(nav.modules.map((i) => i.path)).toEqual([
			'/standard/modules/minimal-permaculture',
			'/standard/modules/permaculture'
		]);
		expect(nav.anchors['2.3.4']).toBe('/standard/core/0.1/layer-0-identity-scope');
	});
});
