require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const connectToDb = require("./db/config");
const appRouter = require("./routes/app.routes");

connectToDb();

app.use(morgan("combined"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", appRouter);

app.get("/", (req, res) => {
  res.send("Bienvenido al API Calendar");
});

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
