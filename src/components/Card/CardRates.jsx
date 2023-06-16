import { React, useState } from 'react'


export default function CardRates() {

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
      <div className="d-flex justify-content-around">
        {cardItems.map((item, index) => (
          <div key={index} className="card container m-5 ratesColor">
            <div className='card-body shadow-lg'>
              <div className='card-title'>{item.titulo}
                <div className='card-text'>{item.body}
                  <a href="/"
                
                    className='btn btn-primary'
                  
                    onClick={(e) => {onClick(e, item)}}
                    onMouseOver={handleMouseIn}
                    onMouseOut={handleMouseOut}
                  >
                   
                    {item.footer}
                 
                </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
