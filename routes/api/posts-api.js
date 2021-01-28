const express = require("express");
const router = express.Router();
const { Post } = require("../../db/models");
const { asyncHandler } = require("../util");

router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const deletedPost = await Post.destroy({
      where: { id: req.params.id },
    });
    res.json({ deletedPost });
  })
);

module.exports = router;
