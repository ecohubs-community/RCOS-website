/**
 * The stress-test self-assessment: every test's warning signs, severity and
 * the templates that prevent it, grouped by primary layer (the first entry of
 * `layers`, as on the stress-tests hub). Read from the YAML, so it never goes
 * stale as tests change.
 */
import { siteRoute } from '$lib/content/routes.js';
import { DEFAULT_LOCALE } from '$lib/i18n/languages';
import { loadStore, localized, localizePath } from './docs';
import type { Assessment, AssessmentSeverity, AssessmentTest } from '$lib/types/assessment';

export type { Assessment };

const SEVERITIES: AssessmentSeverity[] = ['low', 'medium', 'high'];

export async function buildAssessment(locale: string = DEFAULT_LOCALE): Promise<Assessment> {
	const store = await loadStore();
	const route = (file: string) => localizePath(siteRoute(file) ?? '/', locale);
	const byLegacy = new Map(store.all.map((d) => [d.en.legacyPath as string, d]));
	const guides = store.all.filter((d) => siteRoute(d.file)?.startsWith('/layers/'));

	const groups = new Map<number, AssessmentTest[]>();
	for (const d of store.all) {
		if (!siteRoute(d.file)?.startsWith('/stress-tests/')) continue;
		const { doc } = localized(d, locale);
		const symptoms: string[] = doc.symptoms ?? [];
		if (!symptoms.length) continue;
		const layer: number = d.en.layers?.[0] ?? 0;
		const test: AssessmentTest = {
			slug: d.en.legacyPath,
			href: route(d.file),
			title: doc.title,
			severity: SEVERITIES.includes(d.en.severity) ? d.en.severity : 'medium',
			symptoms,
			preventsWith: (d.en.preventsWith ?? []).flatMap((p: string) => {
				const t = byLegacy.get(p);
				return t ? [{ slug: p, href: route(t.file), title: localized(t, locale).doc.title }] : [];
			})
		};
		groups.set(layer, [...(groups.get(layer) ?? []), test]);
	}

	const categories = [...groups.entries()]
		.sort(([a], [b]) => a - b)
		.map(([n, tests]) => {
			const guide = guides.find((g) => siteRoute(g.file)?.startsWith(`/layers/${n}-`));
			return {
				key: `layer-${n}`,
				layer: n,
				title: guide
					? String(localized(guide, locale).doc.title).replace(/\*\*/g, '')
					: `Layer ${n}`,
				tests: tests.sort((a, b) => a.title.localeCompare(b.title, locale))
			};
		});
	return { categories, totalTests: categories.reduce((n, c) => n + c.tests.length, 0) };
}
