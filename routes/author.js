const express = require("express");
const router = express.Router();

const author_controller = require("../controllers/authorController");

// Author Routes

router.get("/", author_controller.author_get);

module.exports = router;
