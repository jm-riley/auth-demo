const express = require('express');
const router = express.Router();
const { Post, User } = require('../db/models');
const { asyncHandler, csrfProtection } = require("./util");

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const posts = await Post.findAll({ include: User });
    res.render("posts", { posts });
  })
);

router.get(
  "/new",
  csrfProtection,
  asyncHandler(async (req, res) => {
    res.render("post-form", { csrfToken: req.csrfToken() });
  })
);

router.post(
  "/",
  csrfProtection,
  asyncHandler(async (req, res) => {
    const { content } = req.body;
    console.log(res.locals.user);
    await Post.create({ content, userId: res.locals.user.id });
    res.redirect("/posts");
  })
);

module.exports = router;
