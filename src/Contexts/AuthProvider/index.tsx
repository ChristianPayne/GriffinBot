import React, { createContext, useEffect, useState } from 'react';

type Props = {
  code?: string;
  children: JSX.Element;
}
export const AuthContext = createContext(false);

const AuthProvider: React.FC<Props> = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  async function Login () {
    // Ask the backend for the route to redirect to.
    // This is built from the bot settings in the backend.
    // Send the user to the redirect route.
    // Twitch will route back here after login on Twitch.
    // Send the code to the backend that we get from the url params.
    // Backend will ping Twitch for user info,
    // check to see if the db has the user,
    // and if so, compare the new info with the db info.
    // If they match, then the user is logged in.
    // If they don't match, then the user is not logged in.
    // If the db doesn't have the user, then add the user to the db.(Maybe
    // only if we are on the signup route?)
  }
  

  return (
    <>
      <AuthContext.Provider value={isLoggedIn}>
        {children}
      </AuthContext.Provider>
    </>
  );
}

export default AuthProvider;
