/// <reference types="unplugin-icons/types/svelte" />
// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			/** Resolved locale for this request (URL prefix > cookie > Accept-Language > default). */
			locale: string;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	interface Window {
		/** Google Analytics (see components/consent/Analytics.svelte) */
		dataLayer: unknown[];
		gtag: (...args: unknown[]) => void;
	}
}

export {};
