import { writable } from "svelte/store";
export const activeLayerLoaded = writable(false);

// Set to local storage.
export function setActiveLayer (layerName: string) {
  if(layerName) window.location.href = layerName;
}

// Get from local storage.
export async function getActiveLayer () {
  if(typeof(window) === 'undefined') return;
  if(window.location.pathname === '/') return;
  
  activeLayerLoaded.update(()=>true);
}

// Clear local storage.
export function clearActiveLayer () {
  window.location.href = '/';
}