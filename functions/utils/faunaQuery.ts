import faunadb from "faunadb";

const q = faunadb.query;
const {
  Collection,
  Get,
  Ref,
  Call,
  Function : Fn
} = q;

const FAUNA_KEY: string = process.env.FAUNADB_SERVER_SECRET ? process.env.FAUNADB_SERVER_SECRET : "";

console.log(`Fauna Key : ${FAUNA_KEY.length}`);
console.log(`ENV: `, process.env);

const client = new faunadb.Client({
  secret: FAUNA_KEY
});


export const getUserByUsername = async (username: string) => {
  let result : {data:{}} = await client.query(
    Call(Fn("getUserByUsername"), username)
    );
  return result.data;
}