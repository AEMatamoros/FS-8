const express = require("express");
const validateModel = require("../midlewares/validateRequest");
const taskRouter = express.Router();
const {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/task.controller");

taskRouter.get("/", getAllTasks);

taskRouter.post("/", validateModel, createTask);

taskRouter.put("/:id", updateTask);

taskRouter.delete("/:id", deleteTask);
module.exports = taskRouter;
