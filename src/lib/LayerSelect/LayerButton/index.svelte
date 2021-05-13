<script>
  import { setActiveLayer } from "$lib/GriffinBotStore";
  export let layerName;
</script>

<button on:click={()=>{setActiveLayer(layerName)}}>{layerName}</button>

<style>
  button {
    background-color: var(--accent-color);
    padding: 5%;
    margin: 1em;
    word-wrap: normal;
    min-width: 10em;
    max-width: 20em;
    border-radius: 0.5em;
  }
</style>