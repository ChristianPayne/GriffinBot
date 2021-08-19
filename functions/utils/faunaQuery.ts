import faunadb from "faunadb";
import { Account, BotSettings, Command } from "../../src/types";

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

export const createAccount = async (account: Account) : Promise<Account> => {
  let queryResult: Account = await client.query(
    Call(Fn("createAccount"), account)
  );

  return queryResult;
}

export const getBotSettings = async () : Promise<BotSettings> => {
  let queryResult: BotSettings = await client.query(
    Call(Fn("getBotSettings"))
  );

  return queryResult;
}


export const getCommandsByChannel = async (channel: string) => {  
  let queryResult: { data: Command[] } = await client.query(
    Call(Fn("getCommandsByChannel"), channel)
    );
  // console.log("After Select:", queryResult);

  console.log(`Result: ${queryResult}`);
  
  return queryResult.data;
}