const express = require('express');
const mongoose = require('mongoose');
const Post = require('./models/Post');
const app = express();

app.use(express.json());

mongoose.connect('mongodb://mongo:27017/blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/posts', async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

app.post('/posts', async (req, res) => {
  const post = new Post(req.body);
  await post.save();
  res.status(201).json(post);
});

app.listen(3000, () => console.log('Server running on port 3000'));