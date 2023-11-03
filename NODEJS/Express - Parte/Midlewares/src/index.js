const express = require("express");
const path = require("path");
const app = express();

const miMidleware = (req, res, next) => {
  req.data = { apellido: "Matamoros" };
  res.locals.nombre = "Alexis";
  console.log("Se ejecuto el Midleware");
  next();
};

const miMidleware2 = (req, res, next) => {
  console.log(res.locals.nombre, req.data.apellido);
  console.log("Se ejecuto el segundo  Midleware");
  next();
};

const miMidleware3 = (req, res, next) => {
  console.log("Se ejecuto el tercer  Midleware");
  next();
};

const miMidleware4 = (req, res, next) => {
  console.log("Se ejecuto el cuarto  Midleware");
  next();
};
app.use(miMidleware);
app.use(miMidleware2);

app.get("/", (req, res) => {
  //Verificacion de el token
  // Verificacion de los datosw
  //Crud
  //Manejo de BD
  //Manejode errore
  //Manejo de respuesta
  res.send("Respuesta del servidor");
});

app.post("/", miMidleware3, miMidleware4, (req, res) => {
  res.send("Respuesta del servidor");
});

app.listen(3000, () => {
  console.log("App on PORT 3000");
});
