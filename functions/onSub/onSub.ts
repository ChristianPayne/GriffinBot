import { Handler } from '@netlify/functions';

const handler: Handler = async (event) => {
  try {
    console.log("onSub Handler");

    // TODO: Fetch command from db.
    
    return {
      statusCode: 200,
      body: JSON.stringify("We got a sub!"),
    }
  } catch (error) {
    return { 
      statusCode: 500, 
      body: JSON.stringify({message: error.toString()})
    }
  }
}

module.exports = { handler }