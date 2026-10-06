import { SITE_URL } from '$lib/config/site';
import { DEFAULT_LOCALE, LOCALES } from '$lib/i18n/languages';
import { standardNav } from '$lib/server/standard';
import { layersHub, stressTestsHub, templatesHub } from '$lib/server/site';
import type { RequestHandler } from './$types';

export const prerender = true;

/**
 * /llms.txt (https://llmstxt.org): a plain-text map of the site for language
 * models and answer engines, built from the same data as the pages. English
 * only; every page also exists under /de, /es, /fr and /pt-br.
 */
export const GET: RequestHandler = async () => {
	const locale = DEFAULT_LOCALE;
	const url = (path: string) => `${SITE_URL}${path}`;
	const line = (title: string, path: string, note?: string | null) =>
		`- [${title}](${url(path)})${note ? `: ${note}` : ''}`;

	const nav = await standardNav(locale);
	const { layers } = await layersHub(locale);
	const templates = await templatesHub(locale);
	const tests = await stressTestsHub(locale);

	const body = [
		'# RCOS - Regenerative Community Operating System',
		'',
		'> RCOS is an open standard for intentional communities. It collects the questions a community has to answer (purpose, membership, decisions, money and land, conflict, daily work, change) before they turn into crises, sorted into seven layers. It does not prescribe answers; templates help a community write its own. Published by EcoHubs under CC BY 4.0 (standard and templates) and AGPL-3.0 (software).',
		'',
		`The standard uses RFC 2119 keywords (MUST, SHOULD, MAY). A higher layer can never overrule a lower one. Languages: ${LOCALES.map((l) => l.englishName).join(', ')}; translated pages live under /${LOCALES.filter(
			(l) => l.code !== DEFAULT_LOCALE
		)
			.map((l) => l.code)
			.join(', /')}.`,
		'',
		'## The standard (RCOS-Core v0.1, draft)',
		'',
		...[...nav.start, ...nav.layers, ...nav.reference].map((i) =>
			line(i.number ? `${i.number}. ${i.title}` : i.title, i.path)
		),
		'',
		'## Plain-language layer guides',
		'',
		...layers.map((l) => line(`Layer ${l.n}: ${l.title}`, l.href, l.question)),
		'',
		'## Templates (fill-in documents, also as Markdown, DOCX and ODT downloads)',
		'',
		...templates.layers.flatMap((l) => l.templates.map((t) => line(t.title, t.path, t.summary))),
		'',
		'## Stress tests (real failure scenarios, checked against the standard)',
		'',
		...tests.groups.flatMap((g) => g.tests.map((t) => line(t.title, t.path, t.summary))),
		'',
		'## Optional modules',
		'',
		...nav.modules.map((i) => line(i.title, i.path)),
		'',
		'## Structured data',
		'',
		line(
			'Published data and schema',
			'/data',
			'every clause, section, artifact and glossary term as YAML, with a JSON Schema'
		),
		line('Data manifest', '/downloads/standard/manifest-standard.json'),
		line('Clauses (YAML)', '/downloads/standard/rcos-core/0.1/clauses.yaml'),
		line('Glossary (YAML)', '/downloads/standard/rcos-core/0.1/glossary.yaml'),
		'',
		'## Optional',
		'',
		line('Toolkit', '/toolkit', 'self-assessment and facilitation guide'),
		line('Safeguards', '/safeguards', 'optional protections against irreversible failures'),
		line('Reference implementations', '/reference-implementations', 'communities using RCOS'),
		''
	].join('\n');

	return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
