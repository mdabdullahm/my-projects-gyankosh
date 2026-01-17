"use client";
import React from "react";
import { ArrowLeft, Share2, Bookmark, Lightbulb, Clock, Globe, History, Sun, Moon, Sparkles } from "lucide-react";
import Link from "next/link";

export default function TajMahalPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 pb-20">
      
      {/* ১. হেডার সেকশন (ইতিহাস ও আভিজাত্যের জন্য গোলাপী-লাল থিম) */}
      <div className="bg-rose-600 text-white pt-12 pb-32 px-6 relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <Link href="/general-knowledge" className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition">
            <ArrowLeft className="w-4 h-4" /> সাধারণ জ্ঞানে ফিরে যান
          </Link>
          <span className="px-4 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">
            ইতিহাস ও স্থাপত্য
          </span>
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            তাজমহলের রঙের রহস্য: <br /> সময়ের সাথে পাথরের খেলা
          </h1>
          <div className="flex gap-6 text-sm text-white/70 font-medium">
             <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> পড়ার সময়: ৩ মিনিট</span>
             <span className="flex items-center gap-1.5"><Globe className="w-4 h-4" /> আগ্রা, ভারত</span>
          </div>
        </div>
        
        {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-400/20 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <History className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 rotate-12" />
      </div>

      {/* ২. বিস্তারিত কন্টেন্ট */}
      <div className="max-w-3xl mx-auto px-6 -mt-16 relative z-20">
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-gray-100 dark:border-slate-800">
          
          {/* কি-ফ্যাক্ট বক্স */}
          <div className="flex items-start gap-4 p-6 bg-rose-50 dark:bg-rose-950/30 rounded-3xl border border-rose-100 dark:border-rose-900/50 mb-10 shadow-sm">
             <Sparkles className="w-8 h-8 text-rose-500 shrink-0" />
             <p className="text-lg font-bold text-rose-900 dark:text-rose-200 leading-relaxed italic">
               "তাজমহলের সাদা মার্বেল পাথর আবহাওয়া এবং দিনের সময়ের ওপর নির্ভর করে রঙ পাল্টায়। সকালে গোলাপী, দুপুরে সাদা এবং জোছনা রাতে সোনালী দেখায়।"
             </p>
          </div>

          {/* মূল আলোচনা */}
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-foreground/80 leading-relaxed text-justify">
            <p>
              বিশ্বের সপ্তম আশ্চর্যের অন্যতম একটি হলো তাজমহল। মুঘল সম্রাট শাহজাহানের তৈরি এই স্মৃতিসৌধটি কেবল তার নকশার জন্যই নয়, বরং এর রঙের অদ্ভুত পরিবর্তনের জন্যও বিশ্বজুড়ে বিখ্যাত। 
            </p>
            
            <h3 className="text-2xl font-bold text-foreground pt-4 border-b-2 border-rose-500 w-fit mb-6">কোন সময়ে কী রঙ?</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
               <div className="p-6 bg-pink-50 dark:bg-pink-900/20 rounded-2xl text-center border border-pink-100 dark:border-pink-900/50">
                  <Sun className="w-8 h-8 mx-auto mb-3 text-pink-500" />
                  <h4 className="font-bold text-pink-700 dark:text-pink-400">ভোরবেলা</h4>
                  <p className="text-sm font-medium">হালকা গোলাপী</p>
               </div>
               <div className="p-6 bg-gray-50 dark:bg-slate-800 rounded-2xl text-center border border-gray-100 dark:border-slate-700">
                  <Sun className="w-8 h-8 mx-auto mb-3 text-yellow-500" />
                  <h4 className="font-bold text-slate-700 dark:text-slate-300">দুপুরবেলা</h4>
                  <p className="text-sm font-medium">উজ্জ্বল সাদা</p>
               </div>
               <div className="p-6 bg-amber-50 dark:bg-amber-900/20 rounded-2xl text-center border border-amber-100 dark:border-amber-900/50">
                  <Moon className="w-8 h-8 mx-auto mb-3 text-amber-500" />
                  <h4 className="font-bold text-amber-700 dark:text-amber-400">জোছনা রাত</h4>
                  <p className="text-sm font-medium">সোনালী আভা</p>
               </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground pt-4">কেন এমন হয়?</h3>
            <p>
              তাজমহল তৈরিতে ব্যবহার করা হয়েছে রাজস্থানের মাকরানা থেকে আনা উচ্চমানের স্বচ্ছ সাদা মার্বেল। এই পাথরগুলোর একটি বিশেষ গুণ হলো এগুলো আলোর প্রতিফলন ঘটাতে পারে। সূর্যের আলোর কোণ পরিবর্তনের সাথে সাথে পাথরের ওপর আলোর প্রতিফলন পরিবর্তিত হয়, যার ফলে আমাদের চোখে এর রঙ ভিন্ন ভিন্ন মনে হয়। 
            </p>

            <div className="p-6 bg-blue-50 dark:bg-blue-950/20 rounded-2xl border-l-4 border-blue-500 mt-8">
               <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold mb-2">
                  <Lightbulb className="w-5 h-5" /> একটি বিশেষ তথ্য
               </div>
               <p className="text-sm italic text-foreground/70 leading-relaxed">
                 কথিত আছে, তাজমহলের এই রঙের পরিবর্তন মুঘল সম্রাট শাহজাহানের প্রিয়তমা পত্নী মমতাজের মেজাজের পরিবর্তনের প্রতীক হিসেবে কল্পনা করা হয়েছিল।
               </p>
            </div>
          </div>

          {/* অ্যাকশন বাটনসমূহ */}
          <div className="flex items-center justify-between pt-10 mt-12 border-t border-gray-100 dark:border-slate-800">
             <div className="flex gap-4">
                <button className="flex items-center gap-2 bg-rose-600 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-rose-700 transition shadow-lg shadow-rose-500/20">
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