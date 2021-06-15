import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.css';
import { App } from './App';

import { mount, route, lazy } from 'navi';
import { Router, View } from 'react-navi';
import HelmetProvider from 'react-navi-helmet';

import SideNav from './SideNav';
import Settings from './Settings';
import Server from './Server';

import { config } from 'dotenv';
config();

const routes =
  mount({
    '/': route({
      title: "GriffinBot",
      data: {showSideNav: true},
      view: <App />,
    }),
    '/settings': route({
      title: "GriffinBot Settings",
      data: {showSideNav: true},
      view: <Settings />,
    }),
    '/server': route({
      title: "GriffinBot Chat Server",
      head: <>
        <script src="public/comfy.min.js"></script>
        <script src="public/griffinbot.js" defer></script>
      </>,
      data: {
        showSideNav: false,
      },
      // getData: ()=>{return Promise.resolve()},
      view: <Server/>,
    }),
    // '/product': lazy(() => import('./product')),
  })

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider> {/* Used to change the head of our app. */}
      <Router routes={routes}> {/* Used to specify routes. */}
        <SideNav> {/* Render our Side Nav component. */}
          <View /> {/* Render whatever route we are viewing. */}
        </SideNav>
      </Router>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
