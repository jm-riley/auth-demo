const express = require('express');
const router = express.Router();
const { Post, User } = require('../db/models');
const { asyncHandler } = require('./util');

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const posts = await Post.findAll({ include: User });
    res.render('posts', { posts });
  })
);

module.exports = router;
