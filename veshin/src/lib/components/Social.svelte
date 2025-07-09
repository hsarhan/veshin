<script lang="ts">
    import { isFilled, type Content } from '@prismicio/client';
	import { PrismicLink } from '@prismicio/svelte';
	import IconLinkedin from './IconLinkedin.svelte';
	import IconInstagram from './IconInstagram.svelte';
	import IconVimeo from './IconVimeo.svelte';

    export let navigation: Content.MainNavigationDocument;

</script>

<!-- Social Items Snippet -->
{#snippet social(url, name, icon)}
    {#if isFilled.link(url) }
        <li>
            <PrismicLink field={url} aria-label={name} class="text-secondary-500 dark:text-secondary-300 transition hover:opacity-75">
                <span class="sr-only">{name}</span>

               <svelte:component this={icon} />
            </PrismicLink>
        </li>
    {/if}
{/snippet}

<div class="grid mx-auto my-2 text-center lg:mx-0 lg:text-right lg:justify-end">
    <!-- Social -->
    <h4 class="h4 font-display font-light lg:mt-0 text-secondary-700 dark:text-secondary-100">Follow us</h4>
    <ul class="w-fit h-fit mx-auto lg:mx-0 mt-4 lg:mt-2 grid auto-cols-max grid-flow-col gap-3 lg:justify-end lg:justify-self-end items-center align-middle">
        {@render social(navigation.data.social_linkedin, navigation.data.social_linkedin.text, IconLinkedin)}

        {@render social(navigation.data.social_instagram, navigation.data.social_instagram.text, IconInstagram )}

        {@render social(navigation.data.social_vimeo, navigation.data.social_vimeo.text, IconVimeo )}

    </ul>
</div>