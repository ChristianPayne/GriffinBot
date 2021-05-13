import { writable } from "svelte/store";
export const activeLayerLoaded = writable(false);

export const settings = writable([]);

// Set to local storage.
export function setActiveLayer (layerName: string) {
  if(layerName) window.location.href = layerName;
}

// Get from local storage.
export async function getActiveLayer () {
  if(typeof(window) === 'undefined') return;
  if(window.location.pathname === '/') return;
  if(window.location.pathname === '/settings') return;
  
  activeLayerLoaded.update(()=>true);
}

// Clear local storage.
export function clearActiveLayer () {
  window.location.href = '/';
}

export function saveSettings (settings) {
  console.log(JSON.stringify(settings));
}

export function loadSettings () {
  settings.update(()=>{
    return [
      {
        section: "GriffinBot",
        name: "Channel",
        value: ""
      },
      {
        section: "GriffinBot",
        name: "Oauth Token",
        type: "password",
        value: ""
      },
      {
        section: "Pomodoro",
        name: "Timer Countdown Color",
        type: "color",
        value: "#000000"
      },
      {
        section: "Pomodoro",
        name: "Timer Countup Color",
        type: "color",
        value: "#ffffff"
      },
      {
        section: "Pomodoro",
        name: "Timer Refresh Interval (ms)",
        value: 50
      },
    ]
  });
}