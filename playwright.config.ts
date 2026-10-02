import { defineConfig } from '@playwright/test';

// Smoke tests against the production build (prerendered pages + server routes).
export default defineConfig({
	testDir: 'tests/e2e',
	webServer: {
		command: 'node ./node_modules/vite/bin/vite.js preview --port 4173 --strictPort',
		port: 4173,
		reuseExistingServer: !process.env.CI
	},
	use: { baseURL: 'http://localhost:4173' }
});
