import React from 'react';
import { route } from "navi";
import { Link } from 'react-navi';

import { getAuthRedirect } from '../../Pages/Auth/getAuthRedirect';

import Auth from '../../Pages/Auth';


export default {
  '/login': route({
    title: "Login | GriffinBot",
    data: {
      showSideNav: true,
    },
    // getData: ()=>{return Promise.resolve()},
    view: <p>Login! <Link href="/auth" prefetch={false}>Login With Twitch</Link></p>,
  }),
  '/auth': route(async (req) => {
    let code : string = "";
    if(!req.params.error){
      code = req.params.code;
      if(!code){
        let redirectURL = await getAuthRedirect();
        document.location.href = redirectURL
      };
    }

    return {
      title: "Auth | GriffinBot",
      data: {
        showSideNav: true,
      },
      getData: ()=>{return Promise.resolve()},
      view: <Auth code={code}/>,
    }
  }),
  // TODO: Fix this. Wildcard route is not working.
  '*': route({
    title: "404 | GriffinBot",
    data: {
      showSideNav: false,
    },
    view: <h1>404: Page not found.</h1>,
  }),
}