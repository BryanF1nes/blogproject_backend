const Post = require("../models/posts");
const asyncHandler = require("express-async-handler");

exports.post_get = asyncHandler(async (req, res, next) => {
  const allPosts = await Post.find({});

  res.json(allPosts);
});

exports.post_delete = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: TODO - DELETE POST");
});

exports.post_update = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: TODO - UPDATE POST");
});

exports.post_create = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: TODO - CREATE POST");
});
