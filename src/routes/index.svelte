<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import LayerSelect from '$lib/LayerSelect/index.svelte';
</script>

<svelte:head>
	<title>GriffinBot</title>
</svelte:head>

<section>
	<LayerSelect />
</section>

<style>
</style>
