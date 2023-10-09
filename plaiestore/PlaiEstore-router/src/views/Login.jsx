import React, { useContext } from "react";
import { UserDataContext } from "../router/Navigation";
export default function Login() {
  let { isLogged, setIsLogged, handleLogin } = useContext(UserDataContext);
  return (
    <>
      {isLogged ? (
        <button
          className="cursor-pointer btn btn-danger"
          onClick={() => {
            setIsLogged(false);
          }}
        >
          Cerrar Sesion
        </button>
      ) : (
        <button
          className="cursor-pointer btn btn-success"
          onClick={() => {
            handleLogin();
          }}
        >
          Iniciar Sesion
        </button>
      )}
    </>
  );
}
