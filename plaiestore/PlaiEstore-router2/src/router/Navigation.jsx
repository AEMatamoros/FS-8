import React, { useState, useEffect, createContext } from "react";
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
import useFetch from "../hooks/useFetch.jsx";
export const UserDataContext = createContext({});
export default function Navigation() {
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    //llamamos un servicio
    if (isLogged) {
      console.log("llamando al servicio inicar sesion");
      // No estamos usando la informacion del fetch por ende no resolvimos la promesa
      const fetch = useFetch({
        url: "http://localhost:3000/auth",
        method: "GET",
      });
    } else {
      console.log("llamando al servicio cerrando sesion");
      const fetch = useFetch({
        url: "http://localhost:3000/auth",
        method: "GET",
      });
    }
  }, [isLogged]);
  return (
    <>
      <UserDataContext.Provider
        value={{
          userName: "Alev",
          firstName: "Alexis",
          lastName: "Matamoros",
          age: 27,
          isLogged,
          setIsLogged,
        }}
      >
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
          <Route
            path="/products/product/:id/:name"
            element={<ProductDetail />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserDataContext.Provider>
    </>
  );
}
