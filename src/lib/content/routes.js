// @ts-check
/**
 * Where each document of the standard lives on the site, derived from where its
 * YAML lives:
 *
 *   standard/rcos-core/about.yaml                   /standard
 *   standard/rcos-core/0.1/version.yaml             /standard/core/0.1
 *   standard/rcos-core/0.1/chapters/02-layer-0-…    /standard/core/0.1/layer-0-identity-scope
 *   standard/modules/about.yaml                     /standard/modules
 *   standard/modules/<m>/about.yaml                 /standard/modules/<m>
 *   standard/modules/<m>/0.1/standard.yaml          /standard/modules/<m>/0.1
 *   standard/modules/<m>/0.1/<name>.yaml            /standard/modules/<m>/0.1/<name>
 *
 * A chapter's URL segment is its file name without the number prefix, or its
 * `slug` when it has one (appendix-a-glossary → glossary).
 */

/** Standards by folder name: the core is "core" in URLs. */
const STANDARD_NAME = { 'rcos-core': 'core' };

/**
 * @param {string} file path of the YAML file (absolute or relative)
 * @param {{ slug?: string, [key: string]: unknown }} en the English document
 * @returns {string | null} site path, or null when the file is not part of the standard
 */
export function standardRoute(file, en) {
	const m =
		/(?:^|\/)content\/standard\/(.+)\.yaml$/.exec(file) ?? /^standard\/(.+)\.yaml$/.exec(file);
	if (!m) return null;
	const parts = m[1].split('/');
	const rest = parts.slice(1);
	const last = /** @type {string} */ (rest.pop() ?? parts[0]);
	const segment = en.slug ?? last.replace(/^\d\d-/, '');
	if (parts[0] === 'modules') {
		// about.yaml and standard.yaml are the page of their folder.
		const page = last === 'about' || last === 'standard' ? [] : [segment];
		return ['/standard/modules', ...rest, ...page].join('/');
	}
	const name = STANDARD_NAME[/** @type {keyof typeof STANDARD_NAME} */ (parts[0])] ?? parts[0];
	if (last === 'about' && rest.length === 0) return '/standard';
	const version = rest.filter((p) => p !== 'chapters');
	const page = last === 'version' ? [] : [segment];
	return ['/standard', name, ...version, ...page].join('/');
}

/**
 * Where the other content documents live on the site:
 *
 *   templates/layer-0/index.yaml               /templates/layer-0
 *   templates/layer-0/purpose-charter.yaml     /templates/layer-0/purpose-charter
 *   layers/layer-0-identity-scope.yaml         /layers/0-identity-scope
 *   stress-tests/founder-informal-veto.yaml    /stress-tests/founder-informal-veto
 *
 * Stress tests are flat: their group (the primary layer) is not in the URL, so
 * regrouping never breaks a link.
 * @param {string} file
 * @returns {string | null}
 */
export function siteRoute(file) {
	const m = /(?:^|\/)(?:content\/)?(templates|layers|stress-tests)\/(.+)\.yaml$/.exec(file);
	if (!m) return null;
	const [, dir, rest] = m;
	if (dir === 'templates') return `/templates/${rest.replace(/\/index$/, '')}`;
	if (dir === 'layers') return `/layers/${rest.replace(/^layer-/, '')}`;
	return `/stress-tests/${rest}`;
}

/** Stress-test categories of the markdown era → the layer group that replaced them. */
export const CATEGORY_LAYER = {
	'governance-power': 2,
	'conflict-accountability': 4,
	'culture-influence': 2,
	'economy-resources': 3,
	'membership-boundaries': 1,
	'operations-coordination': 5,
	'change-emergencies': 6
};

/**
 * Pages of the markdown era that are not YAML documents: old article slug → new path.
 * Their copy lives in content/pages/ (see src/lib/server/pages.ts).
 */
export const PAGE_ROUTES = {
	'': '/library',
	'rcos-layers': '/layers',
	'rcos-templates': '/templates',
	'rcos-stress-tests': '/stress-tests',
	'rcos-stress-tests/self-assessment': '/toolkit/self-assessment',
	'rcos-stress-tests/facilitation-worksheet': '/toolkit/facilitation-worksheet',
	safeguards: '/safeguards',
	'safeguards/land-commons-anti-privatization': '/safeguards/land-commons-anti-privatization',
	'reference-implementations': '/reference-implementations',
	...Object.fromEntries(
		Object.entries(CATEGORY_LAYER).map(([c, n]) => [
			`rcos-stress-tests/${c}`,
			`/stress-tests#layer-${n}`
		])
	)
};
