import React, { useEffect } from 'react';
import { getAuthRedirect } from "./getAuthRedirect";

const Auth = () => {

  async function Redirect () {
    let redirectURL = await getAuthRedirect();
  }

  return (
    <div>
      This is the Auth Page
    </div>
  );
};

export default Auth;
