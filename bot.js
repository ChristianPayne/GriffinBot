function loadServer () {
  const HTTP = require('http');
  const PORT = process.env.PORT ?? 0522;

  console.log(`Env port: ${process.env.PORT}. Port value: ${PORT}`);

  HTTP.createServer((request, response) => {
       response.writeHead(200, {'Content-Type': 'text/plain'});
       response.write(`Look at my website!`);
       response.end();
  }).listen(PORT);
  console.log(`Server was made on port: ${PORT}`);
}
loadServer();

var ComfyJS = require("comfy.js");
const { load } = require("dotenv");
ComfyJS.onCommand = ( user, command, message, flags, extra ) => {
  if( command === "test" ) {
    ComfyJS.Say( "replying to !test" );
  }
}

ComfyJS.Init( process.env.TWITCHUSER, process.env.OAUTH, "Ennegineer", true );