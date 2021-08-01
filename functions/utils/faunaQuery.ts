import faunadb from "faunadb";
import { Account, BotSettings } from "../../src/types";

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

export const getAccountById = async (id: string) : Promise<Account> => {
  let queryResult: Account = await client.query(
    Call(Fn("getAccountById"), id)
  );

  return queryResult;
}

export const getBotSettings = async () : Promise<BotSettings> => {
  let queryResult: BotSettings = await client.query(
    Call(Fn("getBotSettings"))
  );

  return queryResult;
}


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