"use client";
import Link from "next/link";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Facebook, 
  ArrowUpRight, 
  Heart 
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-slate-950 border-t border-gray-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* ১. লোগো ও বর্ণনা */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
              আমার জ্ঞানকোষ
            </Link>
            <p className="text-foreground/60 text-sm leading-relaxed">
              একটি ব্যক্তিগত প্রচেষ্টা যেখানে আমি আমার প্রতিদিনের শেখা দোয়া-কালাম, প্রযুক্তি এবং জীবনের অভিজ্ঞতাগুলো শেয়ার করি। জ্ঞানের আলো ছড়িয়ে পড়ুক সবার মাঝে।
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="p-2 rounded-full bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 hover:text-emerald-600 transition shadow-sm">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 hover:text-emerald-600 transition shadow-sm">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 hover:text-emerald-600 transition shadow-sm">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* ২. দ্রুত লিঙ্কসমূহ */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6">প্রয়োজনীয় লিঙ্ক</h3>
            <ul className="space-y-4 text-sm text-foreground/60 font-medium">
              <li><Link href="/" className="hover:text-emerald-600 transition flex items-center gap-1 group">হোম <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link href="/topics" className="hover:text-emerald-600 transition flex items-center gap-1 group">শিক্ষণীয় বিষয় <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link href="/about" className="hover:text-emerald-600 transition flex items-center gap-1 group">আমার সম্পর্কে <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link href="/contact" className="hover:text-emerald-600 transition flex items-center gap-1 group">যোগাযোগ <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
            </ul>
          </div>

          {/* ৩. জনপ্রিয় বিভাগসমূহ */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6">জনপ্রিয় বিভাগ</h3>
            <ul className="space-y-4 text-sm text-foreground/60 font-medium">
              <li><Link href="/dua" className="hover:text-emerald-600 transition">দোয়া ও জিকির</Link></li>
              <li><Link href="/tech" className="hover:text-emerald-600 transition">ওয়েব ডেভেলপমেন্ট</Link></li>
              <li><Link href="/lifestyle" className="hover:text-emerald-600 transition">জীবন গড়ার কথা</Link></li>
              <li><Link href="/tips" className="hover:text-emerald-600 transition">প্রোগ্রামিং টিপস</Link></li>
            </ul>
          </div>

          {/* ৪. যোগাযোগ ও আপডেট */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6">সাথে থাকুন</h3>
            <p className="text-sm text-foreground/60 leading-relaxed">
              নতুন কোনো শিক্ষা বা আপডেট পেতে ইমেইল করতে পারেন:
            </p>
            <a href="mailto:example@gmail.com" className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold hover:underline">
              <Mail className="w-5 h-5" /> mdabdullahmorol38@gmail.com
            </a>
          </div>
        </div>

        {/* নিচের বার (Copyright) */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/40 font-medium">
          <p>© {currentYear} আমার জ্ঞানকোষ। সর্বস্বত্ব সংরক্ষিত।</p>
          <p className="flex items-center gap-1.5">
            ভালোবাসার সাথে তৈরি <Heart className="w-4 h-4 text-red-500 fill-red-500" /> বাংলাদেশে
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;