import React from 'react';
import './Carousel.scss';

const Carousel = () => {
    return (
      <div>
        <div>
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://res.cloudinary.com/caellum/image/upload/v1652944119/caellum/team-hands-in_kgqcfz.jpg"
                  className="d-block w-100 item img"
                  alt="HQ"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Carousel;