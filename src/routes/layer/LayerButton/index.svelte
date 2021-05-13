<script>
  import { navigateToPath } from "$lib/GriffinBotStore";
  export let pathName;
  export let path;
</script>

<button on:click={()=>{navigateToPath(path)}}>{pathName}</button>
