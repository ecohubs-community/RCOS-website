/**
 * Shared types for the stress-test self-assessment instrument. Kept out of
 * `$lib/server` so the interactive client component can import them without
 * tripping SvelteKit's server-only-module guard. Built server-side in
 * `$lib/server/assessment.ts` from each test's symptoms, severity and preventsWith.
 */
export type AssessmentSeverity = 'low' | 'medium' | 'high';

export type TemplateRef = { slug: string; href: string; title: string };

export type AssessmentTest = {
	/** Stable id (the test's legacy path), for the checkbox state */
	slug: string;
	/** Page of the test, in the page's language */
	href: string;
	title: string;
	severity: AssessmentSeverity;
	symptoms: string[];
	preventsWith: TemplateRef[];
};

/** The tests of one primary layer. */
export type AssessmentCategory = {
	key: string;
	layer: number;
	title: string;
	tests: AssessmentTest[];
};

export type Assessment = {
	categories: AssessmentCategory[];
	totalTests: number;
};
