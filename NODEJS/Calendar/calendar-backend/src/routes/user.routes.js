const express = require('express');
const userRouter = express.Router();
const { register } = require('../controllers/user.controller');
userRouter.post('/register', register);
userRouter.post('/login', register);

module.exports = userRouter;
