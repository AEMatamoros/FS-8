const jwt = require("jsonwebtoken");

const validateJWT = (req, res, next) => {
  try {
    const token = !!req.headers.authorization
      ? req.headers.authorization.split(" ")[1]
      : "";
    const payload = -jwt.verify(token, process.env.JWT_SECRET);
    req.email = payload.email;
    next();
  } catch (error) {
    res.status(400).json({
      title: "Error",
      msg: "Debe Brindar un token deacceso",
      code: 400,
    });
  }
};

module.exports = { validateJWT };
