const express = require("express");
const router = express.Router();

const {
  createBookmark,
  getBookmarks,
  deleteBookmark
} = require("../controllers/bookmarkController");

router.post("/", createBookmark);
router.get("/", getBookmarks);
router.delete("/:id", deleteBookmark);

module.exports = router;
