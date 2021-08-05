import { Handler } from '@netlify/functions';
import { getCommandsByChannel as getCommandsByChannel } from "../utils/faunaQuery";


const handler: Handler = async (event:any) => {
  try {
    console.log("onCommand Handler :: Init");
    
    let eventData = JSON.parse(event.body);
    
    // TODO: Change this to be the channel name, not the username
    // let result = await getCommandsByChannel(eventData.extra.channel);

    let result = "Kappa"
    
    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    return { 
      statusCode: 500, 
      body: JSON.stringify({message: error.toString()})
    }
  }
}

module.exports = { handler }
