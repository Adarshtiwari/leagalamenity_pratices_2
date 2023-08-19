const mongoose = require("mongoose");
require("dotenv").config();
// const { DB_URL } = require("../config");
const DB_URL = process.env.DB_URL;
console.log("DB_URL", DB_URL);
module.exports = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Db Connected");
  } catch (error) {
    console.log("Error ============");
    console.log(error);
    process.exit(1);
  }
};
