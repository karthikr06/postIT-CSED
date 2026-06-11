require('dotenv').config('../.env');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Post = require('./Post'); 
const app = express();

app.use(cors());

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch(err => console.error(err));

app.get('/api/posts', async (req, res) => {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
});

app.post('/api/posts', async (req, res) => {
    const newPost = new Post(req.body);
    await newPost.save();
    res.status(201).json(newPost);
});

app.listen(5000, () => console.log("Server running on port 5000"));
