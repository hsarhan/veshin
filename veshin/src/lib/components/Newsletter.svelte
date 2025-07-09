<script lang="ts">
    import { toaster } from '../../toaster-svelte';

    let formSubmitted = $state(false);
    let name = $state("");
    let lastname = $state("");
    let email = $state("");

    let prefilledLink = $derived(
        `https://docs.google.com/forms/d/e/1FAIpQLSeu_Ps5ekYmnhfOBMc-onzv2HDXFooCJwIWuOQy5zn3SR7EXA/formResponse?usp=pp_url&entry.881680626=${name}&entry.1736466417=${lastname}&entry.808300705=${email}&submit=Submit`
    );

    function handleSubmit(event: Event) {
        event.preventDefault(); // Explicitly prevent default behavior
        formSubmitted = false; // Reset form submission state

        // Handle form data here
        if (!name || !lastname || !email) {
            toaster.create({
                type: 'error',
                duration: 5000,
                title: 'Error',
                description: 'Please fill in all fields before submitting this form.'
            });
            return;
        } else if (!email.includes('@')) {
            toaster.create({
                type: 'error',
                duration: 5000,
                title: 'Error',
                description: 'Please enter a valid email address.'
            });
            return;
        } else if (email.length < 5) {
            toaster.create({
                type: 'error',
                duration: 5000,
                title: 'Error',
                description: 'Email must be at least 5 characters long.'
            });
            return;
        }else if (name.length < 2 || lastname.length < 2) {
            toaster.create({
                type: 'error',
                duration: 5000,
                title: 'Error',
                description: 'Name and Last Name must be at least 2 characters long.'
            });
            return;
        } else {
            // If all validations pass, open the prefilled link in a new tab
            fetch(prefilledLink)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(responseData => {
                console.log('Success:', responseData);
            })
            .catch(error => {
                console.error('Error:', error);
            });

            toaster.create({
                type: 'success',
                duration: 5000,
                title: `Thanks ${name}!`,
                description: 'You are now subscribed to our newsletter.'
            });
            
            // Clear the form fields
            name = '';
            lastname = '';
            email = '';
            formSubmitted = true;
        }
    }
</script>


<div class="@container">
    <h4 class="text-xs font-semibold place-self-end @xs:place-self-center @lg:place-self-center">Subscribe <span class="md:hidden">to our newsletter</span></h4>
    <div class="md:hidden"><p class="text-xs normal-case text-pretty mt-3 mb-5 max-w-[42ch] mx-auto h-fit text-secondary-600 dark:text-secondary-400">Stay up to date with our Next-Gen materials, announcements and exclusive content.</p></div>
    <div class="px-6 md:px-0 place-self-end @xs:place-self-center">

        {#if formSubmitted}
            <!-- Success -->
            <div class="space-y-2 pb-2">
                <h6 class="text-right @xs:text-center @lg:text-center text-xs normal-case text-pretty place-self-end @xs:place-self-center @lg:place-self-center mt-3 mb-5 max-w-[42ch] mx-auto h-fit text-secondary-600 dark:text-secondary-400"><span class="font-semibold">Thanks!</span><br/>You have subscribed to our newsletter.</h6>
            </div>
        {:else}
            <form class="space-y-6" onsubmit={handleSubmit} action={prefilledLink} method="POST" target="_blank">
                <div class="grid grid-cols-2 md:grid-cols-1 gap-4 my-4 ">
                    <input name="name" id="name" aria-label="name" class="ig-input bg-primary-50-950/70 text-xs rounded" type="text" placeholder="First Name" bind:value="{name}"/>
                    
                    <input class="ig-input bg-primary-50-950/70 text-xs rounded" type="text" placeholder="Last Name" bind:value="{lastname}"/>
                    
                </div>
                <div class="mt-4 input-group grid-cols-[auto_1fr_auto]">
                    <div class="ig-cell preset-tonal-primary md:hidden">
                        @
                    </div>
                    <input class="ig-input bg-primary-50-950/70 text-xs" type="text" placeholder="Your email..." bind:value="{email}"/>
                    
                    <button type="submit" id="submit" class="ig-btn text-xs btn-sm bg-secondary-300-700 hover:bg-secondary-600 hover:text-secondary-300 dark:text-secondary-100">Submit</button>
                </div>
            </form>
        {/if}

    </div>
</div>