"use client";
import React from "react";
import { ArrowLeft, Share2, Bookmark, Lightbulb, Clock, Globe, Microscope, Zap, Bug, Wind } from "lucide-react";
import Link from "next/link";

export default function AntPowerPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 pb-20">
      
      {/* ১. হেডার সেকশন (পিঁপড়ার শক্তির জন্য ইন্ডিগো/নীল থিম) */}
      <div className="bg-indigo-600 text-white pt-12 pb-32 px-6 relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <Link href="/general-knowledge" className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition">
            <ArrowLeft className="w-4 h-4" /> সাধারণ জ্ঞানে ফিরে যান
          </Link>
          <span className="px-4 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">
            প্রাণিজগত
          </span>
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            পিঁপড়ার অলৌকিক শক্তি: <br /> ক্ষুদ্র শরীরে দানবীয় ক্ষমতা
          </h1>
          <div className="flex gap-6 text-sm text-white/70 font-medium">
             <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> পড়ার সময়: ৩ মিনিট</span>
             <span className="flex items-center gap-1.5"><Globe className="w-4 h-4" /> ২১ মে, ২০২৪</span>
          </div>
        </div>
        
        {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-400/20 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <Bug className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 rotate-12" />
      </div>

      {/* ২. বিস্তারিত কন্টেন্ট */}
      <div className="max-w-3xl mx-auto px-6 -mt-16 relative z-20">
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-gray-100 dark:border-slate-800">
          
          {/* কি-ফ্যাক্ট বক্স */}
          <div className="flex items-start gap-4 p-6 bg-indigo-50 dark:bg-indigo-950/30 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 mb-10 shadow-sm">
             <Zap className="w-8 h-8 text-indigo-600 shrink-0" />
             <p className="text-lg font-bold text-indigo-900 dark:text-indigo-200 leading-relaxed italic">
               "পিঁপড়া তার নিজের শরীরের ওজনের প্রায় ২০ গুণ থেকে ৫০ গুণ বেশি ওজন বহন করতে পারে। এদের কোনো ফুসফুস নেই, তারা শরীরের ছোট ছোট ছিদ্র দিয়ে শ্বাস নেয়।"
             </p>
          </div>

          {/* মূল আলোচনা */}
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-foreground/80 leading-relaxed text-justify">
            <p>
              পিঁপড়া পৃথিবীর অন্যতম শক্তিশালী এবং পরিশ্রমী প্রাণী। আমরা প্রায়ই দেখি একটি ছোট পিঁপড়া তার চেয়ে অনেক বড় কোনো খাবারের টুকরো অনায়াসেই টেনে নিয়ে যাচ্ছে। কিন্তু এই ক্ষুদ্র শরীরে এত শক্তি আসে কোথা থেকে?
            </p>
            
            <h3 className="text-2xl font-bold text-foreground pt-4 border-b-2 border-indigo-500 w-fit mb-6">শক্তির রহস্য কী?</h3>
            <p>
              বিজ্ঞানের ভাষায়, কোনো প্রাণীর শরীরের আকার যত ছোট হয়, তার শরীরের পেশির আয়তন (Cross-section) তার ওজনের তুলনায় তত বেশি শক্তিশালী হয়। পিঁপড়ার এক্সোস্কেলিটন বা বাইরের শক্ত খোলস তাদের পেশিকে অনেক বেশি ভার বহনের ক্ষমতা দেয়। মানুষের ওজন যদি একটি পিঁপড়ার ওজনের সমান হতো, তবে মানুষও অবিশ্বাস্য পরিমাণ ভার বহন করতে পারতো।
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10">
               {/* শ্বাসক্রিয়া */}
               <div className="p-6 bg-emerald-50 dark:bg-emerald-950/20 rounded-2xl border border-emerald-100 dark:border-emerald-900/50">
                  <Wind className="w-8 h-8 mb-3 text-emerald-500" />
                  <h4 className="font-bold text-emerald-700 dark:text-emerald-400">ফুসফুস নেই</h4>
                  <p className="text-sm">এরা শরীরের দুই পাশে থাকা ছোট ছোট ছিদ্র বা স্পাইরাকল (Spiracles) দিয়ে সরাসরি রক্তে অক্সিজেন নেয়।</p>
               </div>
               {/* কান নেই */}
               <div className="p-6 bg-amber-50 dark:bg-amber-950/20 rounded-2xl border border-amber-100 dark:border-amber-900/50">
                  <Microscope className="w-8 h-8 mb-3 text-amber-500" />
                  <h4 className="font-bold text-amber-700 dark:text-amber-400">কান নেই</h4>
                  <p className="text-sm">এদের কান নেই। এরা মাটির কম্পন অনুভব করে শব্দ বুঝতে পারে এবং এন্টেনার সাহায্যে যোগাযোগ করে।</p>
               </div>
            </div>

            <p>
              এছাড়া পিঁপড়ারা অত্যন্ত সামাজিক প্রাণী। তারা যখন কোনো ভারি বস্তু একলা সরাতে পারে না, তখন দলবদ্ধ হয়ে কাজ করে। তাদের এই একতা এবং শারীরিক সক্ষমতা তাদের প্রকৃতির অন্যতম বিস্ময়কর জীবে পরিণত করেছে।
            </p>

            <div className="p-6 bg-blue-50 dark:bg-blue-950/20 rounded-2xl border-l-4 border-blue-500 mt-8">
               <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold mb-2">
                  <Lightbulb className="w-5 h-5" /> আপনি কি জানতেন?
               </div>
               <p className="text-sm italic text-foreground/70 leading-relaxed">
                 সারা বিশ্বে যত মানুষ আছে, তাদের মোট ওজন আর সারা বিশ্বের সব পিঁপড়ার মোট ওজন প্রায় সমান!
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