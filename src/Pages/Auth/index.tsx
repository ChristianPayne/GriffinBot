import React, { useEffect } from 'react';
import { postEndpoint } from '../../Utils';
import { getAuthRedirect } from "./getAuthRedirect";

type Props = {
  code: string
};

const Auth = ({ code }: Props) => {

  useEffect(() => {
    getAccountAuth();
  }, []);

  async function getAccountAuth () {
    
    let result = await postEndpoint('api/authAccount', {code})
  
    console.log('Frontend Auth Result', result);
  }

  

  return (
    <div>
      This is the Auth Page.
      <br/> 
      <p>
        We have the code!: {code}
      </p>
    </div>
  );
};

export default Auth;
