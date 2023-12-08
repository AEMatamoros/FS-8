import { useState, useEffect } from "react";
import io from "socket.io-client";
import Swal from "sweetalert2";

const socket = io("http://localhost:4000");

function App() {
  const [alertas, setAlertas] = useState([]);
  const [clientID, setClientId] = useState([]);
  const [receiverId, setReseiverID] = useState("");

  useEffect(() => {
    socket.on("alertaRecibida", (mensaje) => {
      Swal.fire({
        title: "Nueva Alerta",
        text: mensaje,
        icon: "success",
        timer: 3000,
        showConfirmButton: false,
      });
      setAlertas((oldAlerts) => [...oldAlerts, mensaje]);
    });

    socket.on("recibirID", (id) => {
      setClientId(id);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  const enviarAlerta = () => {
    const mensaje = prompt("Ingrese el mensaje de la alerta:");

    if (mensaje.trim() != "") {
      socket.emit("enviarAlerta", { mensaje, id: receiverId });
    }
  };

  const obtenerID = () => {
    socket.emit("obtenerId");
  };
  return (
    <div>
      <h1>Cliente React - ${clientID}</h1>
      <input
        type="text"
        value={receiverId}
        onChange={(e) => {
          setReseiverID(e.target.value);
        }}
      />
      <button onClick={enviarAlerta}>Enviar Alerta</button>
      <button onClick={obtenerID}>Obtener ID</button>

      <div>
        <h2>Alertas:</h2>
        <ul>
          {alertas.map((alerta, index) => (
            <li key={index}>{alerta}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
