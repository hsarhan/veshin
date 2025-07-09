<script lang="ts">
    import { applyAction, enhance } from "$app/forms";
    export let form;
</script>

<div class="@container">
    <h4 class="text-xs font-semibold place-self-end @xs:place-self-center @lg:place-self-center">Subscribe <span class="md:hidden">to our newsletter</span></h4>
    <div class="md:hidden"><p class="text-xs normal-case text-pretty mt-3 mb-5 max-w-[42ch] mx-auto h-fit text-secondary-600 dark:text-secondary-400">Stay up to date with our Next-Gen materials, announcements and exclusive content.</p></div>
    <div class="px-6 md:px-0 place-self-end @xs:place-self-center">
        {#if form?.success }
			<!-- Success -->
			<div class="space-y-2 pb-2">
				<p class="py-4 text-sm text-gray-500 dark:text-gray-200 mb-4">{@html form?.status || ""}</p>
			</div>
		{:else}
            <form class="space-y-6" method="POST" use:enhance={() => {
                return async({result}) => {
                    await applyAction(result)
                }
            }}  >
                <div class="grid grid-cols-2 md:grid-cols-1 gap-4 my-4 ">
                    <input name="name" id="name" aria-label="name" class="ig-input bg-primary-50-950/70 text-xs rounded" type="text" placeholder="First Name" value={form?.name || ""} class:error={form?.errors.name} />
                    {#if form?.errors.name }
                        <p class="mt-1 text-error-600 text-xs font-bold">* {form?.errors.name}</p>
                    {/if}
                    <input class="ig-input bg-primary-50-950/70 text-xs rounded" type="text" placeholder="Last Name" value={form?.lastname || ""} class:error={form?.errors.lastname} />
                    {#if form?.errors.lastname }
                        <p class="mt-1 text-error-600 text-xs font-bold">* {form?.errors.lastname}</p>
                    {/if}
                </div>
                <div class="mt-4 input-group grid-cols-[auto_1fr_auto]">
                    <div class="ig-cell preset-tonal-primary md:hidden">
                        @
                    </div>
                    <input class="ig-input bg-primary-50-950/70 text-xs" type="email" placeholder="Your email..." value={form?.email || ""} class:error={form?.errors.email} />
                    {#if form?.errors.email }
                        <p class="mt-1 text-error-600 text-xs font-bold">* {form?.errors.email}</p>
                    {/if}
                    <button type="submit" id="submit" class="ig-btn text-xs btn-sm bg-secondary-300-700 hover:bg-secondary-600 hover:text-secondary-300 dark:text-secondary-100">Submit</button>
                </div>
            </form>
            {/if}
    </div>
</div>