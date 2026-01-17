"use client";
import React from "react";
import { ArrowLeft, Share2, Bookmark, Lightbulb, Clock, Globe, Sun, Timer, Zap, Telescope } from "lucide-react";
import Link from "next/link";

export default function SunlightTravelPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 pb-20">
      
      {/* ১. হেডার সেকশন (সূর্যের জন্য কমলা/অ্যাম্বার থিম) */}
      <div className="bg-orange-600 text-white pt-12 pb-32 px-6 relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <Link href="/general-knowledge" className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition">
            <ArrowLeft className="w-4 h-4" /> সাধারণ জ্ঞানে ফিরে যান
          </Link>
          <span className="px-4 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">
            মহাকাশ বিজ্ঞান
          </span>
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            সূর্যের আলোর ভ্রমণ: <br /> মহাকাশে সময়ের এক জাদুকরী গল্প
          </h1>
          <div className="flex gap-6 text-sm text-white/70 font-medium">
             <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> পড়ার সময়: ৩ মিনিট</span>
             <span className="flex items-center gap-1.5"><Globe className="w-4 h-4" /> পৃথিবী থেকে ১৫ কোটি কিমি দূরে</span>
          </div>
        </div>
        
        {/* ব্যাকগ্রাউন্ড ডেকোরেশন (সূর্য এবং আলোর আভা) */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400/30 rounded-full -mr-20 -mt-20 blur-3xl animate-pulse"></div>
        <Sun className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 rotate-12" />
      </div>

      {/* ২. বিস্তারিত কন্টেন্ট */}
      <div className="max-w-3xl mx-auto px-6 -mt-16 relative z-20">
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-gray-100 dark:border-slate-800">
          
          {/* কি-ফ্যাক্ট বক্স */}
          <div className="flex items-start gap-4 p-6 bg-orange-50 dark:bg-orange-950/30 rounded-3xl border border-orange-100 dark:border-orange-900/50 mb-10 shadow-sm">
             <Timer className="w-8 h-8 text-orange-600 shrink-0" />
             <p className="text-lg font-bold text-orange-900 dark:text-orange-200 leading-relaxed italic">
               "সূর্যের আলো পৃথিবী পর্যন্ত পৌঁছাতে গড়ে ৮ মিনিট ২০ সেকেন্ড সময় নেয়। অর্থাৎ আমরা এখন যে রোদ দেখছি তা ৮ মিনিট আগে সূর্য থেকে রওনা হয়েছিল।"
             </p>
          </div>

          {/* মূল আলোচনা */}
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-foreground/80 leading-relaxed text-justify">
            <p>
              আলোর গতিবেগ অকল্পনীয়। প্রতি সেকেন্ডে আলো প্রায় ৩ লক্ষ কিলোমিটার পথ অতিক্রম করতে পারে। কিন্তু মহাকাশের বিশালতার তুলনায় এই গতিও অনেক সময় কম মনে হয়। সূর্য আমাদের থেকে গড়ে ১৫ কোটি কিলোমিটার দূরে অবস্থিত, যার কারণে আলো সেখানে থেকে আসতে কিছুটা সময় নেয়।
            </p>
            
            <h3 className="text-2xl font-bold text-foreground pt-4 border-b-2 border-orange-500 w-fit mb-6">আমরা কি অতীত দেখছি?</h3>
            <p>
              হ্যাঁ, মহাকাশ বিজ্ঞানের ভাষায় আমরা যখনই আকাশের দিকে তাকাই, আমরা আসলে অতীতে দেখি। যদি এই মুহূর্তে হঠাৎ সূর্য নিভে যায়, তবে পৃথিবী আরও ৮ মিনিট ২০ সেকেন্ড পর্যন্ত সূর্যের আলো পেতে থাকবে। আমরা প্রায় ৮ মিনিট পরে জানতে পারব যে সূর্য নিভে গেছে।
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
               {/* আলোর গতি */}
               <div className="p-6 bg-blue-50 dark:bg-blue-950/20 rounded-2xl border border-blue-100 dark:border-blue-900/50">
                  <Zap className="w-8 h-8 mb-3 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-400">আলোর গতিবেগ</h4>
                  <p className="text-sm">প্রতি সেকেন্ডে ৩,০০,০০০ কিলোমিটার (১৮৬,০০০ মাইল)।</p>
               </div>
               {/* অন্যান্য গ্রহ */}
               <div className="p-6 bg-purple-50 dark:bg-purple-950/20 rounded-2xl border border-purple-100 dark:border-purple-900/50">
                  <Telescope className="w-8 h-8 mb-3 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-400">প্লুটোর ক্ষেত্রে</h4>
                  <p className="text-sm">সূর্যের আলো বামন গ্রহ প্লুটোতে পৌঁছাতে গড়ে প্রায় ৫.৫ ঘণ্টা সময় নেয়!</p>
               </div>
            </div>

            <p>
              এই অদ্ভুত ব্যাপারটি আমাদের মনে করিয়ে দেয় যে আমরা মহাকাশে যা কিছু দেখি—তা নক্ষত্রই হোক বা গ্রহ—সেগুলো অনেক সময় আগের প্রতিচ্ছবি। মহাবিশ্ব এতটাই বিশাল যে এমনকি আলোকেও এক জায়গা থেকে অন্য জায়গায় যেতে দীর্ঘ সময় অপেক্ষা করতে হয়।
            </p>

            <div className="p-6 bg-amber-50 dark:bg-amber-950/20 rounded-2xl border-l-4 border-amber-500 mt-8">
               <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold mb-2">
                  <Lightbulb className="w-5 h-5" /> একটি অবাক করা তথ্য
               </div>
               <p className="text-sm italic text-foreground/70 leading-relaxed">
                 সূর্যের কেন্দ্র থেকে আলো তার উপরিভাগে (Surface) আসতে কয়েক হাজার বছর সময় নেয়, কিন্তু উপরিভাগ থেকে আমাদের কাছে আসতে সময় নেয় মাত্র ৮ মিনিট!
               </p>
            </div>
          </div>

          {/* অ্যাকশন বাটনসমূহ */}
          <div className="flex items-center justify-between pt-10 mt-12 border-t border-gray-100 dark:border-slate-800">
             <div className="flex gap-4">
                <button className="flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-orange-700 transition shadow-lg shadow-orange-500/20">
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