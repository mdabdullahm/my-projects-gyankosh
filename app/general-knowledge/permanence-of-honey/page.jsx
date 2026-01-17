"use client";
import React from "react";
import { ArrowLeft, Share2, Bookmark, Lightbulb, Clock, Globe, Utensils, History, FlaskConical } from "lucide-react";
import Link from "next/link";

export default function HoneyPermanencePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 pb-20">
      
      {/* ১. হেডার সেকশন (মধুর জন্য সোনালী/অ্যাম্বার থিম) */}
      <div className="bg-amber-500 text-white pt-12 pb-32 px-6 relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <Link href="/general-knowledge" className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition">
            <ArrowLeft className="w-4 h-4" /> সাধারণ জ্ঞানে ফিরে যান
          </Link>
          <span className="px-4 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">
            খাদ্য ও স্বাস্থ্য
          </span>
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            মধুর স্থায়িত্ব: <br /> একটি অবিনশ্বর প্রাকৃতিক দান
          </h1>
          <div className="flex gap-6 text-sm text-white/70 font-medium">
             <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> পড়ার সময়: ৩ মিনিট</span>
             <span className="flex items-center gap-1.5"><Globe className="w-4 h-4" /> ২১ মে, ২০২৪</span>
          </div>
        </div>
        
        {/* ব্যাকগ্রাউন্ড ডেকোরেশন (মৌচাক বা মধুর আবহ) */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/20 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-amber-600/10 rounded-full blur-2xl"></div>
      </div>

      {/* ২. বিস্তারিত কন্টেন্ট */}
      <div className="max-w-3xl mx-auto px-6 -mt-16 relative z-20">
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-gray-100 dark:border-slate-800">
          
          {/* কি-ফ্যাক্ট বক্স */}
          <div className="flex items-start gap-4 p-6 bg-amber-50 dark:bg-amber-950/30 rounded-3xl border border-amber-100 dark:border-amber-900/50 mb-10 shadow-sm">
             <History className="w-8 h-8 text-amber-600 shrink-0" />
             <p className="text-lg font-bold text-amber-900 dark:text-amber-200 leading-relaxed italic">
               "মধু কখনও নষ্ট হয় না। প্রত্নতাত্ত্বিকরা প্রাচীন মিশরের পিরামিডে ৩০০০ বছরের পুরনো মধুর পাত্র খুঁজে পেয়েছেন যা আজও খাওয়ার যোগ্য!"
             </p>
          </div>

          {/* মূল আলোচনা */}
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-foreground/80 leading-relaxed text-justify">
            <p>
              প্রকৃতির অদ্ভুত সব রহস্যের মধ্যে মধুর স্থায়িত্ব অন্যতম। সাধারণ খাবার যেখানে কয়েকদিন বা কয়েক মাস পর নষ্ট হয়ে যায়, সেখানে মধু হাজার বছর ধরে অপরিবর্তিত থাকে। কিন্তু বিজ্ঞান কী বলে? কেন মধু নষ্ট হয় না?
            </p>
            
            <h3 className="text-2xl font-bold text-foreground pt-4 border-b-2 border-amber-500 w-fit mb-4">অবিনশ্বর হওয়ার ৩টি বৈজ্ঞানিক কারণ</h3>
            
            <div className="grid grid-cols-1 gap-6 my-10">
               {/* কারণ ১ */}
               <div className="p-6 bg-gray-50 dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 flex gap-4">
                  <div className="bg-amber-100 dark:bg-amber-900/50 p-3 rounded-xl h-fit">
                    <FlaskConical className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">নিম্ন আর্দ্রতা</h4>
                    <p className="text-sm">মধুতে পানির পরিমাণ খুব কম থাকে। ব্যাকটেরিয়া বা অণুজীব বেঁচে থাকার জন্য যে পানির প্রয়োজন হয়, তা মধুতে না থাকায় তারা বংশবৃদ্ধি করতে পারে না।</p>
                  </div>
               </div>

               {/* কারণ ২ */}
               <div className="p-6 bg-gray-50 dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 flex gap-4">
                  <div className="bg-amber-100 dark:bg-amber-900/50 p-3 rounded-xl h-fit">
                    <Lightbulb className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">অ্যাসিডিক পিএইচ (pH)</h4>
                    <p className="text-sm">মধুর পিএইচ মান সাধারণত ৩ থেকে ৪.৫ এর মধ্যে থাকে (অ্যাসিডিক)। এই অম্লীয় পরিবেশ অধিকাংশ ব্যাকটেরিয়ার জন্য যম স্বরূপ।</p>
                  </div>
               </div>

               {/* কারণ ৩ */}
               <div className="p-6 bg-gray-50 dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 flex gap-4">
                  <div className="bg-amber-100 dark:bg-amber-900/50 p-3 rounded-xl h-fit">
                    <Utensils className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">হাইড্রোজেন পারক্সাইড</h4>
                    <p className="text-sm">মৌমাছিরা যখন মধু তৈরি করে, তখন তাদের শরীর থেকে এক ধরনের এনজাইম নির্গত হয় যা গ্লুকোজের সাথে মিশে হাইড্রোজেন পারক্সাইড তৈরি করে। এটি ব্যাকটেরিয়া বিরোধী হিসেবে কাজ করে।</p>
                  </div>
               </div>
            </div>

            <p>
              প্রাচীন মিশরের ফারাওদের সমাধিতে যখন প্রত্নতাত্ত্বিকরা মধুর পাত্র খুঁজে পান, তখন দেখা যায় মধুর উপরিভাগে একটি আস্তরণ পড়ে আছে। কিন্তু সেই আস্তরণ সরালে দেখা যায় নিচের মধু একদম টাটকা এবং সুস্বাদু!
            </p>

            <div className="p-6 bg-emerald-50 dark:bg-emerald-950/20 rounded-2xl border-l-4 border-emerald-500 mt-8">
               <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold mb-2">
                  <Star className="w-5 h-5" /> স্বাস্থ্য টিপস
               </div>
               <p className="text-sm italic text-foreground/70 leading-relaxed">
                 আসল মধু কখনও জমে শক্ত হয় না (Crystallization হতে পারে, কিন্তু তা নষ্ট হওয়া নয়)। যদি মধুর কোনো পাত্রে অনেকদিন পর দানা দানা জমে যায়, তবে সেটি গরম পানিতে রাখলেই আবার স্বাভাবিক হয়ে আসবে।
               </p>
            </div>
          </div>

          {/* অ্যাকশন বাটনসমূহ */}
          <div className="flex items-center justify-between pt-10 mt-12 border-t border-gray-100 dark:border-slate-800">
             <div className="flex gap-4">
                <button className="flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-amber-700 transition shadow-lg shadow-amber-500/20">
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

// আইকন ইম্পোর্ট ঠিক করার জন্য নিচের ফাংশনটি (যদি আপনার ইম্পোর্টে Star না থাকে)
function Star(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}