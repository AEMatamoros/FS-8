import useFetch from "./hooks/useFetch";
import Home from "./Components/Home";
import Header from "./Components/Header";
import { createContext, useState, useEffect } from "react";
import "./App.css";

export const UserDataContext = createContext({});

function App() {
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

  // function authFunction(params) {
  //   const fetch = useFetch({
  //     url: "http://localhost:3000/auth",
  //     method: "GET",
  //   });
  // }

  return (
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
      <Header></Header>
      <Home></Home>
    </UserDataContext.Provider>
  );
}

export default App;
