import { useState } from 'react' 
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { login as loginRequest } from '../../services/AuthService';
import { useAuthContext } from '../../contexts/AuthContext';
import '../Login/Login.scss'

const schema = yup.object({
  email: yup.string().email().required('Email is required'),
  password: yup.string().required('Password is required')
}).required();

const Login = () => {
    const navigate = useNavigate()
    let location = useLocation();
    const { login } = useAuthContext()

    let from = location.state?.from?.pathname || "/";
    const [error, setError] = useState()
    const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
    });



    const onSubmit = (data) => {
    setError(undefined)

    loginRequest(data)
      .then(response => {
        console.log(response);
        login(response.access_token, () => navigate(from, { replace: true })) 
      })
      .catch(err => {
        setError(err?.response?.data?.message)
      })
  }

    return (
        <div className='container Login'>
            <div className='row'>
                <div className='col-lg-6'>
                <img src="https://res.cloudinary.com/caellum/image/upload/v1651406808/caellum/home2_xfmvhs.jpg" alt="" />
                </div>
                <div className='col-lg-4'>
                    <h2 className='title'>Caellum</h2>
                    <div>
                        <p className='inline'>You dont have an Account?</p>
                        <Link to={'/register'}> Sign up</Link>
                    </div>

                    <div>
                        <form onSubmit={handleSubmit(onSubmit)} className='form-container'>
                            <div className='formField'>
                                <label>Email</label>
                                <input
                                className={errors.email?.message ? 'invalid' : ''}
                                {...register('email')} 
                                type="email" 
                                />
                                {errors.email && <small style={{color: "red"}}>{errors.email?.message}</small>}
                            </div>
                            <div className='formField'>
                                <label>Password</label>
                                <input
                                 className={errors.password?.message ? 'invalid' : ''}
                                {...register('password')} 
                                type="password" 
                                />
                                {errors.password?.message && <small style={{color: "red"}}>{errors.password?.message}</small>}
                                {error && <small style={{color: "red"}}>{error}</small>}
                            </div>
                            <button className='btn btn-primary' >Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login