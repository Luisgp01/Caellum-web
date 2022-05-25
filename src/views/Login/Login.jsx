import { useState } from 'react' 
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useLocation, useNavigate } from 'react-router-dom'
import InputGroup from "../../components/InputGroup/InputGroup"
import { login as loginRequest } from '../../services/AuthService';
import { useAuthContext } from '../../contexts/AuthContext';
import GoogleLogin from 'react-google-login';
import Logout from '../../components/Logout/Logout'

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required()
}).required();

const Login = () => {
  const navigate = useNavigate()
  let location = useLocation();

  let from = location.state?.from?.pathname || "/profile";

  const { login } = useAuthContext()

  const [error, setError] = useState()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    setError(undefined)
    setIsSubmitting(true)

    loginRequest(data)
      .then(response => {
        console.log(response);

        login(response.access_token, () => navigate(from, { replace: true }))
      })
      .catch(err => {
        setError(err?.response?.data?.message)
      })
      .finally(() => setIsSubmitting(false))
  }

  return (
    <div>
      <br />
      <div className="image">
        <div>
          <div></div>
        </div>
      </div>
      <h1 className="mt-3">Login</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup
          label="Email"
          id="email"
          register={register}
          error={errors.email?.message}
          type="email"
        />
        <InputGroup
          label="Password"
          id="password"
          register={register}
          error={error || errors.password?.message}
          type="password"
        />

        <button className={`btn btn-${isSubmitting ? "secondary" : "primary"}`}>
          {isSubmitting ? "Loggin in..." : "Submit"}
        </button>
      </form>
      <div>
        <br />
        <GoogleLogin />
        <Logout />
        <br />
      </div>
      <div className="col-md-6 col-lg-4 mb-5 ">
        <div
          className="portfolio-item mx-auto"
          data-bs-toggle="modal"
          data-bs-target="#portfolioModal3"
        >
          <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
            <div className="portfolio-item-caption-content text-center text-white">
            </div>
          </div>
          <img
            className="img-fluid"
            src="https://res.cloudinary.com/caellum/image/upload/v1653522145/caellum/shield-halved-solid_nbzmy7.svg"
            alt="People"
          />
        </div>
      </div>
    </div>
  );
}

export default Login