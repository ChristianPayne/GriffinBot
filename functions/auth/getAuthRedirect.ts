import { Handler } from '@netlify/functions';
import { BotSettings } from '../../src/types';
import { getBotSettings } from "../utils/faunaQuery";

export async function getAuthRedirect() {
  console.log("getAuthRedirect Handler");

  let results: BotSettings = await getBotSettings();
  console.log('Results', results);

  let { clientId, redirectUri, scopes } = results;

  let scope = scopes.join('+');
  

  return `https://id.twitch.tv/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;
}