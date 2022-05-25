import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../services/UsersService";
import { Link } from "react-router-dom";
import "./Home.scss";

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
      <header className="text-white text-center heading">
        <div className="container d-flex align-items-center flex-column">
          <br />
          <img
            className="masthead-avatar mb-5 img-fluid"
            src="https://res.cloudinary.com/caellum/image/upload/v1653435550/caellum/city-solid_cngrpo.svg"
            alt="Building"
          />
        
          <h1 className="masthead-heading text-uppercase mb-0">Caellum</h1>

          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
            </div>
            <div className="divider-custom-line"></div>
          </div>

          <p className="masthead-subheading font-weight-light mb-0">
            Luz a tu alcance
          </p>
        </div>
      </header>
      <section className="page-section portfolio">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0 h2">
            Ventajas
          </h2>

          <div className="divider-custom my-icon">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
            </div>
            <div className="divider-custom-line"></div>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4 mb-5">
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#portfolioModal1"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-star fa-3x fa-spin"></i>
                  </div>
                </div>

                <img
                  className="img-fluid"
                  src="https://res.cloudinary.com/caellum/image/upload/v1653428767/caellum/bolt-solid_tcgwct.svg"
                  alt="bolt"
                />

                <p className="words">Energia eficiente sin cargos adicionales</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mb-5">
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#portfolioModal2"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-star fa-3x fa-spin"></i>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="https://res.cloudinary.com/caellum/image/upload/v1653428986/caellum/leaf-solid_u4ar2h.svg"
                  alt="Ecological"
                />
                <p className="words">Energia pensando en el medio ambiente</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mb-5">
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#portfolioModal3"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-star fa-3x fa-spin"></i>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="https://res.cloudinary.com/caellum/image/upload/v1653429110/caellum/arrows-down-to-people-solid_iscgcm.svg"
                  alt="People"
                />
                <p className="words">Atencion al cliente 24h</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="page-section bg-primary text-white mb-0 block"
        id="about"
      >
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-white">
            About
          </h2>

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
                Somos una empresa lider proveedor de servicios energeticos
              </p>
            </div>
            <div className="col-lg-4 me-auto">
              <p className="lead">
                Una empresa innovadora en busqueda de mejorar el servicio de luz
                a los hogares y oficinas de los clientes
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
