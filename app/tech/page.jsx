"use client";
import { useState } from "react";
import { 
  Search, 
  Code2, 
  Terminal, 
  Cpu, 
  ArrowLeft, 
  Clock, 
  Calendar,
  ChevronRight,
  ExternalLink,
  Map,
  Zap,
  Youtube,
  GraduationCap,
  BookOpen
} from "lucide-react";
import Link from "next/link";

// ১. আপনার কাঙ্ক্ষিত বিশেষ গাইডলাইন কার্ড দুটি
const guidelines = [
  {
    id: "roadmap",
    title: "ওয়েব ডেভেলপার হতে গেলে যা যা শিখতে হবে",
    description: "শুরু থেকে শেষ পর্যন্ত একটি পূর্ণাঙ্গ রোডম্যাপ। HTML, CSS থেকে শুরু করে Next.js এবং ডেটাবেস পর্যন্ত ধাপে ধাপে শেখার তালিকা।",
    icon: <Map className="w-10 h-10" />,
    color: "bg-blue-600",
    textColor: "text-white",
    tags: ["রোডম্যাপ", "গাইডলাইন"]
  },
  {
    id: "learning-tips",
    title: "কিভাবে দ্রুত শিখবেন এবং আয়ত্ত করবেন?",
    description: "কোথা থেকে শিখলে ভালো হবে (ফ্রি রিসোর্স), ভিডিও দেখার সঠিক নিয়ম এবং শেখা বিষয়গুলো ভুলে না যাওয়ার কার্যকরী কৌশল।",
    icon: <Zap className="w-10 h-10" />,
    color: "bg-emerald-600",
    textColor: "text-white",
    tags: ["লার্নিং টিপস", "রিসোর্স"]
  }
];

// ২. সাধারণ টেক পোস্ট ডাটা
const techPosts = [
  {
    id: 1,
    title: "Tailwind CSS v4-এ নতুন কী কী থাকছে?",
    description: "টেইলউইন্ডের নতুন ভার্সনে ইঞ্জিন পরিবর্তন করা হয়েছে। এটি এখন আগের চেয়ে অনেক বেশি দ্রুত এবং কনফিগার করা সহজ।",
    category: "Tailwind CSS",
    date: "মে ২০, ২০২৪",
    readTime: "৫ মিনিট",
    icon: <Code2 className="w-6 h-6" />,
    color: "text-blue-500 bg-blue-50 dark:bg-blue-950/30",
    tags: ["CSS", "v4"]
  },
  {
    id: 2,
    title: "রিঅ্যাক্ট ১৯: নতুন হুকস ও ফিচার",
    description: "রিঅ্যাক্ট ১৯ ভার্সনে আসা নতুন পরিবর্তনগুলো নিয়ে সংক্ষেপে আলোচনা যা আপনার জানা জরুরি।",
    category: "React",
    date: "মে ১৮, ২০২৪",
    readTime: "৬ মিনিট",
    icon: <Cpu className="w-6 h-6" />,
    color: "text-cyan-500 bg-cyan-50 dark:bg-cyan-950/30",
    tags: ["React19", "Frontend"]
  }
];

export default function TechPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = techPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 pb-20">
      
      {/* হেডার সেকশন */}
      <div className="bg-blue-600 dark:bg-blue-900 text-white pt-10 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="flex items-center gap-2 text-blue-100 hover:text-white mb-6 transition">
            <ArrowLeft className="w-4 h-4" /> ফিরে যান
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 flex items-center gap-3">
            <Terminal className="w-10 h-10" /> ওয়েব ও প্রযুক্তি
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            আধুনিক টেকনোলজি এবং ওয়েব ডেভেলপমেন্টের পূর্ণাঙ্গ গাইডলাইন ও আমার লার্নিং নোটস।
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-12">
        {/* বিশেষ গাইডলাইন কার্ড (আপনার বলা সেই দুইটা) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {guidelines.map((guide) => (
            <div 
              key={guide.id} 
              className={`${guide.color} ${guide.textColor} p-8 md:p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group transition-all hover:scale-[1.02] cursor-pointer`}
            >
              <div className="relative z-10">
                <div className="bg-white/20 w-20 h-20 rounded-3xl flex items-center justify-center mb-8">
                  {guide.icon}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">{guide.title}</h2>
                <p className="text-white/80 mb-8 leading-relaxed text-lg">{guide.description}</p>
                
                <div className="flex items-center gap-4">
                  <Link href="/tech/roadmap">
                  <div className="bg-white text-gray-900 px-6 py-3 rounded-2xl font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    পূর্ণাঙ্গ গাইড দেখুন <ArrowLeft className="w-4 h-4 rotate-180" />
                  </div>
                  </Link>
                </div>
              </div>
              {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
              <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          ))}
        </div>

        {/* সার্চ বার */}
        <div className="relative mb-12">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="আর্টিকেল বা টপিক খুঁজুন..." 
            className="w-full py-5 pl-16 pr-8 rounded-[2rem] bg-white dark:bg-slate-900 border-none shadow-xl focus:ring-2 focus:ring-blue-500 outline-none dark:text-white"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* সাধারণ টেক পোস্ট গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <div key={post.id} className="group bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-gray-100 dark:border-slate-800 hover:border-blue-500/50 transition-all duration-300 shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <div className={`p-4 rounded-2xl ${post.color}`}>{post.icon}</div>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{post.category}</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{post.title}</h3>
              <p className="text-foreground/60 text-sm mb-6 leading-relaxed">{post.description}</p>
              <div className="flex items-center justify-between pt-6 border-t border-gray-50 dark:border-slate-800">
                <div className="flex gap-4 text-[10px] text-foreground/40 font-bold uppercase tracking-wider">
                   <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                   <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                </div>
                <div className="p-2 rounded-full bg-blue-600 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* রিসোর্স লিংক সেকশন */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="p-8 rounded-3xl bg-gray-100 dark:bg-slate-900 flex flex-col items-center text-center">
              <Youtube className="w-10 h-10 text-red-500 mb-4" />
              <h4 className="font-bold mb-2">ইউটিউব রিসোর্স</h4>
              <p className="text-xs text-foreground/50">সেরা চ্যানেলের তালিকা</p>
           </div>
           <div className="p-8 rounded-3xl bg-gray-100 dark:bg-slate-900 flex flex-col items-center text-center">
              <GraduationCap className="w-10 h-10 text-emerald-500 mb-4" />
              <h4 className="font-bold mb-2">ফ্রি কোর্স</h4>
              <p className="text-xs text-foreground/50">ইন্টারেক্টিভ লার্নিং প্ল্যাটফর্ম</p>
           </div>
           <div className="p-8 rounded-3xl bg-gray-100 dark:bg-slate-900 flex flex-col items-center text-center">
              <BookOpen className="w-10 h-10 text-blue-500 mb-4" />
              <h4 className="font-bold mb-2">ডকুমেন্টেশন</h4>
              <p className="text-xs text-foreground/50">অফিসিয়াল ম্যানুয়ালসমূহ</p>
           </div>
        </div>
      </div>
    </div>
  );
}