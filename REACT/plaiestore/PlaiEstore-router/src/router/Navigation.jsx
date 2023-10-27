import React, { lazy } from "react";
import App from "../App.jsx";
import About from "../views/About.jsx";
import Products from "../views/Products.jsx";
import NotFound from "../views/NotFound.jsx";
import ProductDetail from "../views/ProductDetail.jsx";
import Nav from "../Components/shared/Nav.jsx";
import Header from "../Components/Header.jsx";
import Login from "../views/Login.jsx";
import useFetch from "../hooks/useFetch.jsx";
import LogedInView from "../views/LogedInView.jsx";
import { createContext, useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
// import AboutServices from "../views/AboutServices.jsx";
// import AboutUs from "../views/AboutUs.jsx";
// import AboutTeam from "../views/AboutTeam.jsx";
const AboutServices = lazy(() => import("../views/AboutServices.jsx"));
const AboutUs = lazy(() => import("../views/AboutUs.jsx"));
const AboutTeam = lazy(() => import("../views/AboutTeam.jsx"));

export const UserDataContext = createContext({});
export default function Navigation() {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    console.log("llamando al servicio cerrando sesion");
    const fetch = useFetch({
      url: "http://localhost:3000/auth",
      method: "GET",
    }).then((resp) => {
      setIsLogged(!isLogged);
      navigate("/");
    });
  };
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
          handleLogin,
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
          <Route path="/login" element={<Login />} />
          <Route path="/loggedin" element={<LogedInView />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserDataContext.Provider>
    </>
  );
}
