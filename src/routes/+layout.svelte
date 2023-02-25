<script>
	import '../app.postcss';
    import {onMount} from "svelte";
    let loading = true
    let showPage = false

    onMount(() => {
        setTimeout(() => {
            loading = false;
            document.getElementById('loader').classList.replace('animate-bounce', 'reverseBlurTransition')
        }, 1000)
        setTimeout(() => {
            showPage = true
            document.getElementById('main').classList.replace('blur', 'blurTransition')
        }, 1500)
    })
</script>

<div id="container" class="p-10 sofia w-full flex flex-col">
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {#if !showPage}
            <img id="loader" src="/bellus.min.png" class="w-16 animate-bounce" alt="Loading"/>
        {/if}
    </div>
    <main id="main" class="w-full flex flex-grow min-h-screen mx-auto my-auto max-w-6xl xl:px-12 xl:py-6 blur">
        <slot />
    </main>
</div>