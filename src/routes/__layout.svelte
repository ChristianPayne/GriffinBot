<script lang="ts">
	import LayerSelect from '$lib/LayerSelect/index.svelte';
	import { getActiveLayer, loadSettings } from "$lib/GriffinBotStore";
	getActiveLayer().catch((err)=>{console.error("Error getting active layer. ", err)});
	
  loadSettings();
</script>

<main>
	<section>
		<LayerSelect />
		<slot />
	</section>
</main>

