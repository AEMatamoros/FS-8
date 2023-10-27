import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function Nav() {
  return (
    <nav
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        gap: "32px",
        padding: "16px",
      }}
    >
      {/* Error
      <a href="/">App</a>
      <a href="/about">About</a>
      <a href="/products">Productos</a> */}

      <NavLink className="navlink" to="/">
        Products
      </NavLink>
      <NavLink
        className="navlink"
        to="/about"
        state={{ description: "Esta es la descripcion de la pagina" }}
      >
        About
      </NavLink>
      <NavLink className="navlink" to="/loggedin">
        Logged In View
      </NavLink>
    </nav>
  );
}
