import { writable } from "svelte/store";
import { goto } from "$app/navigation";
import { browser } from "$app/env";

export const activeLayerLoaded = writable(true);

export const settings = writable([]);

let settingsLoaded = false;

let _settings: any[];
settings.subscribe((settings)=> {_settings = settings});

export function navigateToPath (path: string) {
  goto(path);
}

// Get from local storage.
export async function setActiveLayer (value: boolean) {
  if(!browser) return;

  console.log("Set active layer: ", value);
  
  activeLayerLoaded.set(value);
}

// Clear local storage.
export function clearActiveLayer () {
  navigateToPath('/layer');
}

export async function getSetting (settingName) {
  console.log('Start of getSetting');
  
  if(!settingsLoaded)
  {
    console.log("Get Settings : Not loaded");
    await loadSettings();
  }
  console.log("Get Settings : Loaded");
  
  
  return _settings.find((setting)=>{return setting.name === settingName})?.value;
}

export function saveSettings (settings) {
  console.log(JSON.stringify(settings));
}

export async function loadSettings () {
  if(settingsLoaded) { console.log("Settings already loaded."); return _settings;}
  const url = `/settings/settings.json`;
  const rawRes = await fetch(url);
  // console.log(rawRes);

  if(!rawRes.ok)
  {
    console.error("Error loading settings.");
    return;
  }

  let res = await rawRes.json();
  settings.set(res);
  _settings = res;
  console.log("Loaded settings.", res);
  settingsLoaded = true;
  return _settings;
}