"use client";
import React from "react";
import { ArrowLeft, Share2, Bookmark, Lightbulb, Clock, Globe, Info } from "lucide-react";
import Link from "next/link";

export default function BlueWhaleHeartPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 pb-20">
      
      {/* ১. টপ হেডার (নীল তিমির জন্য নীল থিম) */}
      <div className="bg-blue-600 text-white pt-12 pb-32 px-6 relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <Link href="/general-knowledge" className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition">
            <ArrowLeft className="w-4 h-4" /> সাধারণ জ্ঞানে ফিরে যান
          </Link>
          <span className="px-4 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">
            প্রাণিজগত
          </span>
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            নীল তিমির হৃদপিণ্ড: <br /> প্রকৃতির এক বিশাল বিস্ময়
          </h1>
          <div className="flex gap-6 text-sm text-white/70 font-medium">
             <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> পড়ার সময়: ৩ মিনিট</span>
             <span className="flex items-center gap-1.5"><Globe className="w-4 h-4" /> ১৮ মে, ২০২৪</span>
          </div>
        </div>
        {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
      </div>

      {/* ২. বিস্তারিত কন্টেন্ট */}
      <div className="max-w-3xl mx-auto px-6 -mt-16 relative z-20">
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-gray-100 dark:border-slate-800">
          
          {/* কি-ফ্যাক্ট বক্স */}
          <div className="flex items-start gap-4 p-6 bg-blue-50 dark:bg-blue-950/30 rounded-3xl border border-blue-100 dark:border-blue-900/50 mb-10">
             <Info className="w-8 h-8 text-blue-500 shrink-0" />
             <p className="text-lg font-bold text-blue-900 dark:text-blue-200 leading-relaxed italic">
               "একটি নীল তিমির হৃদপিণ্ড একটি আস্ত গাড়ির সমান বড় হতে পারে এবং এর ধড়ফড়ানি ২ মাইল দূর থেকেও শোনা যায়!"
             </p>
          </div>

          {/* মূল লেখা */}
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-foreground/80 leading-relaxed text-justify">
            <p>
              নীল তিমি পৃথিবীর ইতিহাসে এ পর্যন্ত টিকে থাকা সবচেয়ে বড় প্রাণী। এদের বিশাল শরীরের রক্ত সঞ্চালনের জন্য প্রয়োজন হয় একটি শক্তিশালী হৃদযন্ত্র। এই হৃদপিণ্ডটি ওজনে প্রায় ১৩০০ পাউন্ড বা ৬০০ কেজির কাছাকাছি হতে পারে। 
            </p>
            
            <h3 className="text-2xl font-bold text-foreground pt-4">কিছু অবাক করা তথ্য:</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>এর ধমনীগুলো এতটাই প্রশস্ত যে একজন পূর্ণবয়স্ক মানুষ তার ভেতরে অনায়াসেই সাতার কাটতে পারবে।</li>
              <li>বিশ্রামের সময় এদের হৃদপিণ্ড মিনিটে মাত্র ৮ থেকে ১০ বার স্পন্দিত হয়।</li>
              <li>ডুব দেওয়ার সময় এদের হৃদস্পন্দন মিনিটে মাত্র ২ বারে নেমে আসতে পারে।</li>
            </ul>

            <div className="p-6 bg-gray-50 dark:bg-slate-800/50 rounded-2xl border-l-4 border-blue-500">
              <p className="font-medium italic">
                বিস্ময়কর হলেও সত্য যে, এদের হৃদপিণ্ডের ধড়ফড়ানির শব্দ শোনার জন্য বিশেষ কোনো যন্ত্রের প্রয়োজন হয় না, সমুদ্রের তলদেশে এটি ২ মাইল দূর থেকেও টের পাওয়া যায়।
              </p>
            </div>
          </div>

          {/* শেয়ার বাটন */}
          <div className="flex items-center justify-between pt-10 mt-10 border-t border-gray-100 dark:border-slate-800">
             <div className="flex gap-4">
                <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:opacity-90 transition">
                  <Share2 className="w-4 h-4" /> শেয়ার
                </button>
                <button className="flex items-center gap-2 bg-gray-100 dark:bg-slate-800 text-foreground/60 px-6 py-3 rounded-2xl font-bold text-sm hover:bg-gray-200 transition">
                  <Bookmark className="w-4 h-4" /> সেভ করে রাখুন
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}