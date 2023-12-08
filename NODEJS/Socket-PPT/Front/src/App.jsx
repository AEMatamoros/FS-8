import { useEffect, useState } from "react";
import io from "socket.io-client";
import Swal from "sweetalert2";
const socket = io("http://localhost:4000");

export default function App() {
  const [name, setName] = useState("");
  const [players, setPlayers] = useState([]);
  const [result, setResult] = useState("");
  useEffect(() => {
    socket.on("updatePlayers", (currentPlayers) => {
      setPlayers(currentPlayers);
    });

    socket.on("gameResult", (result) => {
      setResult(result);
      Swal.fire({ title: result });
    });

    return () => {
      socket.on("disconnect");
    };
  }, []);

  const handleJoin = () => {
    socket.emit("joinGame", name);
    setName("");
  };
  const handleChoice = (choice) => {
    socket.emit("makeChoice", choice);
  };
  return (
    <div>
      <h1>Bienvenido al juego de PPT</h1>
      <label htmlFor="name">Ingrese un nombre</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleJoin}>Unirnos al juego</button>
      <ul>
        {players &&
          players.length > 0 &&
          players.map(({ name, choice }, index) => {
            return (
              <li key={index}>
                {name} Estado : {choice || "Esperando Seleccion"}
              </li>
            );
          })}
      </ul>
      <p>Selecciona una opcion</p>
      <button
        onClick={() => {
          handleChoice("Piedra");
        }}
      >
        Piedra
      </button>
      <button
        onClick={() => {
          handleChoice("Papel");
        }}
      >
        Papel
      </button>
      <button
        onClick={() => {
          handleChoice("Tijera");
        }}
      >
        Tijera
      </button>
      <h3>{result}</h3>
    </div>
  );
}
