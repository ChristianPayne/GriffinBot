import { Handler } from '@netlify/functions';
import { BotSettings } from '../../src/types';
import { getBotSettings } from "../utils/faunaQuery";

const handler: Handler = async (event) => {
  try {
    console.log("getAuthRedirect Handler");

    let results: BotSettings = await getBotSettings();
    console.log('Results', results);

    let { client_id, redirect_uri, scopes } = results;

    let scope = scopes.join('+');
    

    let redirectUrl = `https://id.twitch.tv/oauth2/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code&scope=${scope}`;
    
    
    return {
      statusCode: 200,
      body: JSON.stringify(redirectUrl),
    }
  } catch (error) {
    return { 
      statusCode: 500, 
      body: JSON.stringify({message: error.toString()})
    }
  }
}

module.exports = { handler }
