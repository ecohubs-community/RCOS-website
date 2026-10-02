<script lang="ts">
	import { browser } from '$app/environment';
	import { consent, GA_MEASUREMENT_ID } from '$lib/consent/consent.svelte';

	/**
	 * Google Analytics 4 with Consent Mode v2, ported from ecohubs.community.
	 *
	 * The same measurement ID as ecohubs.community, so both sites report into one
	 * property (split by hostname). Set VITE_GA_MEASUREMENT_ID in Vercel; without
	 * it nothing loads and no banner shows.
	 *
	 * Everything starts denied. Accepting grants analytics_storage only; the ad
	 * signals stay denied whatever the GA property says, because the privacy policy
	 * promises GA is not used for advertising.
	 *
	 * Page views: GA4's enhanced measurement ("page changes based on browser
	 * history events") counts SvelteKit's client-side navigations, so this file
	 * does not send page_view on route changes, which would count them twice.
	 * Check in GA DebugView after deploying.
	 */

	// Exception to the no-plain-JS rule: Google's bootstrap snippet. gtag must push
	// the `arguments` object itself; a rest-parameter array is silently ignored.
	if (browser && GA_MEASUREMENT_ID) {
		window.dataLayer = window.dataLayer || [];
		window.gtag = function () {
			window.dataLayer.push(arguments);
		};
		window.gtag('consent', 'default', {
			ad_storage: 'denied',
			analytics_storage: 'denied',
			ad_user_data: 'denied',
			ad_personalization: 'denied',
			wait_for_update: 500
		});
		window.gtag('js', new Date());
		window.gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true });
	}

	$effect(() => {
		// No choice (yet, or no longer) counts as declined.
		if (!GA_MEASUREMENT_ID || !consent.ready) return;
		window.gtag('consent', 'update', {
			analytics_storage: consent.value === 'accepted' ? 'granted' : 'denied',
			ad_storage: 'denied',
			ad_user_data: 'denied',
			ad_personalization: 'denied'
		});
	});
</script>

<svelte:head>
	{#if GA_MEASUREMENT_ID}
		<link rel="preconnect" href="https://www.googletagmanager.com" crossorigin="anonymous" />
		<script async src="https://www.googletagmanager.com/gtag/js?id={GA_MEASUREMENT_ID}"></script>
	{/if}
</svelte:head>
