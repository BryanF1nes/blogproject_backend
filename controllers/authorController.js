const Author = require("../models/author");
const asyncHandler = require("express-async-handler");

exports.author_get = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: Author CREATE GET post");
});
