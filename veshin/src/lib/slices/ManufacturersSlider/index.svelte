<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import { type SliceComponentProps } from '@prismicio/svelte';

	import { Splide, SplideSlide, type Options } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import ManufacturersItem from './ManufacturersItem.svelte';
	import { reveal } from 'svelte-reveal';

	type Props = SliceComponentProps<Content.ManufacturersSliderSlice>;

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
		gap: '0.8rem',
		arrows: false,
		pagination: false,
		autoHeight: true
	};
</script>

<!-- Slider -->
{#snippet slider(options : Options)}
	<Splide {options} aria-label="Manufacturers">
		{#each slice.primary.manufacturers_item as item, i}
			{#if isFilled.image(item.image)}
				<SplideSlide>
					<div id={'manufacturers_'+ i.toString()}>
						<ManufacturersItem {item} />
					</div>
				</SplideSlide>
			{/if}
		{/each}
	</Splide>
{/snippet}

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="text-primary-900 dark:text-primary-50 bg-secondary-50 dark:bg-primary-900 scroll-smooth scroll-mt-34" id={slice.primary.title?.replace(" ", "_").toWellFormed().toLowerCase().toString()}>
	<div class="w-full max-w-7xl mx-auto">
		<div class="py-10 px-4 md:px-0 text-center">
			{#if isFilled.keyText(slice.primary.title)}
				<div class="h2 mb-4 font-display font-light" use:reveal={{reset: true}}>
					<h2>{slice.primary.title}</h2>
				</div>
			{/if}
			{#if slice.primary.manufacturers_item.length > 0}
				<div class="w-full max-w-6xl content-center mx-auto" use:reveal={{ preset: "blur", y: 50, delay: 150, easing: 'easeInOutQuad', reset: true}}>
					{@render slider(mainOptions )}
				</div>
			{/if}
		</div>
	</div>
	
</section>
