import { writable } from "svelte/store";
import { goto } from "$app/navigation";

export const activeLayerLoaded = writable(false);

export const settings = writable([]);

export function navigateToPath (path: string) {
  goto(path);
}

// Get from local storage.
export async function getActiveLayer () {
  const ignoredpaths = ["/", "/layer", "/settings"];

  if(typeof(window) === 'undefined') return;
  const pathname = window.location.pathname;
  console.log(pathname);
  

  if(ignoredpaths.find(path => path === pathname)) return;
  
  activeLayerLoaded.update(()=>true);
}

// Clear local storage.
export function clearActiveLayer () {
  navigateToPath('/layer');
}

export function getSetting (settingName) {
  let _settings;
  settings.subscribe((settings)=>_settings = settings);
  return _settings.find((setting)=>{return setting.name === settingName})?.value;
}

export function saveSettings (settings) {
  console.log(JSON.stringify(settings));
}

export function loadSettings () {
  settings.update(()=>{
    return []
  });
}