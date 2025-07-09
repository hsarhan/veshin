<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import { type SliceComponentProps } from '@prismicio/svelte';
	import { Splide, SplideSlide, type Options } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import PressItem from './PressItem.svelte';

	type Props = SliceComponentProps<Content.PressLoopSlice>;

	const { slice }: Props = $props();

	// Slider Props
	let dNum = 3;
	let duration = 5000;
	let move = 1;

	const mainOptions : Options = {
		autoplay: true,
		lazyLoad: 'nearby',
		interval: duration,
		type: 'loop',
		perPage: dNum,
		perMove: move,
		gap: '0',
		arrows: true,
		pagination: false,
		autoHeight: true
	};
</script>

<!-- PressItem Slider -->
{#snippet slider(options : Options)}
	<Splide {options} aria-label="Press Slider">
		{#each slice.primary.press_item as {press_image, press_title, press_link}, index}
			{#if isFilled.image(press_image)}
				<SplideSlide>
					<PressItem {press_image} {press_title} {press_link} />
				</SplideSlide>
			{/if}
		{/each}
	</Splide>
{/snippet}

<!-- Press Section -->
<section class="text-surface-800 dark:text-surface-100 bg-surface-100 dark:bg-surface-800">
	<div class="w-full max-w-7xl mx-auto">
		<!-- Press Items -->
		<div class="px-8 py-4 md:py-6">
			<h2 class="h2 py-4 font-semibold text-primary-900-100">{slice.primary.press_title}</h2>
			<div class="block w-full h-fit mb-4">
				{@render slider(mainOptions )}
			</div>
			
			<!-- <div class="grid grid-cols-3 mb-4">
				{#each slice.primary.press_item as {press_image, press_title, press_link}, index}
					<PressItem {press_image} {press_title} {press_link} />
				{/each}
			</div> -->
		</div>
	</div>
</section>
