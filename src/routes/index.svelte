<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import LayerSelect from '$lib/LayerSelect/index.svelte';
	import { getActiveLayer } from "$lib/GriffinBotStore";
	getActiveLayer().catch((err)=>{console.error("Error getting active layer. ", err)});
</script>

<svelte:head>
	<title>GriffinBot</title>
</svelte:head>

<section>
	<LayerSelect />
</section>

<style>
</style>
