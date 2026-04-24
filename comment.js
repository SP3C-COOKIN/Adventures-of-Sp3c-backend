const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  author: String,
  text: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Comment", commentSchema);