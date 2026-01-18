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

// Vercel-এ বিল্ড এরর ফিক্স করার জন্য এটি অত্যন্ত জরুরি
export const dynamic = 'force-dynamic';

export default function DuaPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [allDuas, setAllDuas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copiedId, setCopiedId] = useState(null);
  const [playingId, setPlayingId] = useState(null);

  // ১. এপিআই থেকে দোয়া লোড করা
  useEffect(() => {
    const fetchDuas = async () => {
      console.log("🌐 এপিআই থেকে ডাটা আনার চেষ্টা করছি...");
      try {
        // Vercel এর জন্য রিলেটিভ পাথ ব্যবহার করা হয়েছে
        const res = await fetch("/api/duas"); 
        if (!res.ok) throw new Error("সার্ভার থেকে সঠিক সাড়া পাওয়া যায়নি।");
        const data = await res.json();
        
        if (Array.isArray(data)) {
          setAllDuas(data);
          console.log("✅ ডাটা চলে এসেছে, সংখ্যা:", data.length);
        } else {
          throw new Error("ডাটা ফরম্যাট সঠিক নয়।");
        }
      } catch (err) {
        console.error("❌ এরর:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDuas();
  }, []);

  // ২. অডিও প্লে এবং স্টপ করার ফাংশন (Speech API)
  const toggleAudio = (id, text) => {
    if (playingId === id) {
      window.speechSynthesis.cancel();
      setPlayingId(null);
    } else {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "ar-SA"; // আরবি
      utterance.rate = 0.7;    // পড়ার গতি
      utterance.onend = () => setPlayingId(null);
      window.speechSynthesis.speak(utterance);
      setPlayingId(id);
    }
  };

  // ৩. কপি করার ফাংশন
  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // ৪. সার্চ ফিল্টার লজিক
  const filteredDuas = allDuas.filter(dua => 
    dua.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dua.category?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 pb-20 transition-colors duration-300">
      
      {/* হেডার */}
      <div className="bg-emerald-600 dark:bg-emerald-900 text-white pt-10 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="flex items-center gap-2 text-emerald-100 hover:text-white mb-6 transition font-bold">
            <ArrowLeft className="w-4 h-4" /> ফিরে যান
          </Link>
          <h1 className="text-3xl md:text-5xl font-black mb-4 flex items-center gap-3 tracking-tight">
            <BookMarked className="w-10 h-10" /> দোয়া ও জিকির
          </h1>
          <p className="text-emerald-100 text-lg">প্রতিদিনের প্রয়োজনীয় মাসনুন দোয়া এবং আমলসমূহ অর্থ ও অডিওসহ।</p>
        </div>
      </div>

      {/* স্টিকি সার্চ বার */}
      <div className="sticky top-16 z-30 py-4 -mx-6 px-6 bg-gray-50/80 dark:bg-slate-950/80 backdrop-blur-md transition-all border-b border-gray-100 dark:border-slate-800/50">
        <div className="max-w-4xl mx-auto relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
          <input 
            type="text" 
            placeholder="দোয়া বা ক্যাটাগরি দিয়ে খুঁজুন..." 
            className="w-full py-4 pl-12 pr-6 rounded-2xl bg-white dark:bg-slate-900 border-none shadow-xl focus:ring-2 focus:ring-emerald-500 outline-none dark:text-white transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-12 space-y-8">
        
        {/* লোডিং এর এনিমেশন */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20 text-emerald-600">
             <Loader2 className="w-12 h-12 animate-spin mb-4" />
             <p className="font-bold uppercase tracking-widest text-xs">দোয়াগুলো লোড হচ্ছে...</p>
          </div>
        )}

        {/* এরর মেসেজ */}
        {error && (
          <div className="text-center py-20 text-rose-500 bg-white dark:bg-slate-900 rounded-[3rem] border border-dashed border-rose-200 p-10">
             <AlertCircle className="w-12 h-12 mx-auto mb-4" />
             <p className="font-bold">দুঃখিত: {error}</p>
             <button onClick={() => window.location.reload()} className="mt-4 px-6 py-2 bg-rose-500 text-white rounded-full text-sm font-bold shadow-lg">আবার চেষ্টা করুন</button>
          </div>
        )}

        {/* দোয়া কার্ড লিস্ট */}
        {!loading && !error && (
          filteredDuas.length > 0 ? (
            filteredDuas.map((dua) => (
              <div 
                key={dua._id} 
                className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 md:p-10 border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-8">
                  <span className="px-4 py-1.5 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase rounded-full tracking-widest border border-emerald-100 dark:border-emerald-800/50 shadow-sm">
                    {dua.category}
                  </span>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleCopy(dua._id, `${dua.title}\n${dua.arabic}\n${dua.meaning}`)}
                      className="p-3 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-2xl text-foreground/30 hover:text-emerald-600 transition"
                      title="কপি করুন"
                    >
                      {copiedId === dua._id ? <Check className="w-5 h-5 text-emerald-500" /> : <Copy className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground leading-tight tracking-tight">{dua.title}</h2>
                
                <div className="space-y-8">
                  {/* আরবি এলাকা */}
                  <div className="bg-emerald-50/20 dark:bg-emerald-950/10 p-6 md:p-10 rounded-[2rem] border border-emerald-50 dark:border-emerald-900/10">
                    <p className="text-3xl md:text-5xl text-right font-serif leading-[1.8] text-emerald-800 dark:text-emerald-400 mb-2 tracking-wide" dir="rtl">
                      {dua.arabic}
                    </p>
                  </div>

                  <div className="space-y-4 border-l-4 border-emerald-500/20 pl-6 md:pl-10">
                    <div>
                      <p className="text-[10px] font-black text-emerald-600/50 dark:text-emerald-500/50 uppercase tracking-[0.2em] mb-1">উচ্চারণ</p>
                      <p className="text-lg md:text-xl text-foreground/80 font-medium leading-relaxed">{dua.pronunciation}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-emerald-600/50 dark:text-emerald-500/50 uppercase tracking-[0.2em] mb-1">বাংলা অর্থ</p>
                      <p className="text-lg md:text-xl text-foreground/80 leading-relaxed italic">"{dua.meaning}"</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-gray-50 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  
                  {/* অডিও প্লে/স্টপ বাটন */}
                  <button 
                    onClick={() => toggleAudio(dua._id, dua.arabic)}
                    className={`flex items-center gap-2 px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-md active:scale-95
                      ${playingId === dua._id 
                        ? "bg-rose-100 dark:bg-rose-900/40 text-rose-600 animate-pulse" 
                        : "bg-emerald-600 text-white hover:bg-emerald-700"
                      }`}
                  >
                    {playingId === dua._id ? (
                      <><Square className="w-4 h-4 fill-current" /> বন্ধ করুন</>
                    ) : (
                      <><Volume2 className="w-5 h-5" /> অডিও শুনুন</>
                    )}
                  </button>

                  <span className="text-[10px] text-foreground/30 font-bold uppercase tracking-widest bg-gray-50 dark:bg-slate-800/50 px-5 py-2 rounded-xl border border-gray-100 dark:border-slate-800">
                    রেফারেন্স: {dua.reference || "সংগ্রহীত"}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-24 text-foreground/20 italic">
              <Search className="w-16 h-16 mx-auto mb-4 opacity-10" />
              <p className="text-xl font-bold">দুঃখিত, কোনো দোয়া খুঁজে পাওয়া যায়নি।</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}