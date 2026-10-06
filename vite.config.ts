import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { paraglideVitePlugin } from '@inlang/paraglide-js';
import Icons from 'unplugin-icons/vite';
import { defineConfig, type Plugin } from 'vite';
import { buildArticles } from './scripts/content/build-articles.mjs';

/**
 * Writes the markdown articles the site reads from the YAML in content/
 * (scripts/content/build-articles.mjs): once at startup, and again in dev
 * whenever a YAML file or a remaining markdown article changes.
 */
function contentArticles(): Plugin {
	return {
		name: 'rcos-content-articles',
		async buildStart() {
			await buildArticles({ quiet: true });
		},
		configureServer(server) {
			// One rebuild at a time: buildArticles empties its output folder first, so
			// two overlapping runs (a branch switch touches many files) crash the server.
			// Changes during a run trigger one more run after it. The page reloads only
			// when the last run succeeded, never onto a half-written output folder.
			let running = false;
			let again = false;
			const rebuild = async () => {
				if (running) {
					again = true;
					return;
				}
				running = true;
				let ok: boolean;
				do {
					again = false;
					try {
						await buildArticles({ quiet: true });
						ok = true;
					} catch (error) {
						ok = false;
						server.config.logger.error(`[content] ${(error as Error).message}`);
					}
				} while (again);
				running = false;
				if (ok) server.ws.send({ type: 'full-reload' });
			};
			server.watcher.add(['content/**/*.yaml', 'content/pages/**/*.md']);
			server.watcher.on('all', (_event, file) => {
				if (/\/content\/.*\.(yaml|md)$/.test(file)) void rebuild();
			});
		}
	};
}

export default defineConfig({
	plugins: [
		contentArticles(),
		tailwindcss(),
		sveltekit(),
		// Messages compile to one function per key; a page ships only what it uses.
		// Locale comes from the URL only: every public page is prerendered, so the
		// path is the one signal that exists at build time (EN is unprefixed).
		// Keep `strategy` in sync with the paraglide:compile script in package.json:
		// both write the same output folder, and whichever runs last wins.
		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/lib/paraglide',
			strategy: ['url', 'baseLocale']
		}),
		// Icons compile to inline SVG components at build time (no runtime fetch).
		Icons({ compiler: 'svelte' })
	]
});
