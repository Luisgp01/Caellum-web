import { React, useState } from "react";
import { Link } from "react-router-dom";
import "../Register/Register.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";


const initialForm = {
  email: "",
  password: "",
};

export default function Register() {
 const [contactInfo, setContactInfo] = useState(initialForm);

    const handleSubmit = (event) => {
      event.preventDefault();
    };

  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };
    return (
      <form onSubmit={handleSubmit}>
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
        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">
            <FontAwesomeIcon className="iconColor" icon={faEnvelope} />
          </span>
          <input
            type="text"
            className="w-auto container d-flex flex-sm-row border border-3"
            placeholder="Email"
            aria-label="Email"
            aria-describedby="basic-addon1"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <br />
        <p>
          <Link to="/" className="btn btn-primary container w-auto d-flex">
            <p className="container">Register</p>
          </Link>
        </p>
        <p>
          <Link to="/" className="btn btn-secondary container w-auto d-flex">
            <p className="container">Back</p>
          </Link>
        </p>
      </form>
    );
}
