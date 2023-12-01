const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("product", { name: "Alexis" });
  // res.send(null);
  // res.send("Cadena");
  // res.send(true);
  // res.send({ nombre: "Alexis" });
  // res.status(200).json({
  //   status: "Success",
  //   code: 1001,
  //   data: { nombre: "Alexis" },
  // });
});

app.listen(3000, () => {
  console.log("App on PORT 3000");
});
