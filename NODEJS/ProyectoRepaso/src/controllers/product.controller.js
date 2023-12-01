const productModel = require("../models/products.schema");

const createProduct = async (req, res, next) => {
  try {
    const product = productModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: req.file ? req.file.filename : "",
    });
    let createdProduct = await product.save();
    res.status(200).json({
      status: "ok",
      code: 200,
      result: createdProduct,
    });
  } catch (error) {
    next(error);
  }
};

const getProducts = async (req, res, next) => {
  try {
    const products = await productModel.find();
    res.status(200).json({
      status: "ok",
      code: 200,
      result: products,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getProducts, createProduct };
