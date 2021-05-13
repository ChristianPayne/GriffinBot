import { writable } from "svelte/store";

export const activeLayer = writable("");

// Get from local storage.
export function setActiveLayer (layerName: string) {
  activeLayer.update(() => layerName);
  localStorage.setItem("LayerName", layerName);
}

export function clearLocalStorage () {
  activeLayer.update(()=>"")
  localStorage.clear();
}