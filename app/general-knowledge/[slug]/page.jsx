"use client";
import React from "react";
import { useParams } from "next/navigation";
import { ArrowLeft, Share2, Bookmark, Lightbulb, Clock, Globe } from "lucide-react";
import Link from "next/link";

// ডাটাবেস (অবশ্যই slug থাকতে হবে)
const gkData = [
  {
    id: 1,
    slug: "blue-whale-heart",
    title: "নীল তিমির হৃদপিণ্ড",
    info: "একটি নীল তিমির হৃদপিণ্ড একটি আস্ত গাড়ির সমান বড় হতে পারে!",
    details: "নীল তিমি পৃথিবীর বৃহত্তম প্রাণী। এদের হৃদপিণ্ড এতটাই বড় যে একজন মানুষ এর ধমনীর ভেতর দিয়ে অনায়াসে সাতার কাটতে পারবে...",
    category: "প্রাণিজগত",
    date: "১৮ মে, ২০২৪",
    readTime: "২ মিনিট",
    color: "bg-blue-600"
  },
  {
    id: 2,
    slug: "everest-height",
    title: "এভারেস্ট কি সত্যিই সর্বোচ্চ?",
    info: "পৃথিবীর কেন্দ্র থেকে পরিমাপ করলে ইকুয়েডরের 'চিম্বোরাজো' পর্বতটি মহাকাশের সবচেয়ে কাছে।",
    details: "মাউন্ট এভারেস্ট সমুদ্রপৃষ্ঠ থেকে সর্বোচ্চ হলেও মহাকাশের সবচেয়ে কাছে থাকা বিন্দুটি আসলে চিম্বোরাজো পর্বত...",
    category: "ভৌগোলিক",
    date: "১৯ মে, ২০২৪",
    readTime: "৩ মিনিট",
    color: "bg-amber-600"
  }
];

export default function GKDetailPage() {
  const { slug } = useParams(); // এখন আমরা slug এক্সেস করছি
  
  // slug দিয়ে ডাটা খুঁজে বের করা
  const item = gkData.find((d) => d.slug === slug);

  if (!item) return <div className="p-20 text-center">এই তথ্যটি খুঁজে পাওয়া যায়নি!</div>;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 pb-20">
      {/* হেডার সেকশন */}
      <div className={`${item.color} text-white pt-12 pb-32 px-6 relative overflow-hidden`}>
        <div className="max-w-3xl mx-auto relative z-10">
          <Link href="/general-knowledge" className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition">
            <ArrowLeft className="w-4 h-4" /> সাধারণ জ্ঞানে ফিরে যান
          </Link>
          <span className="px-4 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">
            {item.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            {item.title}
          </h1>
          <div className="flex gap-6 text-sm text-white/70 font-medium">
             <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> পড়ার সময়: {item.readTime}</span>
             <span className="flex items-center gap-1.5"><Globe className="w-4 h-4" /> {item.date}</span>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
      </div>

      {/* কন্টেন্ট বডি */}
      <div className="max-w-3xl mx-auto px-6 -mt-16 relative z-20">
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-gray-100 dark:border-slate-800">
          
          <div className="flex items-start gap-4 p-6 bg-amber-50 dark:bg-amber-950/30 rounded-3xl border border-amber-100 dark:border-amber-900/50 mb-10">
             <Lightbulb className="w-8 h-8 text-amber-500 shrink-0" />
             <p className="text-lg font-bold text-amber-900 dark:text-amber-200 leading-relaxed italic">
               "{item.info}"
             </p>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-xl font-bold mb-4">বিস্তারিত তথ্য:</h3>
            <p className="text-lg text-foreground/70 leading-relaxed text-justify">
              {item.details}
            </p>
          </div>

          <div className="flex items-center justify-between pt-10 mt-10 border-t border-gray-100 dark:border-slate-800">
             <div className="flex gap-4">
                <button className="flex items-center gap-2 bg-gray-50 dark:bg-slate-800 text-foreground/60 px-6 py-3 rounded-2xl font-bold text-sm hover:bg-gray-100 transition">
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