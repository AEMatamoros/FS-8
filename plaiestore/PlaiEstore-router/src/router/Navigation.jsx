import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App.jsx";
import About from "../views/About.jsx";
import Products from "../views/Products.jsx";
import NotFound from "../views/NotFound.jsx";
import ProductDetail from "../views/ProductDetail.jsx";
import AboutServices from "../views/AboutServices.jsx";
import AboutUs from "../views/AboutUs.jsx";
import AboutTeam from "../views/AboutTeam.jsx";
import Nav from "../Components/shared/Nav.jsx";
import Header from "../Components/Header.jsx";
export default function Navigation() {
  return (
    <>
      <Nav></Nav>
      <Header></Header>
      <Routes>
        <Route path="" element={<App />} />
        {/* Nested */}
        <Route path="/about" element={<About />}>
          <Route path="" element={<h1>About Base</h1>} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="aboutservices" element={<AboutServices />} />
          <Route path="aboutteam" element={<AboutTeam />} />
        </Route>
        {/* Error
        <Route path="/about/aboutus" element={<AboutUs />} />
        <Route path="/about/aboutservices" element={<AboutServices />} />
        <Route path="/about/aboutteam" element={<AboutTeam />} /> */}
        <Route path="/products" element={<Products />} />
        <Route path="/products/product/:id/:name" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
