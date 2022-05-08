import React from 'react';
import { GoogleLogin } from 'react-google-login'


const clientId = process.env.GOOGLE_ID_CLIENT;

const LoginGoogle= () => {

      

  const onSuccess = (googleData) => {
      console.log(googleData)
  };

  const onFailure = (res) => {
      console.log('[Login Failed] res:',res)
  }

    return (
        <div>
            <GoogleLogin 
            clientId={clientId}
            buttonText='Log in'
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            style={{marginTop: '100px' }}
            isSignedIn={true}
         /> 
        </div>
    );
};

export default LoginGoogle;