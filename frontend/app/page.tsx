import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-gray-900 text-white">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[200px] pointer-events-none z-0" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-[200px] pointer-events-none z-0" />

      {/* HEADER */}
      <header className="relative z-10 flex justify-between items-center max-w-6xl mx-auto px-6 py-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
          NoteFlow
        </h1>

        <div className="flex gap-4">
          <Link href="/login">
            <button className="px-6 py-2 rounded-xl border border-white/20 hover:bg-white/10 transition">
              Login
            </button>
          </Link>

          <Link href="/register">
            <button className="px-6 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-105 transition shadow-lg font-semibold">
              Sign Up
            </button>
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative z-10 max-w-6xl mx-auto text-center mt-24 px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
          One Place.
          <br />All Your Notes & Links.
        </h1>

        <p className="mt-8 text-lg text-gray-300 max-w-2xl mx-auto">
          A modern productivity platform designed to help you capture ideas,
          save important links, and stay organized effortlessly.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex justify-center gap-6 flex-wrap">
          <Link href="/notes">
            <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-105 transition shadow-xl font-semibold">
              Start Organizing
            </button>
          </Link>

          {/* Colored View Features Button */}
          <Link href="/bookmarks">
            <button className="px-8 py-4 rounded-2xl bg-pink-500 hover:bg-pink-600 transition shadow-lg font-semibold">
              View Features
            </button>
          </Link>
        </div>
      </section>

      {/* STATS */}
      <section className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center z-10 relative">
        {[
          ["10K+", "Notes Created"],
          ["5K+", "Bookmarks Saved"],
          ["99%", "Fast & Secure"],
          ["24/7", "Access Anywhere"],
        ].map(([value, label]) => (
          <div
            key={label}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          >
            <h3 className="text-3xl font-bold text-white">{value}</h3>
            <p className="text-gray-400 mt-2">{label}</p>
          </div>
        ))}
      </section>

      {/* HOW IT WORKS */}
      <section className="mt-32 max-w-6xl mx-auto relative z-10 px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          How NoteFlow Works
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            ["Create", "Write notes or save bookmarks in seconds"],
            ["Organize", "Use tags to stay perfectly structured"],
            ["Access", "Find everything instantly, anytime"],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:scale-105 transition"
            >
              <h3 className="text-2xl font-semibold mb-4 text-indigo-400">
                {title}
              </h3>
              <p className="text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-32 mb-10 text-center text-gray-500 text-sm relative z-10">
        © 2026 NoteFlow · Designed for productivity
      </footer>
    </div>
  );
}
