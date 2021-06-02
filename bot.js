require("dotenv").config();

var ComfyJS = require("comfy.js");
ComfyJS.onCommand = ( user, command, message, flags, extra ) => {
  if( command === "test" ) {
    ComfyJS.Say( "replying to !test" );
  }
}

ComfyJS.Init( process.env.TWITCHUSER, process.env.OAUTH, "Ennegineer", true );