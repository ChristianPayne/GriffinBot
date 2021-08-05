import { Handler } from '@netlify/functions';
import { client } from 'tmi.js';
import { Account, BotSettings } from '../../src/types';
import { getAccountById, getBotSettings } from "../utils/faunaQuery";
const fetch = require("node-fetch");


const handler: Handler = async (event) => {
  try {
    console.log("authAccount Handler");

    let account: Account | null = null;
    
    let eventData: string = event.body ? event.body : "{}";
    let data = JSON.parse(eventData);
    
    if(!data.code){
      throw new Error("No code provided");
    }

    let { client_id, client_secret, redirect_uri } = await getBotSettings();

    // console.log(`The code we are using: ${data.code}`);
    

    let fetchURL = `https://id.twitch.tv/oauth2/token?client_id=${client_id}&client_secret=${client_secret}&code=${data.code}&grant_type=authorization_code&redirect_uri=${redirect_uri}`;

    console.log(`We sent this to Twitch:
    fetchURL: ${fetchURL}
    client_id: ${client_id}
    client_secret: ${client_secret}
    redirect_uri: ${redirect_uri}`);

    let JWTResponse = await fetch(fetchURL, {
      method: 'POST'
    });
    console.log(`JWT Response: `, JWTResponse);
    let JWTData = await JWTResponse.json();
    
    if (JWTResponse.status !== 200) {
      let errorMessage = `Error: Cannot get JWT :: Status: ${JWTResponse.status} | ${JWTData.message}`
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    console.log('JWT Data: ', JWTData);

    let {access_token, refresh_token, id_token} = JWTData;

    console.log(`accessToken: ${access_token}
    id_token: ${id_token}`);
    

    // Fetch the user info from Twitch.
    let userInfoResponse = await fetch(`https://api.twitch.tv/helix/users`, {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${access_token}`,
        "Client-ID" : client_id
      }
    });

    // console.log(`User Info Response: `, userInfoResponse)
    
    let userInfoData = await userInfoResponse.json()
    console.log(`User Info Data From Twitch: `, userInfoData.data[0]);

    let { id, email, login, display_name, profile_image_url} = userInfoData.data[0];

    let accountLookup = await getAccountById(id);

    console.log('Fauna Account Lookup', accountLookup);

    if(accountLookup.id === id){
      console.log(`Account already exists for ${id}, log them in.`);
      account = accountLookup;
    }
    else {
      console.log(`Account does not exist for ${id}, create a new one.`);
    }
    

    

    
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        account
      }),
    }
  } catch (error) {
    return { 
      statusCode: 500, 
      body: JSON.stringify({
        account: null,
        message: error.toString()
      })
    }
  }
}

module.exports = { handler }
