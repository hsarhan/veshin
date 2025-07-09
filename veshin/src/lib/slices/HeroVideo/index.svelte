<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { type SliceComponentProps } from '@prismicio/svelte';
	import { Vimeo } from 'sveltekit-embed';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	type Props = SliceComponentProps<Content.HeroVideoSlice>;

	const { slice }: Props = $props();
	let vimeoParams = "?autoplay=1&loop=1&controls=0&muted=1&autopause=0?badge=0";

	let visible = $state(false);

	onMount(() => {
		visible = true;
	});

</script>

{#if visible }	
<section in:fade={{duration: 1000}} data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="text-primary-900 dark:text-primary-50 bg-gray-800 dark:bg-primary-900">
	<div class="w-full max-w-[96rem] mx-auto border-0">
		<div class="w-full h-fit bg-gray-800" aria-label={slice.primary.video_title}>
			<Vimeo vimeoId={slice.primary.video_embed + vimeoParams || ""} />
		</div>

	</div>
</section>
{/if}
