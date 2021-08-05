import { Handler } from '@netlify/functions';
import { Command } from '../../src/types';
import { getCommandsByChannel } from '../utils/faunaQuery';


const handler: Handler = async (event:any) => {
  console.log(event);
  
  try {
    let eventData = JSON.parse(event.body);

    let results: Command[] = await getCommandsByChannel(eventData.extra.channel);
    console.log("Results: ", results);
    
    
    return {
      statusCode: 200,
      body: JSON.stringify(results)
    }
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({message: error.toString()}) }
  }
}

module.exports = { handler }
