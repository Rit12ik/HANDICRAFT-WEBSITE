import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useUserContext } from "../UserContext";

const Navbar = () => {
  const { loggedin, logout } = useUserContext();
  console.log(loggedin);

  const showUserOptions = () => {
    if (loggedin) {
      return (
        <ul className="navbar-nav ms-auto">
          <button onClick={logout} className="btn btn-danger">
            Logout
          </button>
        </ul>
      );
    } else {
      return (
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup">
              Signup
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
        </ul>
      );
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <i className="fa-solid fa-democrat" id=""></i>&nbsp;Handicraft
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Addproduct">
                Add Product
              </NavLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/browse/decor-item">
                Decor Items
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/browse/hanging-item">
                Hanging Items
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/browse/lamp">
                Lights & Lamps
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/browse/statue">
                Statues
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/browse">
                Browse All
              </Link>
            </li>
          </ul>
          {showUserOptions()}
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
