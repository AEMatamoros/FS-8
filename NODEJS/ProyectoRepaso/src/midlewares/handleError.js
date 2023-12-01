const winston = require("winston");

const logger = winston.createLogger({
  level: "error",
  format: winston.format.simple(),
  transports: [new winston.transports.File({ filename: "error.log" })],
});

function handleError(err, req, res) {
  if (err) {
    //Loguear el error en nuestro archivo de bitacora
    // console.log(err.stack);
    logger.error(err.stack);
    //Enviarle una respuesta al cliente
    switch (err.name) {
      case "ValidationError":
        res.status(400).json({
          msg: "Por favor verifica la informacion de tu peticion",
          err,
        });
        break;
      case "ReferenceError":
        res.status(400).json({
          msg: "Error de referencia",
        });
        break;
      case "UnauthorizedError":
        res.status(400).json({
          msg: "No estas autorizado para hacer esta peticion",
        });
        break;
      default:
        res.status(500).json({
          msg: "Error desconocido",
        });
        break;
    }
  }
}

module.exports = handleError;
