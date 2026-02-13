import axios from "axios";

// Use the backend URL from environment variables
const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // deployed backend
  headers: { "Content-Type": "application/json" },
});

/* ---------------- AUTH ---------------- */
export const registerUser = (data: { name: string; email: string; password: string }) => {
  return API.post("/api/auth/register", data);
};

export const loginUser = (data: { email: string; password: string }) => {
  return API.post("/api/auth/login", data);
};

/* ---------------- NOTES ---------------- */
export const getNotes = async () => {
  const res = await API.get("/api/notes");
  return res.data;
};

export const createNote = async (note: { title: string; content: string; tags?: string[] }) => {
  const res = await API.post("/api/notes", note);
  return res.data;
};

export const deleteNote = async (id: string) => {
  const res = await API.delete(`/api/notes/${id}`);
  return res.data;
};

/* ---------------- BOOKMARKS ---------------- */
export const getBookmarks = async () => {
  const res = await API.get("/api/bookmarks");
  return res.data;
};

export const createBookmark = async (bookmark: { title?: string; url: string; description?: string; tags?: string[] }) => {
  const res = await API.post("/api/bookmarks", bookmark);
  return res.data;
};

export const deleteBookmark = async (id: string) => {
  const res = await API.delete(`/api/bookmarks/${id}`);
  return res.data;
};
