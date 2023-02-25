<script lang="ts">
    export let title: string | undefined;
    export let href: string | undefined;
    export let slime: string | undefined;

    let classes = "tinted min-w-full shadow shadow-md shadow-bg-white/10"
</script>
<style>
</style>
{#if href == null}
    <div class={classes}>
        <div class="background">
            {#if slime != null} <img src={slime} class="w-6" alt="An adorable slime"/> {/if}
            {#if title != null}<h3 class="heading">{title}</h3>{/if}
            <div class="paragraph"><slot/></div>
        </div>
    </div>
{:else}
    <a href={href} class={classes} rel="noreferrer" target="_blank">
        <div class="background">
            {#if slime != null} <img src={slime} class="w-6" alt="An adorable slime"/> {/if}
            {#if title != null}<h3 class="heading">{title}</h3>{/if}
            <div class="paragraph"><slot/></div>
        </div>
    </a>
{/if}