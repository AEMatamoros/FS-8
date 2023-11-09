const logError = require('../helpers/logError');
const createError = require('http-errors');

function handleError(err, req, res) {
  if (err) {
    logError(err);
    // console.log(err.name);
    switch (err.name) {
      case 'ValidationError':
        res.status(400).json({
          msg: 'Por favor verifica la informacion de tu peticion',
          err,
        });
        break;
      case 'ReferenceError':
        res.status(400).json({
          msg: 'Error de referencia',
        });
        break;
      case 'UnauthorizedError':
        res.status(400).json({
          msg: 'No estas autorizado para hacer esta peticion',
        });
        break;
      default:
        if (err.code == 'EBADCSRFTOKEN') {
          res.status(500).json({
            msg: 'Error de token CSRF',
          });
        } else {
          const error = createError(500, 'Ocurrio un error desconocido');
          res.status(error.status).json({ error: error.msg });
        }

        break;
    }
  }
}

module.exports = handleError;
