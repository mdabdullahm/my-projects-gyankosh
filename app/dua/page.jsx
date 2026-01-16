"use client";
import { useState } from "react";
import { 
  Search, 
  BookMarked, 
  Copy, 
  Share2, 
  Check, 
  ArrowLeft,
  Volume2
} from "lucide-react";
import Link from "next/link";

// দোয়া ডাটাবেস (নমুনা)
const allDuas = [
  {
    id: 1,
    title: "ঘুমানোর দোয়া",
    arabic: "بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي، وَبِكَ أَرْفَعُهُ",
    pronunciation: "বিসমিকা রব্বি ওয়াদাতু জাম্বি, ওয়া বিকা আরফাউহু।",
    meaning: "হে আমার প্রতিপালক! আপনার নামেই আমি শয়ন করলাম এবং আপনার নামেই আমি আবার জাগ্রত হব।",
    category: "প্রতিদিনের দোয়া",
    reference: "সহীহ বুখারী: ৬৩২০"
  },
  {
    id: 2,
    title: "খাওয়ার শুরুর দোয়া",
    arabic: "بِسْمِ اللهِ",
    pronunciation: "বিসমিল্লাহ।",
    meaning: "আল্লাহর নামে (শুরু করছি)।",
    category: "খাবার ও পানীয়",
    reference: "আবু দাউদ: ৩৭৬৭"
  },
  {
    id: 3,
    title: "জ্ঞান বৃদ্ধির দোয়া",
    arabic: "رَّبِّ زِدْنِي عِلْمًا",
    pronunciation: "রব্বি যিদনি ইলমা।",
    meaning: "হে আমার পালনকর্তা! আমার জ্ঞান বৃদ্ধি করে দিন।",
    category: "শিক্ষা ও জ্ঞান",
    reference: "সূরা ত্বহা: ১১৪"
  },
  {
    id: 4,
    title: "বিপদ মুক্তির দোয়া (ইউনুস আ.)",
    arabic: "لَّا إِلَهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",
    pronunciation: "লা ইলাহা ইল্লা আনতা সুবহানাকা ইন্নি কুনতু মিনায যালিমীন।",
    meaning: "আপনি ছাড়া আর কোনো মাবুদ নেই, আপনি অতি পবিত্র। আমি অবশ্যই জালেমদের অন্তর্ভুক্ত ছিলাম।",
    category: "বিপদ ও সমস্যা",
    reference: "সূরা আম্বিয়া: ৮৭"
  }
];

export default function DuaPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedId, setCopiedId] = useState(null);

  // সার্চ ফাংশন
  const filteredDuas = allDuas.filter(dua => 
    dua.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dua.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 pb-20">
      
      {/* ১. হেডার সেকশন */}
      <div className="bg-emerald-600 dark:bg-emerald-900 text-white pt-10 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="flex items-center gap-2 text-emerald-100 hover:text-white mb-6 transition">
            <ArrowLeft className="w-4 h-4" /> ফিরে যান
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 flex items-center gap-3">
            <BookMarked className="w-10 h-10" /> দোয়া ও জিকির
          </h1>
          <p className="text-emerald-100 text-lg">প্রতিদিনের প্রয়োজনীয় মাসনুন দোয়া এবং আমলসমূহ অর্থ ও রেফারেন্সসহ।</p>
        </div>
      </div>

      {/* ২. সার্চ বার */}
      <div className="max-w-4xl mx-auto px-6 -mt-8">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
          <input 
            type="text" 
            placeholder="দোয়া বা ক্যাটাগরি দিয়ে খুঁজুন..." 
            className="w-full py-4 pl-12 pr-6 rounded-2xl bg-white dark:bg-slate-900 border-none shadow-xl focus:ring-2 focus:ring-emerald-500 outline-none dark:text-white"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* ৩. দোয়া লিস্ট গ্রিড */}
      <div className="max-w-4xl mx-auto px-6 mt-12 space-y-8">
        {filteredDuas.length > 0 ? (
          filteredDuas.map((dua) => (
            <div 
              key={dua.id} 
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold rounded-lg">
                  {dua.category}
                </span>
                <div className="flex gap-2">
                   <button 
                    onClick={() => handleCopy(dua.id, `${dua.arabic}\n${dua.pronunciation}\n${dua.meaning}`)}
                    className="p-2 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 rounded-xl text-foreground/40 hover:text-emerald-600 transition"
                   >
                     {copiedId === dua.id ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                   </button>
                   <button className="p-2 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 rounded-xl text-foreground/40 hover:text-emerald-600 transition">
                     <Share2 className="w-5 h-5" />
                   </button>
                </div>
              </div>

              <h2 className="text-xl md:text-2xl font-bold mb-6 text-foreground">{dua.title}</h2>
              
              <div className="space-y-6">
                {/* আরবি টেক্সট */}
                <p className="text-3xl md:text-4xl text-right font-serif leading-loose text-emerald-700 dark:text-emerald-400 mb-4 tracking-wide" dir="rtl">
                  {dua.arabic}
                </p>

                <div className="space-y-4 border-l-4 border-emerald-500 pl-6 py-2">
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest">উচ্চারণ</p>
                    <p className="text-lg text-foreground/80 leading-relaxed font-medium">{dua.pronunciation}</p>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest">অর্থ</p>
                    <p className="text-lg text-foreground/80 leading-relaxed">{dua.meaning}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-50 dark:border-slate-800 flex items-center justify-between text-sm text-foreground/40 font-medium">
                <div className="flex items-center gap-2">
                   <Volume2 className="w-4 h-4" /> অডিও শুনুন (শীঘ্রই আসছে)
                </div>
                <span>রেফারেন্স: {dua.reference}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20 text-foreground/50">
            <p className="text-xl">দুঃখিত, কোনো দোয়া খুঁজে পাওয়া যায়নি।</p>
          </div>
        )}
      </div>

    </div>
  );
}