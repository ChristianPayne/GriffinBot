<script context="module" lang="ts">
	export const prerender = true;
</script>

<script>
  import LayerButton from "$lib/LayerSelect/LayerButton/index.svelte";
  import '../app.css';
</script>

<div>
	<h1>Layer Select</h1>
  <div class="flex">
		<LayerButton layerName="Pomodoro Timer" layerURL="pomodoro-timer" />
    <LayerButton layerName="Settings" layerURL="/settings"/>
    <LayerButton layerName="Layer 3" layerURL="/"/>
    <LayerButton layerName="Layer 4" layerURL="/"/>
    <LayerButton layerName="Layer 5" layerURL="/"/>
    <LayerButton layerName="Layer 6" layerURL="/"/>
  </div>
</div>

<style>
  .flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    background-color: var(--heading-color);
  }
</style>