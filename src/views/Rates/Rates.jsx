import React, { useState } from "react";
import "../Rates/Rates.scss";

const Rates = () => {
  const [hover, setHover] = useState();

  const cardItems = [
    {
      titulo: "Tarifa Plana",
      body: "Tu cuota fija anual por 60.00$",
      footer: "Contratar",
      url: "URL1",
    },
    {
      titulo: "Tarifa Empresas",
      body: "Ideal para aquellas empresas que quieran pagar una cuota fija 100.00$",
      footer: "Contratar",
      url: "URL2",
    },
    {
      titulo: "Tarifa Hogar ",
      body: "Cuota para domiciliacion del servicio 50.00$",
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
        <h1>Tarifas</h1>
        <p>Tarifas que se ajustan a las necesidades del usuario.</p>
      </div>

      <div className="d-flex justify-content-around">
        {cardItems.map((item, index) => (
          <div key={index} className="card rates container">
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
      <div className="col-md-5 col-lg-4 mb-5">
        <div
  
          data-bs-toggle="modal"
          data-bs-target="#portfolioModal1"
        >
          <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
            <div className="portfolio-item-caption-content text-center text-white"></div>
          </div>
          <br />
          <img
            className="img-fluid"
            src="https://res.cloudinary.com/caellum/image/upload/v1653514051/caellum/coins-solid_zmthqh.svg"
            alt="bolt"
          />

          <p className="words">Los mejores precios del mercado</p>
        </div>
      </div>
      <div className="row-md-5 row-lg-4 mb-5 pt-">
        <div
          data-bs-toggle="modal"
          data-bs-target="#portfolioModal1"
        >
          <div className=" d-flex align-items-center justify-content-center h-100 w-100">
            <div className=" text-center text-white"></div>
          </div>
          <br />
          <img
            className="img-fluid"
            src="https://res.cloudinary.com/caellum/image/upload/v1653519418/caellum/landmark-solid_kgltex.svg"
            alt="Empresas"
          />

          <p className="words">Planes especiales para Empresas</p>
        </div>
      </div>
    </div>
  );
};

export default Rates;
