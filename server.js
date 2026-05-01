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

app.put("`/comments/${comments._id}/Like`", async (req, res) => {
  const { action } = req.body;

  if (!author || !text) {
    res.sendStatus(400).send("Missing Fields")
  }
  if (author.length > 30) {
    res.sendStatus(400).send("Author Name too long")
  }
  if (author.length > 300) {
    res.sendStatus(400).send("Comment's valid length exceeded")
  }
  const change = action === "increment" ? 1 : -1;
  
  await comment.findByIdAndUpdate(
  req.params.id,
  { $inc: {like : change}}
  );
  res.sendStatus(200);

});

app.post("/comments", async (req, res) => {
  const newComment = new Comment(req.body);
  await newComment.save();
  res.json({ message: "comment saved", comment: newComment });
});

app.listen(3000, () => console.log("port 3000 running bitch"));