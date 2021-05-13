<script context="module" lang="ts">
	export const prerender = true;
</script>

<script>
  import LayerButton from "$lib/LayerSelect/LayerButton/index.svelte";
</script>

<div>
	<h1>Layer Select</h1>
  <div class="flex">
		<LayerButton layerName="Pomodoro Timer" layerURL="PomodoroTimer"></LayerButton>
    <LayerButton layerName="Layer 2"></LayerButton>
    <LayerButton layerName="Layer 3"></LayerButton>
    <LayerButton layerName="Layer 4"></LayerButton>
    <LayerButton layerName="Layer 5"></LayerButton>
    <LayerButton layerName="Layer 6"></LayerButton>
  </div>
</div>

<svelte:head>
	<title>GriffinBot</title>
</svelte:head>
