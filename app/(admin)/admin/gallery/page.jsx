"use client";
import { useState, useEffect } from "react";
import { ImagePlus, Trash2, ArrowLeft, Loader2, Link as LinkIcon, RefreshCw } from "lucide-react";
import Link from "next/link";

export default function AdminGallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({ title: "", imageUrl: "" });

  const fetchImages = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/gallery");
      const data = await res.json();
      setImages(Array.isArray(data) ? data : []);
    } catch (err) { console.error(err); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchImages(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/gallery", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });
    if (res.ok) {
      alert("ছবির লিঙ্ক সফলভাবে সেভ হয়েছে!");
      setFormData({ title: "", imageUrl: "" });
      fetchImages();
    }
  };

  const handleDelete = async (id) => {
    if (confirm("ছবিটি কি ডিলিট করতে চান?")) {
      await fetch(`/api/gallery?id=${id}`, { method: "DELETE" });
      fetchImages();
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <Link href="/admin" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline mb-4">
        <ArrowLeft className="w-4 h-4" /> ড্যাশবোর্ড
      </Link>

      {/* ফর্ম */}
      <div className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] shadow-xl border border-gray-100 dark:border-slate-800">
        <h1 className="text-3xl font-black flex items-center gap-3 mb-8"><ImagePlus className="text-blue-500" /> নতুন ছবির লিঙ্ক যোগ করুন</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="ছবির শিরোনাম" className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-slate-800 outline-none focus:ring-2 focus:ring-blue-500" 
          value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} required />
          <input type="text" placeholder="ইমেজ ডাইরেক্ট লিঙ্ক (Direct Image URL)" className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-slate-800 outline-none focus:ring-2 focus:ring-blue-500" 
          value={formData.imageUrl} onChange={e => setFormData({...formData, imageUrl: e.target.value})} required />
          <button type="submit" className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-lg transition-all active:scale-95">ডাটাবেসে সেভ করুন</button>
        </form>
      </div>

      {/* তালিকা */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-gray-100 dark:border-slate-800 pb-4">
          <h2 className="text-2xl font-bold">বর্তমান ছবিসমূহ ({images.length})</h2>
          <button onClick={fetchImages} className="p-2 bg-gray-100 dark:bg-slate-800 rounded-full hover:rotate-180 transition-all duration-500">
             <RefreshCw size={20} className={loading ? "animate-spin text-blue-500" : ""} />
          </button>
        </div>

        {loading ? <div className="flex justify-center py-10"><Loader2 className="animate-spin text-blue-500" /></div> : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map(img => (
              <div key={img._id} className="relative group bg-white dark:bg-slate-900 p-4 rounded-3xl border border-gray-100 dark:border-slate-800 shadow-sm overflow-hidden">
                <img src={img.imageUrl} alt={img.title} className="w-full h-40 object-cover rounded-2xl mb-4" />
                <h3 className="font-bold text-foreground/80">{img.title}</h3>
                <button onClick={() => handleDelete(img._id)} className="absolute top-6 right-6 p-3 bg-rose-500 text-white rounded-2xl shadow-lg opacity-0 group-hover:opacity-100 transition-all active:scale-90">
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}