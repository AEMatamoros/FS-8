const mongoose = require("mongoose");
const handleError = require("../midlewares/handleError");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION, {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
    });
    console.log("Connected DB");
  } catch (error) {
    console.log("Ocurrio un error al conectar la BD");
  }
};

module.exports = connectDB;
