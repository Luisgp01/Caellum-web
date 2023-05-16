import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { logout } from '../../store/AccessTokenStore'
import './Navbar.scss'

const Navbar = () => {
  const { user } = useAuthContext();
  return (
    <nav
      className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top navi"
      id="mainNav"
    >
      <div className="container">
        <NavLink className="navbar-brand textColor" to="/">
          Caellum
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
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link textColor" to="/register">
                    Register
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