<script lang="ts">
	import '../app.css';
	import LayerSelect from '$lib/LayerSelect/index.svelte';
	import { getActiveLayer } from "$lib/GriffinBotStore";
	getActiveLayer().catch((err)=>{console.error("Error getting active layer. ", err)});
</script>

<main>
	<section>
		<LayerSelect />
		<slot />
	</section>
</main>

