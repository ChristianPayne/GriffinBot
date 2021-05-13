<script>
  export let layerName;

  function onClick () {
    localStorage.setItem("LayerName", layerName);
  }
</script>

<button on:click={onClick}>{layerName}</button>

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