const Joi = require("joi");

const validationSchema = Joi.object({
  title: Joi.string().required(),
  start: Joi.string().required(),
  end: Joi.string().required(),
  bgcolor: Joi.string().required(),
  notes: Joi.string().required(),
});

function validateModel(req, res, next) {
  const { error } = validationSchema.validate(req.body);
  if (error) {
    res.status(400).json({
      title: "Error",
      msg: "Error ocurred during search",
      code: 400,
      error,
    });
    return;
  }
  next();
}

module.exports = validateModel;
