<script lang="ts">
	import { dev } from "$app/env";
	import HomeButton from '$lib/HomeButton/index.svelte';
	import { getActiveLayer, loadSettings } from "$lib/GriffinBotStore";
	getActiveLayer().catch((err)=>{console.error("Error getting active layer. ", err)});
	
  loadSettings();
</script>

<main>
	<section>
		<HomeButton />
	</section>
	<slot></slot>
	{#if dev}
		<footer>
			<hr>
			<div class="space-between">
				<div>
					<a href="/">Home</a>
					<a href="/layer">Layers</a>
				</div>
				<div>
					<a href="https://draculatheme.com/" target="_blank">Styled by Dracula</a>
				</div>
			</div>
		</footer>
	{/if}
</main>
