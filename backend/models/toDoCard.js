const mongoose = require("mongoose");

const toDoCardSchema = mongoose.Schema({
  title: { type: String, require: true },
  description: String,
  imageUrl: String,
});

module.exports = mongoose.model("toDoCard", toDoCardSchema);
