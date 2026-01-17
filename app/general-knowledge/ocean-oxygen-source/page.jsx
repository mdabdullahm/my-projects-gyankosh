"use client";
import React from "react";
import { ArrowLeft, Share2, Bookmark, Lightbulb, Clock, Globe, Microscope, Wind, Waves } from "lucide-react";
import Link from "next/link";

export default function OxygenSourcePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 pb-20">
      
      {/* ১. হেডার সেকশন (বিজ্ঞান ও প্রকৃতির জন্য সবুজ থিম) */}
      <div className="bg-emerald-600 text-white pt-12 pb-32 px-6 relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <Link href="/general-knowledge" className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition">
            <ArrowLeft className="w-4 h-4" /> সাধারণ জ্ঞানে ফিরে যান
          </Link>
          <span className="px-4 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">
            বিজ্ঞান ও প্রকৃতি
          </span>
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            অক্সিজেনের আসল উৎস কি? <br /> মহাসাগরের এক গোপন রহস্য
          </h1>
          <div className="flex gap-6 text-sm text-white/70 font-medium">
             <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> পড়ার সময়: ৩ মিনিট</span>
             <span className="flex items-center gap-1.5"><Globe className="w-4 h-4" /> ২০ মে, ২০২৪</span>
          </div>
        </div>
        {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <Waves className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 rotate-12" />
      </div>

      {/* ২. বিস্তারিত কন্টেন্ট */}
      <div className="max-w-3xl mx-auto px-6 -mt-16 relative z-20">
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-gray-100 dark:border-slate-800">
          
          {/* কি-ফ্যাক্ট বক্স */}
          <div className="flex items-start gap-4 p-6 bg-emerald-50 dark:bg-emerald-950/30 rounded-3xl border border-emerald-100 dark:border-emerald-900/50 mb-10 shadow-sm">
             <Wind className="w-8 h-8 text-emerald-500 shrink-0" />
             <p className="text-lg font-bold text-emerald-900 dark:text-emerald-200 leading-relaxed italic">
               "আমাদের শ্বাস নেওয়া অক্সিজেনের প্রায় ৫০% থেকে ৮০% তৈরি হয় মহাসাগর থেকে, মূলত সামুদ্রিক প্লাঙ্কটন ও শৈবাল দ্বারা।"
             </p>
          </div>

          {/* মূল আলোচনা */}
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-foreground/80 leading-relaxed text-justify">
            <p>
              আমরা ছোটবেলা থেকেই জানি যে গাছ আমাদের অক্সিজেন দেয়। কিন্তু আপনি কি জানতেন যে পৃথিবীর অধিকাংশ অক্সিজেন আসলে বনজঙ্গল থেকে নয়, বরং সমুদ্র থেকে আসে? সমুদ্রের পানিতে বসবাসকারী কোটি কোটি ক্ষুদ্রাতিক্ষুদ্র উদ্ভিদ এবং অণুজীব আমাদের এই অমূল্য অক্সিজেন সরবরাহ করে।
            </p>
            
            <h3 className="text-2xl font-bold text-foreground pt-4 border-b-2 border-emerald-500 w-fit mb-4">ফাইটোপ্লাঙ্কটন: অক্সিজেনের কারিগর</h3>
            <p>
              মহাসাগরের এই অক্সিজেন তৈরির প্রধান কারিগর হলো **ফাইটোপ্লাঙ্কটন (Phytoplankton)**। এগুলো চোখে দেখা যায় না এমন ক্ষুদ্র সামুদ্রিক উদ্ভিদ। স্থলভাগের গাছের মতোই এরা সূর্যের আলো এবং কার্বন-ডাই-অক্সাইড ব্যবহার করে সালোকসংশ্লেষণ প্রক্রিয়ায় অক্সিজেন তৈরি করে।
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
               <div className="p-6 bg-emerald-50 dark:bg-slate-800 rounded-2xl border border-emerald-100 dark:border-slate-700">
                  <h4 className="font-bold text-emerald-600 mb-2 flex items-center gap-2">
                    <Microscope className="w-4 h-4" /> প্রো-ক্লোরোকক্কাস
                  </h4>
                  <p className="text-sm">এটি পৃথিবীর ক্ষুদ্রতম সালোকসংশ্লেষণকারী জীব, যা একাই পৃথিবীর মোট অক্সিজেনের ২০% তৈরি করে!</p>
               </div>
               <div className="p-6 bg-emerald-600 text-white rounded-2xl shadow-lg">
                  <h4 className="font-bold mb-2">সমুদ্রের গভীরতা</h4>
                  <p className="text-sm">সমুদ্রের উপরিভাগের শৈবাল এবং ঘাসগুলোও এই অক্সিজেন তৈরিতে গুরুত্বপূর্ণ ভূমিকা পালন করে।</p>
               </div>
            </div>

            <p>
              মহাসাগর কেবল আমাদের অক্সিজেন দেয় না, এটি পৃথিবীর অতিরিক্ত তাপ এবং কার্বন-ডাই-অক্সাইড শোষণ করে আমাদের পরিবেশের ভারসাম্য রক্ষা করে। তাই সমুদ্রের পরিবেশ রক্ষা করা আমাদের বেঁচে থাকার জন্যই অপরিহার্য।
            </p>

            <div className="p-6 bg-blue-50 dark:bg-blue-950/20 rounded-2xl border-l-4 border-blue-500 mt-8">
               <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold mb-2">
                  <Lightbulb className="w-5 h-5" /> একটি বিশেষ তথ্য
               </div>
               <p className="text-sm italic">
                 পৃথিবীর প্রতিটি দ্বিতীয় বা তৃতীয় শ্বাসটি আমরা নিই মহাসাগর থেকে আসা অক্সিজেনের মাধ্যমে!
               </p>
            </div>
          </div>

          {/* অ্যাকশন বাটনসমূহ */}
          <div className="flex items-center justify-between pt-10 mt-12 border-t border-gray-100 dark:border-slate-800">
             <div className="flex gap-4">
                <button className="flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-emerald-700 transition shadow-lg shadow-emerald-500/20">
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