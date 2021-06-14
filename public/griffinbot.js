const ComfyJS = window.ComfyJS;
setTimeout(()=>{
  ComfyJS.onCommand = ( user, command, message, flags, extra ) => {
    console.log("DEBUG!:", user, command, message, flags, extra);
    if( flags.broadcaster && command === "test" ) {
      console.log( "!test was typed in chat" );
    }
  }

  ComfyJS.Init( "ChrisGriffin522" );

  localStorage.setItem("griffinbot", "This is set from GriffinBot.js");
});
