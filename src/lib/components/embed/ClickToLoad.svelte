<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import IconPlayerPlayFilled from '~icons/tabler/player-play-filled';
	import IconHeadphones from '~icons/tabler/headphones';

	/**
	 * A third-party player (YouTube, RSS.com) that loads only when the visitor
	 * presses play. Until then no request goes to the provider: pass a poster
	 * image served from this site. The click itself is the consent for that one
	 * embed, so this does not depend on the cookie banner.
	 */
	interface Props {
		/** Player URL. For YouTube, autoplay is added on click so one press plays. */
		src: string;
		title: string;
		provider: string;
		kind?: 'video' | 'audio';
		poster?: string;
		/** The poster is above the fold: load it right away (it may be the largest paint). */
		eager?: boolean;
		/** Player height for audio embeds, in px */
		height?: number;
	}

	let {
		src,
		title,
		provider,
		kind = 'video',
		poster,
		eager = false,
		height = 195
	}: Props = $props();

	let active = $state(false);
	const playSrc = $derived(
		kind === 'video' ? `${src}${src.includes('?') ? '&' : '?'}autoplay=1` : src
	);
</script>

{#if active}
	<iframe
		src={playSrc}
		{title}
		allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
		allowfullscreen
		class={['block w-full border-0', kind === 'video' ? 'aspect-video' : 'rounded-xl']}
		height={kind === 'audio' ? height : undefined}
	></iframe>
{:else if kind === 'video'}
	<button
		type="button"
		onclick={() => (active = true)}
		class="group relative block aspect-video w-full overflow-hidden bg-forest-900 text-left"
	>
		{#if poster}
			<img
				src={poster}
				alt=""
				width="960"
				height="540"
				loading={eager ? 'eager' : 'lazy'}
				fetchpriority={eager ? 'high' : undefined}
				class="absolute inset-0 size-full object-cover opacity-85"
			/>
		{/if}
		<span class="absolute inset-0 flex items-center justify-center">
			<span
				class="inline-flex size-16 items-center justify-center rounded-full bg-white/90 text-forest-900 shadow-lg transition-transform group-hover:scale-105"
			>
				<IconPlayerPlayFilled class="size-7" />
			</span>
		</span>
		<span
			class="absolute inset-x-0 bottom-0 bg-forest-900/75 px-4 py-2 font-ui text-xs text-forest-100"
		>
			<span class="sr-only">{m.embed_play_video()}: {title}. </span>{m.embed_loads_from({
				provider
			})}
		</span>
	</button>
{:else}
	<button
		type="button"
		onclick={() => (active = true)}
		style:--player-h="{height}px"
		class="flex h-(--player-h) w-full items-center gap-4 rounded-xl bg-forest-900 px-5 text-left text-forest-50 hover:bg-forest-800"
	>
		<span
			class="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-forest-300 text-forest-900"
		>
			<IconPlayerPlayFilled class="size-5" />
		</span>
		<span class="flex min-w-0 flex-col gap-1">
			<span class="flex items-center gap-1.5 font-ui text-xs text-forest-300"
				><IconHeadphones class="size-3.5" />{m.embed_play_audio()}</span
			>
			<span class="font-serif text-lg leading-snug font-semibold">{title}</span>
			<span class="font-ui text-xs text-forest-300">{m.embed_loads_from({ provider })}</span>
		</span>
	</button>
{/if}
