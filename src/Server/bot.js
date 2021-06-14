const ComfyJS = require("comfy.js");
const express = require('express');

const PORT = process.env.PORT ?? 0522;

const GRIFFINBOT_API_KEY = process.env.GRIFFINBOT_API_KEY;

const app = express();

app.use(express.json());
app.use('/', express.static('./'))

console.log('Server starting!');

app.listen(PORT, () => {
  console.log(`Success! Your application is running on port ${PORT}.`);
});

app.get('/', (req, res) => {
  console.log("Homepage requested.");
  res.sendFile('./bot.html');
})

app.post('/start', (req, res) => {
  let {API_KEY, channels} = req.body;
  if(!CheckAPIKey(API_KEY)) {res.status(400); res.send("Bad API Key!"); return;}

  if(!channels){
    res.status(400);
    console.log("Bad Request: Channel array not provided.");
    res.send("Bad Request: Channel array not provided.");
    return;
  }

  console.log("Bot starting!");

  if(ComfyJS.GetClient()) {
    StopBot();
    StartBot(channels);
    console.log('Bot Restarting.');
    res.send("Bot Restarting.");
    return;
  }
  
  StartBot(channels);
  
  console.log(`Joining channels ${channels}`);
  res.send("Bot starting.");
})

app.post('/stop', (req, res) => {
  let {API_KEY} = req.body;
  if(!CheckAPIKey(API_KEY)) {res.status(400); res.send("Bad API Key!"); return;}
  StopBot();
  console.log('Bot stopping!');
  res.send("Bot stopping.");
})

app.post('/test', (req, res) => {
  let {API_KEY} = req.body;
  
  if(!CheckAPIKey(API_KEY)) {res.status(400); res.send("Bad API Key!"); return;}

  res.send("TEST");
})


function StartBot (channels) {
  ComfyJS.Init( process.env.BOT_USER, process.env.BOT_OAUTH, channels, true );
}

function StopBot () {
  ComfyJS.Disconnect();
}

function CheckAPIKey (key)
{
  return GRIFFINBOT_API_KEY === key;
}


ComfyJS.onCommand = async ( user, command, message, flags, extra ) => {
  if( command === "test" ) {
    console.log(`user: ${user}, command: ${command}, message: ${message}, flags: ${JSON.stringify(flags)}, extra: ${JSON.stringify(extra)}`);
    ComfyJS.Say( `Saying this in ${extra.channel}'s channel! `, extra.channel );

    // let customReward = await ComfyJS.CreateChannelReward( process.env.CLIENT_ID, {
    //   title: "Test Reward",
    //   prompt: "Test Description",
    //   cost: 100,
    //   is_enabled: true,
    //   background_color: "#00E5CB",
    //   is_user_input_required: false,
    //   is_max_per_stream_enabled: false,
    //   max_per_stream: 0,
    //   is_max_per_user_per_stream_enabled: false,
    //   max_per_user_per_stream: 0,
    //   is_global_cooldown_enabled: false,
    //   global_cooldown_seconds: 0,
    //   should_redemptions_skip_request_queue: true
    // } )
    // console.log(customReward);
  }
}



ComfyJS.onReward = async ( user, reward, cost, message, extra ) => {
  console.log("Reward Triggered");
  ComfyJS.Say( user + " redeemed " + reward + " for " + cost , extra.channel);
}