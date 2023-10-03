import { React, useState } from "react";
import { Link } from "react-router-dom";
import "../Login/Login.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

const initialForm = {
  email: "",
  password: "",
};

function Login() {
  const [contactInfo, setContactInfo] = useState(initialForm);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <br />
      <div className="input-group">
        <span className="input-group-text" id="basic-addon1">
          <FontAwesomeIcon className="iconColor" icon={faUser} />
        </span>
        <input
          type="text"
          className="w-auto container d-flex flex-sm-row border border-3"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <br />
      <div className="input-group">
        <span className="input-group-text" id="basic-addon1">
          <FontAwesomeIcon className="iconColor" icon={faLock} />
        </span>
        <input
          type="text"
          className="w-auto container d-flex flex-sm-row border border-3"
          placeholder="Password"
          aria-label="Password"
          aria-describedby="basic-addon1"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <br />
      <Link to="/" className="btn btn-primary container w-auto d-flex">
        <p className="container">Login</p>
      </Link>
      <br />
      <p>
        <Link to="/" className="btn btn-secondary container w-auto d-flex">
          <p className="container">Back</p>
        </Link>
      </p>
    </form>
  );
}

export default Login;
