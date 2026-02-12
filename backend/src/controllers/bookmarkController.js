const Bookmark = require("../models/Bookmark");

/* ---------------- CREATE BOOKMARK ---------------- */
exports.createBookmark = async (req, res) => {
  try {
    const { title, url, description, tags } = req.body;

    if (!url) {
      return res.status(400).json({ message: "URL is required" });
    }

    const bookmark = new Bookmark({
      title,
      url,
      description,
      tags,
    });

    const savedBookmark = await bookmark.save();

    res.status(201).json(savedBookmark);
  } catch (error) {
    console.error("Create Bookmark Error:", error);
    res.status(500).json({ message: "Failed to create bookmark" });
  }
};

/* ---------------- GET BOOKMARKS ---------------- */
exports.getBookmarks = async (req, res) => {
  try {
    const bookmarks = await Bookmark.find().sort({ createdAt: -1 });

    res.json({ bookmarks });
  } catch (error) {
    console.error("Get Bookmarks Error:", error);
    res.status(500).json({ message: "Failed to fetch bookmarks" });
  }
};

/* ---------------- DELETE BOOKMARK ---------------- */
exports.deleteBookmark = async (req, res) => {
  try {
    await Bookmark.findByIdAndDelete(req.params.id);

    res.json({ message: "Bookmark deleted" });
  } catch (error) {
    console.error("Delete Bookmark Error:", error);
    res.status(500).json({ message: "Failed to delete bookmark" });
  }
};

