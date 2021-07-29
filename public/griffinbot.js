const ComfyJS = window.ComfyJS;

function fetchEndpoint (endpoint, data) {
  console.log(`Sending data to endpoint: ${endpoint} : `, data);

  return fetch(endpoint, {
    method: "POST",
    body: JSON.stringify(data)
  });
  // .then(
  //   async (res) => {
  //     let data = await res.json();
  //     ProcessResponse(data);
  //   }
  // )
}

function Init (channel) {
  console.log("Init Bot!", ComfyJS);

  ComfyJS.onCommand = async ( user, command, message, flags, extra ) => {
    let results = await fetchEndpoint('api/onCommand', {user, command, message, flags, extra})
    results = await results.json();
    console.log("Results from await are ", results);
    
    results.forEach( (result) => {
      if(result.name === command)
      {
        ComfyJS.Say( result.response );
      }
    })
  }
  ComfyJS.onChat = ( user, message, flags, self, extra ) => {
    // fetchEndpoint('api/onChat', {user, message, flags, self, extra});
    console.log(`Chat: ${user} : ${message}`);
  }
  ComfyJS.onWhisper = ( user, message, flags, self, extra ) => {
    // fetchEndpoint('api/onWhisper', {user, message, flags, self, extra});
  }
  ComfyJS.onMessageDeleted = ( id, extra ) => {
    // TODO:
  }
  ComfyJS.onReward = ( user, reward, cost, message, extra ) => {
    // TODO:
  }
  ComfyJS.onJoin = ( user, self, extra ) => {
    // TODO:
  }
  ComfyJS.onPart = ( user, self, extra ) => {
    // TODO:
  }
  ComfyJS.onHosted = ( user, viewers, autohost, extra ) => {
    // fetchEndpoint('api/onHosted', {user, viewers, autohost, extra});
  }
  ComfyJS.onRaid = ( user, viewers, extra ) => {
    fetchEndpoint('api/onRaid', {user, viewers, autohost, extra});
  }
  ComfyJS.onCheer = ( user, message, bits, flags, extra ) => {
    fetchEndpoint('api/onCheer', {user, message, bits, flags, extra});
  }
  ComfyJS.onSub = ( user, message, subTierInfo, extra ) => {
    fetchEndpoint('api/onSub', {user, message, subTierInfo, extra});
  }
  ComfyJS.onResub = ( user, message, streamMonths, cumulativeMonths, subTierInfo, extra ) => {
    // fetchEndpoint('api/onResub', {user, message, streamMonths, cumulativeMonths, subTierInfo, extra});
  }
  ComfyJS.onSubGift = ( gifterUser, streakMonths, recipientUser, senderCount, subTierInfo, extra ) => {
    // fetchEndpoint('api/onSubGift', {gifterUser, streakMonths, recipientUser, senderCount, subTierInfo, extra});
  }
  ComfyJS.onSubMysteryGift = ( gifterUser, numbOfSubs, senderCount, subTierInfo, extra ) => {
    // fetchEndpoint('api/onSubMysteryGift', {gifterUser, numbOfSubs, senderCount, subTierInfo, extra});
  }
  ComfyJS.onGiftSubContinue = ( user, sender, extra ) => {
    // fetchEndpoint('api/onGiftSubContinue', {user, sender, extra});
  }
  ComfyJS.onConnected = ( address, port, isFirstConnect ) => {
    // fetchEndpoint('api/onConnected', {address, port, isFirstConnect});
  }
  ComfyJS.onReconnect = ( reconnectCount ) => {
    // fetchEndpoint('api/onReconnect', {reconnectCount});
  }
  ComfyJS.onError = ( error ) => {
    // fetchEndpoint('api/onError', {error});
  }
  
  const botOauth = localStorage.getItem("griffinbot_oauth");
  ComfyJS.Init( channel, botOauth );
}

function ProcessResponse (res) {
  console.log("Process Response :: ", res);
}

function JoinChat () {
  // TODO: Get this from local storage.
  ComfyJS.Init( "Channel Name" );
}

function LeaveChat () {
  ComfyJS.Disconnect();
}

// GetSettings
function ReadLocalStorage () {
  const settings = JSON.parse(localStorage.getItem("griffinbot_settings"));
  
  console.log('Settings: ', settings);
  if(!settings)
  {
    console.log("GriffinBot settings not found!");
    // TODO: Change this to get info from backend.
    SetLocalStorage();
    return;
  }

  console.log("Comfy at execution", ComfyJS);
  
  // TODO: I need the thing to do the thing.
  setTimeout(() => {
    console.log("Comfy at Timeout", ComfyJS);
    if(!ComfyJS){
      console.log("GriffinBot not initialized! ComfyJS not found.");
    } else {
      Init(settings.channel);
    }
  }, 1000);

  
  
}

function SetLocalStorage ()
{
  const settings = JSON.stringify({channel: "ChrisGriffin522"});
  localStorage.setItem("griffinbot_settings", settings);
}

ReadLocalStorage();