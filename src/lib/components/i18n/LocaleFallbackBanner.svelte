<script lang="ts">
	import IconLanguage from '~icons/tabler/language';
	import { m } from '$lib/paraglide/messages.js';
	import { getLocale } from '$lib/i18n/languages';

	/**
	 * Shown on article pages when the requested locale doesn't have a translation
	 * and we're falling back to the default locale (typically English). The banner
	 * is intentionally low-key — a single line, dismissible would be overkill —
	 * and uses the requested-locale UI strings even though the body that follows
	 * is in the served (fallback) locale.
	 */
	let { servedLang, requestedLang }: { servedLang: string; requestedLang: string } = $props();

	const servedName = $derived(getLocale(servedLang).englishName);
	const requestedName = $derived(getLocale(requestedLang).englishName);
</script>

<aside
	role="status"
	class="not-prose flex items-start gap-3 rounded-lg border border-border bg-surface/60 px-4 py-3 text-sm text-text-secondary"
>
	<IconLanguage class="w-5 h-5 text-primary shrink-0 mt-0.5" />
	<div class="space-y-0.5">
		<p>
			{m.article_fallback_body({ served: servedName, requested: requestedName })}
		</p>
	</div>
</aside>
