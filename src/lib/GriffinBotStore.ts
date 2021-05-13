import { writable } from "svelte/store";

export const activeLayer = writable("");

// Get from local storage.
export function setActiveLayer (layerName: string) {
  activeLayer.update(() => layerName);
  localStorage.setItem("LayerName", layerName);
}

export async function getActiveLayer () {
  const layerName = await localStorage.getItem("LayerName");
  setActiveLayer(layerName);
}

export function clearActiveLayer () {
  activeLayer.update(()=>"")
  localStorage.setItem("LayerName", "");
}