import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux-toolkit-slice-thunk/operations/authOperations";
function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("Alexis@gmail.com");
  const [password, setPassword] = useState("Pass1234");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    // Lógica de verificación de inicio de sesión aquí
    dispatch(login({ email, password }));
  };

  return (
    <div className="login-form">
      <h2 className="login-title">Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="form-input"
          />
        </div>
        <button type="submit" className="login-button">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}

export default Login;
