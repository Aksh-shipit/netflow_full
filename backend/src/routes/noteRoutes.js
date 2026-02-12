const express = require("express");
const router = express.Router();
const controller = require("../controllers/noteController");

router.post("/", controller.createNote);
router.get("/", controller.getNotes);
router.delete("/:id", controller.deleteNote);

module.exports = router;
