const express = require('express');
const validateModel = require('../midlewares/validateRequest');
const taskRouter = express.Router();

const upload = require('../midlewares/upload');
const {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/task.controller');

taskRouter.get('/', getAllTasks);

taskRouter.post('/', upload.single('photo'), validateModel, createTask);

taskRouter.put('/:id', updateTask);

taskRouter.delete('/:id', deleteTask);
module.exports = taskRouter;
