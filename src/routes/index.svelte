<script>
  import "../app.css";
  import { navigateToPath } from "$lib/GriffinBotStore";
</script>

<h1>GriffinBot</h1>

<div class="flex">
  <button on:click={()=>{navigateToPath('/settings')}}>Settings</button>
</div>