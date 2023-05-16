import React from 'react';
import Login from '../../components/Login/Login'
const Auth = () => {
    const data = (data) => {
         console.log(data)
     }

    return (
      <div className="d-flex justify-content-center">
        <Login getData={data} />
      </div>
    );
};

export default Auth;