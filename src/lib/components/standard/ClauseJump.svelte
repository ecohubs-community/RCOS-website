<script lang="ts">
	import { goto } from '$app/navigation';
	import { m } from '$lib/paraglide/messages.js';
	import { getLocale } from '$lib/paraglide/runtime.js';
	import { localized } from '$lib/i18n/path';
	import IconHash from '~icons/tabler/hash';

	/**
	 * "Jump to clause". With JavaScript it navigates straight to the clause;
	 * without, the form asks /standard/jump, which redirects there.
	 */
	let { anchors, onnavigate }: { anchors: Record<string, string>; onnavigate?: () => void } =
		$props();

	let value = $state('');
	let missing = $state<string | null>(null);

	async function onsubmit(event: SubmitEvent) {
		event.preventDefault();
		const ref = value.trim().replace(/^§/, '');
		if (!ref) return;
		const page = anchors[ref];
		if (!page) {
			missing = ref;
			return;
		}
		missing = null;
		onnavigate?.();
		await goto(`${page}#${ref}`);
	}
</script>

<form
	method="GET"
	action={localized('/standard/jump', getLocale())}
	{onsubmit}
	class="flex flex-col gap-1"
>
	<label
		class="flex h-10 items-center gap-2 rounded-xl border border-line bg-card px-3 text-ink-faint focus-within:border-accent-ink"
	>
		<IconHash class="size-4 shrink-0" aria-hidden="true" />
		<span class="sr-only">{m.std_jump_label()}</span>
		<input
			name="ref"
			bind:value
			oninput={() => (missing = null)}
			inputmode="decimal"
			autocomplete="off"
			placeholder={m.std_jump_placeholder()}
			class="min-w-0 flex-1 border-0 bg-transparent p-0 text-sm text-ink placeholder:text-ink-faint focus:ring-0 focus:outline-none"
		/>
		<span class="font-mono text-[11px]" aria-hidden="true">↵</span>
	</label>
	{#if missing}
		<p class="pl-1 text-xs text-clay-800" role="status">{m.std_jump_missing({ ref: missing })}</p>
	{/if}
</form>
