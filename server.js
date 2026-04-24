require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const Comment = require("./Comment");

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/comments", async (req, res) => {
  const comments = await Comment.find();
  res.json(comments);
});

app.post("/comments", async (req, res) => {
  const newComment = new Comment(req.body);
  await newComment.save();
  res.json({ message: "comment saved", comment: newComment });
});

app.listen(3000, () => console.log("port 3000 running bitch"));