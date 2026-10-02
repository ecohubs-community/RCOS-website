<script lang="ts">
	/** An RFC 2119 keyword (MUST, MAY, …) in a rule, in the page's language. */
	let { text, kind }: { text: string; kind: string } = $props();
	const may = $derived(kind === 'may' || kind === 'should' || kind === 'should-not');
</script>

<span
	class={[
		'rounded px-1.5 py-0.5 font-ui text-[0.8em] font-bold tracking-wide whitespace-nowrap',
		may ? 'bg-kw-may text-kw-may-ink' : 'bg-kw-must text-kw-must-ink'
	]}>{text}</span
>
