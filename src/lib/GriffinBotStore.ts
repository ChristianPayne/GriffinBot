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