import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function PublicRoute({ children, redirectTo = "/home" }) {
  const { isLoggedIn } = useAuth();
  return !isLoggedIn ? children : <Navigate to={redirectTo} />;
}
