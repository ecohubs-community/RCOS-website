// import adapter from '@sveltejs/adapter-node';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	extensions: ['.svelte', '.md'],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			layout: false,
			rehypePlugins: [rehypeSlug]
		})
	],
	kit: {
		adapter: adapter(),
		prerender: {
			// Don't fail the build if a deep link's #anchor isn't found —
			// e.g. /templates#downloads when the templates manifest
			// hasn't been generated/committed yet.
			handleMissingId: 'warn',
			// Every /articles/… URL of the markdown era is prerendered as a redirect
			// (src/routes/[[lang=lang]]/(app)/articles), so that route never renders
			// a page of its own. Any other route the crawl misses is still an error.
			handleUnseenRoutes: ({ routes, message }) => {
				if (routes.some((r) => !r.includes('/articles/'))) throw new Error(message);
			}
		}
	}
};

export default config;
