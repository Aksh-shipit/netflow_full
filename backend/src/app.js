const express = require("express");
const cors = require("cors");

const noteRoutes = require("./routes/noteRoutes");
const bookmarkRoutes = require("./routes/bookmarkRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// ✅ CORS setup to allow requests from your frontend
app.use(cors({
  origin: "https://netflowfrontend-git-main-sneha-agarwals-projects-023ec08b.vercel.app", // frontend URL
  methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
  credentials: true
}));

// Parse JSON bodies
app.use(express.json());

// ---------------- Routes ----------------
app.use("/api/auth", authRoutes);
app.use("/api/notes", noteRoutes);
app.use("/api/bookmarks", bookmarkRoutes);

// Root route for testing backend
app.get("/", (req, res) => {
  res.send("API is running");
});

// Export the app for server.js or Vercel
module.exports = app;
