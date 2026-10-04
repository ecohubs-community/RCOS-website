import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// WCAG 2.1 A and AA on one page of each kind, in both colour schemes.
const PAGES = [
	'/',
	'/standard/core/0.1/layer-0-identity-scope',
	'/standard/core/0.1/glossary',
	'/templates/layer-0/invariants-register',
	'/layers/2-governance-decision-logic',
	'/stress-tests/founder-informal-veto',
	'/stress-tests',
	'/toolkit/self-assessment',
	'/library',
	'/de/search?q=Austritt'
];

for (const scheme of ['light', 'dark'] as const) {
	for (const path of PAGES) {
		test(`${path} has no WCAG A/AA violations (${scheme})`, async ({ page }) => {
			await page.emulateMedia({ colorScheme: scheme });
			await page.goto(path, { waitUntil: 'networkidle' });
			const { violations } = await new AxeBuilder({ page })
				.withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
				.analyze();
			const summary = violations.map(
				(v) => `${v.id} (${v.impact}): ${v.nodes.length}× e.g. ${v.nodes[0]?.target.join(' ')}`
			);
			expect(summary).toEqual([]);
		});
	}
}
