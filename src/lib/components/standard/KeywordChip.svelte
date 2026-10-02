<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';

	/**
	 * An RFC 2119 keyword (MUST, MAY, …) in a rule, in the page's language.
	 * Its meaning is a plain tooltip: chips appear dozens of times per page, so
	 * they stay out of the tab order.
	 */
	let { text, kind }: { text: string; kind: string } = $props();
	const may = $derived(kind === 'may' || kind === 'should' || kind === 'should-not');
	const MEANING: Record<string, () => string> = {
		must: m.std_kw_must,
		'must-not': m.std_kw_must_not,
		should: m.std_kw_should,
		'should-not': m.std_kw_should_not,
		may: m.std_kw_may
	};
</script>

<span
	title={MEANING[kind]?.()}
	class={[
		'cursor-help rounded px-1.5 py-0.5 font-ui text-[0.8em] font-bold tracking-wide whitespace-nowrap',
		may ? 'bg-kw-may text-kw-may-ink' : 'bg-kw-must text-kw-must-ink'
	]}>{text}</span
>
