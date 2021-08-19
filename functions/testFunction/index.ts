import { Handler } from '@netlify/functions';

const handler: Handler = async (event, context) => {
  try {
    switch (event.headers.field){
      case 'TestField':
        const { testFunction } = require('./test');
        let data = testFunction();
        
        return {
          statusCode: 200,
          body: JSON.stringify(data)
        }

      default:
        return {
          statusCode: 200,
          body: JSON.stringify(context)
        }
    }
    
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({message: error.toString()}) }
  }
}

module.exports = { handler }
