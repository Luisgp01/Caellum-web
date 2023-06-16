import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../services/UsersService";
import { Link } from "react-router-dom";
import "./Home.scss";
import Section1 from "./Section/Section1";
import ControlledCarousel from "../../components/Carousel/Carousel";
import Section2 from "./Section/Section2";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  console.log(users);

  return (
    <div>
      <ControlledCarousel />
      <header className="text-white text-center ">
        <div className="container d-flex align-items-center flex-column building">
          <br />
          <h1 className="masthead-heading text-uppercase mb-0 text">Caellum</h1>

          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"></div>
            <div className="divider-custom-line"></div>
          </div>

          <p className="masthead-subheading font-weight-light mb-0 words">
            Proin id nunc sed metus
          </p>
        </div>
      </header>
      <section className="page-section portfolio">
        <Section1 />
      </section>
      <section className="page-section text-white mb-0" id="about">
        <div className="container">
          <h2 className="page-section text-center text-uppercase text-white">
            About
          </h2>
          <Section2 />
          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star fa-spin"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>

          <div className="row">
            <div className="col-lg-4 ms-auto">
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                venenatis, turpis eleifend posuere tincidunt
              </p>
            </div>
            <div className="col-lg-4 me-auto">
              <p className="lead">
                Proin id nunc sed metus tempor blandit. Praesent erat ex,
                dignissim eget euismod a, pulvinar bibendum tellus
              </p>
            </div>
          </div>
        </div>
      </section>
      ;
      <div className="row gx-3">
        {users.map((user, i) => {
          return (
            <div key={user._id} className="col-4 g-2">
              <div className="card text-center" key={user._id}>
                <div className="card-header">{user.name}</div>
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <p className="card-text">{user.posts.length}</p>
                  <Link
                    to={`/users/${user.id}`}
                    classNameName="btn btn-primary"
                  >
                    View posts
                  </Link>
                </div>
                <div className="card-footer text-muted">
                  last update {i + 1} days ago
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
