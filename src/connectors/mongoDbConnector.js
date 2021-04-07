const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to the Database")
);

const citySchema = new mongoose.Schema({
  name: String,
  state: String,
});

const userSchema = new mongoose.Schema({
  //id: String,
  name: String,
  sex: String,
  dataOfBirth: String,
  age: String,
  cityLive: String,
});

module.exports = { mongoose, citySchema, userSchema };
