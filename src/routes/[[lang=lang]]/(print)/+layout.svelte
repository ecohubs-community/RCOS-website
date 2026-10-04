<script lang="ts">
	import './layout.css';

	/** Pages made to be printed (and turned into PDFs): no site header or footer. */
	let { children } = $props();
</script>

{@render children()}
