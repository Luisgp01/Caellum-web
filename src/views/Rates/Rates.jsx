import React, { useState } from "react";
import "../Rates/Rates.scss";
import Collapse from "../../components/Collapse/Collapse";

const Rates = () => {
  const [hover, setHover] = useState();

  const cardItems = [
    {
      titulo: "Tarifa Plana",
      body: "Tu cuota fija anual por 60.00€",
      footer: "Contratar",
      url: "URL1",
    },
    {
      titulo: "Tarifa Empresas",
      body: "Ideal para aquellas empresas que quieran pagar una cuota fija 100.00€",
      footer: "Contratar",
      url: "URL2",
    },
    {
      titulo: "Tarifa Hogar ",
      body: "Cuota para domiciliacion del servicio 50.00€",
      footer: "Contratar",
      url: "URL3",
    },
  ];

  const onClick = (e, item) => {
    e.preventDefault();
  };

  const handleMouseIn = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  return (
    <div>
      <div className="div">
        <h3>Tarifas que se ajustan a las necesidades del cliente.</h3>
        <br />
        <Collapse />
      </div>

      <div className="d-flex justify-content-around">
        {cardItems.map((item, index) => (
          <div key={index} className="card rates container m-5">
            <div className="card-body">
              <h5 className="card-title">{item.titulo}</h5>
              <p className="card-text">{item.body}</p>
              <a
                href="/"
                className="btn btn-primary button"
                onMouseOver={handleMouseIn}
                onMouseOut={handleMouseOut}
                onClick={(e) => onClick(e, item)}
              >
                {item.footer}
              </a>
            </div>
          </div>
        ))}
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
