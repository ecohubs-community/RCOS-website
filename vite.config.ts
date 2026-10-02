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
			server.watcher.add(['content/**/*.yaml', 'content/articles/**/*.md']);
			server.watcher.on('all', async (_event, file) => {
				if (!/\/content\/.*\.(yaml|md)$/.test(file)) return;
				try {
					await buildArticles({ quiet: true });
					server.ws.send({ type: 'full-reload' });
				} catch (error) {
					server.config.logger.error(`[content] ${(error as Error).message}`);
				}
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
