<script>
  import { clearActiveLayer, activeLayerLoaded } from "$lib/GriffinBotStore";
</script>

<section>
  {#if !$activeLayerLoaded}
  
  {:else}
    <button on:click={clearActiveLayer}></button>
  {/if}
</section>

<style>
  .flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    background-color: var(--heading-color);
  }

  button {
    position: absolute;
    top: 0%;
    bottom: 0%;
    min-width: 100%;
    opacity: 0%;
  }
</style>