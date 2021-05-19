<script context="module">
  export async function load({ fetch }) {
    const url = `./settings/settings.json`;
    const rawRes = await fetch(url);
    let res = await rawRes.json();
    let settings = res;


    if (rawRes.status) {
      return {
        props: {
          settings
        }
      };
    }

    return {
      status: 500,
      error: new Error(`Could not load ${url}`)
    };
  }
</script>

<script lang="ts">
  import '../../app.css';
  export let settings = [];
 
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
  
  
  <div class="flex">
    <!-- <form 
    action="/settings.json"
    method="post"
    on:submit={(event)=>{event.preventDefault(); console.log("Submitted");}}
    >
    <button type="submit">Save Settings</button> -->
      <button on:click={()=>{saveSettings(settings)}}>Save Settings</button>
    <!-- </form> -->
  </div>
</div>

<style>
  
</style>