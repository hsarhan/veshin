<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import { PrismicImage, PrismicLink, PrismicRichText, type SliceComponentProps } from '@prismicio/svelte';
	import { reveal } from 'svelte-reveal';

	type Props = SliceComponentProps<Content.ServicesSlice>;

	const { slice }: Props = $props();;

</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="text-primary-900 dark:text-primary-50 bg-white dark:bg-primary-900 scroll-smooth scroll-mt-32 " id="services">
	<div class="w-full max-w-7xl mx-auto ">
		<div class="py-10 px-4 md:px-6 text-center">
			{#if isFilled.keyText(slice.primary.title)}
				<div class="title h2 mb-8 font-display font-light" use:reveal>
					<h2>{slice.primary.title}</h2>
				</div>
			{/if}
			<div class="grid grid-cols-2 gap-4 lg:gap-6 lg:grid-cols-3">
				{#each slice.primary.services_item as item, i }
				<div id={'services_' + i.toString()} class="h-fit" use:reveal={{ preset: "blur", delay: i * 150 }}>

					<PrismicLink field={item.cta}>
						<div class="card group overflow-clip p-0 bg-white hover:bg-secondary-50/80 dark:bg-secondary-800 dark:hover:bg-secondary-950 border border-primary-100-900 rounded-sm content-start place-self-start h-fit md:h-full">
							<PrismicImage field={item.image} class="w-full rounded-t-sm aspect-square lg:aspect-video object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-out" />						
							<div class="h4 uppercase text-xs lg:text-sm w-fit bg-white group-hover:bg-secondary-50-950 dark:bg-secondary-800 rounded-t-sm py-1 px-2 md:py-2 md:px-4 mx-auto z-10 -translate-y-6">{item.name}</div>
							{#if isFilled.richText(item.short_description) }
								<div class="line-clamp-2 text-xs lg:text-sm text-surface-600-400 py-1 px-3 lg:px-4 text-pretty group-hover:text-surface-800-200 group-hover:-translate-y-3 transition-all duration-150 ease-out"><PrismicRichText field={item.short_description} /></div>
							{/if}
							<button class="text-xs translate-y-10 group-hover:translate-y-0 w-full py-1 self-end border-t border-primary-100-900 group-hover:text-primary-50 group-hover:bg-primary-400 dark:group-hover:bg-secondary-500 transition-all duration-300 ease-out">{item.cta.text}</button>
						</div>
					</PrismicLink>
				</div>
				{/each}
			</div>
		</div>
	</div>
	
</section>

