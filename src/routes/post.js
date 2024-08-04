const express = require("express");
const {
  createPost,
  getAllPosts,
  getPostsByAuthor,
} = require("../controllers/post.controller");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.post("/", authMiddleware, createPost);
router.get("/", getAllPosts);


module.exports = router;
