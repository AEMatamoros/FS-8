const express = require('express');
const userRouter = express.Router();
const { validateJWT } = require('../midlewares/validateJWT');

const { register, login, refresh } = require('../controllers/user.controller');
userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.post('/refresh', validateJWT, refresh);

module.exports = userRouter;
