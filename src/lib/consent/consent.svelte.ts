/**
 * Analytics consent, shared by rcos.ecohubs.community and ecohubs.community.
 *
 * The choice lives in a first-party cookie on `.ecohubs.community`, so a visitor
 * decides once for both sites. On localhost and preview hosts the Domain
 * attribute is left out (browsers reject it there), which makes it a host-only
 * cookie.
 *
 * Earlier, ecohubs.community stored the choice in localStorage
 * (`cookie_consent`). It is copied into the cookie once, so visitors who
 * already chose are not asked again.
 *
 * app.html reads the same cookie before first paint and hides the banner for
 * visitors who already chose. Keep the cookie name in sync there.
 */
import { browser } from '$app/environment';

export type Consent = 'accepted' | 'declined';

/** GA4 measurement ID (same property as ecohubs.community). Without it, no
 *  analytics loads and no banner shows. */
export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

export const CONSENT_COOKIE = 'ecohubs_consent';
const LEGACY_KEY = 'cookie_consent';
const SHARED_DOMAIN = 'ecohubs.community';
/** Ask again after six months. */
const MAX_AGE_SECONDS = 60 * 60 * 24 * 182;

function readCookie(): Consent | null {
	const match = document.cookie.match(new RegExp(`(?:^|; )${CONSENT_COOKIE}=(accepted|declined)`));
	return (match?.[1] as Consent | undefined) ?? null;
}

function writeCookie(value: Consent) {
	const host = location.hostname;
	const domain =
		host === SHARED_DOMAIN || host.endsWith(`.${SHARED_DOMAIN}`)
			? `; Domain=.${SHARED_DOMAIN}`
			: '';
	const secure = location.protocol === 'https:' ? '; Secure' : '';
	document.cookie = `${CONSENT_COOKIE}=${value}; Path=/; Max-Age=${MAX_AGE_SECONDS}; SameSite=Lax${domain}${secure}`;
	// Once the cookie is really there, drop any legacy value, so it can never
	// bring an old choice back after the cookie expires.
	if (readCookie()) {
		try {
			localStorage.removeItem(LEGACY_KEY);
		} catch {
			// Storage blocked: nothing stored there either.
		}
	}
}

function readLegacy(): Consent | null {
	try {
		const v = localStorage.getItem(LEGACY_KEY);
		return v === 'accepted' || v === 'declined' ? v : null;
	} catch {
		return null; // storage blocked
	}
}

/** The cookie, or a legacy choice migrated into it (once). */
function readStored(): Consent | null {
	const stored = readCookie();
	if (stored) return stored;
	const legacy = readLegacy();
	if (!legacy) return null;
	writeCookie(legacy);
	return readCookie() ?? legacy;
}

class ConsentState {
	/** null = not decided yet; the banner shows. */
	value = $state<Consent | null>(null);
	/** True once the stored choice has been read in the browser. */
	ready = $state(false);

	init() {
		if (!browser || this.ready) return;
		this.value = readStored();
		this.ready = true;
	}

	/**
	 * Re-read the shared cookie. The choice can change on ecohubs.community in
	 * another tab, and nothing tells this page; call this when it comes back
	 * into view.
	 */
	refresh() {
		if (!browser || !this.ready) return;
		const stored = readStored();
		if (stored !== this.value) this.value = stored;
	}

	choose(value: Consent) {
		writeCookie(value);
		this.value = value;
		document.documentElement.classList.add('consent-known');
	}

	/** "Cookie settings" in the footer: show the banner again. */
	reopen() {
		this.value = null;
		document.documentElement.classList.remove('consent-known');
	}
}

export const consent = new ConsentState();
