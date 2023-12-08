const express = require("express");
const cors = require("cors");
const http = require("http");
const Websocket = require("ws");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(cors());

const server = http.createServer(app);
const wss = new Websocket.Server({ server });

wss.on("connection", (ws) => {
  console.log("Usuario Conectado");
  ws.id = uuidv4();
  // console.log(ws.id);
  ws.on("message", (message) => {
    wss.clients.forEach((client) => {
      // Tambien verificar Client ID
      console.log(client.id);
      if (client !== ws && client.readyState === Websocket.OPEN) {
        client.send(message.toString());
      }
    });
  });
  ws.on("close", () => {
    console.log("Usuario desconectado");
  });
});

server.listen(4000, () => {
  console.log("http://localhost:4000");
});
