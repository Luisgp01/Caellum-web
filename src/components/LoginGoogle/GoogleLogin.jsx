import React from 'react';
import { GoogleLogin } from 'react-google-login'

import  { refreshTokenSetup } from '../../utils/refreshTokenSetup'

const clientId = process.env.GOOGLE_ID_CLIENT;

function LoginGoogle() {
    const onSuccess = (res) => {
        console.log('[Login Sucess] currentUser:', res.profileObj);

        refreshTokenSetup(res)
    }


const onFailure = (res) => {
    console.log('[Login Failed] res:', res);
}
    return (
        <div>
            <GoogleLogin 
            clientId={clientId}
            buttonText='Login'
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            style={{marginTop: '100px' }}
            isSignedIn={true}
         /> 
        </div>
    );
}

export default LoginGoogle;