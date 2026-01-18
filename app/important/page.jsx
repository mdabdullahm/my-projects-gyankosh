"use client";
import React from "react";
import { ArrowLeft, Bell, ShieldAlert, ChevronRight, Star, Info } from "lucide-react";
import Link from "next/link";

// গুরুত্বপূর্ণ বিষয়গুলোর লিস্ট
const importantItems = [
  {
    title: "জরুরি তথ্য: ওয়েবসাইট থেকে ইনকাম",
    desc: "আপনার সাইটে মানুষ ঢুকলেই ইনকাম করার ৩টি প্রধান উপায় সম্পর্কে বিস্তারিত গাইডলাইন।",
    icon: <ShieldAlert className="w-6 h-6" />,
    path: "/important/earning-guide", // এই ফোল্ডারের পেজে যাবে
    color: "text-amber-600 bg-amber-50 dark:bg-amber-950/30"
  },
  {
    title: "সাইট ব্যবহারের গাইডলাইন",
    desc: "কিভাবে দোয়া কপি করবেন বা ডার্ক মুড ব্যবহার করবেন তার নিয়মাবলী।",
    icon: <Info className="w-6 h-6" />,
    path: "/important/usage-guide", // ভবিষ্যতে এই ফোল্ডারটি বানাতে পারবেন
    color: "text-blue-600 bg-blue-50 dark:bg-blue-950/30"
  }
];

export default function ImportantHub() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 pb-20">
      
      {/* হেডার */}
      <div className="bg-amber-600 dark:bg-amber-800 text-white pt-12 pb-24 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-amber-100 hover:text-white mb-8 transition font-medium">
            <ArrowLeft className="w-4 h-4" /> ফিরে যান
          </Link>
          <h1 className="text-3xl md:text-5xl font-black mb-4 flex items-center gap-4">
             <Bell className="w-10 h-10" /> গুরুত্বপূর্ণ তথ্যসমূহ
          </h1>
          <p className="text-amber-100 text-lg max-w-2xl leading-relaxed">
             বিশেষ আপডেট এবং জরুরি তথ্যগুলো আলাদা আলাদা বিভাগে সাজানো হয়েছে।
          </p>
        </div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
      </div>

      {/* কার্ড গ্রিড */}
      <div className="max-w-4xl mx-auto px-6 -mt-12 relative z-20 space-y-6">
        {importantItems.map((item, index) => (
          <Link key={index} href={item.path} className="group block">
            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-gray-100 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-6">
              <div className={`p-4 rounded-2xl ${item.color} shrink-0 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <div className="flex-grow">
                <h2 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-amber-600 transition-colors">
                   {item.title}
                </h2>
                <p className="text-foreground/60 text-sm leading-relaxed">
                   {item.desc}
                </p>
              </div>
              <div className="p-3 rounded-full bg-gray-50 dark:bg-slate-800 text-gray-400 group-hover:bg-amber-600 group-hover:text-white transition-all">
                 <ChevronRight className="w-6 h-6" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}