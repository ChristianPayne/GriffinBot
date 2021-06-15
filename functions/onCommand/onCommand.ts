import { Handler } from '@netlify/functions';
import { getUserByUsername } from "../utils/faunaQuery";


const handler: Handler = async (event) => {
  try {
    console.log("onCommand Handler");
    
    let result = await getUserByUsername("ChrisGriffin522");

    return {
      statusCode: 200,
      body: JSON.stringify(result),
    }
  } catch (error) {
    return { 
      statusCode: 500, 
      body: JSON.stringify({message: error.toString()})
    }
  }
}

module.exports = { handler }
