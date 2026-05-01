const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  author: {
  type: String,
  required: true,
  trim: true,
  minlength: 1,
  maxlength: 20
},
  text: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 300
  },
  timestamp: { type: Date, default: Date.now },
  like: {
    type: number,
    default: 0,
    min: 0,
  }
});

module.exports = mongoose.model("Comment", commentSchema);