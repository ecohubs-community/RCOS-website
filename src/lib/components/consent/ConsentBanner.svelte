<script lang="ts">
	import { onMount } from 'svelte';
	import { m } from '$lib/paraglide/messages.js';
	import { consent, GA_MEASUREMENT_ID } from '$lib/consent/consent.svelte';
	import { PRIVACY_HREF } from '$lib/nav/site-nav';

	/**
	 * Rendered on the server, so it paints with the page instead of after
	 * hydration (where it would become the page's LCP element on slow phones).
	 * For visitors who already chose, app.html adds `consent-known` to <html>
	 * before first paint and the banner stays hidden; there is no flash.
	 */
	onMount(() => consent.init());

	const show = $derived(!!GA_MEASUREMENT_ID && (!consent.ready || consent.value === null));
</script>

{#if show}
	<div
		role="region"
		aria-label={m.consent_label()}
		class="fixed inset-x-0 bottom-0 z-(--z-popover) border-t border-line bg-card p-4 shadow-pop [.consent-known_&]:hidden"
	>
		<div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
			<p class="flex-1 text-sm text-ink-muted">
				{m.consent_text()}
				<a href={PRIVACY_HREF} class="text-link underline decoration-link-line underline-offset-4"
					>{m.footer_link_privacy()}</a
				>
			</p>
			<div class="flex shrink-0 gap-3">
				<button
					type="button"
					onclick={() => consent.choose('declined')}
					class="rounded-lg border border-line px-4 py-2 font-ui text-sm font-medium text-ink hover:bg-selected"
				>
					{m.consent_decline()}
				</button>
				<button
					type="button"
					onclick={() => consent.choose('accepted')}
					class="rounded-lg bg-brand px-4 py-2 font-ui text-sm font-semibold text-white hover:bg-forest-800"
				>
					{m.consent_accept()}
				</button>
			</div>
		</div>
	</div>
{/if}
