"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; 
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "হোম", href: "/" },
    { name: "শিক্ষণীয়", href: "/topics" },
    { name: "সম্পর্কে", href: "/about" },
    { name: "যোগাযোগ", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* লোগো */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              আমার জ্ঞানকোষ
            </Link>
          </div>

          {/* ডেক্সটপ মেনু লিংক (মাঝারি ও বড় স্ক্রিনে দেখাবে) */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* ডানদিকের বাটনসমূহ - আপনার কাঙ্ক্ষিত মেনু এখানে */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            
            <button className="hidden sm:block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium transition">
              সাবস্ক্রাইব
            </button>

            {/* মেনু বাটন (তিনটা দাগ) - যা সাবস্ক্রাইব এর পাশে চাইলেন */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition text-foreground"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* মোবাইল ড্রপডাউন মেনু (বাটনে ক্লিক করলে নিচে খুলে যাবে) */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-background border-b border-gray-200 dark:border-slate-800 md:hidden shadow-lg animate-in fade-in slide-in-from-top-2">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-900 rounded-md transition"
              >
                {link.name}
              </Link>
            ))}
            <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md font-medium sm:hidden">
              সাবস্ক্রাইব
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;