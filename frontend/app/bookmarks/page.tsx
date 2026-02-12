"use client";

import { useEffect, useState } from "react";
import {
  getBookmarks,
  deleteBookmark,
  createBookmark,
} from "@/services/api";
import DashboardLayout from "@/components/DashboardLayout";
import PageTransition from "@/components/PageTransition";
import SkeletonCard from "@/components/SkeletonCard";
import Modal from "@/components/Modal";
import toast from "react-hot-toast";

interface Bookmark {
  _id: string;
  title: string;
  url: string;
  description?: string;
  tags?: string[];
}

export default function BookmarksPage() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

  async function loadBookmarks() {
  try {
    const data = await getBookmarks();

    setBookmarks(data.bookmarks || []);
  } catch (error) {
    console.error(error);
    toast.error("Failed to load bookmarks");
  } finally {
    setLoading(false);
  }
}


  async function handleDelete(id: string) {
    try {
      await deleteBookmark(id);
      toast.success("Bookmark deleted");
      loadBookmarks();
    } catch {
      toast.error("Failed to delete bookmark");
    }
  }

  async function handleCreate() {
    if (!url) {
      toast.error("URL is required");
      return;
    }

    try {
      await createBookmark({
        title,
        url,
        description,
        tags: [],
      });

      toast.success("Bookmark added");
      setTitle("");
      setUrl("");
      setDescription("");
      setOpen(false);
      loadBookmarks();
    } catch {
      toast.error("Failed to add bookmark");
    }
  }

  useEffect(() => {
    loadBookmarks();
  }, []);

  return (
    <DashboardLayout>
      <PageTransition>
        <div>
          {/* Header */}
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-4xl font-bold">Bookmarks</h1>

            <button
              onClick={() => setOpen(true)}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-105 transition text-white font-medium shadow-lg"
            >
              + Add Bookmark
            </button>
          </div>

          {/* Loading */}
          {loading ? (
            <div className="grid md:grid-cols-2 gap-6">
              {[...Array(4)].map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : bookmarks.length === 0 ? (
            <p className="text-gray-400">
              No bookmarks yet. Add your first one!
            </p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {bookmarks.map((bm) => (
                <div
                  key={bm._id}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:scale-105 transition shadow-lg"
                >
                  <h2 className="text-xl font-semibold mb-2">
                    {bm.title || "Untitled"}
                  </h2>

                  <a
                    href={bm.url}
                    target="_blank"
                    className="text-indigo-400 hover:underline text-sm break-all"
                  >
                    {bm.url}
                  </a>

                  {bm.description && (
                    <p className="text-gray-400 mt-3">
                      {bm.description}
                    </p>
                  )}

                  <div className="flex justify-end mt-6">
                    <button
                      onClick={() => handleDelete(bm._id)}
                      className="text-red-400 hover:text-red-600 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Modal */}
          <Modal open={open} onClose={() => setOpen(false)}>
            <h2 className="text-2xl font-bold mb-6">Add Bookmark</h2>

            <input
              type="text"
              placeholder="Title (optional)"
              className="w-full mb-4 p-3 rounded-xl bg-white/5 border border-white/10 outline-none"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <input
              type="url"
              placeholder="URL"
              className="w-full mb-4 p-3 rounded-xl bg-white/5 border border-white/10 outline-none"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />

            <textarea
              placeholder="Description (optional)"
              className="w-full mb-4 p-3 rounded-xl bg-white/5 border border-white/10 outline-none"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <button
              onClick={handleCreate}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-105 transition text-white font-semibold"
            >
              Save Bookmark
            </button>
          </Modal>
        </div>
      </PageTransition>
    </DashboardLayout>
  );
}
