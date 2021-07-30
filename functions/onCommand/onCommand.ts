import { Handler } from '@netlify/functions';
import { getCommandsByUsername } from "../utils/faunaQuery";


const handler: Handler = async (event:any) => {
  try {
    console.log("onCommand Handler :: Init");

    let eventData = JSON.parse(event.body);

    // console.log(`Event received :: ${JSON.stringify(event, null, " ")}`);
    
    
    // TODO: Change this to be the channel name, not the username
    let result = await getCommandsByUsername(eventData.user);
    
    // console.log(`onCommand Handler :: Fauna result :: ${result}`);

    const data = {
      statusCode: 200,
      body: JSON.stringify(result),
    }

    // console.log(`onCommand Handler :: Returning ${data}`);

    

    return data;
  } catch (error) {
    return { 
      statusCode: 500, 
      body: JSON.stringify({message: error.toString()})
    }
  }
}

module.exports = { handler }
