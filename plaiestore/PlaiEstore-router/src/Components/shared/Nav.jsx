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
        App
      </NavLink>
      <NavLink className="navlink" to="/about">
        About
      </NavLink>
      <NavLink className="navlink" to="/products">
        Productos
      </NavLink>
      <NavLink className="navlink" to="/products/product/1/MarioKart">
        Detalle de Producto
      </NavLink>
    </nav>
  );
}
