const Joi = require('joi');

const validationSchema = Joi.object({
  title: Joi.string().required(),
  start: Joi.string().required(),
  end: Joi.string().required(),
  bgcolor: Joi.string().required(),
  notes: Joi.string().required(),
  photo: Joi.string().required(),
});

function validateModel(req, res, next) {
  req.body.photo = req.file ? req.file.filename : '';
  const { error } = validationSchema.validate(req.body);
  if (error) {
    next(error);
    return;
  }
  next();
}

module.exports = validateModel;
