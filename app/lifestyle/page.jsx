"use client";
import { useState } from "react";
import { 
  Search, 
  Heart, 
  Quote, 
  ArrowLeft, 
  Share2, 
  Sparkles, 
  Flower2, 
  Moon,
  ChevronRight,
  Bookmark
} from "lucide-react";
import Link from "next/link";

// জীবন গড়ার কথার ডাটা (নমুনা)
const lifePosts = [
  {
    id: 1,
    title: "ধৈর্যই সকল সাফল্যের মূল চাবিকাঠি",
    content: "জীবন সবসময় আপনার পরিকল্পনা মতো চলবে না। কঠিন সময়ে শান্ত থাকাই হলো প্রকৃত শক্তি। মনে রাখবেন, অন্ধকারের পরেই ভোরের আলো আসে।",
    category: "অনুপ্রেরণা",
    author: "ব্যক্তিগত নোট",
    tags: ["ধৈর্য", "সাফল্য", "জীবন"]
  },
  {
    id: 2,
    title: "প্রতিদিনের ছোট ছোট অভ্যাস",
    content: "বড় পরিবর্তন একদিনে আসে না। প্রতিদিনের ছোট ছোট ভালো অভ্যাসগুলোই দীর্ঘমেয়াদে আমাদের জীবনকে বদলে দেয়। আজ থেকেই শুরু করুন।",
    category: "অভ্যাস",
    author: "মননশীলতা",
    tags: ["উৎপাদনশীলতা", "পরিবর্তন"]
  },
  {
    id: 3,
    title: "ক্ষমা করার মানসিকতা",
    content: "অন্যকে ক্ষমা করা মানে এই নয় যে আপনি দুর্বল, বরং এটি আপনার মনের বিশালতা প্রকাশ করে। ঘৃণা মনের বোঝা বাড়ায়, ক্ষমা মুক্তি দেয়।",
    category: "উপদেশ",
    author: "মানসিক শান্তি",
    tags: ["ক্ষমা", "শান্তি"]
  },
  {
    id: 4,
    title: "সময়ের মূল্য বুঝতে শিখুন",
    content: "সময় এমন এক সম্পদ যা একবার হারিয়ে গেলে আর ফিরে পাওয়া যায় না। আজকের কাজ আজই শেষ করার চেষ্টা করুন।",
    category: "উৎপাদনশীলতা",
    author: "পরামর্শ",
    tags: ["সময়", "পরিশ্রম"]
  }
];

export default function LifestylePage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = lifePosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 pb-20">
      
      {/* ১. হেডার সেকশন */}
      <div className="bg-rose-500 dark:bg-rose-900 text-white pt-10 pb-24 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <Link href="/" className="flex items-center gap-2 text-rose-100 hover:text-white mb-6 transition">
            <ArrowLeft className="w-4 h-4" /> ফিরে যান
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 flex items-center gap-3">
            <Heart className="w-10 h-10 fill-current" /> জীবন গড়ার কথা
          </h1>
          <p className="text-rose-100 text-lg max-w-2xl leading-relaxed">
            মননশীলতা এবং জীবনকে সুন্দর করার মতো ছোট ছোট অনুপ্রেরণামূলক কথা, উপদেশ এবং আমার ব্যক্তিগত উপলব্ধির সংকলন।
          </p>
        </div>
        {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
      </div>

      {/* ২. স্টিকি সার্চ বার */}
      <div className="sticky top-16 z-30 py-4 -mx-6 px-6 bg-gray-50/80 dark:bg-slate-950/80 backdrop-blur-md transition-all">
        <div className="max-w-4xl mx-auto relative group">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-rose-500 transition-colors" />
          <input 
            type="text" 
            placeholder="বিষয় বা অনুপ্রেরণা খুঁজুন..." 
            className="w-full py-5 pl-16 pr-8 rounded-3xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 shadow-xl focus:ring-2 focus:ring-rose-500 outline-none dark:text-white transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* ৩. কন্টেন্ট লিস্ট */}
      <div className="max-w-4xl mx-auto px-6 mt-12 space-y-8">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div 
              key={post.id} 
              className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-10 border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all relative group overflow-hidden"
            >
              {/* কোট আইকন ব্যাকগ্রাউন্ডে */}
              <Quote className="absolute top-10 right-10 w-24 h-24 text-rose-500/5 -rotate-12 group-hover:scale-110 transition-transform" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-4 py-1.5 bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 text-xs font-bold rounded-full uppercase tracking-widest">
                    {post.category}
                  </span>
                  <div className="flex gap-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="text-[10px] text-gray-400 dark:text-gray-500 font-bold">#{tag}</span>
                    ))}
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground leading-tight group-hover:text-rose-600 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-lg text-foreground/70 leading-relaxed mb-8 italic">
                  "{post.content}"
                </p>

                <div className="flex items-center justify-between pt-8 border-t border-gray-50 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-rose-100 dark:bg-rose-900/40 flex items-center justify-center">
                       <Sparkles className="w-5 h-5 text-rose-500" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground/80">{post.author}</p>
                      <p className="text-[10px] text-foreground/40 font-medium">পড়া শেষ করতে ২ মিনিট</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="p-3 rounded-full hover:bg-rose-50 dark:hover:bg-rose-950/30 text-foreground/30 hover:text-rose-600 transition">
                      <Bookmark className="w-5 h-5" />
                    </button>
                    <button className="p-3 rounded-full hover:bg-rose-50 dark:hover:bg-rose-950/30 text-foreground/30 hover:text-rose-600 transition">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20 text-foreground/40">
             <Flower2 className="w-12 h-12 mx-auto mb-4 opacity-20" />
             <p className="text-xl italic">এখনও কোনো কথা যুক্ত করা হয়নি...</p>
          </div>
        )}
      </div>

      {/* ৪. ছোট উদ্ধৃতি সেকশন (নিচে) */}
      <div className="max-w-2xl mx-auto px-6 mt-24 text-center">
        <Moon className="w-8 h-8 mx-auto mb-6 text-rose-300 dark:text-rose-700" />
        <p className="text-xl font-medium text-foreground/60 leading-relaxed">
          "জীবন মানেই তো শেখা, ভুল থেকে শিক্ষা নেওয়া আর প্রতিদিন নিজেকে একটু একটু করে আরও ভালো মানুষ হিসেবে গড়ে তোলা।"
        </p>
      </div>

    </div>
  );
}