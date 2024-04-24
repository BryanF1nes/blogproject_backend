const express = require("express");
const router = express.Router();

const post_controller = require("../controllers/postsController");

router.get("/", post_controller.post_get);

router.put("/", post_controller.post_update);

router.post("/", post_controller.post_create);

router.delete("/", post_controller.post_delete);

module.exports = router;
