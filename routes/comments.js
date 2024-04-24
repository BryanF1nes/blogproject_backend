const express = require("express");
const router = express.Router();

const comment_controller = require("../controllers/commentsController");

router.get("/", comment_controller.comments_get);

router.put("/", comment_controller.comments_update);

router.post("/", comment_controller.comments_create);

router.delete("/", comment_controller.comments_delete);

module.exports = router;
