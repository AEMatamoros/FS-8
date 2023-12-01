const express = require("express");
const getAllTasks = require("../controllers/GetAllTasks");
const addNewTask = require("../controllers/AddNewTask");
const deleteTask = require("../controllers/DeleteTask");
const updateTask = require("../controllers/UpdateTask.js");

const router = express.Router();

router.get("/", getAllTasks);

router.post("/", addNewTask);

router.delete("/", deleteTask);

router.put("/", updateTask);

module.exports = router;
