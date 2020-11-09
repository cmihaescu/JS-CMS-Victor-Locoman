const express = require('express');
const { data } = require('./db');
const db = require('./db');
const populate = require('./populateDb');
const populateDb =require('./populateDb');

const router = express.Router();

router.get('/', async (req, res) => {
  const posts = await db.posts.find().toArray();
  res.render('pages/home', { posts });
});

router.get('/posts/:slug', async (req, res) => {
  const slug = req.params.slug;
  const post = await db.posts.findOne({ slug });
  console.log(post);
  if (post) {
    res.render('pages/single', { post });
  } else {
    res.render('pages/notFound', {});
  }
});

module.exports = router;
