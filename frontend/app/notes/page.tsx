"use client";

import { useEffect, useState } from "react";
import { getNotes, deleteNote, createNote } from "@/services/api";
import DashboardLayout from "@/components/DashboardLayout";
import PageTransition from "@/components/PageTransition";
import SkeletonCard from "@/components/SkeletonCard";
import Modal from "@/components/Modal";
import toast from "react-hot-toast";

interface Note {
  _id: string;
  title: string;
  content: string;
  tags?: string[];
}

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  // Load notes safely
  async function loadNotes() {
    try {
      const data = await getNotes();
      console.log("API Response:", data); // Debugging

      // Ensure we always have an array
      const notesArray = Array.isArray(data) ? data : data?.notes ?? [];
      setNotes(notesArray);
    } catch (err) {
      toast.error("Failed to load notes");
      setNotes([]); // fallback to empty array
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: string) {
    try {
      await deleteNote(id);
      toast.success("Note deleted");
      loadNotes();
    } catch {
      toast.error("Failed to delete note");
    }
  }

  async function handleCreate() {
    if (!newTitle || !newContent) {
      toast.error("All fields required");
      return;
    }

    try {
      await createNote({
        title: newTitle,
        content: newContent,
        tags: [],
      });
      toast.success("Note created successfully");
      setNewTitle("");
      setNewContent("");
      setOpen(false);
      loadNotes();
    } catch {
      toast.error("Failed to create note");
    }
  }

  useEffect(() => {
    loadNotes();
  }, []);

  return (
    <DashboardLayout>
      <PageTransition>
        <div>
          {/* Header */}
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-4xl font-bold">My Notes</h1>
            <button
              onClick={() => setOpen(true)}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-105 transition text-white font-medium shadow-lg"
            >
              + New Note
            </button>
          </div>

          {/* Loading Skeleton */}
          {loading ? (
            <div className="grid md:grid-cols-2 gap-6">
              {[...Array(4)].map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : Array.isArray(notes) && notes.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {notes.map((note) => (
                <div
                  key={note._id}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:scale-105 transition shadow-lg"
                >
                  <h2 className="text-xl font-semibold mb-3">{note.title}</h2>
                  <p className="text-gray-400">{note.content}</p>
                  <div className="flex justify-end mt-6">
                    <button
                      onClick={() => handleDelete(note._id)}
                      className="text-red-400 hover:text-red-600 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400">No notes yet. Create one!</p>
          )}

          {/* Modal */}
          <Modal open={open} onClose={() => setOpen(false)}>
            <h2 className="text-2xl font-bold mb-6">Create Note</h2>
            <input
              type="text"
              placeholder="Title"
              className="w-full mb-4 p-3 rounded-xl bg-white/5 border border-white/10 outline-none"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <textarea
              placeholder="Content"
              className="w-full mb-4 p-3 rounded-xl bg-white/5 border border-white/10 outline-none"
              rows={4}
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
            />
            <button
              onClick={handleCreate}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-105 transition text-white font-semibold"
            >
              Save Note
            </button>
          </Modal>
        </div>
      </PageTransition>
    </DashboardLayout>
  );
}
