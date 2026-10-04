<script lang="ts">
	import type { ClassValue } from 'svelte/elements';

	/**
	 * Markdown rendered at build time from our own content. This is the one
	 * component allowed to use {@html} for content blocks (see the plan, §6.2).
	 */
	let {
		html,
		class: className,
		lang
	}: { html: string; class?: ClassValue; lang?: string } = $props();
</script>

<div
	{lang}
	class={[
		'prose max-w-none text-ink-2 prose-headings:font-serif prose-headings:text-heading prose-a:font-medium prose-a:text-link prose-a:decoration-link-line prose-a:underline-offset-3 hover:prose-a:decoration-link prose-strong:text-ink prose-code:rounded prose-code:bg-paper-2 prose-code:px-1 prose-code:py-0.5 prose-code:font-medium prose-code:text-ink prose-code:before:content-none prose-code:after:content-none prose-li:marker:text-forest-400 prose-blockquote:border-line prose-blockquote:text-ink-2 prose-table:block prose-table:max-w-full prose-table:overflow-x-auto prose-th:text-ink prose-td:text-ink-2',
		className
	]}
>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -- trusted content, rendered at build time -->
	{@html html}
</div>
