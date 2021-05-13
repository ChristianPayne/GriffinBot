import { writable } from "svelte/store";

export const activeLayer = writable("");

// Get from local storage.
export function setActiveLayer (layerName: string) {
  if(typeof(window) === 'undefined') return;
  activeLayer.update(() => layerName);
  localStorage.setItem("LayerName", layerName);
}

export async function getActiveLayer () {
  if(typeof(window) === 'undefined') return;
  const layerName = await localStorage.getItem("LayerName");
  setActiveLayer(layerName);
}

export function clearActiveLayer () {
  if(typeof(window) === 'undefined') return;
  activeLayer.update(()=>"")
  localStorage.setItem("LayerName", "");
}