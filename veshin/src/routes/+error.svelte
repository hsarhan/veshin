<script>
	import Button from "$lib/components/Button.svelte";
</script>

<svelte:head>
	<title>Error!</title>
</svelte:head>

<section id="error" class="dark:bg-surface-800 scroll-smooth scroll-mt-34">
    <div class="max-w-6xl min-h-[50dvh] py-12 grid grid-rows-[auto_1fr_auto] mx-auto bg-primary-50 dark:bg-primary-800">
        <main class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
            <div class="text-center">
                <p class="text-3xl font-semibold text-primary-700-300">Error 404</p>
                <h1 class="mt-4 text-5xl font-display font-semibold tracking-tight text-balance text-secondary-800-200 sm:text-7xl">Page not found</h1>
                <p class="mt-6 text-lg font-medium text-pretty text-surface-600-400 sm:text-xl/8">This page does not exist</p>
                <div class="mt-10 flex items-center justify-center gap-x-6">
                    <Button cta="Back to homepage" clickHandlerURL="/"></Button>
                </div>
            </div>
        </main>
    </div>
</section>
