import React, { useState, useContext } from "react";
import { Outlet, useNavigate, Navigate, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { UserDataContext } from "../router/Navigation";
export default function About() {
  let navigate = useNavigate();
  let { isLogged } = useContext(UserDataContext);
  const gotoPlanInfo = () => {
    navigate("/", { replace: true });
  };
  const location = useLocation();
  console.log(location);
  return (
    <div>
      {!isLogged && <Navigate to="/" replace />}
      <div className="container py-3">
        <NavLink to={location.state.from}>Back to products</NavLink>;
        <main>
          <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
            <div
              className="col"
              onClick={() => {
                gotoPlanInfo();
              }}
            >
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal">Free</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    $0
                    <small className="text-body-secondary fw-light">/mo</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>10 users included</li>
                    <li>2 GB of storage</li>
                    <li>Email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button
                    type="button"
                    className="w-100 btn btn-lg btn-outline-primary"
                  >
                    Sign up for free
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal">Pro</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    $15
                    <small className="text-body-secondary fw-light">/mo</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>20 users included</li>
                    <li>10 GB of storage</li>
                    <li>Priority email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button
                    type="button"
                    className="w-100 btn btn-lg btn-primary"
                  >
                    Get started
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm border-primary">
                <div className="card-header py-3 text-bg-primary border-primary">
                  <h4 className="my-0 fw-normal">Enterprise</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    $29
                    <small className="text-body-secondary fw-light">/mo</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>30 users included</li>
                    <li>15 GB of storage</li>
                    <li>Phone and email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button
                    type="button"
                    className="w-100 btn btn-lg btn-primary"
                  >
                    Contact us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
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

        <NavLink className="navlink" to="/about/aboutus">
          About Us
        </NavLink>
        <NavLink className="navlink" to="/about/aboutservices">
          About Services
        </NavLink>
        <NavLink className="navlink" to="/about/aboutteam">
          About Team
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
