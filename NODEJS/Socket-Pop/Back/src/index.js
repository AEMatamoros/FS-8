const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const cors = require("cors");
const app = express();
app.use(cors());
app.get("/api", (req, res) => {
  res.send("Estas son las rutas de mi api");
});
const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("cliente conectado");
  console.log(socket.id);

  socket.on("enviarAlerta", (obj) => {
    //Todos lo reciben
    // io.emit("alertaRecibida", mensaje);
    // Los reciben todos menos el que la envia
    // socket.broadcast.emit("alertaRecibida", mensaje);
    //Se envia a uno en especifico
    socket.broadcast.to(obj.id).emit("alertaRecibida", obj.mensaje);
  });
  socket.on("obtenerId", () => {
    socket.emit("recibirID", socket.id);
  });
});

server.listen(4000, () => {
  console.log("http://localhost:4000");
});
