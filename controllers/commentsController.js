const Comments = require("../models/comments");
const asyncHandler = require("express-async-handler");

exports.comments_get = asyncHandler(async (req, res, next) => {
  const allComments = await Comments.find({});

  res.json(allComments);
});

exports.comments_delete = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: TODO - DELETE comments");
});

exports.comments_update = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: TODO - UPDATE comments");
});

exports.comments_create = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: TODO - CREATE comments");
});
