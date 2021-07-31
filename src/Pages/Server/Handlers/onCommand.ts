import { OnCommandHandler } from "comfy.js";
import { Command } from "../../../types";
import { postEndpoint } from "../../../Utils";
import { AddMessageToQueue } from "../bot";

export const onCommand: OnCommandHandler = async ( user, command, message, flags, extra ) => {
  // TODO: Check to see if the command is cached. If not, fetch all commands and cache them.


  let response = await postEndpoint('api/onCommand', {user, command, message, flags, extra})
  let results: Command[] = await response.json();
  // debugger
  console.log("Results from await are ", results);
  
  results.forEach( (result) => {
    if(result.name === command && result.response)
    {
      AddMessageToQueue( result.response );
    }
  });
}