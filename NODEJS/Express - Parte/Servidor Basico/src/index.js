const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("llamado al servicio");
  //   console.log(req);
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);
  res.send("<h1>Datos obtenidos</h1>");
});

app.post("/create", (req, res) => {
  res.send("Datos creados");
});

app.put("/update", (req, res) => {
  res.send("Datos Actualizados");
});

app.delete("/delete", (req, res) => {
  res.send("Datos Eliminados");
});

app.listen(3000, () => {
  console.log("App on PORT 3000");
});
