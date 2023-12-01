const dotenv = require("dotenv");
let mode = process.env.NODE_ENV;

mode.trim().toLocaleLowerCase() === "prod"
  ? dotenv.config({ path: ".env.prod" })
  : dotenv.config({ path: ".env.dev" });

const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
//Config and Midlewares
const connectDB = require("./db/config");
const handleError = require("./midlewares/handleError");

//Routes
const appRouter = require("./routes/app.routes");
const app = express();

connectDB();
app.use(morgan("combined"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static(path.join(__dirname, "files")));

app.get("/", (req, res) => {
  res.send("Bienvenido");
});
app.use("/api", appRouter);
app.use(handleError);

app.listen(process.env.PORT || 8000, () => {
  console.log(`http://localhost:${process.env.PORT || 8000}/`);
});
