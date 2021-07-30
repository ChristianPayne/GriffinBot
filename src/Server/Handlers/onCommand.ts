import { OnCommandHandler } from "comfy.js";
import { Command } from "../types";
import { fetchEndpoint } from "../utils";
import { ComfyJS } from "../bot";

export const onCommand: OnCommandHandler = async ( user, command, message, flags, extra ) => {
  let response = await fetchEndpoint('api/onCommand', {user, command, message, flags, extra})
  let results: Command[] = await response.json();
  // debugger
  console.log("Results from await are ", results);
  
  results.forEach( (result) => {
    if(result.name === command)
    {
      ComfyJS.Say( result.response, extra.channel );
    }
  })
}