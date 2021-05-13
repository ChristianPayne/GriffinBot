<script>
// localStorage.setItem("Testing","This is the value.");
// localStorage.clear();
import LayerButton from "./LayerButton/index.svelte";
</script>

<section>
  <h1>Layer Select</h1>
  <div class="flex">
    <LayerButton layerName="Page 1"></LayerButton>
    <LayerButton layerName="Page 2"></LayerButton>
    <LayerButton layerName="Page 3"></LayerButton>
    <LayerButton layerName="Page 4"></LayerButton>
    <LayerButton layerName="Page 5"></LayerButton>
    <LayerButton layerName="Page 6"></LayerButton>
  </div>
  <button>Clear localStorage</button>
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