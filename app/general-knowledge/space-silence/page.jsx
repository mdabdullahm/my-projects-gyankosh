"use client";
import React from "react";
import { ArrowLeft, Share2, Bookmark, Lightbulb, Clock, Globe, Telescope, Star, Radio, Moon } from "lucide-react";
import Link from "next/link";

export default function SpaceSilencePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 pb-20">
      
      {/* ১. হেডার সেকশন (মহাকাশের জন্য বেগুনী/ইন্ডিগো থিম) */}
      <div className="bg-indigo-700 text-white pt-12 pb-32 px-6 relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <Link href="/general-knowledge" className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition">
            <ArrowLeft className="w-4 h-4" /> সাধারণ জ্ঞানে ফিরে যান
          </Link>
          <span className="px-4 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">
            মহাকাশ বিজ্ঞান
          </span>
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            মহাকাশের নীরবতা: <br /> যেখানে শব্দ পৌঁছায় না
          </h1>
          <div className="flex gap-6 text-sm text-white/70 font-medium">
             <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> পড়ার সময়: ৩ মিনিট</span>
             <span className="flex items-center gap-1.5"><Globe className="w-4 h-4" /> ২০ মে, ২০২৪</span>
          </div>
        </div>
        
        {/* ব্যাকগ্রাউন্ড ডেকোরেশন (তারা ও চাঁদ) */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <Star className="absolute top-20 right-40 w-8 h-8 text-white/10 animate-pulse" />
        <Moon className="absolute bottom-10 -right-10 w-64 h-64 text-white/5 -rotate-12" />
      </div>

      {/* ২. বিস্তারিত কন্টেন্ট */}
      <div className="max-w-3xl mx-auto px-6 -mt-16 relative z-20">
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-gray-100 dark:border-slate-800">
          
          {/* কি-ফ্যাক্ট বক্স */}
          <div className="flex items-start gap-4 p-6 bg-indigo-50 dark:bg-indigo-950/30 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 mb-10 shadow-sm">
             <Telescope className="w-8 h-8 text-indigo-500 shrink-0" />
             <p className="text-lg font-bold text-indigo-900 dark:text-indigo-200 leading-relaxed italic">
               "মহাকাশে কোনো বায়ুমণ্ডল নেই, তাই শব্দ চলাচলের কোনো মাধ্যম নেই। মহাকাশ পুরোপুরি নিঃশব্দ বা নীরব।"
             </p>
          </div>

          {/* মূল আলোচনা */}
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-foreground/80 leading-relaxed text-justify">
            <p>
              সায়েন্স ফিকশন সিনেমাগুলোতে আমরা মহাকাশে বড় বড় বিস্ফোরণের বিকট শব্দ শুনতে পাই। কিন্তু বাস্তবে মহাকাশ এক ভয়াবহ নীরবতার জায়গা। কেন এমন হয়? উত্তরটা লুকিয়ে আছে বিজ্ঞানের এক সাধারণ নিয়মে।
            </p>
            
            <h3 className="text-2xl font-bold text-foreground pt-4 border-b-2 border-indigo-500 w-fit mb-4">শব্দ চলাচলের শর্ত</h3>
            <p>
              শব্দ হলো এক ধরনের তরঙ্গ যা চলাচলের জন্য কোনো না কোনো মাধ্যম (যেমন: বাতাস, পানি বা কঠিন পদার্থ) প্রয়োজন হয়। পৃথিবীতে আমরা কথা বলতে পারি কারণ আমাদের চারপাশে বাতাস আছে। কিন্তু মহাকাশ হলো একটি বিশাল **শূন্যস্থান (Vacuum)**। সেখানে শব্দ তরঙ্গ বয়ে নেওয়ার মতো কোনো অণু বা বাতাস নেই।
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
               <div className="p-6 bg-indigo-50 dark:bg-slate-800 rounded-2xl border border-indigo-100 dark:border-slate-700">
                  <h4 className="font-bold text-indigo-600 mb-2 flex items-center gap-2">
                    <Radio className="w-4 h-4" /> মহাকাশচারীদের কথা
                  </h4>
                  <p className="text-sm">মহাকাশচারীরা একে অপরের সাথে কথা বলার জন্য রেডিও ওয়েভ বা বেতার তরঙ্গ ব্যবহার করেন, কারণ রেডিও ওয়েভ শূন্যস্থানেও চলতে পারে।</p>
               </div>
               <div className="p-6 bg-indigo-700 text-white rounded-2xl shadow-lg">
                  <h4 className="font-bold mb-2 text-indigo-100">বিস্ফোরণ?</h4>
                  <p className="text-sm">মহাকাশে কোনো নক্ষত্রের বিশাল বিস্ফোরণ ঘটলেও তার এক বিন্দু শব্দও আমাদের কানে পৌঁছাবে না।</p>
               </div>
            </div>

            <p>
              যদি দুজন মহাকাশচারী মহাকাশে মুখোমুখি দাঁড়িয়ে চিৎকার করেন, তবুও তারা একে অপরের কোনো শব্দ শুনতে পাবেন না। তবে তারা যদি তাদের হেলমেটগুলো একে অপরের সাথে স্পর্শ করান, তবে কম্পনের মাধ্যমে কিছুটা শব্দ শোনা সম্ভব হতে পারে।
            </p>

            <div className="p-6 bg-amber-50 dark:bg-amber-950/20 rounded-2xl border-l-4 border-amber-500 mt-8">
               <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold mb-2">
                  <Lightbulb className="w-5 h-5" /> আপনি কি জানতেন?
               </div>
               <p className="text-sm italic">
                 পৃথিবীর বায়ুমণ্ডলের কারণে আমরা আওয়াজ শুনতে পাই। বায়ুমণ্ডল না থাকলে এই পৃথিবীও মহাকাশের মতোই নিঃশব্দ হয়ে যেত।
               </p>
            </div>
          </div>

          {/* অ্যাকশন বাটনসমূহ */}
          <div className="flex items-center justify-between pt-10 mt-12 border-t border-gray-100 dark:border-slate-800">
             <div className="flex gap-4">
                <button className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-indigo-700 transition shadow-lg shadow-indigo-500/20">
                  <Share2 className="w-4 h-4" /> শেয়ার
                </button>
                <button className="flex items-center gap-2 bg-gray-50 dark:bg-slate-800 text-foreground/60 px-6 py-3 rounded-2xl font-bold text-sm hover:bg-gray-100 transition">
                  <Bookmark className="w-4 h-4" /> সেভ
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}