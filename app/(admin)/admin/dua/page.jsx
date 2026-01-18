"use client";
import { useState, useEffect } from "react";
import { Send, BookMarked, Trash2, Loader2, RefreshCw, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AdminDuaPage() {
  const [allDuas, setAllDuas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: "", arabic: "", pronunciation: "", meaning: "", category: "প্রতিদিনের দোয়া", reference: ""
  });

  // ১. ডাটা লোড করার ফাংশন (Relative Path ব্যবহার করা হয়েছে)
  const fetchDuas = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/duas"); // localhost:5000 সরিয়ে দেওয়া হয়েছে
      const data = await res.json();
      setAllDuas(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDuas();
  }, []);

  // ২. দোয়া সেভ করার ফাংশন
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/duas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });
    if (res.ok) {
      alert("সফলভাবে সেভ হয়েছে!");
      setFormData({ title: "", arabic: "", pronunciation: "", meaning: "", category: "প্রতিদিনের দোয়া", reference: "" });
      fetchDuas();
    }
  };

  // ৩. দোয়া ডিলিট করার ফাংশন
  const handleDelete = async (id) => {
    if (confirm("আপনি কি নিশ্চিত যে এটি ডিলিট করতে চান?")) {
      try {
        const res = await fetch(`/api/duas?id=${id}`, { // Query parameter হিসেবে id পাঠানো হচ্ছে
          method: "DELETE",
        });
        if (res.ok) {
          alert("ডিলিট সফল হয়েছে!");
          fetchDuas();
        }
      } catch (error) {
        alert("ডিলিট করা সম্ভব হয়নি।");
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-12 pb-20 p-6">
      <Link href="/admin" className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:underline mb-4">
        <ArrowLeft className="w-4 h-4" /> ড্যাশবোর্ড
      </Link>

      <div className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] shadow-xl border border-gray-100 dark:border-slate-800">
        <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
          <BookMarked className="text-emerald-500" /> নতুন দোয়া যোগ করুন
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold mb-2 uppercase tracking-widest text-foreground/40">দোয়ার নাম</label>
            <input type="text" required className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-slate-800 outline-none focus:ring-2 focus:ring-emerald-500" 
            value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2 text-right uppercase tracking-widest text-foreground/40">আরবি টেক্সট</label>
            <textarea required dir="rtl" rows="2" className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-slate-800 outline-none text-2xl font-serif" 
            value={formData.arabic} onChange={(e) => setFormData({...formData, arabic: e.target.value})} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <input type="text" placeholder="উচ্চারণ (বাংলা)" required className="p-4 rounded-2xl bg-gray-50 dark:bg-slate-800 outline-none" 
             value={formData.pronunciation} onChange={(e) => setFormData({...formData, pronunciation: e.target.value})} />
             <input type="text" placeholder="বাংলা অর্থ" required className="p-4 rounded-2xl bg-gray-50 dark:bg-slate-800 outline-none" 
             value={formData.meaning} onChange={(e) => setFormData({...formData, meaning: e.target.value})} />
          </div>
          <button type="submit" className="w-full py-5 bg-emerald-600 text-white rounded-2xl font-bold flex justify-center gap-2 hover:bg-emerald-700 transition shadow-lg shadow-emerald-500/20">
            <Send className="w-5 h-5" /> ডাটাবেসে সেভ করুন
          </button>
        </form>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-gray-100 dark:border-slate-800 pb-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
             দোয়ার তালিকা ({allDuas.length})
          </h2>
          <button onClick={fetchDuas} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition">
             <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin text-emerald-500' : 'text-gray-400'}`} />
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center py-10"><Loader2 className="animate-spin text-emerald-500 w-10 h-10" /></div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {allDuas.map((dua) => (
              <div key={dua._id} className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-gray-100 dark:border-slate-800 flex items-center justify-between shadow-sm group">
                <div>
                  <h3 className="font-bold text-lg">{dua.title}</h3>
                  <p className="text-xs text-foreground/40">{dua.category}</p>
                </div>
                <button 
                  onClick={() => handleDelete(dua._id)}
                  className="p-3 rounded-2xl bg-rose-50 dark:bg-rose-950/20 text-rose-600 hover:bg-rose-600 hover:text-white transition-all"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
            {allDuas.length === 0 && <p className="text-center col-span-full py-10 text-foreground/30 italic">কোনো দোয়া পাওয়া যায়নি।</p>}
          </div>
        )}
      </div>
    </div>
  );
}