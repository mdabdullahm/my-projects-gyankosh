"use client";
import React from "react";
import { ArrowLeft, Share2, Bookmark, Lightbulb, Clock, Globe, Compass, Mountain } from "lucide-react";
import Link from "next/link";

export default function EverestPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 pb-20">
      
      {/* ১. হেডার সেকশন (ভৌগোলিক টপিকের জন্য কমলা/অ্যাম্বার থিম) */}
      <div className="bg-amber-600 text-white pt-12 pb-32 px-6 relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <Link href="/general-knowledge" className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition">
            <ArrowLeft className="w-4 h-4" /> সাধারণ জ্ঞানে ফিরে যান
          </Link>
          <span className="px-4 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">
            ভৌগোলিক বিস্ময়
          </span>
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            এভারেস্ট কি সত্যিই সর্বোচ্চ? <br /> কেন্দ্র থেকে এক নতুন হিসাব
          </h1>
          <div className="flex gap-6 text-sm text-white/70 font-medium">
             <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> পড়ার সময়: ৪ মিনিট</span>
             <span className="flex items-center gap-1.5"><Globe className="w-4 h-4" /> ১৯ মে, ২০২৪</span>
          </div>
        </div>
        {/* ব্যাকগ্রাউন্ড ডেকোরেশন (কম্পাস আইকন ঝাপসা ভাবে) */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <Compass className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 rotate-12" />
      </div>

      {/* ২. বিস্তারিত কন্টেন্ট */}
      <div className="max-w-3xl mx-auto px-6 -mt-16 relative z-20">
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-gray-100 dark:border-slate-800">
          
          {/* কি-ফ্যাক্ট বক্স */}
          <div className="flex items-start gap-4 p-6 bg-amber-50 dark:bg-amber-950/30 rounded-3xl border border-amber-100 dark:border-amber-900/50 mb-10 shadow-sm">
             <Mountain className="w-8 h-8 text-amber-500 shrink-0" />
             <p className="text-lg font-bold text-amber-900 dark:text-amber-200 leading-relaxed italic">
               "সমুদ্রপৃষ্ঠ থেকে এভারেস্ট সর্বোচ্চ হলেও, পৃথিবীর কেন্দ্র থেকে পরিমাপ করলে ইকুয়েডরের 'চিম্বোরাজো' পর্বতটি মহাকাশের সবচেয়ে কাছে।"
             </p>
          </div>

          {/* মূল আলোচনা */}
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-foreground/80 leading-relaxed text-justify">
            <p>
              সাধারণত আমরা মাউন্ট এভারেস্টকে পৃথিবীর সর্বোচ্চ পর্বত হিসেবে জানি। সমুদ্রপৃষ্ঠ থেকে এর উচ্চতা ২৯,০৩২ ফুট (৮,৮৪৮ মিটার)। কিন্তু যদি আমরা পরিমাপের পদ্ধতি বদলে দিই, তবে বিজয়ীর নামও বদলে যাবে।
            </p>
            
            <h3 className="text-2xl font-bold text-foreground pt-4 border-b-2 border-amber-500 w-fit mb-4">কেন চিম্বোরাজো ব্যতিক্রম?</h3>
            <p>
              আমাদের পৃথিবী পুরোপুরি গোল নয়, বরং এটি বিষুবরেখার (Equator) কাছে একটু ফোলা। ইকুয়েডরের **মাউন্ট চিম্বোরাজো** বিষুবরেখার একদম কাছে অবস্থিত। পৃথিবীর কেন্দ্র থেকে হিসাব করলে চিম্বোরাজোর দূরত্ব এভারেস্টের চেয়ে প্রায় ২ কিলোমিটার বেশি।
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
               <div className="p-6 bg-gray-50 dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700">
                  <h4 className="font-bold text-amber-600 mb-2">মাউন্ট এভারেস্ট</h4>
                  <p className="text-sm">সমুদ্রপৃষ্ঠ থেকে সর্বোচ্চ, কিন্তু কেন্দ্র থেকে দূরত্ব কম।</p>
               </div>
               <div className="p-6 bg-amber-600 text-white rounded-2xl shadow-lg">
                  <h4 className="font-bold mb-2">মাউন্ট চিম্বোরাজো</h4>
                  <p className="text-sm">মহাকাশের সবচেয়ে কাছের বিন্দু এবং কেন্দ্র থেকে সর্বোচ্চ দূরত্বের শৃঙ্গ।</p>
               </div>
            </div>

            <p>
              তাই টেকনিক্যাল দিক দিয়ে বিচার করলে, যদি আপনি এমন একটি জায়গায় দাঁড়াতে চান যা মহাকাশের সবচেয়ে কাছে, তবে আপনাকে এভারেস্টে নয় বরং চিম্বোরাজোর চূড়ায় উঠতে হবে।
            </p>

            <div className="p-6 bg-blue-50 dark:bg-blue-950/20 rounded-2xl border-l-4 border-blue-500 mt-8">
               <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold mb-2">
                  <Lightbulb className="w-5 h-5" /> আপনি কি জানতেন?
               </div>
               <p className="text-sm italic">
                 পৃথিবীর কেন্দ্র থেকে এভারেস্টের চেয়ে চিম্বোরাজোর উচ্চতা প্রায় ৭,০০০ ফুট বেশি!
               </p>
            </div>
          </div>

          {/* ফুটার বাটন */}
          <div className="flex items-center justify-between pt-10 mt-12 border-t border-gray-100 dark:border-slate-800">
             <div className="flex gap-4">
                <button className="flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:opacity-90 transition shadow-lg shadow-amber-500/20">
                  <Share2 className="w-4 h-4" /> শেয়ার
                </button>
                <button className="flex items-center gap-2 bg-gray-100 dark:bg-slate-800 text-foreground/60 px-6 py-3 rounded-2xl font-bold text-sm hover:bg-gray-200 transition">
                  <Bookmark className="w-4 h-4" /> সংগ্রহে রাখুন
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}