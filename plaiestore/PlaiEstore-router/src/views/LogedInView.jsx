import React, { useContext } from "react";
import { UserDataContext } from "../router/Navigation";
import { Navigate } from "react-router-dom";
export default function LogedInView() {
  const { isLogged } = useContext(UserDataContext);
  return <>{isLogged ? <h1>LogedInView</h1> : <Navigate to={"/login"} />}</>;
}
