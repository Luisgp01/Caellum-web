import React, { useState } from 'react'
import Image from '../../img/cardHome.jpg'
import '../Card/Card.scss'

export default function CardHome() {
const [hover, setHover] = useState()

  const cardHome = [
    {
      titulo:
        "Etiam tincidunt aliquam turpis, quis ultricies est maximus in. Pellentesque lorem ipsum, eleifend nec ante ac, tristique interdum dolor. Aliquam molestie finibus imperdiet",
      texto:
        "Quisque dictum tincidunt interdum. Vestibulum maximus lacus sit amet libero semper porta. Vestibulum vitae massa tellus. Duis ultrices sagittis porta. Morbi quis ligula ante",
      image: Image,
      boton: "Go link",
    },
    {
      titulo:
        "Etiam tincidunt aliquam turpis, quis ultricies est maximus in. Pellentesque lorem ipsum, eleifend nec ante ac, tristique interdum dolor. Aliquam molestie finibus imperdiet",
      texto:
        "Quisque dictum tincidunt interdum. Vestibulum maximus lacus sit amet libero semper porta. Vestibulum vitae massa tellus. Duis ultrices sagittis porta. Morbi quis ligula ante",
      image: Image,
      boton: "Go link",
    },

    {
      titulo:
        "Etiam tincidunt aliquam turpis, quis ultricies est maximus in. Pellentesque lorem ipsum, eleifend nec ante ac, tristique interdum dolor. Aliquam molestie finibus imperdiet",
      texto:
        "Quisque dictum tincidunt interdum. Vestibulum maximus lacus sit amet libero semper porta. Vestibulum vitae massa tellus. Duis ultrices sagittis porta. Morbi quis ligula ante",
      image: Image,
      boton: "Go link",
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
      <div>
        <div className="d-flex justify-content-around">
          {cardHome.map((item, index) => (
            <div key={index} className="card container m-5">
              <div className="card-body shadow-lg">
                <div className="card-title title">
                  {item.titulo}
                  <div className="card-text">
                    {item.texto}
                    <a
                      href="/"
                      className="btn btn-primary"
                      onClick={(e) => {
                        onClick(e, item);
                      }}
                      onMouseOver={handleMouseIn}
                      onMouseOut={handleMouseOut}
                    >
                      {item.boton}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
