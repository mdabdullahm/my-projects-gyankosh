"use client";
import { useState, useEffect } from "react";
import { Send, BookMarked, Trash2, Loader2, RefreshCw } from "lucide-react";

export default function AdminDuaPage() {
  const [allDuas, setAllDuas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: "", arabic: "", pronunciation: "", meaning: "", category: "প্রতিদিনের দোয়া", reference: ""
  });

  // ১. ডাটাবেস থেকে সব দোয়া লোড করার ফাংশন
  const fetchDuas = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/duas");
      const data = await res.json();
      setAllDuas(data);
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
    const res = await fetch("http://localhost:5000/api/duas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });
    if (res.ok) {
      alert("সফলভাবে সেভ হয়েছে!");
      setFormData({ title: "", arabic: "", pronunciation: "", meaning: "", category: "প্রতিদিনের দোয়া", reference: "" });
      fetchDuas(); // নতুন ডাটা যোগ হওয়ার পর লিস্ট রিফ্রেশ করা
    }
  };

  // ৩. দোয়া ডিলিট করার ফাংশন
  const handleDelete = async (id) => {
    if (confirm("আপনি কি নিশ্চিত যে এটি ডিলিট করতে চান?")) {
      try {
        const res = await fetch(`http://localhost:5000/api/duas/${id}`, {
          method: "DELETE",
        });
        if (res.ok) {
          alert("ডিলিট সফল হয়েছে!");
          fetchDuas(); // ডিলিট হওয়ার পর লিস্ট রিফ্রেশ করা
        }
      } catch (error) {
        alert("ডিলিট করা সম্ভব হয়নি।");
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-12 pb-20">
      
      {/* --- উপরের ফর্ম অংশ --- */}
      <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[3rem] shadow-xl border border-gray-100 dark:border-slate-800">
        <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
          <BookMarked className="text-emerald-500" /> নতুন দোয়া যোগ করুন
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* আপনার আগের ফর্মের সব ইনপুট ফিল্ড এখানে থাকবে... */}
          <div>
            <label className="block text-sm font-bold mb-2">দোয়ার নাম</label>
            <input type="text" required className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-slate-800 outline-none" 
            value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2 text-right">আরবি</label>
            <textarea required dir="rtl" rows="2" className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-slate-800 outline-none text-2xl font-serif" 
            value={formData.arabic} onChange={(e) => setFormData({...formData, arabic: e.target.value})} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <input type="text" placeholder="উচ্চারণ" required className="p-4 rounded-2xl bg-gray-50 dark:bg-slate-800 outline-none" 
             value={formData.pronunciation} onChange={(e) => setFormData({...formData, pronunciation: e.target.value})} />
             <input type="text" placeholder="অর্থ" required className="p-4 rounded-2xl bg-gray-50 dark:bg-slate-800 outline-none" 
             value={formData.meaning} onChange={(e) => setFormData({...formData, meaning: e.target.value})} />
          </div>
          <button type="submit" className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-bold flex justify-center gap-2">
            <Send /> ডাটাবেসে সেভ করুন
          </button>
        </form>
      </div>

      {/* --- নিচের লিস্ট অংশ (নতুন যুক্ত হয়েছে) --- */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold flex items-center gap-2">
             বর্তমান দোয়াগুলোর তালিকা ({allDuas.length})
          </h2>
          <button onClick={fetchDuas} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition">
             <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin text-emerald-500' : 'text-gray-400'}`} />
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center py-10"><Loader2 className="animate-spin text-emerald-500 w-10 h-10" /></div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {allDuas.map((dua) => (
              <div key={dua._id} className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-gray-100 dark:border-slate-800 flex items-center justify-between shadow-sm group hover:shadow-md transition-all">
                <div>
                  <h3 className="font-bold text-lg">{dua.title}</h3>
                  <p className="text-xs text-foreground/40">{dua.category} • {dua.reference || "রেফারেন্স নেই"}</p>
                </div>
                
                <button 
                  onClick={() => handleDelete(dua._id)}
                  className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/20 text-rose-600 hover:bg-rose-600 hover:text-white transition-all shadow-sm"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}

            {allDuas.length === 0 && <p className="text-center py-10 text-foreground/40 italic">কোনো দোয়া পাওয়া যায়নি।</p>}
          </div>
        )}
      </div>
    </div>
  );
}