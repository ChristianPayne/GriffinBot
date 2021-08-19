import React, { FC, useContext, useEffect } from 'react';
import { Link, useNavigation } from 'react-navi';
import { AuthContext } from '../../Contexts/AuthProvider';
import { postEndpoint } from '../../Utils';

type Props = {
  code: string
};

const Auth = ({ code }: Props) => {

  const {account, setAccount} = useContext(AuthContext);
  let navigation = useNavigation();

  useEffect(() => {
    getAccountAuth();
  }, []);

  async function getAccountAuth () {
    
    let account = await postEndpoint('api/auth', {code}, {field: 'signin'})

    if(account) {
      setAccount(account);
      console.log('Navigating to homepage from auth.');
      
      // TODO: Why is this rerendering with a null account?
      navigation.navigate('/');
      console.log('Frontend Auth Result', account);
    }
  }

  

  return (
    <>
    <h1>
      This is the Auth Page.
      <br/> 
      <p>
        We have the code!: {code}
      </p>
    </h1>
    <h2>
      {/* {isLoggedIn ? 'Logged in' : 'Not logged in'} */}
    </h2>
    </>
  );
};

type LogoutLinkProps = {
  redirectTo: string
}

export const LoginLink: FC<LogoutLinkProps> = ({ redirectTo }: LogoutLinkProps) => {
  // This wont work because we leave griffinbot to authenticate with Twitch.
  let loginURL =
    '/login/?redirectTo='+
    encodeURIComponent(redirectTo);
    
  return (
    <Link href={loginURL}>
      Please log in.
    </Link>
  );
};

export default Auth;
