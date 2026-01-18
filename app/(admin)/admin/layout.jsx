"use client";
import Link from "next/link";
import { 
  LayoutDashboard, 
  BookMarked, 
  Terminal, 
  Lightbulb, 
  AlertCircle, 
  Settings, 
  LogOut,
  Home
} from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

export default function AdminLayout({ children }) {
  const sidebarLinks = [
    { name: "ড্যাশবোর্ড", href: "/admin", icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: "দোয়া ও জিকির", href: "/admin/dua", icon: <BookMarked className="w-5 h-5" /> },
    { name: "ওয়েব ও প্রযুক্তি", href: "/admin/tech", icon: <Terminal className="w-5 h-5" /> },
    { name: "সাধারণ জ্ঞান", href: "/admin/general-knowledge", icon: <Lightbulb className="w-5 h-5" /> },
    { name: "গুরুত্বপূর্ণ", href: "/admin/important", icon: <AlertCircle className="w-5 h-5" /> },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-slate-950 text-foreground">
      {/* ১. সাইডবার */}
      <aside className="w-64 bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-slate-800 hidden md:flex flex-col sticky top-0 h-screen">
        <div className="p-6">
          <Link href="/" className="text-xl font-bold text-emerald-600 flex items-center gap-2">
            <Home className="w-6 h-6" /> আমার জ্ঞানকোষ
          </Link>
          <p className="text-xs text-gray-400 mt-1 uppercase font-bold tracking-widest">অ্যাডমিন প্যানেল</p>
        </div>

        <nav className="flex-grow px-4 space-y-2">
          {sidebarLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-800 transition-all font-medium text-foreground/70 hover:text-emerald-600"
            >
              {link.icon} {link.name}
            </Link>
          ))}
        </nav>

        <div className="p-6 border-t border-gray-100 dark:border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">ডার্ক মুড</span>
            <ThemeToggle />
          </div>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-rose-50 dark:bg-rose-950/20 text-rose-600 font-bold hover:bg-rose-100 transition">
            <LogOut className="w-5 h-5" /> লগ-আউট
          </button>
        </div>
      </aside>

      {/* ২. মেইন কন্টেন্ট এরিয়া */}
      <main className="flex-grow flex flex-col min-w-0">
        <header className="h-16 border-b border-gray-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md px-8 flex items-center justify-between md:hidden">
            <span className="font-bold text-emerald-600">অ্যাডমিন</span>
            <ThemeToggle />
        </header>
        <div className="p-8 md:p-12 overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
}