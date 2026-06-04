/**
 * Builds the data for the stress-test self-assessment instrument: every leaf
 * test's symptom checklist, severity, and remedy templates, grouped by category.
 *
 * Derived live from frontmatter (symptoms / severity / preventsWith) via
 * readArticleMeta(), so it stays in sync as tests change. Mirrors the approach
 * in coverage.ts.
 */
import { readArticleMeta, type ArticleMeta } from './content';
import { DEFAULT_LOCALE } from '$lib/i18n/languages';
import type {
  Assessment,
  AssessmentCategory,
  AssessmentSeverity,
  AssessmentTest,
  TemplateRef
} from '$lib/types/assessment';

export type { Assessment, AssessmentCategory, AssessmentTest, TemplateRef };

// Category folder -> display title and order. Matches the names used on the
// Stress Tests index page.
const CATEGORY_ORDER: { key: string; title: string }[] = [
  { key: 'governance-power', title: 'Governance & Power' },
  { key: 'conflict-accountability', title: 'Conflict & Accountability' },
  { key: 'culture-influence', title: 'Culture & Influence' },
  { key: 'economy-resources', title: 'Economy & Resources' },
  { key: 'membership-boundaries', title: 'Membership & Boundaries' },
  { key: 'operations-coordination', title: 'Operations & Coordination' },
  { key: 'change-emergencies', title: 'Change & Emergencies' }
];

const SEVERITIES: AssessmentSeverity[] = ['low', 'medium', 'high'];

function prettifySlug(slug: string): string {
  const last = slug.split('/').pop() ?? slug;
  return last.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

function stringList(value: unknown): string[] {
  return Array.isArray(value)
    ? value.map((v) => String(v).trim()).filter((v) => v.length > 0)
    : [];
}

export async function buildAssessment(locale: string = DEFAULT_LOCALE): Promise<Assessment> {
  const meta = await readArticleMeta();

  // Group by slug (unique per article, identical across locales) so titles
  // resolve to the requested locale while structural fields (symptoms,
  // severity) come from the default-locale source. NB: grouping by `id` would
  // be wrong — some tests share a frontmatter id, collapsing distinct tests.
  const bySlug = new Map<string, { source?: ArticleMeta; localized?: ArticleMeta }>();
  for (const a of meta) {
    const g = bySlug.get(a.slug) ?? {};
    if ((a.lang ?? DEFAULT_LOCALE) === DEFAULT_LOCALE) g.source = a;
    if (a.lang === locale) g.localized = a;
    bySlug.set(a.slug, g);
  }

  const titleOf = (g: { source?: ArticleMeta; localized?: ArticleMeta }): string => {
    const loc = typeof g.localized?.title === 'string' ? g.localized.title.trim() : '';
    const src = typeof g.source?.title === 'string' ? g.source.title.trim() : '';
    return loc || src || (g.source?.slug ?? '');
  };

  // slug -> resolved title, for naming remedy templates.
  const titleBySlug = new Map<string, string>();
  for (const g of bySlug.values()) {
    if (g.source) titleBySlug.set(g.source.slug, titleOf(g));
  }

  const testsByCat = new Map<string, AssessmentTest[]>();
  for (const g of bySlug.values()) {
    const source = g.source;
    if (!source) continue;
    const parts = source.slug.split('/');
    // Leaf tests only: rcos-stress-tests/<category>/<test>.
    if (parts[0] !== 'rcos-stress-tests' || parts.length !== 3) continue;

    const symptoms = stringList(source.symptoms);
    if (symptoms.length === 0) continue;

    const category = parts[1];
    const severity = (
      SEVERITIES.includes(String(source.severity) as AssessmentSeverity)
        ? source.severity
        : 'medium'
    ) as AssessmentSeverity;

    const preventsWith: TemplateRef[] = stringList(source.preventsWith).map((slug) => ({
      slug,
      title: titleBySlug.get(slug) ?? prettifySlug(slug)
    }));

    const test: AssessmentTest = {
      slug: source.slug,
      title: titleOf(g),
      severity,
      symptoms,
      preventsWith
    };

    if (!testsByCat.has(category)) testsByCat.set(category, []);
    testsByCat.get(category)!.push(test);
  }

  const categories: AssessmentCategory[] = CATEGORY_ORDER.filter((c) => testsByCat.has(c.key)).map(
    (c) => ({
      key: c.key,
      title: c.title,
      tests: testsByCat.get(c.key)!.sort((a, b) => a.title.localeCompare(b.title))
    })
  );

  const totalTests = categories.reduce((n, c) => n + c.tests.length, 0);
  return { categories, totalTests };
}
