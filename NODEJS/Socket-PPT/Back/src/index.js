const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const cors = require("cors");
const app = express();
app.use(cors());
const server = http.createServer(app);

const io = socketIO(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

let players = {};

io.on("connection", (socket) => {
  console.log("cliente conectado", socket.id);

  socket.on("joinGame", (name) => {
    players[socket.id] = { name, choice: null };
    io.emit("updatePlayers", Object.values(players) || []);
  });

  socket.on("disconnect", () => {
    // console.log(players);
    console.log("cliente desconectado");
    delete players[socket.id];
    io.emit("updatePlayers", players);
  });

  socket.on("makeChoice", (choice) => {
    let machineChoices = ["Papel", "Piedra", "Tijera"];
    if (players[socket.id]) {
      players[socket.id].choice = choice;
    }

    if (Object.values(players).every((player) => player.choice !== null)) {
      const player1 = players[Object.keys(players)[0]]
        ? players[Object.keys(players)[0]]
        : {
            name: "Maquina",
            choice:
              machineChoices[Math.floor(Math.random() * machineChoices.length)],
          };
      const player2 = players[Object.keys(players)[1]]
        ? players[Object.keys(players)[1]]
        : {
            name: "Maquina",
            choice:
              machineChoices[Math.floor(Math.random() * machineChoices.length)],
          };
      let result = "Empate";

      if (
        (player1.choice === "Papel" && player2.choice === "Piedra") ||
        (player1.choice === "Piedra" && player2.choice === "Tijera") ||
        (player1.choice === "Tijera" && player2.choice === "Papel")
      ) {
        result = "Ganador " + player1.name;
      }
      if (
        (player2.choice === "Papel" && player1.choice === "Piedra") ||
        (player2.choice === "Piedra" && player1.choice === "Tijera") ||
        (player2.choice === "Tijera" && player1.choice === "Papel")
      ) {
        result = "Ganador " + player2.name;
      }
      console.log(result);
      players[Object.keys(players)[0]] &&
        (players[Object.keys(players)[0]].choice = null);
      players[Object.keys(players)[1]] &&
        (players[Object.keys(players)[1]].choice = null);
      io.emit("updatePlayers", [player1, player2]);
      io.emit("gameResult", result);
    }
  });
});

server.listen(4000, () => {
  console.log("http://localhost:4000");
});
