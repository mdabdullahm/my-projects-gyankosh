"use client";
import { useState } from "react";
import { Send, Lightbulb } from "lucide-react";

export default function AdminGK() {
  const [formData, setFormData] = useState({
    title: "",
    info: "",
    category: "বিজ্ঞান ও প্রকৃতি",
    details: "",
    slug: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/gk", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });
    if (res.ok) {
      alert("সাধারণ জ্ঞান সফলভাবে ডাটাবেসে সেভ হয়েছে!");
      setFormData({ title: "", info: "", category: "বিজ্ঞান ও প্রকৃতি", details: "", slug: "" });
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">
        <Lightbulb className="text-amber-500" /> সাধারণ জ্ঞান যোগ করুন
      </h1>
      
      <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-xl space-y-6">
        <div>
          <label className="block font-bold mb-2">শিরোনাম</label>
          <input type="text" className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-slate-800 outline-none" 
            placeholder="উদা: নীল তিমির হৃদপিণ্ড" 
            value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} required />
        </div>
        
        <div>
          <label className="block font-bold mb-2">সংক্ষিপ্ত তথ্য (কার্ডে দেখাবে)</label>
          <textarea className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-slate-800 outline-none" rows="2"
            value={formData.info} onChange={(e) => setFormData({...formData, info: e.target.value})} required />
        </div>

        <div>
          <label className="block font-bold mb-2">বিস্তারিত তথ্য (ডিটেইল পেজে দেখাবে)</label>
          <textarea className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-slate-800 outline-none" rows="5"
            value={formData.details} onChange={(e) => setFormData({...formData, details: e.target.value})} required />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-bold mb-2">Slug (URL এর নাম)</label>
            <input type="text" className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-slate-800 outline-none" placeholder="blue-whale-heart"
              value={formData.slug} onChange={(e) => setFormData({...formData, slug: e.target.value})} required />
          </div>
          <div>
            <label className="block font-bold mb-2">ক্যাটাগরি</label>
            <select className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-slate-800 outline-none"
              value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}>
              <option>প্রাণিজগত</option>
              <option>ভৌগোলিক</option>
              <option>বিজ্ঞান ও প্রকৃতি</option>
              <option>মহাকাশ</option>
            </select>
          </div>
        </div>

        <button type="submit" className="w-full py-4 bg-amber-500 text-white rounded-2xl font-bold flex justify-center gap-2">
          <Send /> ডাটাবেসে সেভ করুন
        </button>
      </form>
    </div>
  );
}