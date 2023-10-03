import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { logout } from '../../store/AccessTokenStore'
import './Navbar.scss'

const Navbar = () => {
  const { user } = useAuthContext();
  return (
    <nav
      className="navbar navbar-expand-lg  text-uppercase fixed-top navColor"
      id="mainNav"
    >
      <div className="container">
        <NavLink className="navbar-brand textColor" to="/">
          <i class="fa-solid fa-building"></i> Caellum
        </NavLink>
        <button
          className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {!user ? (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link textColor" to="/login">
                    <i className="fa-solid fa-user"></i> Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link textColor" to="/register">
                    <i class="fa-solid fa-file-lines"></i> Register
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link textColor" to="/support">
                    <i class="fa-solid fa-phone"></i> Support
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link textColor" to="/rates">
                    <i class="fa-solid fa-money-bill"></i> Rates
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link textColor" to="/profile">
                    Profile
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link textColor" to="/Subscriptions">
                    Subscriptions
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link textColor" to="/support">
                    Support
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link textColor" to="/rates">
                    Rates
                  </NavLink>
                </li>
                <li className="nav-item">
                  <button className="btn btn-primary" onClick={logout}>
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;