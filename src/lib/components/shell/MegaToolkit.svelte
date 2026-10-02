<script lang="ts">
	import { NavigationMenu } from 'bits-ui';
	import { getLocale } from '$lib/paraglide/runtime.js';
	import { localized } from '$lib/i18n/path';
	import { TOOLKIT } from '$lib/nav/site-nav';

	const href = (path: string) => localized(path, getLocale());
</script>

<div class="mx-auto grid max-w-7xl grid-cols-3 gap-8 px-8 pt-7 pb-8">
	{#each TOOLKIT as group (group.title)}
		<div class="flex flex-col gap-1">
			<p class="mb-1.5 font-ui text-xs font-semibold tracking-[0.06em] text-ink-faint uppercase">
				{group.title()}
			</p>
			{#each group.items as item (item.href)}
				<NavigationMenu.Link
					href={href(item.href)}
					class="-ml-2.5 flex gap-3 rounded-xl p-2.5 text-ink hover:bg-hover"
				>
					<span
						class="inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-tile text-tile-ink"
					>
						{#if item.icon}<item.icon class="size-4.5" />{/if}
					</span>
					<span class="flex min-w-0 flex-col">
						<span class="font-ui text-[15px] leading-snug font-semibold">{item.label()}</span>
						<span class="text-[13px] leading-snug text-ink-faint">{item.desc?.()}</span>
					</span>
				</NavigationMenu.Link>
			{/each}
		</div>
	{/each}
</div>
