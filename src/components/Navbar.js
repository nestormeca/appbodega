import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <img
              src="https://www.bailac.cl/wp-content/uploads/2013/05/logo.png"
              alt="Logo Bailac"
              className="navbar-brand float-md-start"
            />
            <span className="fs-4">Bodega Colina</span>
          </a>
          <ul className="nav nav-pills d-flex justify-content-end align-items-center">
            <li className="nav-item">
              <NavLink className="nav-link text-decoration-none" to="/bodega">
                Bodega
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link p-2 text-decoration-none"
                to="/mantencion"
              >
                Mantención
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link p-2 text-decoration-none"
                to="/abastecimiento"
              >
                Abastecimiento
              </NavLink>
            </li>

            <li className="nav-item p-2">
              <span className="btn btn-l btn-outline-primary">Sign up</span>
            </li>
          </ul>
        </header>
      </div>

      <div className="b-example-divider"></div>
    </>
  );
};

export default Navbar;
