/**
 * Shared types for the invariant-coverage matrix. Kept out of `$lib/server` so
 * the client component can import them without tripping SvelteKit's
 * server-only-module guard. The data is built server-side in
 * `$lib/server/coverage.ts`.
 */
export type CoverageTestRef = { title: string; slug: string };

export type CoverageInvariant = {
  code: string; // e.g. "3.1"
  name: string; // e.g. "Economic transparency by default"
  tests: CoverageTestRef[];
};

export type CoverageLayer = {
  layer: number;
  title: string; // e.g. "Economic & Resource System"
  invariants: CoverageInvariant[];
};

export type Coverage = {
  layers: CoverageLayer[];
  totalInvariants: number;
  coveredInvariants: number;
};
