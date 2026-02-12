import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: { "Content-Type": "application/json" }, // Ensure JSON
});

/*----------------Login/Signup--------------*/
export const registerUser = (data: { name: string; email: string; password: string }) =>
  API.post("/auth/register", data);

export const loginUser = (data: { email: string; password: string }) =>
  API.post("/auth/login", data);

/* ---------------- NOTES ---------------- */

export async function getNotes() {
  const res = await API.get("/notes");
  return res.data;
}

export async function createNote(note: { title: string; content: string; tags?: string[] }) {
  const res = await API.post("/notes", note);
  return res.data;
}

export async function deleteNote(id: string) {
  const res = await API.delete(`/notes/${id}`);
  return res.data;
}

/* ---------------- BOOKMARKS ---------------- */

export async function getBookmarks() {
  const res = await API.get("/bookmarks");
  return res.data;
}

export async function createBookmark(bookmark: { title?: string; url: string; description?: string; tags?: string[] }) {
  const res = await API.post("/bookmarks", bookmark);
  return res.data;
}

export async function deleteBookmark(id: string) {
  const res = await API.delete(`/bookmarks/${id}`);
  return res.data;
}
