import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faBuilding, faLeaf } from "@fortawesome/free-solid-svg-icons";
import "./Section.scss";



const Section1 = () => {
  return (
    <div>
      <div>
        <h1>
          <div className="card col">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                Card subtitle
              </h6>
              <p className="card-text">
                <FontAwesomeIcon
                  icon={faBolt}
                  size="xl"
                  beat
                  className="iconList"
                />
              </p>
              <a href="/" className="card-link">
                Card link
              </a>
              <a href="/" className="card-link">
                Another link
              </a>
            </div>
          </div>
          <FontAwesomeIcon
            icon={faBolt}
            size="xl"
            beat
            pull="left"
            className="iconList"
          />
          <FontAwesomeIcon
            icon={faBuilding}
            size="xl"
            beat
            pull="right"
            className="iconList"
          />
          <FontAwesomeIcon icon={faLeaf} size="xl" beat className="iconList" />
        </h1>
      </div>
    </div>
  );
};

export default Section1;
