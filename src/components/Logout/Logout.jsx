import React from 'react';
import  GoogleLogout  from 'react-google-login';

const clientId = '205979027228-n66dhr3cnfqtoafn6iidm9ula46qbpcl.apps.googleusercontent.com';

const Logout = () => {
 
const onSuccess = () => {
    alert('Logout made sucessfully !');
};


    return (
        <div>
            <GoogleLogout 
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
            />
        </div>
    );
};

export default Logout;