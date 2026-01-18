"use client";
import { useState, useEffect } from "react";
import { 
  Search, Lock, Unlock, Key, Eye, EyeOff, 
  Terminal, ArrowLeft, Clock, Calendar,
  ChevronRight, Map, Zap, Youtube,
  GraduationCap, BookOpen, Loader2
} from "lucide-react";
import Link from "next/link";

export default function StrictlyProtectedTechPage() {
  // ১. অথেনটিকেশন স্টেট (প্রতিবার রিলোড বা নেভিগেশনে এটি false হয়ে যাবে)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState("");

  // ২. ডাটা স্টেট
  const [techPosts, setTechPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  // আগের লাইনটি পরিবর্তন করে এটি দিন
const SECRET_KEY = process.env.NEXT_PUBLIC_TECH_PASSWORD;// আপনার পাসওয়ার্ড এখানে সেট করুন

  // ৩. ডাটাবেস থেকে ডাটা নিয়ে আসার ফাংশন
  const fetchTechData = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/tech");
      const data = await res.json();
      setTechPosts(data);
    } catch (error) {
      console.error("ডাটা আনতে সমস্যা:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === SECRET_KEY) {
      setIsAuthenticated(true);
      fetchTechData(); // পাসওয়ার্ড সঠিক হলে ডাটা লোড হবে
      setAuthError("");
    } else {
      setAuthError("ভুল পাসওয়ার্ড! আবার চেষ্টা করুন।");
      setPassword("");
    }
  };

  // সার্চ ফিল্টার
  const filteredPosts = techPosts.filter(post => 
    post.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // --- পাসওয়ার্ড গেট UI (লগইন না করা পর্যন্ত এটি দেখাবে) ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-slate-950 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-[3rem] p-10 shadow-2xl border border-gray-100 dark:border-slate-800 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner">
              <Lock className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-black mb-2 text-foreground">সুরক্ষিত জোন</h2>
            <p className="text-foreground/50 text-sm mb-10 leading-relaxed italic">
              "প্রতিবার প্রবেশের জন্য পাসওয়ার্ড আবশ্যক"
            </p>
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="relative group">
                <Key className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <input 
                  type={showPassword ? "text" : "password"}
                  placeholder="সিক্রেট পাসওয়ার্ড..."
                  className="w-full py-4 pl-12 pr-12 rounded-2xl bg-gray-50 dark:bg-slate-800 border-none outline-none focus:ring-2 focus:ring-blue-500 transition-all font-mono"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoFocus
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-500 transition">
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              {authError && <p className="text-rose-500 text-xs font-bold animate-pulse">{authError}</p>}

              <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-3 active:scale-95">
                প্রবেশ করুন <ChevronRight className="w-5 h-5" />
              </button>
            </form>

            <Link href="/" className="inline-block mt-8 text-xs font-bold text-foreground/30 hover:text-blue-600 transition uppercase tracking-widest">
                হোম পেজে ফিরে যান
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // --- মূল কন্টেন্ট UI (পাসওয়ার্ড দেওয়ার পর যা দেখাবে) ---
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 pb-20 animate-in fade-in duration-500">
      
      {/* হেডার */}
      <div className="bg-blue-600 dark:bg-blue-900 text-white pt-10 pb-24 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="flex items-center gap-2 text-blue-100 hover:text-white transition font-bold">
              <ArrowLeft className="w-4 h-4" /> ফিরে যান
            </Link>
            <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
               <Unlock className="w-3 h-3" /> এক্সেস গ্রান্টেড
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-4 flex items-center gap-3">
            <Terminal className="w-10 h-10" /> ওয়েব ও প্রযুক্তি
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            আধুনিক টেকনোলজি এবং ওয়েব ডেভেলপমেন্টের পূর্ণাঙ্গ গাইডলাইন ও আমার লার্নিং নোটস।
          </p>
        </div>
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* রোডম্যাপ ও লার্নিং কার্ডস */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 -mt-12 relative z-20">
            <Link href="/tech/roadmap" className="block group">
                <div className="bg-blue-700 text-white p-8 rounded-[3rem] shadow-2xl relative overflow-hidden transition-all hover:scale-[1.01]">
                   <div className="relative z-10">
                      <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-inner"><Map className="w-8 h-8" /></div>
                      <h2 className="text-2xl font-bold mb-3">ডেভেলপার রোডম্যাপ</h2>
                      <p className="text-white/80 mb-6 text-sm">শুরু থেকে শেষ পর্যন্ত যা যা শিখতে হবে তার বিস্তারিত তালিকা।</p>
                      <div className="inline-flex bg-white text-blue-700 px-5 py-2.5 rounded-xl font-bold text-xs items-center gap-2">গাইড দেখুন <ChevronRight className="w-4 h-4" /></div>
                   </div>
                </div>
            </Link>
            <Link href="/tech/learning-tips" className="block group">
                <div className="bg-emerald-600 text-white p-8 rounded-[3rem] shadow-2xl relative overflow-hidden transition-all hover:scale-[1.01]">
                   <div className="relative z-10">
                      <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-inner"><Zap className="w-8 h-8" /></div>
                      <h2 className="text-2xl font-bold mb-3">কিভাবে দ্রুত শিখবেন?</h2>
                      <p className="text-white/80 mb-6 text-sm">শেখা বিষয়গুলো মনে রাখা এবং আয়ত্ত করার কার্যকর কৌশলসমূহ।</p>
                      <div className="inline-flex bg-white text-emerald-600 px-5 py-2.5 rounded-xl font-bold text-xs items-center gap-2">পরামর্শ দেখুন <ChevronRight className="w-4 h-4" /></div>
                   </div>
                </div>
            </Link>
        </div>

        {/* স্টিকি সার্চ বার */}
        <div className="sticky top-16 z-30 py-4 -mx-6 px-6 bg-gray-50/80 dark:bg-slate-950/80 backdrop-blur-md">
          <div className="max-w-6xl mx-auto relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500" />
            <input 
              type="text" 
              placeholder="যেকোনো টেক আর্টিকেল বা টপিক খুঁজুন..." 
              className="w-full py-4 pl-16 pr-8 rounded-2xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 shadow-lg focus:ring-2 focus:ring-blue-500 outline-none dark:text-white transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* পোস্ট গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {loading ? (
             <div className="col-span-full flex flex-col items-center justify-center py-20 text-blue-600">
                <Loader2 className="w-10 h-10 animate-spin mb-4" />
                <p className="font-bold">ডাটা লোড হচ্ছে...</p>
             </div>
          ) : filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <div key={post._id} className="group bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-gray-100 dark:border-slate-800 hover:border-blue-500/50 transition-all shadow-sm hover:shadow-xl">
                <span className="text-[10px] font-black text-blue-600 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full uppercase tracking-wider mb-6 inline-block">{post.category}</span>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors leading-tight">{post.title}</h3>
                <p className="text-foreground/60 text-sm mb-8 leading-relaxed line-clamp-3">{post.description}</p>
                <div className="flex items-center justify-between pt-6 border-t border-gray-50 dark:border-slate-800">
                  <div className="flex gap-4 text-[10px] text-foreground/30 font-bold uppercase tracking-widest">
                     <span><Calendar className="inline w-3 h-3 mr-1" /> {post.date || "মে ২০২৪"}</span>
                     <span><Clock className="inline w-3 h-3 mr-1" /> {post.readTime || "৫ মিনিট"}</span>
                  </div>
                  <Link href={`/tech/${post.slug || post._id}`} className="p-3 rounded-full bg-gray-100 dark:bg-slate-800 text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-24 text-foreground/30 italic">
               কোনো তথ্য পাওয়া যায়নি।
            </div>
          )}
        </div>

        {/* রিসোর্স সেকশন */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="p-10 rounded-[3rem] bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 flex flex-col items-center text-center shadow-sm">
              <Youtube className="w-12 h-12 text-red-500 mb-6" />
              <h4 className="font-bold text-lg mb-2">ইউটিউব রিসোর্স</h4>
              <p className="text-sm text-foreground/50">সেরা টিউটোরিয়াল চ্যানেলস</p>
           </div>
           <div className="p-10 rounded-[3rem] bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 flex flex-col items-center text-center shadow-sm">
              <GraduationCap className="w-12 h-12 text-emerald-500 mb-6" />
              <h4 className="font-bold text-lg mb-2">ফ্রি কোর্স</h4>
              <p className="text-sm text-foreground/50">বেস্ট লার্নিং প্ল্যাটফর্মসমূহ</p>
           </div>
           <div className="p-10 rounded-[3rem] bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 flex flex-col items-center text-center shadow-sm">
              <BookOpen className="w-12 h-12 text-blue-500 mb-6" />
              <h4 className="font-bold text-lg mb-2">ডকুমেন্টেশন</h4>
              <p className="text-sm text-foreground/50">অফিসিয়াল টেক ম্যানুয়াল</p>
           </div>
        </div>
      </div>
    </div>
  );
}