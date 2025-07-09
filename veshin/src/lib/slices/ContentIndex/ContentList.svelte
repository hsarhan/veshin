<script lang="ts">
    import {type Content, type ImageField, type KeyTextField} from '@prismicio/client';
	import { PrismicImage, PrismicLink, PrismicRichText } from '@prismicio/svelte';
	import { reveal } from 'svelte-reveal';

    type PageProps = { items: Content.BlogDocument[] | Content.MaterialsDocument[]; fallbackImage: ImageField; viewMoreText: KeyTextField; };
    let { items, fallbackImage, viewMoreText } = $props();
</script>

<div class="grid grid-cols-2 gap-4 lg:gap-6 lg:grid-cols-3 py-6">
    {#each items as post, index (post.id + index)}
        <div class="py-1" use:reveal={{ preset: "blur", delay: index * 150 }}>
            <PrismicLink document={post}>
                <div
                class="card group h-full preset-filled-surface-50-950 border border-secondary-200-800/25 card-hover divide-surface-200-800 hover:bg-secondary-50-950 dark:bg-secondary-800 dark:hover:bg-secondary-95 hover:shadow-lg block max-w-md divide-y overflow-hidden transition-all duration-300"
                >
                    <header>
                    <PrismicImage field={post.data.featured_image} class="w-full h-full object-cover aspect-square md:aspect-video grayscale group-hover:grayscale-0 transition-all duration-500" />
                    </header>
        
                    <article class="space-y-4 p-4 text-left">
                    <div class="text-surface-700-300">
                        <h2 class="h6 text-xs font-light group-hover:text-secondary-500">Announcements</h2>
                        <h3 class="h3 font-display font-normal text-balance group-hover:text-secondary-700-300">{post.data.title}</h3>
                    </div>
                    <div class="prose-headings:h4 prose-headings:font-display prose-headings:font-light prose-headings:text-primary-700-300 prose-a:text-primary-600-400 prose-a:hover:underline prose-headings:text-balance prose-img:rounded-lg prose-img:my-8 space-y-4 py-4 text-sm leading-4 text-pretty line-clamp-2 text-surface-600">
                        <PrismicRichText field={post.data.short_description} />
                    </div>
                    </article>
        
                    <footer class="flex items-center justify-between gap-4 p-4 text-surface-600-400 group-hover:text-secondary-600-400">
                        <small class="opacity-60">By Veshin Factory</small>
                        <small class="opacity-60">{post.data.view_more_text}</small>
                    </footer>
                </div>
            </PrismicLink>
        </div>       
    {/each}
</div>