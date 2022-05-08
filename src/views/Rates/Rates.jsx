import React, { useState } from "react";
import '../Rates/Rates.scss'


const Rates = () => {
const [hover, setHover] = useState()

  const cardItems = [
    {
      titulo: "Tarifa Plana",
      body: "Tu cuota fija anual por 60.00$",
      footer: "Contratar",
      url:'URL1'
    },
    {
      titulo: "Tarifa Empresas",
      body: "Ideal para aquellas empresas que quieran pagar una cuota fija 100.00$",
      footer: "Contratar",
      url:'URL2'
    },
    {
      titulo: "Tarifa Hogar ",
      body: "Cuota para domiciliacion del servicio 50.00$",
      footer: "Contratar",
      url:'URL3'
    },
  ];

  const onClick=(e,item)=>{
    e.preventDefault()
  }

  const handleMouseIn = () => {
    setHover(true);
  }

  const handleMouseOut = () => {
    setHover(false)
  }

  return (
    <div>
      <div>
        <h1>Rates</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit, purus nisl
          eleifend proin litora praesent tortor, dictum taciti curae quis
          nascetur sociosqu
        </p>
      </div>

      <div className="d-flex justify-content-around">
        {cardItems.map((item,index) => (
          <div key={index} className="card rates container">
            <div className="card-body">
              <h5 className="card-title">{item.titulo}</h5>
              <p className="card-text">{item.body}</p>
              <a href="/" className="btn btn-primary button" onMouseOver={handleMouseIn} onMouseOut={handleMouseOut} onClick={e=>onClick(e,item)}>
                {item.footer}
              </a>
            </div>
          </div>
        ))} 
      </div>
    </div>
  );
};

export default Rates;
