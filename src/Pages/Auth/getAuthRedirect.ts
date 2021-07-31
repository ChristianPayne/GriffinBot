import { getEndpoint } from "../../Utils"

export const getAuthRedirect = async (): Promise<string> => {
  let response = await getEndpoint("api/getAuthRedirect");
  let result: string = await response.json();
  console.log('Front End Result: ', result);
  
  return result;
}