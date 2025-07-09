<script lang="ts">
	import { PrismicImage, PrismicLink } from "@prismicio/svelte";
    let {logo} = $props();

</script>

<PrismicLink field={logo.link} target="_blank">
    <PrismicImage
    field={logo.image}
    class="w-fit h-fit max-h-32 py-4 place-self-center grayscale hover:grayscale-0 hover:scale-95 dark:invert transition-all duration-300 ease-in-out"
    />
</PrismicLink>