import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Personal Notes Manager",
  description: "Manage Your notes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 text-white">
        {/* Toaster for toast notifications */}
        <Toaster position="top-right" />

        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main className="w-full pt-20">{children}</main>
      </body>
    </html>
  );
}
