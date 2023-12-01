const authRouter = require("express").Router();
const { register, login } = require("../controllers/auth.controller");
const validateModel = require("../midlewares/validateModel");

authRouter.post("/register", register);
authRouter.post("/login", login);

module.exports = authRouter;
