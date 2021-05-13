<script>
  import LayerButton from "./LayerButton/index.svelte";
  import { activeLayer, clearLocalStorage } from "$lib/GriffinBotStore";
</script>

{#if !$activeLayer}
  <section>
    <p>{$activeLayer}</p>
    <h1>Layer Select</h1>
    <div class="flex">
      <LayerButton layerName="Page 1"></LayerButton>
      <LayerButton layerName="Page 2"></LayerButton>
      <LayerButton layerName="Page 3"></LayerButton>
      <LayerButton layerName="Page 4"></LayerButton>
      <LayerButton layerName="Page 5"></LayerButton>
      <LayerButton layerName="Page 6"></LayerButton>
    </div>
  </section>
  {/if}
<div>
  <button on:click={clearLocalStorage}>Clear localStorage</button>
</div>

<style>
  .flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    background-color: var(--heading-color);
  }
</style>