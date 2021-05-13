<script>
  import { clearActiveLayer, activeLayerLoaded } from "$lib/GriffinBotStore";
</script>

<section>
  {#if $activeLayerLoaded}
    <button on:click={clearActiveLayer}></button>
  {/if}
</section>

<style>
  button {
    position: absolute;
    top: 0%;
    bottom: 0%;
    min-width: 100%;
    opacity: 0%;
  }
</style>