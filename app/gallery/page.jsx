"use client";
import { useState, useEffect } from "react";
import { Camera, Loader2, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const dynamic = 'force-dynamic';

export default function GalleryPage() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/gallery")
      .then(res => res.json())
      .then(data => {
        setImages(Array.isArray(data) ? data : []);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 pb-20 p-6 md:p-12">
      <div className="max-w-6xl mx-auto text-center mb-16">
         <Link href="/" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline mb-8">
            <ArrowLeft className="w-4 h-4" /> হোম
         </Link>
         <h1 className="text-4xl md:text-7xl font-black mb-4 uppercase tracking-tighter text-foreground">ফটো গ্যালারি</h1>
         <p className="text-foreground/50 text-lg">আমার প্রিয় মুহূর্তগুলোর একটি ছোট্ট সংগ্রহশালা।</p>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 text-blue-600">
           <Loader2 className="animate-spin w-12 h-12 mb-4" />
           <p className="font-bold">স্মৃতিগুলো লোড হচ্ছে...</p>
        </div>
      ) : (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 max-w-6xl mx-auto">
          {images.map(img => (
            <div key={img._id} className="break-inside-avoid bg-white dark:bg-slate-900 p-4 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-slate-800 hover:shadow-2xl transition-all group">
               <div className="overflow-hidden rounded-[2rem]">
                 <img src={img.imageUrl} alt={img.title} className="w-full h-auto group-hover:scale-105 transition-transform duration-500" />
               </div>
               <div className="mt-4 px-2">
                  <h3 className="font-bold text-xl text-foreground">{img.title}</h3>
                  <p className="text-xs text-foreground/30 font-bold uppercase tracking-widest mt-1">{img.createdAt}</p>
               </div>
            </div>
          ))}
          {images.length === 0 && <p className="text-center col-span-full py-20 text-foreground/30 italic text-xl">গ্যালারি এখনো খালি।</p>}
        </div>
      )}
    </div>
  );
}