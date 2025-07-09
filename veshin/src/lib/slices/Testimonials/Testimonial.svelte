<script lang="ts">
    import { PrismicImage} from "@prismicio/svelte";
    let {item} = $props();
</script>


<div class="text-surface-800 dark:text-surface-100 h-full mb-12 lg:mb-0">
    <div class="grid max-w-screen-xl h-full px-4 py-6 mx-auto text-center lg:py-16 lg:px-6">
        <figure class="max-w-md mx-auto min-h-fit justify-center self-center content-end bg-secondary-50/80 dark:bg-secondary-800/50 p-4 rounded-lg">
            <blockquote>
                <p class="text-md/snug lg:text-sm font-medium font-display text-pretty line-clamp-6 px-4 text-primary-900 dark:text-primary-100">{item.quote}</p>
            </blockquote>
            <figcaption class="flex items-center justify-center mt-6 space-x-3 scale-85">
                <PrismicImage field={item.avatar} class="w-6 h-6 rounded-full dark:border" />
                <div class="flex items-center divide-x-1 divide-gray-500 dark:divide-secondary-700">
                <div class="pr-2 text-sm font-medium text-gray-900 dark:text-primary-100">{item.name}</div>
                <div class="pl-2 text-xs font-light text-gray-500 dark:text-secondary-400">{item.position} at {item.company}</div>
            </div>
            </figcaption>
        </figure>
    </div>
</div>