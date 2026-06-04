/**
 * Invariant-coverage matrix for the RCOS Stress Tests index page.
 *
 * Cross-references every RCOS invariant against the stress tests that exercise
 * it. The "covered by" side is derived live from each test's `invariants`
 * frontmatter (via readArticleMeta), so the matrix never goes stale as tests
 * are added, removed, or re-tagged.
 *
 * The canonical invariant list below is the authoritative set of all 28
 * invariants — it has to be independent of the tests, because that's the only
 * way to surface invariants that NO test covers yet (the coverage gaps). Keep
 * it in sync with the Layer Invariants in content/articles/rcos-layers/*.md.
 */
import { readArticleMeta, type ArticleMeta } from './content';
import { DEFAULT_LOCALE } from '$lib/i18n/languages';
import type {
  Coverage,
  CoverageInvariant,
  CoverageLayer,
  CoverageTestRef
} from '$lib/types/coverage';

export type { Coverage, CoverageInvariant, CoverageLayer, CoverageTestRef };

const LAYER_TITLES: Record<number, string> = {
  0: 'Identity & Scope',
  1: 'Membership System',
  2: 'Governance & Decision Logic',
  3: 'Economic & Resource System',
  4: 'Conflict, Repair & Accountability',
  5: 'Operations & Coordination',
  6: 'Evolution & Adaptation'
};

// Canonical invariant list. Mirrors the Layer Invariants in rcos-layers/*.md.
const INVARIANTS: { code: string; name: string }[] = [
  { code: '0.1', name: 'Single primary purpose' },
  { code: '0.2', name: 'Explicit governed scope' },
  { code: '0.3', name: 'Declared non-governed space' },
  { code: '0.4', name: 'Protected invariants' },
  { code: '1.1', name: 'No implicit membership' },
  { code: '1.2', name: 'Entry and exit are always possible' },
  { code: '1.3', name: 'Rights and obligations symmetry' },
  { code: '1.4', name: 'Due process for forced exit' },
  { code: '2.1', name: 'Decision type precedes decision content' },
  { code: '2.2', name: 'Authority must be explicit' },
  { code: '2.3', name: 'Constitutional rules outrank all others' },
  { code: '2.4', name: 'Decisions are reviewable' },
  { code: '3.1', name: 'Economic transparency by default' },
  { code: '3.2', name: 'Commons protection' },
  { code: '3.3', name: 'Contribution recognition is explicit' },
  { code: '3.4', name: 'No unbounded accumulation of internal power' },
  { code: '4.1', name: 'Conflict is handled, not avoided' },
  { code: '4.2', name: 'Power asymmetry is acknowledged' },
  { code: '4.3', name: 'Repair precedes punishment' },
  { code: '4.4', name: 'Safety overrides participation' },
  { code: '5.1', name: 'Roles must be defined' },
  { code: '5.2', name: 'Operational knowledge is documented' },
  { code: '5.3', name: 'Time and attention are finite resources' },
  { code: '5.4', name: 'Information access rules are explicit' },
  { code: '6.1', name: 'Change is possible but constrained' },
  { code: '6.2', name: 'Changes are versioned' },
  { code: '6.3', name: 'Experiments are reversible' },
  { code: '6.4', name: 'Learning is captured' }
];

function layerOf(code: string): number {
  return Number(code.split('.')[0]);
}

/**
 * Build the coverage matrix for a locale. Test titles resolve to the requested
 * locale (falling back to the default-locale title); the invariant tagging is
 * always read from the default-locale source so structure stays stable.
 */
export async function buildCoverage(locale: string = DEFAULT_LOCALE): Promise<Coverage> {
  const meta = await readArticleMeta();

  // Group by id so we can prefer the localized title while reading `invariants`
  // (a structural field) from the default-locale source.
  const byId = new Map<string, { source?: ArticleMeta; localized?: ArticleMeta }>();
  for (const a of meta) {
    const id = (a.id as string) || a.slug;
    const g = byId.get(id) ?? {};
    if ((a.lang ?? DEFAULT_LOCALE) === DEFAULT_LOCALE) g.source = a;
    if (a.lang === locale) g.localized = a;
    byId.set(id, g);
  }

  // code -> [{ title, slug }]
  const coveredBy = new Map<string, CoverageTestRef[]>();
  for (const { source, localized } of byId.values()) {
    if (!source) continue;
    const slug = source.slug;
    // Leaf tests live at rcos-stress-tests/<category>/<test> (depth 3).
    if (!slug.startsWith('rcos-stress-tests/') || slug.split('/').length !== 3) continue;
    const invs = Array.isArray(source.invariants) ? (source.invariants as unknown[]) : [];
    if (invs.length === 0) continue;
    const title =
      (typeof localized?.title === 'string' && localized.title.trim()) ||
      (typeof source.title === 'string' && source.title.trim()) ||
      slug;
    for (const raw of invs) {
      const code = String(raw).trim();
      if (!coveredBy.has(code)) coveredBy.set(code, []);
      coveredBy.get(code)!.push({ title, slug });
    }
  }

  // Sort tests under each invariant alphabetically by title for stable output.
  for (const list of coveredBy.values()) {
    list.sort((a, b) => a.title.localeCompare(b.title));
  }

  const byLayer = new Map<number, CoverageInvariant[]>();
  let coveredCount = 0;
  for (const { code, name } of INVARIANTS) {
    const tests = coveredBy.get(code) ?? [];
    if (tests.length > 0) coveredCount++;
    const layer = layerOf(code);
    if (!byLayer.has(layer)) byLayer.set(layer, []);
    byLayer.get(layer)!.push({ code, name, tests });
  }

  const layers: CoverageLayer[] = [...byLayer.entries()]
    .sort(([a], [b]) => a - b)
    .map(([layer, invariants]) => ({
      layer,
      title: LAYER_TITLES[layer] ?? `Layer ${layer}`,
      invariants
    }));

  return {
    layers,
    totalInvariants: INVARIANTS.length,
    coveredInvariants: coveredCount
  };
}
