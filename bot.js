const ComfyJS = require("comfy.js");
const express = require('express');

const PORT = process.env.PORT ?? 0522;

const GRIFFINBOT_API_KEY = process.env.GRIFFINBOT_API_KEY;

const app = express();

app.use(express.json())

app.listen(PORT, () => {
  console.log(`Success! Your application is running on port ${PORT}.`);
});

app.get('/', (req, res) => {
  res.send("This is the homepage");
})

app.post('/start', (req, res) => {
  let {API_KEY, channels} = req.body;
  if(!CheckAPIKey(API_KEY)) {res.status(400); res.send("Bad API Key!"); return;}

  if(!channels){
    res.status(400);
    res.send("Bad Request: Channel not provided.");
    return;
  }

  if(ComfyJS.GetClient()) {
    StopBot();
    StartBot(channels);
    res.send("Bot Restarting.")
    return;
  }
  
  StartBot(channels);
  console.log("After init ", ComfyJS.GetClient());
  res.send("Bot starting.");
})

app.post('/stop', (req, res) => {
  let {API_KEY} = req.body;
  if(!CheckAPIKey(API_KEY)) {res.status(400); res.send("Bad API Key!"); return;}
  res.send("Bot stopping.");
})

app.post('/test', (req, res) => {
  let {API_KEY} = req.body;
  
  if(!CheckAPIKey(API_KEY)) {res.status(400); res.send("Bad API Key!"); return;}

  res.send("TEST");
})


function StartBot (channels) {
  ComfyJS.Init( process.env.TWITCHUSER, process.env.OAUTH, channels, true );
}

function StopBot () {
  ComfyJS.Disconnect();
}

function CheckAPIKey (key)
{
  return GRIFFINBOT_API_KEY === key;
}




ComfyJS.onCommand = ( user, command, message, flags, extra ) => {
  if( command === "test" ) {
    console.log(`user: ${user}, command: ${command}, message: ${message}, flags: ${JSON.stringify(flags)}, extra: ${JSON.stringify(extra)}`);
    ComfyJS.Say( `Saying this in ${extra.channel}'s channel! `, extra.channel );
  }
}


