const joi = require("joi");

const validationSchema = joi.object({
  name: joi.string().required(),
  description: joi.string().required(),
  price: joi.string().required(),
  category: joi
    .string()
    .valid("categoria1", "categoria2", "categoria3")
    .required(),
  image: joi.string().required(),
});

function validateModel(req, res, next) {
  req.body.image = req.file ? req.file.filename : "";
  const { error } = validationSchema.validate(req.body);
  if (error) {
    next(error);
  }
  next();
}

module.exports = validateModel;
