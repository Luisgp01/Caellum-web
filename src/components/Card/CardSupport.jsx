import React from 'react'
import Logo from "../../img/register.jpg";

export default function CardSupport() {
  return (
    <div>
      <div className="card text-bg-dark shadow-lg">
        <img src={Logo} className="card-img" alt="..." />
        <div className="card-img-overlay">
          <h5 className="card-title">Lorem Ipsum</h5>
          <p className="card-text">
            Cras odio quam, gravida eu tortor vitae, consectetur facilisis leo.
            Pellentesque condimentum, magna vitae dignissim vulputate, purus
            nulla
          </p>
          <p className="card-text">
            <small>Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  );
}
