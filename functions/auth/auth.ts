import { Handler } from '@netlify/functions';

const handler: Handler = async (event) => {
  try {
    const field = event.headers.field;
    console.log(`authAccount Handler :: Field: ${field}`);

    switch (field) {
      case "signin": {
        console.log(`authAccount Handler :: signin`);
        const { Signin } = require("./Signin");
        let result = await Signin(event);
        console.log(`authAccount Handler :: signin result:`, result);
        
        let { id, channel, twitchDisplayName, twitchProfileImageURL } = result;
        return {
          statusCode: 200,
          body: JSON.stringify({ id, channel, twitchDisplayName, twitchProfileImageURL }),
        }
      }
      case "redirectURL": {
        console.log(`authAccount Handler :: redirectURL`);
        
        const { getAuthRedirect } = require("./getAuthRedirect");
        let redirect = await getAuthRedirect(event);
        return {
          statusCode: 200,
          body: JSON.stringify(redirect),
        }
      }
      default: {
        return {
          statusCode: 400,
          body: "Unknown Field.",
        }
      }
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
