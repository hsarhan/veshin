<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import type { SliceComponentProps } from '@prismicio/svelte';
	import { Splide, SplideSlide, type Options } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import Testimonial from './Testimonial.svelte';
	import { reveal } from 'svelte-reveal';

	type Props = SliceComponentProps<Content.TestimonialsSlice>;

	const { slice }: Props = $props();

	// Slider Props
	let dNum = 3;
	let mNum = 1;
	let duration = 6000;
	let move = 1;

	const mainOptions : Options = {
		autoplay: true,
		lazyLoad: 'nearby',
		interval: duration,
		type: 'loop',
		perPage: dNum,
		perMove: move,
		gap: '0.25rem',
		arrows: false,
		pagination: false,
		autoHeight: true
	};

	const mobileOptions : Options = {
		autoplay: true,
		lazyLoad: 'nearby',
		interval: duration,
		type: 'loop',
		perPage: mNum,
		perMove: move,
		gap: '0.5rem',
		arrows: false,
		pagination: true,
		autoHeight: true
	};
	
</script>

<!-- Slider -->
{#snippet slider(options : Options)}
	<Splide {options} aria-label="Testimonials">
		{#each slice.primary.testimonials_item as item, i}

			<SplideSlide>
				<div id={'testimonials_'+ i.toString()} class="item">
					<Testimonial {item}/>
				</div>
			</SplideSlide>

		{/each}
	</Splide>
{/snippet}

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} id="testimonials" class="dark:bg-surface-800 scroll-smooth scroll-mt-34">
	<div class="w-full max-w-7xl mx-auto">
		<div class="py-12 px-4 md:px-0 text-center dark:bg-secondary-950">
			{#if isFilled.keyText(slice.primary.title)}
				<div class="h2 font-display font-light title" use:reveal>
					<h2>{slice.primary.title}</h2>
				</div>
			{/if}
			<div class="hidden lg:block" use:reveal={{ preset: "blur", y: 50, delay: 150, easing: 'easeInOutQuad'}}>
				{@render slider(mainOptions)}
			</div>
			<div class="block lg:hidden" use:reveal={{ preset: "blur", y: 50, delay: 150, easing: 'easeInOutQuad'}}>
				{@render slider(mobileOptions)}
			</div>
		</div>
	</div>
	<!-- <div class="w-full max-w-7xl mx-auto grid lg:grid-cols-3 md:grid-cols-2">
		{#each slice.primary.testimonials_item as item }
			<Testimonial {item} />
		{/each}
	</div> -->
</section>
