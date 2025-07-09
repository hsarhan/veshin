<script lang="ts">
	import { PrismicLink, PrismicText } from "@prismicio/svelte";
	import Logo from "./Logo.svelte";
	// import Social from "./Social.svelte";
  import { isFilled, type Content, type LinkField } from '@prismicio/client';
	import IconLinkedin from "./IconLinkedin.svelte";
	import IconInstagram from "./IconInstagram.svelte";
	import IconVimeo from "./IconVimeo.svelte";
	import { fade, fly } from "svelte/transition";
	import { circOut } from "svelte/easing";
	import Newsletter from "./Newsletter.svelte";

  export let navigation: Content.MainNavigationDocument;
  export let footerNav: Content.FooternavigationDocument;
  const duration = 500;
  
</script>

<!-- Social Items Snippet -->
{#snippet social(url: LinkField<string, string, unknown> | null | undefined, name: string | undefined, icon: __sveltets_2_IsomorphicComponent<{ [x: string]: never; }, { [evt: string]: CustomEvent<any>; }, {}, {}, string>)}
    {#if isFilled.link(url) }
        <li>
            <PrismicLink field={url} aria-label={name} class="text-secondary-500 dark:text-secondary-300 transition hover:opacity-75">
                <span class="sr-only">{name}</span>

               <svelte:component this={icon} />
            </PrismicLink>
        </li>
    {/if}
{/snippet}

<footer class="bg-secondary-200 dark:bg-secondary-900 py-4" in:fly={{y: 50, duration, delay: duration, easing: circOut }} out:fade={{duration, easing: circOut }}>
  <div class="mx-auto max-w-screen-xl space-y-8 px-4 py-8 sm:px-6 lg:space-y-16 lg:px-8 lg:py-8">
    <div class="grid grid-cols-1 gap-2 md:grid-cols-6">

      <div class="w-fit mx-auto md:mx-0">
        <a href="/" aria-label="Home"><div class="ml-0 mt-1 xl:m-0 md:p-0"><Logo {navigation} /></div></a>
      </div>

      <!-- SiteMap -->
      <div class="w-xs md:w-full mx-auto text-center grid grid-cols-2 gap-12 justify-center my-6 md:my-0 px-6 md:px-5 md:py-4 md:col-span-4 md:grid-cols-4 md:gap-4 md:text-lefttext-center md:text-left">
        <div>
          <h4 class="h4 mb-3 text-xs font-semibold text-primary-900 uppercase dark:text-white"><PrismicLink field={footerNav.data.footer_nav_1[0]?.link} class="hover:underline">{footerNav.data.footer_nav_1[0]?.title}</PrismicLink></h4>
          {#each footerNav.data.footer_nav_1.slice(1) as item, i}
              <ul class="text-secondary-600 dark:te xt-secondary-400 font-medium">
                <li class="text-xs mb-1">
                  <PrismicLink field={item.link} class="hover:underline">
                    {item.title}
                  </PrismicLink>
                </li>
              </ul>            
          {/each}
          

          <!-- <h4 class="h4 mb-3 text-xs font-semibold text-primary-900 uppercase dark:text-white"><a href="/" class="hover:underline">Home</a></h4>
          <ul class="text-secondary-600 dark:text-secondary-400 font-medium">
              <li class="text-xs mb-1">
                <a href="/" class=" hover:underline">Mission</a>
              </li>
              <li class="text-xs mb-1">
                <a href="/#our_manufacturers" class="hover:underline">Manufacturers</a>
              </li>
              <li class="text-xs mb-1">
                <a href="/#services" class="hover:underline">Services</a>
              </li>
              <li class="text-xs mb-1">
                <a href="/#clients" class="hover:underline">Clients</a>
              </li>
          </ul> -->
        </div>

        <div>
          <h4 class="h4 mb-3 text-xs font-semibold text-primary-900 uppercase dark:text-white"><PrismicLink field={footerNav.data.footer_nav_2[0]?.link} class="hover:underline">{footerNav.data.footer_nav_2[0]?.title}</PrismicLink></h4>
          {#each footerNav.data.footer_nav_2.slice(1) as item, i}
              <ul class="text-secondary-600 dark:te xt-secondary-400 font-medium">
                <li class="text-xs mb-1">
                  <PrismicLink field={item.link} class="hover:underline">
                    {item.title}
                  </PrismicLink>
                </li>
              </ul>            
          {/each}
        <!-- <h4 class="h4 mb-3 text-xs font-semibold text-primary-900 uppercase dark:text-white"><a href="/about" class="hover:underline">About</a></h4>
        <ul class="text-secondary-600 dark:text-secondary-400 font-medium">
          <li class="text-xs mb-1">
            <a href="/about" class="hover:underline">Our Philosophy</a>
          </li>
          <li class="text-xs mb-1">
            <a href="/about#our_mission" class="hover:underline">Our Mission</a>
          </li>
          <li class="text-xs mb-1">
            <a href="/about#our_story" class=" hover:underline">Our Story</a>
          </li>
          <li class="text-xs mb-1">
            <a href="/about#testimonials" class="hover:underline">Testimonials</a>
          </li>
        </ul> -->
        </div>

        <div>
          <h4 class="h4 mb-3 text-xs font-semibold text-primary-900 uppercase dark:text-white"><PrismicLink field={footerNav.data.footer_nav_3[0]?.link} class="hover:underline">{footerNav.data.footer_nav_3[0]?.title}</PrismicLink></h4>
          {#each footerNav.data.footer_nav_3.slice(1) as item, i}
              <ul class="text-secondary-600 dark:te xt-secondary-400 font-medium">
                <li class="text-xs mb-1">
                  <PrismicLink field={item.link} class="hover:underline">
                    {item.title}
                  </PrismicLink>
                </li>
              </ul>            
          {/each}
        <!-- <h4 class="h4 mb-3 text-xs font-semibold text-primary-900 uppercase dark:text-white">Work with us</h4>
        <ul class="text-secondary-600 dark:text-secondary-400 font-medium">
          <li class="text-xs mb-1">
              <a href="/" class=" hover:underline">Partners</a>
          </li>
          <li class="text-xs mb-1">
              <a href="/#services" class="hover:underline">Services</a>
          </li>
          <li class="text-xs mb-1">
              <a href="/#materials" class="hover:underline">Materials</a>
          </li>
          <li class="text-xs mb-1">
              <a href="/" class="hover:underline">Suppliers</a>
          </li>
        </ul> -->
        </div>

        <div>
          <h4 class="h4 mb-3 text-xs font-semibold text-primary-900 uppercase dark:text-white"><PrismicLink field={footerNav.data.footer_nav_4[0]?.link} class="hover:underline">{footerNav.data.footer_nav_4[0]?.title}</PrismicLink></h4>
          {#each footerNav.data.footer_nav_4.slice(1) as item, i}
              <ul class="text-secondary-600 dark:te xt-secondary-400 font-medium">
                <li class="text-xs mb-1">
                  <PrismicLink field={item.link} class="hover:underline">
                    {item.title}
                  </PrismicLink>
                </li>
              </ul>            
          {/each}
        </div>
      </div>

      <!-- <div class="content-start md:pt-4"><Social {navigation}/></div> -->
      <div class="content-start mt-4 md:mt-0 px-6 md:px-0 md:pt-4 text-center text-primary-900 uppercase dark:text-white">
        <Newsletter />
      </div>
    
    </div>  
  
    <div class="grid px-4 pt-6 md:flex md:items-center md:justify-between text-center md:text-left">
      <div class="order-last md:order-first mt-4 md:mt-0">
        <p class="text-sm text-secondary-600 dark:text-secondary-300 text-pretty">{navigation.data.nav_name}
        </p>
        <p class="mt-2 md:mt-0 text-xs text-secondary-500 dark:text-secondary-400 text-pretty">&copy; 2020-{new Date().getFullYear()} - All Rights Reserved.</p>
      </div>
      <div class="flex mb-4 md:mb-0 justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
        <ul class="w-fit h-fit mx-auto lg:mx-0 mt-4 lg:mt-2 grid auto-cols-max grid-flow-col gap-3 lg:justify-end lg:justify-self-end items-center align-middle">
          {@render social(navigation.data.social_linkedin, navigation.data.social_linkedin.text, IconLinkedin)}

          {@render social(navigation.data.social_instagram, navigation.data.social_instagram.text, IconInstagram )}

          {@render social(navigation.data.social_vimeo, navigation.data.social_vimeo.text, IconVimeo )}

        </ul>
    </div>
    </div>
  </div>
</footer>
