<script lang="ts">
	import { activeLayerLoaded, navigateToPath, loadSettings, setActiveLayer } from "$lib/GriffinBotStore";
  import { onMount } from "svelte";
	import { navigating } from "$app/stores";

	onMount(async () => {
		// console.log("Layout Mount");
    // loadSettings();
  });

	navigating.subscribe((value)=>{
		if(!value) return;

		const ignoredpaths = ["/", "/layer", "/settings"];
		const pathname = value.to.path;
		console.log(pathname);

		setActiveLayer(ignoredpaths.find(path => path === pathname) ? false : true);
	});

	let layerLoaded: boolean = true;

	activeLayerLoaded.subscribe((value)=>{
		layerLoaded = value;
	});

</script>

<main>
	<slot></slot>
	{#if !layerLoaded}
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
					<a href="https://draculatheme.com/" target="_blank">Styled with Dracula</a>
				</div>
			</div>
		</footer>
	{:else}
		<button id="back-button" on:click={()=>{navigateToPath('/layer')}}>Go Back</button>
	{/if}
</main>

<style>
	#back-button {
		position: absolute;
		top: 0;
		left: 0;
		min-width: 100%;
		min-height: 100%;
		margin: 0%;
		opacity: 0%;
	}
</style>