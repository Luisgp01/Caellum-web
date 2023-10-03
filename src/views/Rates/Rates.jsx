import React from "react";
import "../Rates/Rates.scss";
import CardRates from "../../components/Card/CardRates";

const Rates = () => {
  return (
    <div>
      <CardRates />
      <form className="container">
        <div className="form-group container">
          <label for="exampleInputEmail1" className="container text-white">
            Email address
          </label>
          <input
            type="email"
            className="form-control w-25 p-3 container"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text container text-white">
            We'll never share your email with anyone else.
          </small>
        </div>
        <br />
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="container"
            id="exampleCheck1"
          />
          <label className="form-check-label container text-white" for="exampleCheck1">
            Subscribe to newsletter
          </label>
        </div>
  
        <button type="submit" className="btn btn-primary container w-auto">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Rates;
