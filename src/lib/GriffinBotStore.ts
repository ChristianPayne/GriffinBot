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
        name: "Countdown Color",
        type: "color",
        value: "#ff00ff"
      },
      {
        section: "Pomodoro",
        name: "Break Color",
        type: "color",
        value: "#ffffff"
      },
      {
        section: "Pomodoro",
        name: "Refresh Interval (ms)",
        value: 50
      },
      {
        section: "Pomodoro",
        name: "Countdown Time (m)",
        value: 25
      },
      {
        section: "Pomodoro",
        name: "Break Time (m)",
        value: 10
      },
      {
        section: "Pomodoro",
        name: "Break Time (m)",
        value: 10
      },
      {
        section: "Pomodoro",
        name: "Break Time (m)",
        value: 10
      },
      {
        section: "Pomodoro",
        name: "Break Time (m)",
        value: 10
      },
      {
        section: "Pomodoro",
        name: "Break Time (m)",
        value: 10
      },
      {
        section: "Pomodoro",
        name: "Break Time (m)",
        value: 10
      },
      {
        name: "Unsorted",
        value: 10
      },
    ]
  });
}