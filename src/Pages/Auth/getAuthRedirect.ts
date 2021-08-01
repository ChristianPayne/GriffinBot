import { getEndpoint } from "../../Utils"

export const getAuthRedirect = async (): Promise<string> => {
  let result : string = await getEndpoint("api/getAuthRedirect");
  console.log('Front End Result: ', result);
  
  return result;
}