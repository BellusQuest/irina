<script>
	import '../app.postcss';
    import {onMount} from "svelte";
    let loading = true
    let showPage = false

    onMount(() => {
        setTimeout(() => {
            loading = false;
            document.getElementById('loader').classList.replace('animate-bounce', 'animate-fade-out-down md:animate-reverse-blur-transition')
        }, 1000)
        setTimeout(() => {
            showPage = true
            const main = document.getElementById('main')
            main.classList.replace('hidden', 'flex')
            main.classList.replace('md:blur', 'md:blur-transition')

            // HIDE THE EVIDENCE... okay kidding, this is a possible fix to mobile lag
            setTimeout(() => main.classList.remove('blurTransition'), 850)
        }, 1500)
    })
</script>
<div id="container" class="p-10 sofia w-full flex flex-col">
    {#if !showPage}
        <div class="h-screen m-auto align-middle justify-center flex flex-row items-center md:min-h-fit md:m-0 md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
            <img id="loader" src="/bellus.min.png" class="w-16 animate-bounce" alt="Loading"/>
        </div>
    {/if}
    <main id="main" class="w-full md:min-h-screen md:m-auto max-w-6xl xl:px-12 xl:py-6 hidden md:flex md:blur">
        <slot />
    </main>
</div>