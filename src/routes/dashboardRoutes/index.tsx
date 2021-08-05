import React from 'react';
import { compose, map, mount, route, withView } from "navi";
import { Account } from "../../types";
import { LoginLink } from '../../Pages/Auth';

export default mount({
  '*' : map((request, context: {account: Account | null}) => {

    if (context.account === null) {
      return route({
        title: 'Please Log In',
        view: <LoginLink redirectTo={request.mountpath} />,
      });
    }
    else {
      console.log('Account is:', context.account);
      
    }

    return compose(
      withView(()=>{}),
      mount({
        '/' : route({
          view: <h1>TEST</h1>
        })
      })
    )
  })
})