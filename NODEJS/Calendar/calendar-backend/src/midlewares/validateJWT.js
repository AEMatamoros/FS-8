const jwt = require('jsonwebtoken');

const validateJWT = (req, res, next) => {
  //Obtener token de un encabazado custom
  //   const token = req.header('token');
  //   console.log(token);
  // Obtenerlo de la key autorizacion
  const token = req.headers.authorization.split(' ')[1];
  //   console.log(token);
  try {
    const payload = jwt.verify(token, process.env.SECRET_KEY);
    console.log(payload);
    // req._id = payload._id;
    // req.userName = payload.userName;
    req.email = payload.email;

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = { validateJWT };
