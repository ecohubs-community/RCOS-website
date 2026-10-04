import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

// Unit tests for server-side logic (loaders, link rewriting, generators).
// Component and page behaviour is covered by Playwright in tests/e2e.
export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.ts', 'scripts/**/*.{test,spec}.{js,mjs,ts}'],
		// The first test in a file loads and renders all content documents.
		testTimeout: 30_000,
		environment: 'node',
		expect: { requireAssertions: true }
	}
});
