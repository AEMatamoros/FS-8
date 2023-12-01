const appRouter = require("express").Router();
const productRouter = require("./product.routes");
const authRoutes = require("./auth.routes");

appRouter.use("/products", productRouter);
appRouter.use("/auth", authRoutes);

module.exports = appRouter;
