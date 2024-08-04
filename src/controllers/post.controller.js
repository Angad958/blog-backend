const Post = require("../models/Post");
const {
  clientError,
  serverError,
  success,
  notFoundError,
} = require("../utils/responseHandlers");
const mongoose = require("mongoose");

exports.createPost = async (req, res) => {
  const { title, content } = req.body;
  try {
    const post = new Post({
      title,
      content,
      authorId: "66af90c9003e264bc1f107d3",
    });
    await post.save();
    success(res, {
      message: "post created successfully.",
      data: post,
    });
  } catch (err) {
    serverError(res, err);
  }
};

exports.getAllPosts = async (req, res) => {
  const { author } = req.query;
  try {
    let posts;
    if (author) {
      if (!mongoose.Types.ObjectId.isValid(author)) {
        return clientError(res, "Invalid author ID format.");
      }
      posts = await Post.find({ authorId: author });
      if (posts.length === 0) {
        return notFoundError(res, "No posts found for the specified author.");
      }
    } else {
      posts = await Post.find();
    }

    success(res, {
      message: "Posts fetched successfully.",
      data: posts,
    });
  } catch (err) {
    serverError(res, err);
  }
};

