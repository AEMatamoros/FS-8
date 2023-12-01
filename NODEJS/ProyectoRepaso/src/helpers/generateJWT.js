const jwt = require("jsonwebtoken");

const generateJWT = (_id, username, email) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      { _id, username, email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("Error al generar el token");
          return;
        }
        resolve(token);
      }
    );
  });
};

module.exports = { generateJWT };
