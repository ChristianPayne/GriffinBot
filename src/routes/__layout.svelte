<script lang="ts">
	import { getActiveLayer, loadSettings, activeLayerLoaded } from "$lib/GriffinBotStore";
	getActiveLayer().catch((err)=>{console.error("Error getting active layer. ", err)});
	
  loadSettings();

	let showFooter = false;
	showFooter = !$activeLayerLoaded;
</script>

<main>
	<slot></slot>
	{#if showFooter}
		<div class="footer-space">&nbsp;</div>
		<footer>
			<hr>
			<div class="space-between">
				<div>
					<a href="/">Home</a>
					<span>|</span>
					<a href="/layer">Layers</a>
				</div>
				<div>
					<a href="https://draculatheme.com/" target="_blank">Styled by Dracula</a>
				</div>
			</div>
		</footer>
	{/if}
</main>
