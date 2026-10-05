import { describe, expect, it } from 'vitest';
import { standardNav, standardPage, standardPaths, standardPrint } from './standard';

const order = { high: 0, medium: 1, low: 2, other: 3 };

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

	it('relates a layer to its guide, templates and stress tests', async () => {
		const page = (await standardPage('/standard/core/0.1/layer-0-identity-scope', 'de'))!;
		const r = page.related!;
		expect(r.layer).toBe(0);
		expect(r.guide?.href).toBe('/de/layers/0-identity-scope');
		expect(r.templates.map((t) => t.ref)).toEqual(['§2.1', '§2.2', '§2.3', '§2.4']);
		expect(r.templates[0].href).toBe('/de/templates/layer-0/purpose-charter');
		expect(r.templatesHref).toBe('/de/templates/layer-0');
		// Tests mainly about Layer 0 first, by severity; tests that also touch it last.
		const levels = r.tests.map((t) => t.level);
		expect(levels).toEqual([...levels].sort((a, b) => order[a] - order[b]));
		expect(r.tests.find((t) => t.href.endsWith('/founder-informal-veto'))?.level).toBe('other');
		expect(page.layerTitles[2]).toBe('Governance & Entscheidungslogik');
		expect(page.glossaryPath).toBe('/de/standard/core/0.1/glossary');
		// Chapters that are not layers have no related card.
		expect((await standardPage('/standard/core/0.1/glossary', 'en'))!.related).toBeNull();
	});

	it('puts the whole core on one print page with links inside the document', async () => {
		const doc = (await standardPrint('de'))!;
		expect(doc.chapters.map((c) => c.number)).toEqual([
			...['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
			...['A', 'B', 'C']
		]);
		const json = JSON.stringify(doc);
		// Every site link is either inside the document or absolute.
		expect(json).not.toMatch(/href(=\\"|":")\//);
		const layer0 = doc.chapters.find((c) => c.layer === 0)!;
		const clause = layer0.sections[0].blocks[2];
		if (clause.kind !== 'clause') throw new Error('expected a clause');
		expect(clause.parts).toContainEqual(
			expect.objectContaining({ t: 'layer', href: '#ch-layer-2-governance-decision-logic' })
		);
	});

	it('adds guidance, templates and stress tests to each section', async () => {
		const page = (await standardPage('/standard/core/0.1/layer-0-identity-scope', 'de'))!;
		const invariants = page.sections.find((s) => s.ref === '2.3')!;
		const g = invariants.guide!;
		// The guidance is translated, like the template rationale it sits next to.
		expect(g.lang).toBe('de');
		expect(g.questions.find((q) => q.id === 'emergency')?.question).toMatch(/Notfall/);
		expect(g.why[0].source.template).toBe('Invariantenregister');
		expect(g.examples.length).toBeGreaterThan(0);
		expect(g.questions.find((q) => q.id === 'emergency')?.ref).toBe('2.3.4');
		const clause = invariants.blocks.find((b) => b.kind === 'clause' && b.ref === '2.3.4');
		expect(clause?.kind === 'clause' && clause.question).toBe('emergency');
		expect(invariants.practice[0].href).toBe(
			'/de/templates/layer-0/invariants-register#active-invariants'
		);
		expect(invariants.testedBy.map((t) => t.href)).toContain(
			'/de/stress-tests/unprotected-core-invariants'
		);
		// Every numbered section of every layer has guidance.
		for (const n of [0, 1, 2, 3, 4, 5, 6]) {
			const nav = await standardNav('en');
			const layer = (await standardPage(nav.layers[n].path, 'en'))!;
			for (const s of layer.sections) expect(s.guide, `§${s.ref}`).not.toBeNull();
		}
	});

	it('builds the contents navigation and the clause index', async () => {
		const nav = await standardNav('en');
		expect(nav.start.map((i) => i.number)).toEqual([null, '0', '1']);
		expect(nav.layers.map((i) => i.layer)).toEqual([0, 1, 2, 3, 4, 5, 6]);
		expect(nav.reference.map((i) => i.number)).toEqual(['9', '10', '11', 'A', 'B', 'C']);
		expect(nav.modules.map((i) => [i.root, i.path])).toEqual([
			['/standard/modules/minimal-permaculture', '/standard/modules/minimal-permaculture/0.1'],
			['/standard/modules/permaculture', '/standard/modules/permaculture/0.1']
		]);
		expect(nav.modules[1].pages?.map((x) => [x.kind, x.path])).toEqual([
			['about', '/standard/modules/permaculture'],
			['definitions', '/standard/modules/permaculture/0.1'],
			['page', '/standard/modules/permaculture/0.1/additional-artifacts']
		]);
		expect(nav.anchors['2.3.4']).toBe('/standard/core/0.1/layer-0-identity-scope');
	});
});
