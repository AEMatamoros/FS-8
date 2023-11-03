const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado a la BD");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToDb;
