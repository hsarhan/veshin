<script lang="ts">
	import { isFilled } from "@prismicio/client";
	import { PrismicImage, PrismicLink } from "@prismicio/svelte";

    let {press_image, press_link, press_title} = $props();

</script>

<div class="h-full text-center group bg-black overflow-clip">
    <PrismicLink field={press_link} class="w-fit">
        <PrismicImage field={press_image} alt={press_title} class="-z-1 w-30 md:w-full h-fit max-h-48 lg:max-h-80 aspect-square object-cover group-hover:grayscale group-hover:opacity-60 transition-all duration-300" />
        {#if isFilled.keyText(press_link.text) }
            <div class="hidden md:block">
                <div class="w-fit p-1 scale-80 lg:px-4 lg:py-2 mx-auto text-primary-50 bg-primary-500 rounded-lg z-10 translate-y-20 group-hover:-translate-y-2 md:group-hover:-translate-y-5 hover:bg-secondary-600 -mt-20 transition-all duration-300 ease-out">{press_link.text}</div>
            </div>	
        {/if}
    </PrismicLink>
</div>