<script>
  import LayerButton from "./LayerButton/index.svelte";
  import { activeLayer, clearActiveLayer } from "$lib/GriffinBotStore";
</script>

<section>
  {#if !$activeLayer}
  <h1>Layer Select</h1>
  <div class="flex">
    <LayerButton layerName="Layer 1"></LayerButton>
    <LayerButton layerName="Layer 2"></LayerButton>
    <LayerButton layerName="Layer 3"></LayerButton>
    <LayerButton layerName="Layer 4"></LayerButton>
    <LayerButton layerName="Layer 5"></LayerButton>
    <LayerButton layerName="Layer 6"></LayerButton>
  </div>
  {:else}
    <h1>{$activeLayer}</h1>
    <button on:click={clearActiveLayer}>Clear active layer</button>
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
</style>