const jwt = require('jsonwebtoken');

const generateJWT = (_id, userName, email) => {
  return new Promise((resolve, reject) => {
    const payload = { _id, userName, email };
    jwt.sign(
      payload,
      process.env.SECRET_KEY,
      { expiresIn: '2h' },
      (err, token) => {
        if (err) {
          console.log(err);
          reject('No se pudo generar el token');
        }
        // console.log(token);
        resolve(token);
      },
    );
  });
};

module.exports = { generateJWT };
