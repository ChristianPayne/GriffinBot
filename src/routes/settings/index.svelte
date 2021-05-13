<script lang="ts">
  import '../../app.css';
  import { settings, saveSettings} from "$lib/GriffinBotStore";
  let botSettings = $settings;

  function getSettingSections (): string[] {
    if(!botSettings) return;

    let sortedSettings = botSettings.sort((a,b)=>{return a.section < b.section ? -1 : 1});
    let sortedSections = sortedSettings.map(setting=>setting.section);
    let sections = [... new Set(sortedSections)]
    return sections;
  }
</script>

<div>
  <h1>Settings</h1>
  {#each getSettingSections() as section}
    <h2>{section}</h2>
    {#each botSettings as setting}
      {#if setting.section === section}
        <hr>
        <div class="flex">
          <p>{setting.name}</p>
          
          {#if setting.type}
            {#if setting.type === 'color'}
              <input type="color" bind:value="{setting.value}">
            {:else if setting.type === 'password'}
              <input type="password" bind:value="{setting.value}">
            {/if}
          {:else}
            {#if typeof(setting.value) == "number"}
              <input type="number" bind:value="{setting.value}">
            {:else if typeof(setting.value) == "string"}
              <input type="text" bind:value="{setting.value}">
            {/if}
          {/if}
        </div>
      {/if}
    {/each}
  {/each}
  
  
  <div class="center">
    <button on:click={()=>{saveSettings(botSettings)}}>Save Settings</button>
  </div>
</div>

<style>
  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .flex * {
    margin: 1em;
  }

  .center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    padding: 1em;
  }

  input {
    padding: 0.5em;
  }

  h2 {
    margin-left: 0.5em;
    font-size: 1.5em;
    font-weight: lighter;
  }
</style>