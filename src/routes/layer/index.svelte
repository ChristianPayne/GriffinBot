<script context="module" lang="ts">
	// export const prerender = true;
</script>

<script>
  import LayerButton from "./LayerButton/index.svelte";
  import '../../app.css';
</script>

<div>
	<h1>Layer Select</h1>
  <div class="flex">
		<LayerButton pathName="Pomodoro Timer" path="/layer/pomodoro-timer" />
  </div>
</div>