"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, StickyNote, Bookmark } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition
     ${
       pathname === path
         ? "bg-indigo-600 text-white"
         : "text-gray-400 hover:bg-white/10 hover:text-white"
     }`;

  return (
    <aside className="w-64 min-h-screen bg-black/60 backdrop-blur-xl border-r border-white/10 p-6">
      <h1 className="text-2xl font-bold mb-10 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
        NoteFlow
      </h1>

      <nav className="flex flex-col gap-3">
        <Link href="/" className={linkClass("/")}>
          <Home size={20} /> Home
        </Link>

        <Link href="/notes" className={linkClass("/notes")}>
          <StickyNote size={20} /> Notes
        </Link>

        <Link href="/bookmarks" className={linkClass("/bookmarks")}>
          <Bookmark size={20} /> Bookmarks
        </Link>
      </nav>
    </aside>
  );
}
