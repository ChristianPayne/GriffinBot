import { 
  ComfyJSInstance
} from 'comfy.js';
import { 
  onCommand,

} from "./Handlers";


// @ts-ignore
export let ComfyJS : ComfyJSInstance = window.ComfyJS;

export function Init (channel: string, botOAuth?: string): void {
  if(!ComfyJS) {
    // @ts-ignore
    ComfyJS = window.ComfyJS;
  }
  // console.log("Init Bot!", ComfyJS);

  ComfyJS.onCommand = onCommand;

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
    // fetchEndpoint('api/onRaid', {user, viewers, extra});
  }
  ComfyJS.onCheer = ( user, message, bits, flags, extra ) => {
    // fetchEndpoint('api/onCheer', {user, message, bits, flags, extra});
  }
  ComfyJS.onSub = ( user, message, subTierInfo, extra ) => {
    // fetchEndpoint('api/onSub', {user, message, subTierInfo, extra});
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
  
  if(channel === undefined || channel === ""){
    console.log(`%cError: No channel specified`, "color:red");
    return;
  }

  if(ComfyJS.GetClient()) {
    console.log(`%cAlready connected to channel ${channel}, disconnecting...`, "color:yellow");
    ComfyJS.Disconnect();
  }

  console.log(`%cJoining channel ${channel}`, "color:green");
  ComfyJS.Init( channel, botOAuth );
}