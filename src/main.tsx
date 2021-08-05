import React, { Suspense, useContext } from 'react';
import ReactDOM from 'react-dom';
import './tailwind.css';
import HelmetProvider from 'react-navi-helmet';
import { Router, View } from 'react-navi';

import { routes } from "./routes";

import AuthProvider, { AuthContext } from './Contexts/AuthProvider';
import SideNav from './Pages/SideNav';

// const {account} = useContext(AuthContext);

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider> {/* Used to change the head of our app. */}
      <AuthProvider>
        <AuthContext.Consumer>
          {account => {
              return (
                <Router routes={routes} context={account}>
                  <Suspense fallback={<h1>Loading...</h1>}>
                    <SideNav> {/* Render our Side Nav component. */}
                      <View />
                    </SideNav>
                  </Suspense>
                </Router>
              )
          }}
        </AuthContext.Consumer>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
