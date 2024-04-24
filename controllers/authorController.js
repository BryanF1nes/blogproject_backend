const Author = require("../models/author");
const asyncHandler = require("express-async-handler");

exports.author_get = asyncHandler(async (req, res, next) => {
  const allAuthors = await Author.find({});

  res.json(allAuthors);
});
