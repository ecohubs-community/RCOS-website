<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import { getLocale } from '$lib/paraglide/runtime.js';
	import { localized } from '$lib/i18n/path';
	import {
		FOOTER_ECOHUBS,
		FOOTER_STANDARD,
		FOOTER_TOOLKIT,
		GITHUB_HREF,
		PRIVACY_HREF,
		STANDARD_HREF,
		TERMS_HREF
	} from '$lib/nav/site-nav';
	import logo from '$lib/assets/logo.webp';
	import { consent, GA_MEASUREMENT_ID } from '$lib/consent/consent.svelte';
	import IconBook2 from '~icons/tabler/book-2';
	import IconBrandGithub from '~icons/tabler/brand-github';
	import IconArrowUpRight from '~icons/tabler/arrow-up-right';

	const href = (path: string) => localized(path, getLocale());
	const year = new Date().getFullYear();
	const heading = 'mb-1 font-ui text-xs font-semibold tracking-[0.08em] text-forest-400 uppercase';
	const link = 'inline-flex items-center gap-1 text-sm text-forest-100 hover:text-white';
	const chip = 'rounded-full border border-forest-200/25 px-2.5 py-px';
</script>

<footer class="relative overflow-hidden bg-brand text-forest-200">
	<div class="dot-grid pointer-events-none absolute inset-0 bg-size-[22px_22px] opacity-10"></div>
	<div class="relative mx-auto max-w-7xl px-5 pt-12 pb-7 sm:px-8 lg:pt-16">
		<div
			class="grid grid-cols-1 gap-x-10 gap-y-9 border-b border-forest-200/15 pb-10 sm:grid-cols-2 lg:grid-cols-5"
		>
			<div class="flex flex-col gap-4 sm:col-span-2">
				<a href={href('/')} class="flex items-center gap-2.5 text-white">
					<img
						src={logo}
						alt=""
						width="40"
						height="40"
						class="size-10 rounded-[10px] bg-forest-50 p-1"
					/>
					<span class="flex flex-col">
						<span class="font-serif text-[22px] leading-tight font-bold">{m.site_short_name()}</span
						>
						<span class="font-ui text-xs text-forest-300">{m.footer_by()}</span>
					</span>
				</a>
				<p class="max-w-95 text-[14.5px] leading-relaxed text-pretty">{m.footer_lede()}</p>
				<div class="flex flex-wrap gap-2.5 pt-1">
					<a
						href={href(STANDARD_HREF)}
						class="inline-flex h-10 items-center gap-2 rounded-lg bg-forest-300 px-4 font-ui text-sm font-semibold text-forest-900 hover:bg-forest-200"
					>
						<IconBook2 class="size-4" />
						{m.footer_read_standard()}
					</a>
					<a
						href={GITHUB_HREF}
						class="inline-flex h-10 items-center gap-2 rounded-lg border border-forest-200/30 px-3.5 font-ui text-sm font-medium text-forest-50 hover:border-forest-200/60"
					>
						<IconBrandGithub class="size-4" />
						{m.footer_contribute()}
					</a>
				</div>
			</div>
			<nav aria-label={m.nav_standard()} class="flex flex-col gap-2.5">
				<h2 class={heading}>{m.nav_standard()}</h2>
				{#each FOOTER_STANDARD as item (item.href)}
					<a href={href(item.href)} class={link}>{item.label()}</a>
				{/each}
			</nav>
			<nav aria-label={m.nav_toolkit()} class="flex flex-col gap-2.5">
				<h2 class={heading}>{m.nav_toolkit()}</h2>
				{#each FOOTER_TOOLKIT as item (item.href)}
					<a href={href(item.href)} class={link}>{item.label()}</a>
				{/each}
			</nav>
			<nav aria-label={m.footer_ecohubs()} class="flex flex-col gap-2.5">
				<h2 class={heading}>{m.footer_ecohubs()}</h2>
				{#each FOOTER_ECOHUBS as item (item.href)}
					<a href={item.href} class={link}>{item.label()}<IconArrowUpRight class="size-3.5" /></a>
				{/each}
			</nav>
		</div>
		<div
			class="flex flex-wrap items-center justify-between gap-x-6 gap-y-3.5 pt-5.5 text-[12.5px] text-forest-400"
		>
			<div class="flex flex-wrap items-center gap-x-4 gap-y-2">
				<span>{m.footer_copyright_short({ year })}</span>
				<span class="flex flex-wrap gap-1.5">
					<span class={chip}>{m.footer_license_spec()}</span>
					<span class={chip}>{m.footer_license_code()}</span>
				</span>
			</div>
			<div class="flex items-center gap-4">
				<a href={PRIVACY_HREF} class="text-forest-300 hover:text-white">{m.footer_link_privacy()}</a
				>
				<a href={TERMS_HREF} class="text-forest-300 hover:text-white">{m.footer_link_terms()}</a>
				{#if GA_MEASUREMENT_ID}
					<button
						type="button"
						onclick={() => consent.reopen()}
						class="text-forest-300 hover:text-white"
					>
						{m.footer_cookie_settings()}
					</button>
				{/if}
			</div>
		</div>
	</div>
</footer>
