"use client";
import React from 'react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Code2, 
  Database, 
  Globe, 
  Layout, 
  Server, 
  Smartphone,
  ChevronRight,
  BookOpen
} from "lucide-react";
import Link from "next/link";

const roadmapData = [
  {
    title: "ধাপ ১: বেসিক শুরু (Fundamentals)",
    icon: <Code2 className="w-6 h-6 text-blue-500" />,
    items: [
      { name: "HTML5", desc: "ওয়েবসাইটের কাঠামো তৈরির জন্য।" },
      { name: "CSS3", desc: "ডিজাইন এবং লেআউট সাজানোর জন্য।" },
      { name: "Responsive Design", desc: "মোবাইল ও ডেক্সটপে সুন্দর দেখানোর জন্য।" }
    ]
  },
  {
    title: "ধাপ ২: প্রোগ্রামিং ল্যাঙ্গুয়েজ",
    icon: <Layout className="w-6 h-6 text-amber-500" />,
    items: [
      { name: "JavaScript (ES6+)", desc: "ওয়েবসাইটকে প্রাণবন্ত বা ইন্টারঅ্যাক্টিভ করার জন্য।" },
      { name: "DOM Manipulation", desc: "ব্রাউজারের এলিমেন্ট কন্ট্রোল করা।" }
    ]
  },
  {
    title: "ধাপ ৩: ফ্রন্টএন্ড ফ্রেমওয়ার্ক",
    icon: <Globe className="w-6 h-6 text-cyan-500" />,
    items: [
      { name: "React.js", desc: "সবচেয়ে জনপ্রিয় লাইব্রেরি।" },
      { name: "Next.js", desc: "আধুনিক ওয়েব তৈরির সেরা ফ্রেমওয়ার্ক (এস ই ও ফ্রেন্ডলি)।" },
      { name: "Tailwind CSS", desc: "দ্রুত এবং কাস্টম ডিজাইনের জন্য।" }
    ]
  },
  {
    title: "ধাপ ৪: ব্যাকএন্ড ও ডেটাবেস",
    icon: <Database className="w-6 h-6 text-emerald-500" />,
    items: [
      { name: "Node.js & Express", desc: "সার্ভার সাইড কোডিং এর জন্য।" },
      { name: "MongoDB / PostgreSQL", desc: "ডেটা সেভ করে রাখার জন্য।" },
      { name: "REST API", desc: "ফ্রন্টএন্ড ও ব্যাকএন্ডের মধ্যে যোগাযোগ।" }
    ]
  },
  {
    title: "ধাপ ৫: টুলস ও ডিপ্লয়মেন্ট",
    icon: <Server className="w-6 h-6 text-purple-500" />,
    items: [
      { name: "Git & GitHub", desc: "কোড ভার্সন কন্ট্রোল করার জন্য।" },
      { name: "Vercel / Netlify", desc: "ওয়েবসাইট অনলাইনে লাইভ করার জন্য।" }
    ]
  }
];

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 pb-20">
      {/* হেডার */}
      <div className="bg-blue-600 dark:bg-blue-900 text-white pt-12 pb-24 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <Link href="/tech" className="flex items-center gap-2 text-blue-100 hover:text-white mb-8 transition">
            <ArrowLeft className="w-4 h-4" /> টেক সেকশনে ফিরে যান
          </Link>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            পূর্ণাঙ্গ ওয়েব <br /> ডেভেলপমেন্ট রোডম্যাপ
          </h1>
          <p className="text-blue-100 text-xl max-w-2xl leading-relaxed">
            শূন্য থেকে প্রফেশনাল ওয়েব ডেভেলপার হওয়ার জন্য আপনাকে ধাপে ধাপে যা যা শিখতে হবে তার একটি বিস্তারিত গাইড।
          </p>
        </div>
        {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-12 relative z-20">
        <div className="space-y-12">
          {roadmapData.map((step, index) => (
            <div key={index} className="relative">
              {/* ধাপের লাইন (Connectors) */}
              {index !== roadmapData.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gray-200 dark:bg-slate-800 hidden md:block"></div>
              )}

              <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-xl border border-gray-100 dark:border-slate-800 hover:border-blue-500/30 transition-all">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-slate-800 flex items-center justify-center shrink-0 shadow-inner">
                    {step.icon}
                  </div>
                  
                  <div className="flex-grow">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                       {step.title}
                    </h2>

                    <div className="grid gap-4">
                      {step.items.map((item, i) => (
                        <div key={i} className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors border border-transparent hover:border-gray-100 dark:hover:border-slate-700">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 shrink-0" />
                          <div>
                            <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200 group-hover:text-blue-600 transition-colors">
                              {item.name}
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* শেষ বার্তা */}
        <div className="mt-20 p-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] text-white text-center shadow-2xl">
           <BookOpen className="w-12 h-12 mx-auto mb-6 opacity-50" />
           <h2 className="text-3xl font-bold mb-4">যাত্রা শুরু হোক আজই!</h2>
           <p className="text-blue-100 mb-8 max-w-lg mx-auto leading-relaxed">
             একদিনে সব শেখা সম্ভব নয়। ছোট ছোট পা ফেলে এগোতে থাকুন, একদিন আপনিও সফল ডেভেলপার হবেন। ইনশাআল্লাহ!
           </p>
           <button className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-black hover:shadow-lg transition active:scale-95">
             প্রথম ধাপ থেকে শুরু করুন
           </button>
        </div>
      </div>
    </div>
  );
}