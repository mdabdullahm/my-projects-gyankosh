"use client";
import { useState, useEffect } from "react";
import { 
  Search, 
  BookMarked, 
  Copy, 
  Share2, 
  Check, 
  ArrowLeft,
  Volume2,
  Square,
  Loader2,
  AlertCircle
} from "lucide-react";
import Link from "next/link";

export default function DuaPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [allDuas, setAllDuas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copiedId, setCopiedId] = useState(null);
  const [playingId, setPlayingId] = useState(null); // অডিও বাজানোর জন্য স্টেট

  // ১. ডাটাবেস থেকে দোয়া লোড করা
  useEffect(() => {
    const fetchDuas = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/duas");
        if (!res.ok) throw new Error("সার্ভার কানেক্ট হতে পারছে না");
        const data = await res.json();
        setAllDuas(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDuas();
  }, []);

  // ২. অডিও প্লে এবং স্টপ করার ফাংশন
  const toggleAudio = (id, text) => {
    if (playingId === id) {
      // যদি একই দোয়া আবার ক্লিক করা হয় তবে বন্ধ হবে
      window.speechSynthesis.cancel();
      setPlayingId(null);
    } else {
      // আগের কোনো অডিও চলতে থাকলে তা বন্ধ করা
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "ar-SA"; // আরবি ভাষা
      utterance.rate = 0.7;    // পড়ার গতি

      // যখন পড়া শেষ হবে তখন বাটন আবার আগের মতো হয়ে যাবে
      utterance.onend = () => {
        setPlayingId(null);
      };

      window.speechSynthesis.speak(utterance);
      setPlayingId(id);
    }
  };

  // ৩. কপি ফাংশন
  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // সার্চ ফিল্টার
  const filteredDuas = allDuas.filter(dua => 
    dua.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dua.category?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 pb-20 transition-colors duration-300">
      
      {/* হেডার */}
      <div className="bg-emerald-600 dark:bg-emerald-900 text-white pt-10 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="flex items-center gap-2 text-emerald-100 hover:text-white mb-6 transition">
            <ArrowLeft className="w-4 h-4" /> ফিরে যান
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 flex items-center gap-3">
            <BookMarked className="w-10 h-10" /> দোয়া ও জিকির
          </h1>
          <p className="text-emerald-100 text-lg">প্রতিদিনের প্রয়োজনীয় দোয়া অর্থ ও অডিওসহ।</p>
        </div>
      </div>

      {/* স্টিকি সার্চ বার */}
      <div className="sticky top-16 z-30 py-4 -mx-6 px-6 bg-gray-50/80 dark:bg-slate-950/80 backdrop-blur-md transition-all">
        <div className="max-w-4xl mx-auto relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
          <input 
            type="text" 
            placeholder="দোয়া বা ক্যাটাগরি দিয়ে খুঁজুন..." 
            className="w-full py-4 pl-12 pr-6 rounded-2xl bg-white dark:bg-slate-900 border-none shadow-xl focus:ring-2 focus:ring-emerald-500 outline-none dark:text-white"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-12 space-y-8">
        
        {loading && (
          <div className="flex flex-col items-center justify-center py-20 text-emerald-600">
             <Loader2 className="w-12 h-12 animate-spin mb-4" />
             <p className="font-bold">লোড হচ্ছে...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-20 text-rose-500">
             <AlertCircle className="w-12 h-12 mx-auto mb-4" />
             <p className="font-bold">{error}</p>
          </div>
        )}

        {!loading && !error && filteredDuas.map((dua) => (
          <div 
            key={dua._id} 
            className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 md:p-10 border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all"
          >
            <div className="flex justify-between items-start mb-8">
              <span className="px-4 py-1.5 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase rounded-full tracking-widest">
                {dua.category}
              </span>
              <div className="flex gap-2">
                <button 
                  onClick={() => handleCopy(dua._id, `${dua.arabic}\n${dua.meaning}`)}
                  className="p-3 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-2xl text-foreground/30 hover:text-emerald-600 transition"
                >
                  {copiedId === dua._id ? <Check className="w-5 h-5 text-emerald-500" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">{dua.title}</h2>
            
            <div className="space-y-8">
              <div className="bg-emerald-50/30 dark:bg-emerald-950/10 p-6 md:p-8 rounded-[2rem] border border-emerald-50 dark:border-emerald-900/20">
                <p className="text-3xl md:text-5xl text-right font-serif leading-[1.8] text-emerald-700 dark:text-emerald-400 mb-2" dir="rtl">
                  {dua.arabic}
                </p>
              </div>

              <div className="space-y-4 border-l-4 border-emerald-500/30 pl-6 md:pl-10">
                <div>
                  <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-1">উচ্চারণ</p>
                  <p className="text-lg text-foreground/80 font-medium">{dua.pronunciation}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-1">অর্থ</p>
                  <p className="text-lg text-foreground/80 italic">"{dua.meaning}"</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-50 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {/* অডিও কন্ট্রোল বাটন */}
              <button 
                onClick={() => toggleAudio(dua._id, dua.arabic)}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all
                  ${playingId === dua._id 
                    ? "bg-rose-100 dark:bg-rose-900/30 text-rose-600 animate-pulse shadow-inner" 
                    : "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 hover:bg-emerald-100 dark:hover:bg-emerald-900/40"
                  }`}
              >
                {playingId === dua._id ? (
                  <><Square className="w-4 h-4 fill-current" /> বন্ধ করুন</>
                ) : (
                  <><Volume2 className="w-5 h-5" /> অডিও শুনুন</>
                )}
              </button>

              <span className="text-[10px] text-foreground/40 font-bold uppercase tracking-widest bg-gray-50 dark:bg-slate-800 px-4 py-2 rounded-xl">
                রেফারেন্স: {dua.reference || "সংগ্রহীত"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}