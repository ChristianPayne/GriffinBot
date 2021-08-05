import React, { useEffect, useState } from 'react';
import { Init,  } from "./bot";
import { getLocalStorageSettings, getLocalStorageCommands, saveLocalStorageSettings, saveLocalStorageCommands } from "../../Utils";

const Server = () => {

  let [localStorageSettings, setLocalStorageSettings] = useState(getLocalStorageSettings());
  let [localStorageCommands, setLocalStorageCommands] = useState(getLocalStorageCommands());

  useEffect(() => {
    // TODO: Add a local storage save to monitor commands and settings
    saveLocalStorageSettings(localStorageSettings);
    saveLocalStorageCommands(localStorageCommands);
    
  }, [localStorageSettings, localStorageCommands]);

  // Use effect to create a new script object
  useEffect(() => {
    let { channel, botOAuth } = localStorageSettings;
    
    Init( channel, botOAuth );
  }, [localStorageSettings]);

  return (
    <div>
      Server is being rendered on the client.

      {localStorageSettings.channel === "" ? 
      <p> WE NEED THE CHANNEL </p> : 
      <>
        <p> CHANNEL: {localStorageSettings.channel} </p>
      </>}
    </div>
  );
};

export default Server;
