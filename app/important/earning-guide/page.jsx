"use client";
import React from "react";
import { ArrowLeft, DollarSign, Lightbulb, Share2 } from "lucide-react";
import Link from "next/link";

// কন্টেন্ট ডাটা এখানে রাখা হয়েছে (JSON Format)
const pageContent = {
  header: {
    badge: "গাইডলাইন",
    title: "ওয়েবসাইট থেকে ইনকাম করার উপায়",
    description: "আপনার সাইটে ট্রাফিক বা ভিজিটর আসলে সেটিকে কিভাবে আয়ে রূপান্তর করবেন তার একটি সংক্ষিপ্ত গাইড।"
  },
  incomeMethods: [
    {
      id: 1,
      title: "১. অ্যাড নেটওয়ার্ক (Display Ads)",
      description: "সবচেয়ে জনপ্রিয় হলো Google AdSense। এছাড়া Ezoic বা Adsterra ব্যবহার করতে পারেন যা প্রতি ১০০০ ভিজিটরের জন্য আপনাকে নির্দিষ্ট পরিমাণ টাকা দেবে।"
    },
    {
      id: 2,
      title: "২. পপ-আন্ডার অ্যাডস (Pop-under Ads)",
      description: "ব্যবহারকারী সাইটে যেকোনো জায়গায় ক্লিক করলে একটি নতুন ট্যাব খুলবে এবং বিজ্ঞাপন দেখাবে। এতে ট্রাফিক কম থাকলেও আয় বেশি হয়।"
    },
    {
      id: 3,
      title: "৩. সিপিএ মার্কেটিং (CPA Marketing)",
      description: "আপনার সাইটে ঢোকার পর কেউ যদি কোনো ফ্রি অফারে সাইন-আপ করে, তবে আপনি বড় অংকের কমিশন পাবেন।"
    }
  ],
  advice: {
    title: "বিশেষ পরামর্শ",
    description: "আপনি যদি নিজে কোডিং না জানেন, তবে Codecanyon থেকে তৈরি করা স্ক্রিপ্ট কিনে খুব কম খরচেই এই ধরণের সাইট চালু করতে পারেন। মাত্র ৫-১০ হাজার টাকা খরচ করে একটি 'ভিডিও ডাউনলোডার' বা 'এআই টুল' সাইট তৈরি করা বর্তমানে সম্ভব।"
  }
};

export default function EarningGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 pb-20">
      
      {/* ১. হেডার সেকশন */}
      <div className="bg-amber-600 dark:bg-amber-900 text-white pt-12 pb-32 px-6 relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <Link href="/important" className="flex items-center gap-2 text-amber-100 hover:text-white mb-8 transition">
            <ArrowLeft className="w-4 h-4" /> গুরুত্বপূর্ণ সেকশনে ফিরে যান
          </Link>
          <span className="px-4 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">
            {pageContent.header.badge}
          </span>
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            {pageContent.header.title}
          </h1>
          <p className="text-amber-100 text-lg leading-relaxed">
            {pageContent.header.description}
          </p>
        </div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
      </div>

      {/* ২. বিস্তারিত কন্টেন্ট */}
      <div className="max-w-3xl mx-auto px-6 -mt-16 relative z-20">
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-gray-100 dark:border-slate-800">
          
          <div className="space-y-10">
            {/* আয়ের উপায়গুলো লুপ (Map) করা হয়েছে */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-2 border-b-2 border-amber-500 w-fit pb-1 text-foreground">
                <DollarSign className="w-6 h-6 text-amber-600" /> আয়ের প্রধান উপায়গুলো:
              </h2>
              
              <div className="grid gap-6">
                {pageContent.incomeMethods.map((method) => (
                  <div key={method.id} className="p-6 bg-gray-50 dark:bg-slate-800/50 rounded-3xl border border-gray-100 dark:border-slate-800 transition-all hover:border-amber-500/30 shadow-sm">
                    <h3 className="font-bold text-lg mb-2 text-amber-600 dark:text-amber-400">
                      {method.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed text-sm">
                      {method.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* পরামর্শ সেকশন */}
            <section className="p-8 bg-blue-600 text-white rounded-[2.5rem] shadow-xl relative overflow-hidden group">
               <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Lightbulb className="w-6 h-6" />
                    <h3 className="text-xl font-bold">{pageContent.advice.title}</h3>
                  </div>
                  <p className="leading-relaxed opacity-90 italic">
                    {pageContent.advice.description}
                  </p>
               </div>
               <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            </section>
          </div>

          {/* শেয়ার বাটন */}
          <div className="flex items-center justify-between pt-10 mt-12 border-t border-gray-100 dark:border-slate-800">
             <div className="flex gap-4">
                <button className="flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-amber-700 transition shadow-lg">
                  <Share2 className="w-4 h-4" /> শেয়ার করুন
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}