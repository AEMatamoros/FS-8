const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors("*"));

app.get("/", (req, res) => {
  res.send("Respuesta del servidor");
});

app.listen(3000, () => {
  console.log("App on PORT 3000");
});
