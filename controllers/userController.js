const User = require("../models/user");
const asyncHandler = require("express-async-handler");

exports.users_get = asyncHandler(async (req, res, next) => {
  const allUsers = await User.find({});

  res.json(allUsers);
});
