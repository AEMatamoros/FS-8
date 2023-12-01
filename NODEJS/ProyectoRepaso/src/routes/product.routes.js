const productRouter = require("express").Router();
const upload = require("../midlewares/upload");
const validateModel = require("../midlewares/validateModel");
const { validateJWT } = require("../midlewares/validateJWT");

const {
  createProduct,
  getProducts,
} = require("../controllers/product.controller");

productRouter.get("/", validateJWT, getProducts);
productRouter.post("/", upload.single("image"), validateModel, createProduct);

module.exports = productRouter;
