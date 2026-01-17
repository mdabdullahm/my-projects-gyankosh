"use client";
import React from "react";
import { ArrowLeft, Share2, Bookmark, Lightbulb, Clock, Globe, Waves, Droplets, Compass, Thermometer } from "lucide-react";
import Link from "next/link";

export default function DeadSeaPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 pb-20">
      
      {/* ১. হেডার সেকশন (মৃত সাগরের জন্য টিল/নীলচে-সবুজ থিম) */}
      <div className="bg-teal-600 text-white pt-12 pb-32 px-6 relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <Link href="/general-knowledge" className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition">
            <ArrowLeft className="w-4 h-4" /> সাধারণ জ্ঞানে ফিরে যান
          </Link>
          <span className="px-4 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">
            ভৌগোলিক বিস্ময়
          </span>
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            মৃত সাগর: <br /> পৃথিবীর এক লবণাক্ত রহস্য
          </h1>
          <div className="flex gap-6 text-sm text-white/70 font-medium">
             <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> পড়ার সময়: ৪ মিনিট</span>
             <span className="flex items-center gap-1.5"><Globe className="w-4 h-4" /> জর্ডান ও ইসরায়েল সীমান্ত</span>
          </div>
        </div>
        
        {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400/20 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <Waves className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 rotate-12" />
      </div>

      {/* ২. বিস্তারিত কন্টেন্ট */}
      <div className="max-w-3xl mx-auto px-6 -mt-16 relative z-20">
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-gray-100 dark:border-slate-800">
          
          {/* কি-ফ্যাক্ট বক্স */}
          <div className="flex items-start gap-4 p-6 bg-teal-50 dark:bg-teal-950/30 rounded-3xl border border-teal-100 dark:border-teal-900/50 mb-10 shadow-sm">
             <Droplets className="w-8 h-8 text-teal-600 shrink-0" />
             <p className="text-lg font-bold text-teal-900 dark:text-teal-200 leading-relaxed italic">
               "মৃত সাগরের পানিতে লবণের পরিমাণ এত বেশি যে সেখানে কোনো মাছ বা উদ্ভিদ বাঁচতে পারে না। এমনকি এই পানিতে মানুষ না সাঁতার কাটলেও অনায়াসেই ভেসে থাকতে পারে।"
             </p>
          </div>

          {/* মূল আলোচনা */}
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-foreground/80 leading-relaxed text-justify">
            <p>
              মৃত সাগর বা ডেড সী আসলে কোনো সাগর নয়, এটি একটি লোনা পানির হ্রদ। এটি জর্ডান, ইসরায়েল এবং ফিলিস্তিন সীমান্তে অবস্থিত। এর পানি সাধারণ সমুদ্রের পানির তুলনায় প্রায় ১০ গুণ বেশি লবণাক্ত। আর এই অতিমাত্রার লবণাক্ততাই একে দিয়েছে বিশ্বের অন্যতম আকর্ষণীয় স্থানের মর্যাদা।
            </p>
            
            <h3 className="text-2xl font-bold text-foreground pt-4 border-b-2 border-teal-500 w-fit mb-6">কেন এর নাম 'মৃত' সাগর?</h3>
            <p>
              অতিরিক্ত লবণের কারণে এই হ্রদের পানিতে অক্সিজেন খুব কম থাকে। ফলে কোনো মাছ, গাছপালা কিংবা কোনো জলজ প্রাণী এখানে টিকে থাকতে পারে না। জীবন ধারণের অনুকূল পরিবেশ না থাকায় একে 'মৃত সাগর' বলা হয়। তবে কিছু অণুজীব বা ব্যাকটেরিয়া এখানে টিকে থাকতে সক্ষম।
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10">
               {/* ঘনত্ব ও ভেসে থাকা */}
               <div className="p-6 bg-blue-50 dark:bg-blue-950/20 rounded-2xl border border-blue-100 dark:border-blue-900/50">
                  <Waves className="w-8 h-8 mb-3 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-400">ভেসে থাকার রহস্য</h4>
                  <p className="text-sm">পানির ঘনত্ব মানুষের শরীরের ঘনত্বের চেয়ে অনেক বেশি হওয়ায় আপনি চাইলেও এখানে ডুবে যেতে পারবেন না!</p>
               </div>
               {/* নিচু ভূমি */}
               <div className="p-6 bg-amber-50 dark:bg-amber-950/20 rounded-2xl border border-amber-100 dark:border-amber-900/50">
                  <Compass className="w-8 h-8 mb-3 text-amber-500" />
                  <h4 className="font-bold text-amber-700 dark:text-amber-400">সর্বনিম্ন স্থান</h4>
                  <p className="text-sm">এটি স্থলভাগের ওপর পৃথিবীর সবচেয়ে নিচু স্থান (সমুদ্রপৃষ্ঠ থেকে প্রায় ৪৩০ মিটার নিচে)।</p>
               </div>
            </div>

            <p>
              মৃত সাগরের কাদা এবং লবণে প্রচুর পরিমাণে খনিজ পদার্থ (যেমন: ম্যাগনেসিয়াম, ক্যালসিয়াম ও পটাশিয়াম) রয়েছে। এ কারণে সারা বিশ্বের মানুষ এখানে আসে তাদের চর্মরোগ নিরাময় এবং রূপচর্চার জন্য। এখানকার আবহাওয়া এবং কাদা শরীরের জন্য খুবই উপকারী বলে মনে করা হয়।
            </p>

            <div className="p-6 bg-teal-50 dark:bg-teal-950/20 rounded-2xl border-l-4 border-teal-500 mt-8">
               <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 font-bold mb-2">
                  <Lightbulb className="w-5 h-5" /> আপনি কি জানতেন?
               </div>
               <p className="text-sm italic text-foreground/70 leading-relaxed">
                 মৃত সাগরের তীরে এসে সূর্যস্নান করা নিরাপদ, কারণ এর অবস্থান অনেক নিচু হওয়ায় ক্ষতিকারক অতিবেগুনী রশ্মি (UV rays) সরাসরি পৌঁছাতে পারে না।
               </p>
            </div>
          </div>

          {/* অ্যাকশন বাটনসমূহ */}
          <div className="flex items-center justify-between pt-10 mt-12 border-t border-gray-100 dark:border-slate-800">
             <div className="flex gap-4">
                <button className="flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-teal-700 transition shadow-lg shadow-teal-500/20">
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