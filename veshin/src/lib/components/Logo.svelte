<script lang="ts">
	import type { Content } from '@prismicio/client';

    export let navigation: Content.MainNavigationDocument;

</script>

<div class="text-center">

        <img src={navigation.data.nav_logo_dark.url} alt={navigation.data.nav_logo_dark.alt} class="w-32 mx-auto md:mx-0 my-2 dark:hidden">

        <img src={navigation.data.nav_logo.url} alt={navigation.data.nav_logo.alt} class="w-32 mx-auto md:mx-0 my-2 hidden dark:block">

</div>