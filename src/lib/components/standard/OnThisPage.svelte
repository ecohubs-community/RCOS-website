<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import type { SectionView } from '$lib/server/standard';
	import { spy } from './spy.svelte';

	/** The page's numbered sections; the one in view is marked (see spy.svelte.ts). */
	let { sections }: { sections: SectionView[] } = $props();
</script>

<nav aria-labelledby="on-this-page" class="flex flex-col gap-0.5">
	<h2
		id="on-this-page"
		class="pb-2 font-ui text-[11px] font-semibold tracking-[0.08em] text-ink-faint uppercase"
	>
		{m.std_on_this_page()}
	</h2>
	{#each sections as s (s.id)}
		<a
			href="#{s.id}"
			aria-current={spy.active === s.id ? 'location' : undefined}
			class="flex gap-2 border-l-2 border-transparent py-1 pl-3 text-[13.5px] leading-snug text-ink-muted hover:text-heading aria-[current=location]:border-accent-ink aria-[current=location]:font-semibold aria-[current=location]:text-heading"
		>
			<span class="w-6 shrink-0 pt-px font-mono text-[11.5px] text-forest-600">{s.ref}</span
			>{s.title}
		</a>
	{/each}
</nav>
