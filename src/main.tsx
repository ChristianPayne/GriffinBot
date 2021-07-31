import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './tailwind.css';
import { App } from './Pages/App';

import { mount, route, lazy, redirect, map, NotFoundError } from 'navi';
import { NotFoundBoundary, Router, View } from 'react-navi';
import HelmetProvider from 'react-navi-helmet';

import SideNav from './Pages/SideNav';
import Settings from './Pages/Settings';
import Server from './Pages/Server';
import AuthProvider, { AuthContext } from './Contexts/AuthProvider';
import Auth from './Pages/Auth';
import { getAuthRedirect } from './Pages/Auth/getAuthRedirect';

// import { config } from 'dotenv';
// config();

const routes =
  mount({
    '/': route({
      title: "GriffinBot | Your all in one chat bot!",
      data: {showSideNav: true},
      view: <App />,
    }),
    '/settings': route({
      title: "Settings | GriffinBot",
      data: {showSideNav: true},
      view: <Settings />,
    }),
    '/server': route({
      title: "Server | GriffinBot",
      head: <>
      </>,
      data: {
        showSideNav: true,
      },
      // getData: ()=>{return Promise.resolve()},
      view: <Server/>,
    }),
    '/auth': route(async (req) => {
      if(!req.params.error){
        let code = req.params.code;
        if(!code){
          let redirectURI = await getAuthRedirect();
          document.location.href = redirectURI;
        };
      }

      return {
        title: "Auth | GriffinBot",
        head: <>
        </>,
        data: {
          showSideNav: true,
        },
        // getData: ()=>{return Promise.resolve()},
        view: <Auth/>,
      }
    }),
    // TODO: Fix this. Wildcard route is not working.
    '*': route({
      title: "404 | GriffinBot",
      head: <>
      </>,
      data: {
        showSideNav: false,
      },
      view: <h1>404: Page not found.</h1>,
    }),
    // '/product': lazy(() => import('./product')),
  })

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider> {/* Used to change the head of our app. */}
      <Suspense fallback={<h1>Loading...</h1>}>
        <AuthProvider>
          <Router routes={routes}> {/* Used to specify routes. */}
            <SideNav> {/* Render our Side Nav component. */}
              <View /> {/* Render whatever route we are viewing. */}
            </SideNav>
          </Router>
        </AuthProvider>
      </Suspense>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
