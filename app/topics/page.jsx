"use client";
import { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  ScrollText, 
  Terminal, 
  Heart, 
  Lightbulb, 
  ArrowRight, 
  Sparkles,
  ChevronRight,
  BookOpen
} from "lucide-react";

// সব ক্যাটাগরির ডাটা
const allCategories = [
  {
    title: "দোয়া ও জিকির",
    description: "প্রতিদিনের প্রয়োজনীয় মাসনুন দোয়া এবং জিকিরসমূহ অর্থ ও আমলসহ।",
    icon: <ScrollText className="w-10 h-10" />,
    count: "২০+ দোয়া",
    color: "bg-emerald-500",
    lightColor: "bg-emerald-50 dark:bg-emerald-950/30",
    textColor: "text-emerald-600 dark:text-emerald-400",
    href: "/dua"
  },
  {
    title: "ওয়েব ও প্রযুক্তি",
    description: "প্রোগ্রামিং দুনিয়ার নতুন সব প্রযুক্তি, কোডিং টিপস এবং আমার লার্নিং প্রসেস।",
    icon: <Terminal className="w-10 h-10" />,
    count: "১৫+ টিপস",
    color: "bg-blue-600",
    lightColor: "bg-blue-50 dark:bg-blue-950/30",
    textColor: "text-blue-600 dark:text-blue-400",
    href: "/tech"
  },
  {
    title: "জীবন গড়ার কথা",
    description: "মননশীলতা এবং জীবনকে সুন্দর করার মতো অনুপ্রেরণামূলক কথা ও উপদেশ।",
    icon: <Heart className="w-10 h-10" />,
    count: "১০+ আলোচনা",
    color: "bg-rose-500",
    lightColor: "bg-rose-50 dark:bg-rose-950/30",
    textColor: "text-rose-600 dark:text-rose-400",
    href: "/lifestyle"
  },
  {
    title: "সাধারণ জ্ঞান",
    description: "পৃথিবী ও প্রকৃতি নিয়ে কিছু চমকপ্রদ তথ্য যা আমাদের জ্ঞান বাড়াতে সাহায্য করবে।",
    icon: <Lightbulb className="w-10 h-10" />,
    count: "১২+ টপিক",
    color: "bg-amber-500",
    lightColor: "bg-amber-50 dark:bg-amber-950/30",
    textColor: "text-amber-600 dark:text-amber-400",
    href: "/general-knowledge"
  }
];

export default function TopicsHub() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = allCategories.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 pb-20">
      
      {/* ১. হেডার সেকশন */}
      <div className="bg-slate-900 text-white pt-16 pb-28 px-6 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-yellow-400" /> জ্ঞানই আলো
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">শিক্ষণীয় বিষয়সমূহ</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            আপনার পছন্দের বিভাগটি বেছে নিন এবং পড়তে শুরু করুন। প্রতিটি বিভাগে রয়েছে গুরুত্বপূর্ণ সব তথ্য ও পাঠ।
          </p>
        </div>
        {/* ডেকোরেশন */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px]"></div>
      </div>

      {/* ২. স্টিকি সার্চ বার */}
      <div className="sticky top-16 z-30 py-4 -mx-6 px-6 bg-gray-50/80 dark:bg-slate-950/80 backdrop-blur-md transition-all">
        <div className="max-w-5xl mx-auto relative group">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
          <input 
            type="text" 
            placeholder="যেকোনো বিষয় খুঁজুন..." 
            className="w-full py-5 pl-16 pr-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 shadow-xl focus:ring-2 focus:ring-blue-500 outline-none dark:text-white"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* ৩. ক্যাটাগরি গ্রিড */}
      <div className="max-w-5xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className="h-full bg-white dark:bg-slate-900 rounded-[3rem] p-10 border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-20 h-20 rounded-3xl ${item.lightColor} ${item.textColor} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    {item.icon}
                  </div>

                  <h2 className="text-3xl font-bold mb-4 text-foreground group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h2>
                  
                  <p className="text-foreground/60 leading-relaxed mb-10 flex-grow text-lg">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-50 dark:border-slate-800">
                    <span className="text-sm font-bold text-foreground/40">{item.count}</span>
                    <div className={`${item.color} text-white p-3 rounded-2xl shadow-lg shadow-current/20 flex items-center gap-2 font-bold px-6 py-3 transition-all group-hover:gap-4`}>
                      পড়ুন <ChevronRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* ব্যাকগ্রাউন্ডে ঝাপসা আইকন */}
                <div className={`absolute -right-10 -bottom-10 opacity-5 dark:opacity-[0.03] group-hover:opacity-10 transition-opacity`}>
                   {item.icon}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}