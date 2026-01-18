"use client";
import { useState, useEffect } from "react"; // useEffect যোগ করা হয়েছে
import { 
  Search, 
  Lightbulb, 
  Globe, 
  ArrowLeft, 
  Share2, 
  Compass, 
  Telescope, 
  Microscope,
  ChevronRight,
  Info
} from "lucide-react";
import Link from "next/link";

export default function GeneralKnowledgePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [gkData, setGkData] = useState([]); // ডাটাবেস থেকে আসা ডাটা রাখার জন্য
  const [loading, setLoading] = useState(true);

  // ১. ডাটাবেস থেকে ডাটা নিয়ে আসা
  useEffect(() => {
    fetch("http://localhost:5000/api/gk")
      .then((res) => res.json())
      .then((data) => {
        setGkData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("ডাটা আনতে সমস্যা হয়েছে:", err);
        setLoading(false);
      });
  }, []);

  // ২. ক্যাটাগরি অনুযায়ী আইকন এবং কালার সেট করার ফাংশন
  const getCategoryStyles = (category) => {
    switch (category) {
      case "প্রাণিজগত":
        return { icon: <Info className="w-6 h-6" />, color: "bg-blue-500/10 text-blue-600" };
      case "ভৌগোলিক":
        return { icon: <Compass className="w-6 h-6" />, color: "bg-amber-500/10 text-amber-600" };
      case "বিজ্ঞান ও প্রকৃতি":
        return { icon: <Microscope className="w-6 h-6" />, color: "bg-emerald-500/10 text-emerald-600" };
      case "মহাকাশ":
        return { icon: <Telescope className="w-6 h-6" />, color: "bg-purple-500/10 text-purple-600" };
      default:
        return { icon: <Lightbulb className="w-6 h-6" />, color: "bg-gray-500/10 text-gray-600" };
    }
  };

  // ৩. সার্চ ফিল্টারিং
  const filteredGK = gkData.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 pb-20">
      
      {/* হেডার সেকশন */}
      <div className="bg-amber-500 dark:bg-amber-900 text-white pt-10 pb-24 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <Link href="/" className="flex items-center gap-2 text-amber-100 hover:text-white mb-6 transition">
            <ArrowLeft className="w-4 h-4" /> ফিরে যান
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 flex items-center gap-3">
            <Lightbulb className="w-10 h-10 fill-amber-300 dark:fill-amber-500" /> সাধারণ জ্ঞান
          </h1>
          <p className="text-amber-100 text-lg max-w-2xl leading-relaxed">
            পৃথিবী, মহাকাশ এবং প্রকৃতি নিয়ে কিছু চমকপ্রদ ও অজানা তথ্য যা আপনার জ্ঞানের পরিধি বাড়াতে সাহায্য করবে।
          </p>
        </div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
      </div>

      {/* স্টিকি সার্চ বার */}
      <div className="sticky top-16 z-30 py-4 -mx-6 px-6 bg-gray-50/80 dark:bg-slate-950/80 backdrop-blur-md transition-all">
        <div className="max-w-4xl mx-auto relative group">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-amber-500 transition-colors" />
          <input 
            type="text" 
            placeholder="যেকোনো তথ্য বা বিষয় খুঁজুন..." 
            className="w-full py-5 pl-16 pr-8 rounded-3xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 shadow-xl focus:ring-2 focus:ring-amber-500 outline-none dark:text-white transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* কন্টেন্ট লিস্ট */}
      <div className="max-w-4xl mx-auto px-6 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {loading ? (
          <div className="col-span-full text-center py-20 text-amber-600 font-bold animate-pulse">
            ডাটা লোড হচ্ছে... একটু অপেক্ষা করুন।
          </div>
        ) : filteredGK.length > 0 ? (
          filteredGK.map((item) => {
            const styles = getCategoryStyles(item.category); // স্টাইল নিয়ে আসা
            return (
              <div 
                key={item._id} // MongoDB-তে id এর বদলে _id থাকে
                className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:border-amber-500/50 transition-all duration-300 flex flex-col group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-4 rounded-2xl ${styles.color} group-hover:scale-110 transition-transform`}>
                    {styles.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-foreground/40 bg-gray-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>

                <h2 className="text-xl font-bold mb-4 text-foreground group-hover:text-amber-600 transition-colors">
                  {item.title}
                </h2>
                
                <p className="text-foreground/60 leading-relaxed mb-8 flex-grow">
                  {item.info}
                </p>

                <div className="pt-6 border-t border-gray-50 dark:border-slate-800 flex items-center justify-between">
                  {/* এখানে স্লাগ দিয়ে ডাইনামিক লিঙ্ক তৈরি করা হয়েছে */}
                  <Link href={`/general-knowledge/${item.slug}`} className="flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400 hover:gap-3 transition-all">
                    বিস্তারিত জানুন <ChevronRight className="w-4 h-4" />
                  </Link>
                  <button className="p-2 rounded-full hover:bg-amber-50 dark:hover:bg-amber-950/30 text-foreground/30 hover:text-amber-600 transition">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-span-full text-center py-20 text-foreground/40 italic">
             কোনো তথ্য খুঁজে পাওয়া যায়নি...
          </div>
        )}
      </div>

      {/* নিচের কৌতূহলী বার্তা */}
      <div className="max-w-2xl mx-auto px-6 mt-24 text-center">
        <div className="w-16 h-1 bg-amber-200 dark:bg-amber-900 mx-auto mb-8 rounded-full"></div>
        <p className="text-lg font-medium text-foreground/50 leading-relaxed">
          "জ্ঞানই শক্তি। প্রতিদিন একটি করে নতুন তথ্য শেখা আমাদের চিন্তাভাবনাকে আরও প্রসারিত করে।"
        </p>
      </div>
    </div>
  );
}