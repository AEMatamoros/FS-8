const fs = require("node:fs");
const path = require("node:path");
const express = require("express");
const cors = require("cors");

const app = express();

const taskRouter = require("./routes/task.router");

app.use(cors("*"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/tasks", taskRouter);

app.listen(3000, () => {
  console.log("App on PORT 3000");
});
