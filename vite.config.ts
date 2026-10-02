import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { paraglideVitePlugin } from '@inlang/paraglide-js';
import Icons from 'unplugin-icons/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
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
