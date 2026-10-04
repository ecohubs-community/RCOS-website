import { describe, expect, it } from 'vitest';
import {
	coverage,
	guidePage,
	sitePaths,
	stressTestPage,
	stressTestsHub,
	templateLayer,
	templatePage
} from './site';
import { buildAssessment } from './assessment';
import { PAGE_KEYS, readPage } from './pages';

describe('site pages', () => {
	it('lists every template, layer guide and stress test', async () => {
		const paths = await sitePaths();
		expect(paths).toContain('/templates/layer-0');
		expect(paths).toContain('/templates/layer-0/purpose-charter');
		expect(paths).toContain('/layers/0-identity-scope');
		expect(paths).toContain('/stress-tests/founder-informal-veto');
		expect(paths.filter((p) => p.startsWith('/stress-tests/'))).toHaveLength(24);
		expect(paths.filter((p) => /^\/templates\/layer-\d\/./.test(p))).toHaveLength(22);
	});

	it('builds a template page with clauses, guidance and downloads', async () => {
		const p = (await templatePage('/templates/layer-0/invariants-register', 'de'))!;
		expect(p.layer.n).toBe(0);
		expect(p.title).toBe('Invariantenregister');
		const s = p.sections[0];
		expect(s.id).toBe('active-invariants');
		expect(s.legacyAnchors).toEqual(['aktive-invarianten']);
		const clauses = s.blocks.find((b) => b.kind === 'clauses');
		expect(clauses?.kind === 'clauses' && clauses.clauses[0].href).toBe(
			'/de/standard/core/0.1/layer-0-identity-scope#2.3.1'
		);
		expect(s.guide?.question).toBeTruthy();
		expect(p.downloads?.type).toBe('single');
		// Placeholders survive as text, not as tags.
		expect(JSON.stringify(p.sections)).toContain('&lt;JJJJ-MM-TT&gt;');
		expect((await templateLayer(0, 'en'))!.templates).toHaveLength(4);
	});

	it('shows layer invariants as INV ids with anchors (Q-9)', async () => {
		const g = (await guidePage('/layers/2-governance-decision-logic', 'en'))!;
		expect(g.invariants.map((i) => i.code)).toEqual(['INV-2.1', 'INV-2.2', 'INV-2.3', 'INV-2.4']);
		expect(g.sections.find((s) => s.id === 'layer-invariants')?.html).toContain('id="inv-2-1"');
		expect(g.links.rules).toBe('/standard/core/0.1/layer-2-governance-decision-logic');
	});

	it('groups stress tests by primary layer and links what they test', async () => {
		const hub = await stressTestsHub('en');
		expect(hub.total).toBe(24);
		expect(hub.groups[2].tests.map((t) => t.path)).toContain(
			'/stress-tests/charismatic-spiritual-authority'
		);
		const t = (await stressTestPage('/stress-tests/founder-informal-veto', 'en'))!;
		expect(t.tests.map((x) => x.href)).toContain(
			'/standard/core/0.1/layer-2-governance-decision-logic#4.3'
		);
		expect(t.preventsWith[0].href).toMatch(/^\/templates\/layer-2\//);
		expect(t.invariants.map((i) => i.code)).toEqual(['INV-2.2', 'INV-2.3']);
		const cov = await coverage('en');
		expect(cov.total).toBeGreaterThan(20);
		expect(cov.covered).toBeGreaterThan(0);
	});

	it('builds the self-assessment by layer, and reads every markdown page', async () => {
		const a = await buildAssessment('de');
		expect(a.totalTests).toBe(24);
		expect(a.categories.map((c) => c.layer)).toEqual([0, 1, 2, 3, 4, 5, 6]);
		expect(a.categories[2].tests[0].href).toMatch(/^\/de\/stress-tests\//);
		for (const key of PAGE_KEYS) expect((await readPage(key, 'de'))?.title, key).toBeTruthy();
	});
});
