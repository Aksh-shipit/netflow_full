"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `transition ${
      pathname === path
        ? "text-white font-semibold"
        : "text-gray-400 hover:text-white"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent"
        >
          NoteFlow
        </Link>

        {/* Links */}
        <div className="hidden md:flex gap-10">
          <Link href="/" className={linkClass("/")}>Home</Link>
          <Link href="/notes" className={linkClass("/notes")}>Notes</Link>
          <Link href="/bookmarks" className={linkClass("/bookmarks")}>Bookmarks</Link>
        </div>

        {/* CTA */}
        <Link
          href="/notes"
          className="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-105 transition text-white font-medium shadow-lg"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}
