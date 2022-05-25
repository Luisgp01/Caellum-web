import React from "react";
import "../Support/Support.scss";

const Support = () => {
  return (
    <div>
      <section className="section">
        <h1>¿Problemas con tu factura o servicio de luz?</h1>
        <p>
          Tenemos la solucion para ti, nuestros agentes estaran contigo en menos
          de 24 horas para brindarte todo el apoyo que necesites
        </p>
      </section>

      <div>
        <div
          className="portfolio-item mx-auto my-icons"
          data-bs-toggle="modal"
          data-bs-target="#portfolioModal1"
        >
          <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
            <div className="portfolio-item-caption-content text-center text-white">
            </div>
          </div>

          <img
            src="https://res.cloudinary.com/caellum/image/upload/v1653511155/caellum/chart-line-solid_lljoqz.svg"
            alt="bolt"
          />
                 <div>
                  <p className="wording">El mejor servicio tecnico y asistencia para tu hogar y oficina.
                      <br />
                      SLA de 72 horas
                      servicio 24horas los 7 dias de la semana, los 365 dias del año.
                    <br />
                      ¿Que esperas? Contactanos a traves del +910540147. Encantados de ayudarte.
                  </p>
                  </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
