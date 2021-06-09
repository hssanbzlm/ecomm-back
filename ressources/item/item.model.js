const mongoose = require("mongoose");

const itemShema = new mongoose.Schema({
  title: String,
  img: [{ type: String }],
  description: String,
  price: Number,
  category: String,
  marque: String,
});

module.exports = mongoose.model("items", itemShema);
