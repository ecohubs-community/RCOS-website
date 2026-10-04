<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import SEO from '$lib/components/seo/SEO.svelte';
	import PageHeader from '$lib/components/site/PageHeader.svelte';
	import { localized } from '$lib/i18n/path';
	import IconFileCode from '~icons/tabler/file-code';

	let { data } = $props();
</script>

<SEO title={m.site_data()} description={m.site_data_lead()} url="/data" locale={data.locale} />

<div class="mx-auto w-full max-w-4xl px-4 pt-8 pb-20 sm:px-6 lg:px-8 lg:pt-12">
	<PageHeader
		crumbs={[
			{ label: m.site_library(), href: localized('/library', data.locale) },
			{ label: m.site_data() }
		]}
		title={m.site_data()}
		lead={m.site_data_lead()}
	/>
	<h2
		class="mt-10 mb-3 font-ui text-[11px] font-semibold tracking-[0.08em] text-ink-faint uppercase"
	>
		{m.site_data_files()} · {m.downloads_generated({ date: data.generated })}
	</h2>
	<ul class="flex flex-col divide-y divide-line-soft rounded-2xl border border-line bg-card">
		{#each data.files as f (f.file)}
			<li class="flex flex-wrap items-center gap-x-3 gap-y-1 px-4.5 py-3">
				<IconFileCode class="size-4.5 shrink-0 text-accent-ink" />
				<a
					href={f.href}
					download
					class="font-mono text-sm font-semibold text-heading hover:underline">{f.file}</a
				>
				<span class="font-ui text-xs text-ink-faint">{f.kb} KB</span>
				<code
					class="ml-auto hidden truncate font-mono text-[11px] text-ink-faint sm:block"
					title="SHA-256">{f.sha256.slice(0, 16)}…</code
				>
			</li>
		{/each}
	</ul>
	<p class="mt-4 text-sm text-ink-muted">{m.site_data_licence()}</p>
</div>
