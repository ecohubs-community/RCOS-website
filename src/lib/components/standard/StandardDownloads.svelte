<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import IconFileTypePdf from '~icons/tabler/file-type-pdf';
	import IconMarkdown from '~icons/tabler/markdown';
	import IconPrinter from '~icons/tabler/printer';

	/** The whole core as a file: PDF, Markdown, or the page it is printed from. */
	let { downloads }: { downloads: { pdf: string | null; md: string | null; print: string } } =
		$props();

	const link =
		'inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-[13px] font-medium text-ink-2 hover:bg-hover hover:text-heading';
</script>

<div class="flex flex-col gap-1">
	<p
		class="px-2.5 pb-0.5 font-ui text-[11px] font-semibold tracking-[0.08em] text-ink-faint uppercase"
	>
		{m.std_download()}
	</p>
	<div class="flex flex-wrap gap-x-1 px-0.5">
		{#if downloads.pdf}
			<a href={downloads.pdf} download class={link}
				><IconFileTypePdf class="size-4 text-accent-ink" />{m.std_download_pdf()}</a
			>
		{/if}
		{#if downloads.md}
			<a href={downloads.md} download class={link}
				><IconMarkdown class="size-4 text-accent-ink" />{m.std_download_md()}</a
			>
		{/if}
		<a href={downloads.print} data-sveltekit-reload class={link}
			><IconPrinter class="size-4 text-accent-ink" />{m.std_print_version()}</a
		>
	</div>
</div>
