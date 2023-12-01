const userModel = require('../models/user.schema');
const bcrypt = require('bcrypt');
const { generateJWT } = require('../helpers/generateJWT');

const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync();
    let { userName, email, password } = req.body;

    const foundedUser = await userModel.findOne({ email });

    if (foundedUser) {
      res.status(400).json({
        title: 'Error',
        msg: 'Este correo ya esta registrado',
        code: 400,
      });
      return;
    }
    const user = userModel({
      userName,
      email,
      password: bcrypt.hashSync(password, salt),
    });
    let createduser = await user.save();

    let token = await generateJWT(
      createduser._id,
      createduser.userName,
      createduser.email,
    );

    res.status(200).json({
      title: 'Success',
      msg: 'user created Successfuly',
      code: 200,
      result: { createduser, token },
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    let foundedUser = await userModel.findOne({ email });
    if (!foundedUser) {
      res.status(400).json({
        title: 'Error',
        msg: 'Credenciales incorrectas',
        code: 400,
      });
      return;
    }

    const validPassword = bcrypt.compareSync(password, foundedUser.password);
    if (!validPassword) {
      res.status(400).json({
        title: 'Error',
        msg: 'Credenciales incorrectas',
        code: 400,
      });
      return;
    }

    const token = await generateJWT(
      foundedUser._id,
      foundedUser.userName,
      foundedUser.email,
    );
    res.status(200).json({
      title: 'Success',
      msg: 'user created Successfuly',
      code: 200,
      result: { foundedUser, token },
    });
  } catch (error) {
    next(error);
  }
};

const refresh = async (req, res, next) => {
  const { email } = req;

  try {
    let foundedUser = await userModel.findOne({ email });
    if (!foundedUser) {
      res.status(400).json({
        title: 'Error',
        msg: 'Credenciales incorrectas',
        code: 400,
      });
      return;
    }

    const token = await generateJWT(
      foundedUser._id,
      foundedUser.userName,
      foundedUser.email,
    );
    res.status(200).json({
      title: 'Success',
      msg: 'user created Successfuly',
      code: 200,
      result: { foundedUser, token },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
  refresh,
};
