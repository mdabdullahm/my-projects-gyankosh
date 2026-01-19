"use client";
import { useState, useEffect } from "react";
import { Camera, Loader2, ArrowLeft, X, ZoomIn } from "lucide-react";
import Link from "next/link";

export const dynamic = 'force-dynamic';

export default function GalleryPage() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // পপ-আপের জন্য স্টেট
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetch("/api/gallery")
      .then(res => res.json())
      .then(data => {
        setImages(Array.isArray(data) ? data : []);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 pb-20 p-6 md:p-12 transition-colors duration-300">
      
      {/* ১. হেডার সেকশন */}
      <div className="max-w-6xl mx-auto text-center mb-16">
         <Link href="/" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline mb-8">
            <ArrowLeft className="w-4 h-4" /> হোম
         </Link>
         <h1 className="text-4xl md:text-7xl font-black mb-4 tracking-tighter text-foreground">ফটো গ্যালারি</h1>
         <p className="text-foreground/50 text-lg">আমার প্রিয় মুহূর্তগুলোর একটি ছোট্ট সংগ্রহশালা।</p>
      </div>

      {/* ২. ইমেজ গ্রিড */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 text-blue-600">
           <Loader2 className="animate-spin w-12 h-12 mb-4" />
           <p className="font-bold">স্মৃতিগুলো লোড হচ্ছে...</p>
        </div>
      ) : (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 max-w-6xl mx-auto">
          {images.map(img => (
            <div 
              key={img._id} 
              onClick={() => setSelectedImage(img)} // ক্লিক করলে পপ-আপ খুলবে
              className="break-inside-avoid bg-white dark:bg-slate-900 p-4 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-slate-800 hover:shadow-2xl transition-all group cursor-zoom-in"
            >
               <div className="relative overflow-hidden rounded-[2rem]">
                 <img 
                    src={img.imageUrl} 
                    alt={img.title} 
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-500" 
                 />
                 {/* হোভার করলে ছোট একটি আইকন দেখাবে */}
                 <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ZoomIn className="text-white w-8 h-8" />
                 </div>
               </div>
               <div className="mt-4 px-2">
                  <h3 className="font-bold text-xl text-foreground">{img.title}</h3>
                  <p className="text-xs text-foreground/30 font-bold uppercase tracking-widest mt-1">{img.createdAt}</p>
               </div>
            </div>
          ))}
        </div>
      )}

      {/* ৩. ইমেজ পপ-আপ (Modal) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)} // বাইরে ক্লিক করলে বন্ধ হবে
        >
          {/* বন্ধ করার বাটন */}
          <button 
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>

          {/* বড় ইমেজ এবং তথ্য */}
          <div 
            className="max-w-5xl w-full flex flex-col items-center animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()} // ইমেজের ওপর ক্লিক করলে যেন বন্ধ না হয়
          >
            <img 
              src={selectedImage.imageUrl} 
              alt={selectedImage.title} 
              className="max-h-[80vh] w-auto rounded-3xl shadow-2xl border border-white/10 object-contain"
            />
            <div className="mt-6 text-center">
               <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">{selectedImage.title}</h2>
               <p className="text-white/50 font-medium uppercase tracking-widest text-sm">{selectedImage.createdAt}</p>
            </div>
          </div>
        </div>
      )}

      {!loading && images.length === 0 && (
        <p className="text-center py-20 text-foreground/30 italic text-xl">গ্যালারি এখনো খালি।</p>
      )}
    </div>
  );
}