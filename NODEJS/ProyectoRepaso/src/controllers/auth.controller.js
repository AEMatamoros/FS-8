const userModel = require("../models/auth.schema");
const { generateJWT } = require("../helpers/generateJWT");
const register = async (req, res, next) => {
  try {
    let { userName, email, password } = req.body;

    const foundedUser = await userModel.findOne({ email });
    if (foundedUser) {
      res.status(400).json({
        title: "Error",
        msg: "Este correo ya esta registrado",
        code: 400,
      });
      return;
    }
    const user = userModel({
      userName,
      email,
    });
    user.setPassword(password);
    let createdUser = await user.save();
    let newcreatedUser = createdUser.toObject();
    delete newcreatedUser.password;
    res.status(200).json({
      title: "Success",
      msg: "user created Successfuly",
      code: 200,
      result: {
        newcreatedUser,
        token: await generateJWT(
          newcreatedUser._id,
          newcreatedUser.userName,
          newcreatedUser.email
        ),
      },
    });
  } catch (error) {
    next(error);
  }
};
const login = async (req, res, next) => {
  try {
    let { email, password } = req.body;
    const foundedUser = await userModel.findOne({ email });

    if (!foundedUser) {
      res.status(400).json({
        title: "Error",
        msg: "Credenciales incorrectas",
        code: 400,
      });
      return;
    }
    if (!foundedUser.comparePassword(password)) {
      res.status(400).json({
        title: "Error",
        msg: "Credenciales incorrectas",
        code: 400,
      });
      return;
    }
    let newfoundedUser = foundedUser.toObject();
    delete newfoundedUser.password;
    res.status(200).json({
      title: "Success",
      msg: "Login Success",
      code: 200,
      result: {
        newfoundedUser,
        token: await generateJWT(
          newfoundedUser._id,
          newfoundedUser.userName,
          newfoundedUser.email
        ),
      },
    });
  } catch (error) {}
};

module.exports = {
  register,
  login,
};
