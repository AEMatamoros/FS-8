const { Schema, model } = require("mongoose");

const productSchema = Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    match: /^[a-zA-Z0-9 ]+$/,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  price: {
    type: Number,
    trim: true,
    required: true,
  },
  category: {
    type: String,
    trim: true,
    required: true,
    enum: ["categoria1", "categoria2", "categoria3"],
  },
  image: {
    type: String,
    trim: true,
    required: true,
  },
});

module.exports = model("productModel", productSchema);
