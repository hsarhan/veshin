<script lang="ts">
	import { isFilled } from "@prismicio/client";
	import { PrismicImage, PrismicLink } from "@prismicio/svelte";

    let {item} = $props();
</script>

<PrismicLink field={item.cta_url}>
    <div class="grid group">
        <div class="absolute backdrop-sepia-50 z-1 w-full h-full bg-black/25 group-hover:opacity-0 group-hover:scale-105 transition-all duration-300 ease-in-out"></div>
        <PrismicImage
        field={item.image}
        class="-z-1 w-fit h-full place-self-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300 ease-in-out aspect-square"
        />
        <div class="group z-10 -mt-25 md:-mt-40 overflow-clip">
            <div class="w-10 h-10 object-contain shadow-sm scale-70 md:scale-90 group-hover:scale-80 md:group-hover:scale-95 place-self-center transition-all duration-150 ease-in-out"><PrismicImage field={item.flag} /></div>
            <h6 class="h6 text-xs text-shadow-lg md:text-2xl w-full p-1 text-primary-50 text-center group-hover:scale-90 transition-all duration-200 ease-in-out">{item.title}</h6>
            {#if isFilled.keyText(item.cta_url) }	
                <div class="w-fit shadow-sm px-2 py-1 scale-60 md:scale-75 lg:px-4 lg:py-2 mx-auto text-primary-50 bg-secondary-700 hover:bg-primary-600 group-hover:bg-primary-600 group-hover:scale-70 md:group-hover:scale-90 rounded-lg transition-all duration-200 ease-in-out">{item.cta_url.text}</div>
            {/if}
        </div>
    </div>
</PrismicLink>