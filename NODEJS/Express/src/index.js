const express = require("express");
const app = express();

const os = require("node:os");

app.get("/", (req, res) => {
  res.send("Obtuviste los datos de todos los productos" + os.arch());
});

app.get("/detail/1", (req, res) => {
  res.send("Obtuviste los datos del producto 1");
});

app.post("/", (req, res) => {
  res.send("Creaste un nuevo producto");
});

app.listen(3000, () => {
  console.log("App on port 3000");
});
