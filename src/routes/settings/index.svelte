<script context="module">
  import { settings as _settings, navigateToPath} from "$lib/GriffinBotStore";
</script>

<script lang="ts">
  import '../../app.css';
  let settings : any[];

  _settings.subscribe((newArray)=> {
    settings = newArray;
  })
 
  function getSettingSections (): string[] {
    
    if(!settings) return;

    let sortedSections = settings.map(setting=>{if(!setting.section) {setting.section = 'Other'} return setting.section ?? 'Other'});
    // let sortedSettings = sortedSections.sort((a,b)=>{
    //   if(a.section < b.section) return 1;
    //   else if (a.section > b.section) return -1;
    //   else return 0;
    // });
    let sections = [... new Set(sortedSections)]
    return sections;
  }

  async function saveSettings (settings) {

    let body = await JSON.stringify(settings, null, " ")
    
    let rawRes = await fetch('./settings/settings.json', {
      method: 'post',
      headers: {
        accept : 'application/json'
      },
      body
    });
    console.log(rawRes);
    
  }
</script>

<div>
  <h1>Settings</h1>
  {#each getSettingSections() as section}
    <h2>{section}</h2>
    {#each settings as setting}
      {#if setting.section === section}
        <hr>
        <div class="space-between">
          <p>{setting.displayName}</p>
          
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
  
  
  <div class="space-between">
    <button on:click={()=>{navigateToPath('/')}}>Home</button>
    <button on:click={()=>{saveSettings(settings)}}>Save Settings</button> 
  </div>
</div>

<style>
  
</style>