const express = require("express");
const cors = require("cors");

const noteRoutes = require("./routes/noteRoutes");
const bookmarkRoutes = require("./routes/bookmarkRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

app.use("/api/notes", noteRoutes);
app.use("/api/bookmarks", bookmarkRoutes);

module.exports = app;
