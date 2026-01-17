"use client";
import React from "react";
import { ArrowLeft, Share2, Bookmark, Lightbulb, Clock, Globe, Info, Heart, Activity, Waves } from "lucide-react";
import Link from "next/link";

export default function OctopusDetailPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 pb-20">
      
      {/* ১. হেডার সেকশন (সমুদ্রের প্রাণীর জন্য সায়ান/টিল থিম) */}
      <div className="bg-cyan-600 text-white pt-12 pb-32 px-6 relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <Link href="/general-knowledge" className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition">
            <ArrowLeft className="w-4 h-4" /> সাধারণ জ্ঞানে ফিরে যান
          </Link>
          <span className="px-4 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">
            প্রাণিজগত
          </span>
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            অক্টোপাসের অলৌকিক শরীর: <br /> সমুদ্রের এক রহস্যময় বিস্ময়
          </h1>
          <div className="flex gap-6 text-sm text-white/70 font-medium">
             <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> পড়ার সময়: ৪ মিনিট</span>
             <span className="flex items-center gap-1.5"><Globe className="w-4 h-4" /> ২০ মে, ২০২৪</span>
          </div>
        </div>
        
        {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <Waves className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 rotate-12" />
      </div>

      {/* ২. বিস্তারিত কন্টেন্ট */}
      <div className="max-w-3xl mx-auto px-6 -mt-16 relative z-20">
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-gray-100 dark:border-slate-800">
          
          {/* কি-ফ্যাক্ট বক্স */}
          <div className="flex items-start gap-4 p-6 bg-cyan-50 dark:bg-cyan-950/30 rounded-3xl border border-cyan-100 dark:border-cyan-900/50 mb-10 shadow-sm">
             <Info className="w-8 h-8 text-cyan-600 shrink-0" />
             <p className="text-lg font-bold text-cyan-900 dark:text-cyan-200 leading-relaxed italic">
               "অক্টোপাসের তিনটি হৃদপিণ্ড এবং এদের রক্ত নীল রঙের হয়ে থাকে। এছাড়া এদের শরীরের কোনো হাড় নেই!"
             </p>
          </div>

          {/* মূল আলোচনা */}
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-foreground/80 leading-relaxed text-justify">
            <p>
              সমুদ্রের গভীর নীল তলদেশে বসবাসকারী প্রাণীদের মধ্যে অক্টোপাস সম্ভবত সবচেয়ে অদ্ভুত এবং আকর্ষণীয়। এদের শরীরের গঠন ও জীবনধারণের পদ্ধতি বিজ্ঞানীদের আজও অবাক করে। কেন একে 'অলৌকিক শরীর' বলা হয়, চলুন জেনে নিই।
            </p>
            
            <h3 className="text-2xl font-bold text-foreground pt-4 border-b-2 border-cyan-500 w-fit mb-6">বিস্ময়কর শারীরিক গঠন</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
               {/* হৃদপিণ্ড */}
               <div className="p-6 bg-rose-50 dark:bg-rose-950/20 rounded-2xl border border-rose-100 dark:border-rose-900/50">
                  <Heart className="w-8 h-8 mb-3 text-rose-500" />
                  <h4 className="font-bold text-rose-700 dark:text-rose-400">৩টি হৃদপিণ্ড</h4>
                  <p className="text-sm">দুটি হৃদপিণ্ড ফুলকায় রক্ত পাঠায় এবং একটি পুরো শরীরে রক্ত সঞ্চালন করে।</p>
               </div>
               {/* রক্ত */}
               <div className="p-6 bg-blue-50 dark:bg-blue-950/20 rounded-2xl border border-blue-100 dark:border-blue-900/50">
                  <Activity className="w-8 h-8 mb-3 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-400">নীল রক্ত</h4>
                  <p className="text-sm">এদের রক্তে হিমোগ্লোবিনের বদলে হিমোসায়ানিন থাকে, যার কারণে রক্তের রঙ নীল হয়।</p>
               </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground pt-4">হাড়হীন শরীর ও নমনীয়তা</h3>
            <p>
              অক্টোপাসের শরীরে একটিও হাড় নেই। তাদের শরীরের একমাত্র শক্ত অংশটি হলো তাদের পাখির মতো ঠোঁট। এই হাড়হীন শরীরের কারণে তারা নিজেদের দেহকে সংকুচিত করে একটি ছোট পয়সার সমান ছিদ্র দিয়েও অনায়াসেই গলে যেতে পারে। 
            </p>

            <div className="p-6 bg-amber-50 dark:bg-amber-950/20 rounded-2xl border-l-4 border-amber-500 mt-8">
               <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold mb-2">
                  <Lightbulb className="w-5 h-5" /> বুদ্ধিমত্তার পরিচয়
               </div>
               <p className="text-sm italic text-foreground/70 leading-relaxed">
                 অক্টোপাস অত্যন্ত বুদ্ধিমান। এরা বোতলের ছিপি খুলতে পারে এবং শিকার ধরতে বিভিন্ন ধরনের কৌশল ব্যবহার করে যা অন্য কোনো অমেরুদণ্ডী প্রাণীর মধ্যে দেখা যায় না।
               </p>
            </div>
          </div>

          {/* অ্যাকশন বাটনসমূহ */}
          <div className="flex items-center justify-between pt-10 mt-12 border-t border-gray-100 dark:border-slate-800">
             <div className="flex gap-4">
                <button className="flex items-center gap-2 bg-cyan-600 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-cyan-700 transition shadow-lg shadow-cyan-500/20">
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