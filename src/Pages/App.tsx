import React, { FC, useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';

type Props = { }

export const App: FC<Props> = () => {
  const {account} = useContext(AuthContext);

  return (
    <div id="app" className="bg-dracula-darker">
      
      <h1 className="text-dracula-light text-6xl text-center p-6 font-sans underline">
        GriffinBot
      </h1>

      {account && <h1>{JSON.stringify(account)}</h1>}
    </div>
  )
}