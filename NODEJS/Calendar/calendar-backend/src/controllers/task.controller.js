const taskModel = require('../models/task.schema');

const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await taskModel.find();
    res.status(200).json({
      title: 'Success',
      msg: 'Task obtained successfuly',
      code: 200,
      result: tasks,
    });
  } catch (error) {
    next(error);
  }
};

const createTask = async (req, res, next) => {
  console.log('Creating Task');
  try {
    let newTask = {
      title: req.body.title,
      start: req.body.start,
      end: req.body.end,
      bgcolor: req.body.bgcolor,
      notes: req.body.notes,
    };
    const task = taskModel(newTask);
    let createdTask = await task.save();
    res.status(200).json({
      title: 'Success',
      msg: 'Task created Successfuly',
      code: 200,
      result: createdTask,
    });
  } catch (error) {
    next(error);
  }
};

const updateTask = async (req, res, next) => {
  try {
    // const toUpdateTask = await taskModel.findById(req.params.id);
    let toUpdateTask = {
      _id: req.body._id,
      title: req.body.title,
      start: req.body.start,
      end: req.body.end,
      bgcolor: req.body.bgcolor,
      notes: req.body.notes,
    };
    const updatedTask = await taskModel.findByIdAndUpdate(
      req.params.id,
      toUpdateTask,
      {
        new: true,
      },
    );
    if (!updatedTask) {
      res.status(400).json({
        title: 'Error',
        msg: 'Error ocurred during update',
        code: 400,
      });
      return;
    }
    res.status(200).json({
      title: 'Success',
      msg: 'Task updated Successfuly',
      code: 200,
      result: updatedTask,
    });
  } catch (error) {
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    let deletedTask = await taskModel.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({
      title: 'Success',
      msg: 'Task updated Successfuly',
      code: 200,
      result: deletedTask,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
};
