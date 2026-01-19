"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Star, Camera } from "lucide-react"; 
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // ডেক্সটপ নেভবারে শুধু এই ৩টি দেখাবে
  const mainLinks = [
    { name: "হোম", href: "/" },
    { name: "শিক্ষণীয়", href: "/topics" },
    { name: "সম্পর্কে", href: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* লোগো */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400 tracking-tighter">
              আমার জ্ঞানকোষ
            </Link>
          </div>

          {/* ডেক্সটপ মেনু (এখানে গ্যালারি থাকবে না) */}
          <div className="hidden md:flex space-x-8">
            {mainLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* ডানদিকের বাটনসমূহ */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            
            <button className="hidden sm:block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-bold transition-all shadow-lg shadow-blue-500/20">
              সাবস্ক্রাইব
            </button>

            {/* মেনু বাটন (Hamburger) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition text-foreground"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* মেনু বক্স (ক্লিক করলে যা দেখাবে) */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-background border-b border-gray-200 dark:border-slate-800 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="px-4 pt-4 pb-8 space-y-2 max-w-7xl mx-auto">
            
            {/* সাধারণ লিঙ্কগুলো */}
            {mainLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-900 rounded-2xl transition"
              >
                {link.name}
              </Link>
            ))}

            {/* গ্যালারি - যা আপনি শুধু মেনুর ভেতরে চাইলেন */}
            <Link
              href="/gallery"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-4 text-lg font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-2xl transition"
            >
              <Camera className="w-5 h-5" />
              ফটো গ্যালারি
            </Link>

            <div className="my-4 border-t border-gray-100 dark:border-slate-800"></div>

            {/* গুরুত্বপূর্ণ তথ্য লিঙ্ক */}
            <Link
              href="/important"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-4 text-lg font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/20 rounded-2xl hover:bg-amber-100 dark:hover:bg-amber-900/30 transition"
            >
              <Star className="w-5 h-5 fill-current" />
              গুরুত্বপূর্ণ তথ্য
            </Link>

            {/* ছোট স্ক্রিনে সাবস্ক্রাইব বাটন */}
            <button className="w-full mt-6 bg-blue-600 text-white py-4 rounded-2xl font-bold sm:hidden shadow-lg">
              সাবস্ক্রাইব
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;