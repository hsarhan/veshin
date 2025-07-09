<script lang="ts">
    let {cta, clickHandlerURL} = $props();
    
    let clickHandler = (() => {
        window.location.href = clickHandlerURL || null;
    });
</script>

<button onclick={clickHandler} class="w-full md:w-fit btn md:btn-md lg:btn-md bg-primary-600 dark:bg-secondary-400 text-primary-50 dark:text-secondary-800 mt-4">{cta}</button>