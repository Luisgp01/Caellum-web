import { React, useState } from 'react';
import { Link } from 'react-router-dom'
import '../Login/Login.scss'



const initialForm = {
    email: '',
    password: '',
}

function Login() {
    const [contactInfo, setContactInfo] = useState(initialForm)

    const handleSubmit = (event) => {
         event.preventDefault()
    }
    
    const handleChange = (event) => {
      setContactInfo({...contactInfo, [event.target.name]: event.target.value})
    }

  return (
    <div className='logoImage'>
      <form onSubmit={handleSubmit}>
        <br />
          <input
            className="loginField"
            type="email"
            placeholder="Email"
            onChange={(e) => handleChange(e)}
          />
          <input
            className="loginField"
            type="password"
            placeholder="Password"
            onChange={(e) => handleChange(e)}
                />
                <div>
                    <button type='submit' className='btn btn-primary'>Login</button>
                </div>
                <p>
                <Link to='/' className='btn btn-secondary'>
                    Back
                </Link>
        </p>
      </form>
</div>
    );
}

export default Login