import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light mt-1">
        <img
          src="https://www.bailac.cl/wp-content/uploads/2013/05/logo.png"
          alt="Logo Bailac"
          className="navbar-brand"
        />
        <NavLink className="flex-grow-1 text-decoration-none" to="/">
          Bodega Planta Colina
        </NavLink>
        <NavLink className="p-2 text-decoration-none" to="/bodega">
          Bodega
        </NavLink>
        <NavLink className="p-2 text-decoration-none " to="/mantencion">
          Mantencion
        </NavLink>
        <NavLink className="p-2  text-decoration-none " to="/abastecimiento">
          Abastecimiento
        </NavLink>
        <NavLink className="p-2  text-decoration-none " to="/login">
          Logout
        </NavLink>
        <Outlet />
      </nav>
    </>
  );
};

export default Navbar;
