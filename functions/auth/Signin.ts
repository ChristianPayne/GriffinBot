import { Account, BotSettings } from '../../src/types';
import { getAccountById, getBotSettings, createAccount } from "../utils/faunaQuery";
const fetch = require("node-fetch");

export async function Signin(event: any) {
  let account: Account | null = null;
  
  let eventData: string = event.body ? event.body : "{}";
  let data = JSON.parse(eventData);
  
  if(!data.code){
    console.warn("No code provided");
  }

  let { clientId, clientSecret, redirectUri } = await getBotSettings();

  // console.log(`The code we are using: ${data.code}`);
  
  // console.log(`We sent this to Twitch:
  // client_id: ${clientId}
  // client_secret: ${clientSecret}
  // redirect_uri: ${redirectUri}`);
  // fetchURL: ${fetchURL}

  let fetchURL = `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&code=${data.code}&grant_type=authorization_code&redirect_uri=${redirectUri}`;


  let JWTResponse = await fetch(fetchURL, {
    method: 'POST'
  });
  // console.log(`JWT Response: `, JWTResponse);
  let JWTData = await JWTResponse.json();
  
  if (JWTResponse.status !== 200) {
    let errorMessage = `Error: Cannot get JWT :: Status: ${JWTResponse.status} | ${JWTData.message}`
    console.error(errorMessage);
    throw new Error(errorMessage);
  }
  console.log('JWT Data: ', JWTData);

  let {access_token, refresh_token, id_token} = JWTData;

  // console.log(`accessToken: ${access_token}
  // id_token: ${id_token}`);
  

  // Fetch the user info from Twitch.
  let userInfoResponse = await fetch(`https://api.twitch.tv/helix/users`, {
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${access_token}`,
      "Client-ID" : clientId
    }
  });

  // console.log(`User Info Response: `, userInfoResponse)
  
  let userInfoData = await userInfoResponse.json()
  // console.log(`User Info Data From Twitch: `, userInfoData.data[0]);

  let { id, login, display_name, profile_image_url} = userInfoData.data[0];

  let accountLookup = await getAccountById(id);

  console.log('Fauna Account Lookup', accountLookup);

  if(accountLookup.id === id) {
    console.log(`Account already exists for ${id}, log them in.`);
    account = accountLookup;
  }
  else {
    console.log(`Account does not exist for ${id}, create a new one.`);

    let newAccount = {
      id,
      channel: login,
      twitchDisplayName: display_name,
      twitchAccessToken: access_token,
      twitchRefreshToken: refresh_token,
      twitchProfileImageURL: profile_image_url,
      apiKey: ""
    }

    account = await createAccount (newAccount);
    
    console.log(`Creating new account for ${id}`);
    
  }

  return account;
}