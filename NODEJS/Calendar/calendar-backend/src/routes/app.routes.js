const express = require("express");
const taskRouter = require("./task.routes");
const appRouter = express.Router();

appRouter.use("/task", taskRouter);

module.exports = appRouter;
