import { defineConfig } from '@playwright/test';

// Smoke tests against the production build (prerendered pages + server routes).
// A dedicated port, and never reuse a running server: on a shared machine,
// another project's preview on the default port would answer instead.
const PORT = 4371;

export default defineConfig({
	testDir: 'tests/e2e',
	webServer: {
		command: `node ./node_modules/vite/bin/vite.js preview --port ${PORT} --strictPort`,
		port: PORT,
		reuseExistingServer: false
	},
	use: { baseURL: `http://localhost:${PORT}` }
});
