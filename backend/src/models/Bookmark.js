const mongoose = require("mongoose");

const bookmarkSchema = new mongoose.Schema({
    title: String,
    url: { type: String, required: true },
    description: String,
    tags: [String],
    favorite: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model("Bookmark", bookmarkSchema);
