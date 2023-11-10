const express = require('express');
const taskRouter = require('./task.routes');
const userRouter = require('./user.routes');
const appRouter = express.Router();

appRouter.use('/task', taskRouter);
appRouter.use('/user', userRouter);

module.exports = appRouter;
