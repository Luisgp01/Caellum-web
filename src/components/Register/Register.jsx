import React from "react";
import { Link } from "react-router-dom";
import "../Register/Register.scss";

export default function Register() {
    return (
      <div>
        <form>
          <br />
          <input
            className="inputField"
            type="text"
            name="name"
            placeholder="Name"
            defaultValue=""
          />
          <input
            className="inputField"
            type="text"
            name="Last Name"
            placeholder="Last Name"
            defaultValue=""
          />
          <input
            className="inputField"
            type="text"
            name="email"
            placeholder="Email"
            defaultValue=""
          />
          <input
            className="inputField"
            type="password"
            name="password"
            placeholder="Password"
            defaultValue=""
          />
          <p>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </p>
          <p>
            <Link to="/home" className="btn btn-secondary">
              Back
            </Link>
          </p>
        </form>
      </div>
    );
}
