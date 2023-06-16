import React from "react";
import "../Rates/Rates.scss";
import Collapse from "../../components/Collapse/Collapse";
import CardRates from "../../components/Card/CardRates";

const Rates = () => {

  return (
    <div>
      <div className="div">
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          venenatis
        </h3>
        <br />
        <Collapse />
      </div>

      <div>
        <CardRates />
      </div>

      <form>
        <div className="form-group">
          <label for="exampleInputEmail1" className="content">
            Email address
          </label>
          <input
            type="email"
            className="form-control w-25 p-3"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text content">
            We'll never share your email with anyone else.
          </small>
        </div>
        <br />
        <div className="form-group">
          <label for="exampleInputPassword1" className="content">
            Password
          </label>
          <input
            type="password"
            class="form-control w-25 p-3  "
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label content" for="exampleCheck1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </label>
        </div>
        <br />
        <button type="submit" className="btn btn-primary content">
          Subscribe
        </button>
      </form>
      <br />
    </div>
  );
};

export default Rates;
