import React from 'react';
import { route } from 'navi';
import Settings from '../../Pages/Settings';
import Server from '../../Pages/Server';
import { App } from '../../Pages/App';


export default {
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
    data: {
      showSideNav: true,
    },
    getData: ()=>{return Promise.resolve()},
    view: <Server/>,
  }),
  
}