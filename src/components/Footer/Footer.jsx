import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="color-text text-center">
      <div>
        <div className="row">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Ubicacion</h4>
            <p className="lead mb-0">
             Paseo de la Chopera 18
              <br />
              Madrid
            </p>
          </div>

          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Redes Sociales</h4>
            <a className="btn btn-outline-light btn-social mx-1" href="#!">
              <i className="fab fa-fw fa-facebook-f"></i>
            </a>
            <a className="btn btn-outline-light btn-social mx-1" href="#!">
              <i className="fab fa-fw fa-twitter"></i>
            </a>
            <a className="btn btn-outline-light btn-social mx-1" href="#!">
              <i className="fab fa-fw fa-linkedin-in"></i>
            </a>
            <a className="btn btn-outline-light btn-social mx-1" href="#!">
              <i className="fab fa-fw fa-dribbble"></i>
            </a>
          </div>

          <div className="col-lg-4">
            <h4 className="text-uppercase mb-4">Caellum</h4>
            <p className="lead mb-0">
             Manteniendo una vision innovadora en nuestra web 
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
