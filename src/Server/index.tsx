import React, { useEffect, useState } from 'react';
import { Init } from "./bot";
import { Command, LocalStorageCommands, LocalStorageSettings } from './types';
import { getLocalStorageSettings, getLocalStorageCommands, saveLocalStorageSettings, saveLocalStorageCommands } from "./utils";

const Server = () => {

  let [localStorageSettings, setLocalStorageSettings] = useState(getLocalStorageSettings());
  let [localStorageCommands, setLocalStorageCommands] = useState(getLocalStorageCommands());

  useEffect(() => {
    // TODO: Add a local storage save to monitor commands and settings
    setLocalStorageSettings(localStorageSettings);
    setLocalStorageCommands(localStorageCommands);
    
  }, [localStorageSettings, localStorageCommands]);

  // Use effect to create a new script object
  useEffect(() => {
    let { channel, botOAuth } = localStorageSettings;
    
    Init( channel, botOAuth );
  }, [localStorageSettings]);

  function saveBotSettings () {
    // console.log( "Saving settings" );
    setLocalStorageSettings({
      channel: "Ennegineer",
    });
  }

  function clearBotSettings () {
    // console.log( "Clearing settings" );
    setLocalStorageSettings({
      channel: "",
    });
  }



  return (
    <div>
      Server is being rendered on the client.

      {localStorageSettings.channel === "" ? <p> WE NEED THE CHANNEL </p> : 
      <>
        <p> CHANNEL: {localStorageSettings.channel} </p>
      </>}

      <button style={{padding: "1em", background: "green"}} onClick={saveBotSettings}>
        Set Local Storage
      </button>
      <button onClick={clearBotSettings}>
        Clear Local Storage
      </button>
      {/* <button onClick={()=>{}}>
        Leave Chat
      </button>
      <button onClick={()=>{
        
      }}>
        SAY SOMETHING
      </button> */}

      <h1>{localStorage.getItem("griffinbot_settings")}</h1>
    </div>
  );
};

export default Server;
