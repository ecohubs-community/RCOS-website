/**
 * Shared types for the stress-test self-assessment instrument. Kept out of
 * `$lib/server` so the interactive client component can import them without
 * tripping SvelteKit's server-only-module guard. Built server-side in
 * `$lib/server/assessment.ts` from each test's symptoms / severity / preventsWith
 * frontmatter.
 */
export type AssessmentSeverity = 'low' | 'medium' | 'high';

export type TemplateRef = { slug: string; title: string };

export type AssessmentTest = {
  slug: string;
  title: string;
  severity: AssessmentSeverity;
  symptoms: string[];
  preventsWith: TemplateRef[];
};

export type AssessmentCategory = {
  key: string;
  title: string;
  tests: AssessmentTest[];
};

export type Assessment = {
  categories: AssessmentCategory[];
  totalTests: number;
};
