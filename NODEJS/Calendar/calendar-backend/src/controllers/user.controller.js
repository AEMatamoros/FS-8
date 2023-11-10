const userModel = require('../models/user.schema');
const bcrypt = require('bcrypt');
const register = async (req, res, next) => {
  // Ejemplo de validacion para login
  // const validPassword = bcrypt.compareSync(
  //   'Patito1234',
  //   '$2b$10$I62.Y0fPwuoWcv.5tM9T9O4qKNBCoZSdmAyQsDCI0UilFuPm4h9HG',
  // );
  // console.log(validPassword);
  try {
    const salt = bcrypt.genSaltSync();

    let newUser = {
      userName: req.body.userName,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, salt),
    };
    const user = userModel(newUser);
    let createduser = await user.save();
    res.status(200).json({
      title: 'Success',
      msg: 'user created Successfuly',
      code: 200,
      result: createduser,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
};
