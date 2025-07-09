<script lang="ts">
  import { type Content} from '@prismicio/client';
	import { PrismicLink } from '@prismicio/svelte';
	import Logo from './Logo.svelte';
  import { onDestroy, onMount } from 'svelte';

  export let navigation: Content.MainNavigationDocument;

  const scrollNavBar = 80;
  let showNav = false
  let showMenu = false;

  function toggleNavbar() {
    showMenu = !showMenu;
  }

  onMount(() => {

    showMenu = false; // Close the menu on initial render
    showNav = false; // Ensure the nav is not shown on initial render

    let lastScrollY = window.scrollY;

    function handleScroll() {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > scrollNavBar) {
      // Scrolling down
      showNav = true;
      } else {
      // Scrolling up
      showNav = false;
      }

      // Reset the menu state when scrolling
      if (showMenu) {
      showMenu = false;
      }

      lastScrollY = currentScrollY;
    }

    window.addEventListener('scroll', handleScroll);

    onDestroy(() => {
      window.removeEventListener('scroll', handleScroll);
    });
  });

</script>
  
  <header>
    <div class={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ease-in-out ${showNav ? ' -translate-y-60 bg-transparent' : 'bg-gray-50 dark:bg-secondary-700 shadow-md'}`}>
      <nav
        class="w-full max-w-screen-xl min-h-24 mx-auto md:flex md:justify-between md:items-center md:px-6"
      >
        <div class="flex items-center justify-between">
          <a href="/" aria-label="Home">
            <div class="items-center ml-0 mt-1 xl:m-0 px-2 py-1 md:p-0">
              <Logo {navigation} />
            </div>
          </a>
          <!-- Mobile menu button -->
          <div class="flex md:hidden px-6 md:p-0" aria-label="mobile-menu">
            <button 
              onclick={toggleNavbar}
              aria-label="menu-toggle"
              type="button"
              class="text-surface-500 dark:text-surface-100 hover:text-primary-400 focus:outline-none focus:text-primary-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
  
        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div
          class={`uppercase text-center md:text-left flex-col space-y-1 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-6 lg:space-x-10 md:mt-0 bg-secondary-50 dark:bg-secondary-600 md:bg-transparent md:dark:bg-transparent py-1 ${showMenu ? 'flex' : 'hidden'}`}
        >
          {#each navigation.data.nav_item as {link_url, link_label}, index }
            <PrismicLink class="text-surface-700 dark:text-surface-100 hover:text-secondary-50 md:hover:text-secondary-300 py-4 transition-all duration-250 ease-in-out hover:bg-primary-200 dark:hover:bg-secondary-800 md:hover:bg-transparent md:dark:hover:bg-transparent" field={link_url} aria-label={link_label} onclick={showMenu? toggleNavbar : undefined}>{link_label}</PrismicLink>
          {/each}

        </div>
      </nav>
    </div>
  </header>
  
  
  