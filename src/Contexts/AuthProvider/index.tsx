import React, { createContext, useEffect, useState } from 'react';
import { Account } from '../../types';

type Props = {
  code?: string;
  children: JSX.Element | JSX.Element[];
}
type State = { account: Account | null, setAccount: Function }
export const AuthContext = createContext({} as State);

const AuthProvider: React.FC<Props> = ({children}) => {
  const [account, setAccount] = useState(null);

  return (
    <>
      <AuthContext.Provider value={{account, setAccount}}>
        {children}
      </AuthContext.Provider>
    </>
  );
}

export default AuthProvider;
