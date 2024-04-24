const Author = require("../models/author");
const asyncHandler = require("express-async-handler");

exports.author_create_get = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: Author CREATE GET post");
});

exports.author_create_post = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: Author CREATE post");
});

exports.author_delete_post = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: Author DELETE post");
});

exports.author_delete_get = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: Author delete GET post");
});

exports.author_update_get = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: Author UPDATE GET post");
});

exports.author_update_post = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: Author UPDATE post");
});
