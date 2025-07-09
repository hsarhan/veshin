<script lang="ts">
	import { type Content, isFilled } from '@prismicio/client';
	import {
		PrismicRichText,
		PrismicLink,
		type SliceComponentProps
	} from '@prismicio/svelte';
	import { Splide, SplideSlide, type Options } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import Logo from './Logo.svelte';
	import { reveal } from 'svelte-reveal';

	const { slice }: SliceComponentProps<Content.CustomerLogosSlice> = $props();

	// Slider Props
	let dNum = 6;
	let mNum = 3;
	let duration = 5000;
	let move = 2;

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

	const mobileOptions : Options = {
		autoplay: true,
		lazyLoad: 'nearby',
		interval: duration,
		type: 'loop',
		perPage: mNum,
		perMove: move,
		gap: '0.5rem',
		arrows: false,
		pagination: false,
		autoHeight: true
	};
</script>

<!-- Logo Slider -->
{#snippet slider(options : Options)}
	<Splide {options} aria-label="Logos Slider">
		{#each slice.primary.logos as logo (logo.image)}
			{#if isFilled.image(logo.image)}
				<SplideSlide>
					<Logo {logo} />
				</SplideSlide>
			{/if}
		{/each}
	</Splide>
{/snippet}

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="text-surface-800 dark:text-surface-100 bg-surface-100 dark:bg-surface-800 scroll-smooth scroll-mt-34" id={slice.primary.title?.replace(" ", "_").toWellFormed().toLowerCase().toString()}>

	<div class="w-full max-w-7xl mx-auto">
		<div class="p-4 py-8 text-center">
			{#if isFilled.richText(slice.primary.eyebrowHeadline)}
				<div class="h2 my-4 font-display font-light" use:reveal>
					<PrismicRichText field={slice.primary.eyebrowHeadline} />
				</div>
			{/if}
			{#if slice.primary.logos.length > 0}
				<div class="w-full max-w-4xl content-center mx-auto" use:reveal={{ preset: "fly", y: 50, delay: 150}}>

					<div class="hidden md:block">
						{@render slider(mainOptions )}
					</div>
					<div class="block md:hidden">
						{@render slider(mobileOptions )}
					</div>
				</div>

			{/if}
			<div class="mt-8 p-2" use:reveal={{ preset: "fly", y: 50, delay: 300}}>
				<PrismicLink field={slice.primary.callToActionLink} class="text-sm border px-3 py-1 rounded-4xl hover:text-primary-600 dark:hover:text-secondary-300 hover:bg-white/50 dark:hover:bg-secondary-900/50 transition-all duration-300 ease-out" />
			</div>
		</div>
	</div>
</section>
