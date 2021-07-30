import faunadb from "faunadb";

const q = faunadb.query;
const {
  Collection,
  Get,
  Ref,
  Call,
  Function : Fn
} = q;

const FAUNA_KEY: string = process.env.FAUNADB_SERVER_KEY ? process.env.FAUNADB_SERVER_KEY : "";

const client = new faunadb.Client({
  secret: FAUNA_KEY
});


export const getCommandsByUsername = async (username: string) => {  
  let queryResult: {data:[]} = await client.query(
    Call(Fn("getCommandsByUsername"), username)
    );
    // console.log(queryResult);
    

  let result = queryResult.data.map((element: {data:{}}) => {
    return element.data;
  });

  // console.log(`Result: ${result}`);
  
  return result;
}