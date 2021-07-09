const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
  email: String,
  name: String,
  price: Number,
  description: String,
});

module.exports = mongoose.model("Customer", CustomerSchema);
