<script lang="ts">
	import SidebarNav from '$lib/components/layout/SidebarNav.svelte';
	import ResizableSidebar from '$lib/components/layout/ResizableSidebar.svelte';

	let { children } = $props();
</script>

<!-- Interim: the article tree stays on /articles pages until the standard gets
     its own contents rail (phase 3) and the other pages are rebuilt (phase 5).
     On small screens the header's menu drawer is the navigation. -->
<div class="flex flex-1">
	<aside
		class="sticky top-(--header-h) hidden h-[calc(100dvh-var(--header-h))] shrink-0 border-r border-line bg-surface/50 md:block"
	>
		<ResizableSidebar
			minWidth={220}
			maxWidth={420}
			defaultWidth={280}
			storageKey="frontend-articles-sidebar-width"
		>
			<div class="h-full overflow-y-auto p-4">
				<SidebarNav />
			</div>
		</ResizableSidebar>
	</aside>
	<div class="mx-auto w-full max-w-7xl min-w-0 px-lg py-xl">
		{@render children()}
	</div>
</div>
