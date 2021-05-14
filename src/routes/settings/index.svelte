<script context="module">
// export async function load({})
</script>

<script lang="ts">
  import '../../app.css';
  let botSettings = [];

  function getSettingSections (): string[] {
    if(!botSettings) return;

    let sortedSections = botSettings.map(setting=>{return setting.section ?? 'Other'});
    // let sortedSettings = sortedSections.sort((a,b)=>{
    //   if(a.section < b.section) return 1;
    //   else if (a.section > b.section) return -1;
    //   else return 0;
    // });
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
        <div class="space-between">
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
  
  
  <div class="flex">
    <!-- <button on:click={()=>{saveSettings(botSettings)}}>Save Settings</button> -->
  </div>
</div>

<style>
  
</style>