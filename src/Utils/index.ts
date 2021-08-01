import { LocalStorageCommands, LocalStorageSettings } from "../types";

export async function getEndpoint(endpoint: string) {
  console.log(`Sending data to endpoint: ${endpoint}`);
  let response = await fetch(endpoint, {
    method: "GET"
  });
  let results = await response.json();
  return results;
}

export async function postEndpoint (endpoint: string , data: object) {
  console.log(`Sending data to endpoint: ${endpoint} : `, data);
  let response = await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify(data)
  });

  return await response.json();
}

export function getLocalStorageSettings () : LocalStorageSettings {
  let localStorageString = localStorage.getItem("griffinbot_settings") || "{}";
  let settings = JSON.parse(localStorageString);

  settings.botOAuth = localStorage.getItem("griffinbot_oauth") || "";

  console.log('localStorageSettings', settings);
  
  return settings ? settings : {};
}

export function getLocalStorageCommands () : LocalStorageCommands {
  let localStorageString = localStorage.getItem("griffinbot_commands") || "[]";
  let commands = JSON.parse(localStorageString);

  console.log('localStorageCommands', commands);

  return commands ? commands : [];
}

export function saveLocalStorageSettings (settings: LocalStorageSettings) {
  localStorage.setItem("griffinbot_settings", JSON.stringify(settings));

  console.log('set localStorageSettings', settings);
  
}

export function saveLocalStorageCommands (commands: LocalStorageCommands) {
  localStorage.setItem("griffinbot_commands", JSON.stringify(commands));

  console.log('set localStorageCommands', commands);
}
