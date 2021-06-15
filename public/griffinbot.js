const ComfyJS = window.ComfyJS;

function fetchEndpoint (endpoint, data) {
  console.log(`Sending data to endpoint: ${endpoint} : `, data);

  fetch(endpoint, {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(
    async (res) => {
      let data = await res.json();
      ProcessResponse(data);
    }
  )
}

function Init (channel) {
  console.log("Init Bot!");

  ComfyJS.onCommand = ( user, command, message, flags, extra ) => {
    fetchEndpoint('api/onCommand', {user, command, message, flags, extra});
  }
  ComfyJS.onChat = ( user, message, flags, self, extra ) => {
    // fetchEndpoint('api/onChat', {user, message, flags, self, extra});
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
  
  ComfyJS.Init( channel );
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
  const settings = JSON.parse(localStorage.getItem("GriffinBot_Settings"));
  console.log(settings);
  if(!settings)
  {
    console.log("GriffinBot settings not found!");
    // TODO: Change this to get info from backend.
    SetLocalStorage();
    return;
  }
  
  Init(settings.channel);
}

function SetLocalStorage ()
{
  const settings = JSON.stringify({channel: "ChrisGriffin522"});
  localStorage.setItem("GriffinBot_Settings", settings);
}

ReadLocalStorage();