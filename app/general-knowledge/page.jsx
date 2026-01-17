"use client";
import { useState } from "react";
import { 
  Search, 
  Lightbulb, 
  Globe, 
  ArrowLeft, 
  Share2, 
  Compass, 
  Telescope, 
  Microscope,
  ChevronRight,
  Info
} from "lucide-react";
import Link from "next/link";

// সাধারণ জ্ঞানের ডাটা (নমুনা)
const gkData = [
  {
    id: 1,
    title: "নীল তিমির হৃদপিণ্ড",
    info: "একটি নীল তিমির হৃদপিণ্ড একটি আস্ত গাড়ির সমান বড় হতে পারে এবং এর ধড়ফড়ানি ২ মাইল দূর থেকেও শোনা যায়!",
    href: "/general-knowledge/blue-whale-heart",
    category: "প্রাণিজগত",
    icon: <Info className="w-6 h-6" />,
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    id: 2,
    title: "এভারেস্ট কি সত্যিই সর্বোচ্চ?",
    info: "সমুদ্রপৃষ্ঠ থেকে এভারেস্ট সর্বোচ্চ হলেও, পৃথিবীর কেন্দ্র থেকে পরিমাপ করলে ইকুয়েডরের 'চিম্বোরাজো' পর্বতটি মহাকাশের সবচেয়ে কাছে।",
    category: "ভৌগোলিক",
    href: "/general-knowledge/everest-vs-chimborazo",
    icon: <Compass className="w-6 h-6" />,
    color: "bg-amber-500/10 text-amber-600"
  },
  {
    id: 3,
    title: "অক্সিজেনের উৎস",
    info: "আমাদের শ্বাস নেওয়া অক্সিজেনের প্রায় ৫০% থেকে ৮০% তৈরি হয় মহাসাগর থেকে, মূলত সামুদ্রিক প্লাঙ্কটন ও শৈবাল দ্বারা।",
    category: "বিজ্ঞান ও প্রকৃতি",
    href: "/general-knowledge/ocean-oxygen-source",
    icon: <Microscope className="w-6 h-6" />,
    color: "bg-emerald-500/10 text-emerald-600"
  },
  {
    id: 4,
    title: "মহাকাশের নীরবতা",
    info: "মহাকাশে কোনো বায়ুমণ্ডল নেই, তাই শব্দ চলাচলের কোনো মাধ্যম নেই। মহাকাশ পুরোপুরি নিঃশব্দ বা নীরব।",
    category: "মহাকাশ",
    href: "/general-knowledge/space-silence",
    icon: <Telescope className="w-6 h-6" />,
    color: "bg-purple-500/10 text-purple-600"
  },
  {
    id: 5,
    title: "মধুর স্থায়িত্ব",
    info: "মধু কখনও নষ্ট হয় না। প্রত্নতাত্ত্বিকরা প্রাচীন মিশরের পিরামিডে ৩০০০ বছরের পুরনো মধুর পাত্র খুঁজে পেয়েছেন যা আজও খাওয়ার যোগ্য!",
    category: "খাদ্য ও স্বাস্থ্য",
    href: "/general-knowledge/permanence-of-honey",
    icon: <Lightbulb className="w-6 h-6" />,
    color: "bg-yellow-500/10 text-yellow-600"
  },
  {
    id: 6,
    title: "তাজমহলের রঙের পরিবর্তন",
    info: "তাজমহলের সাদা মার্বেল পাথর আবহাওয়া এবং দিনের সময়ের ওপর নির্ভর করে রঙ পাল্টায়। সকালে গোলাপী, দুপুরে সাদা এবং জোছনা রাতে সোনালী দেখায়।",
    category: "ইতিহাস",
    href: "/general-knowledge/taj-mahal-colors",
    icon: <Globe className="w-6 h-6" />,
    color: "bg-rose-500/10 text-rose-600"
  },
  {
    id: 7,
    title: "অক্টোপাসের অলৌকিক শরীর",
    info: "অক্টোপাসের তিনটি হৃদপিণ্ড এবং এদের রক্ত নীল রঙের হয়ে থাকে। এছাড়া এদের শরীরের কোনো হাড় নেই!",
    category: "প্রাণিজগত",
    icon: <Info className="w-6 h-6" />,
    href: "/general-knowledge/octopus-body",
    color: "bg-cyan-500/10 text-cyan-600"
  },
  {
    id: 8,
    title: "সূর্যের আলোর ভ্রমণ",
    info: "সূর্যের আলো পৃথিবী পর্যন্ত পৌঁছাতে গড়ে ৮ মিনিট ২০ সেকেন্ড সময় নেয়। অর্থাৎ আমরা এখন যে রোদ দেখছি তা ৮ মিনিট আগে সূর্য থেকে রওনা হয়েছিল।",
    category: "মহাকাশ",
    href: "/general-knowledge/sunlight-travel",
    icon: <Telescope className="w-6 h-6" />,
    color: "bg-orange-500/10 text-orange-600"
  },
  {
    id: 9,
    title: "পিঁপড়ার শক্তি",
    info: "পিঁপড়া তার নিজের শরীরের ওজনের প্রায় ২০ গুণ থেকে ৫০ গুণ বেশি ওজন বহন করতে পারে। এদের কোনো ফুসফুস নেই, তারা শরীরের ছোট ছোট ছিদ্র দিয়ে শ্বাস নেয়।",
    category: "প্রাণিজগত",
    href: "/general-knowledge/ant-power",
    icon: <Microscope className="w-6 h-6" />,
    color: "bg-indigo-500/10 text-indigo-600"
  },
  {
    id: 10,
    title: "মৃত সাগর বা Dead Sea",
    info: "মৃত সাগরের পানিতে লবণের পরিমাণ এত বেশি যে সেখানে কোনো মাছ বা উদ্ভিদ বাঁচতে পারে না। এমনকি এই পানিতে মানুষ না সাঁতার কাটলেও অনায়াসেই ভেসে থাকতে পারে।",
    category: "ভৌগোলিক",
    href: "/general-knowledge/dead-sea",
    icon: <Compass className="w-6 h-6" />,
    color: "bg-teal-500/10 text-teal-600"
  }
];

export default function GeneralKnowledgePage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGK = gkData.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 pb-20">
      
      {/* ১. হেডার সেকশন */}
      <div className="bg-amber-500 dark:bg-amber-900 text-white pt-10 pb-24 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <Link href="/" className="flex items-center gap-2 text-amber-100 hover:text-white mb-6 transition">
            <ArrowLeft className="w-4 h-4" /> ফিরে যান
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 flex items-center gap-3">
            <Lightbulb className="w-10 h-10 fill-amber-300 dark:fill-amber-500" /> সাধারণ জ্ঞান
          </h1>
          <p className="text-amber-100 text-lg max-w-2xl leading-relaxed">
            পৃথিবী, মহাকাশ এবং প্রকৃতি নিয়ে কিছু চমকপ্রদ ও অজানা তথ্য যা আপনার জ্ঞানের পরিধি বাড়াতে সাহায্য করবে।
          </p>
        </div>
        {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
      </div>

      {/* ২. স্টিকি সার্চ বার */}
      <div className="sticky top-16 z-30 py-4 -mx-6 px-6 bg-gray-50/80 dark:bg-slate-950/80 backdrop-blur-md transition-all">
        <div className="max-w-4xl mx-auto relative group">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-amber-500 transition-colors" />
          <input 
            type="text" 
            placeholder="যেকোনো তথ্য বা বিষয় খুঁজুন..." 
            className="w-full py-5 pl-16 pr-8 rounded-3xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 shadow-xl focus:ring-2 focus:ring-amber-500 outline-none dark:text-white transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* ৩. কন্টেন্ট লিস্ট - কার্ড ডিজাইন */}
      <div className="max-w-4xl mx-auto px-6 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredGK.length > 0 ? (
          filteredGK.map((item) => (
            <div 
              key={item.id} 
              className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:border-amber-500/50 transition-all duration-300 flex flex-col group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`p-4 rounded-2xl ${item.color} group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-foreground/40 bg-gray-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                  {item.category}
                </span>
              </div>

              <h2 className="text-xl font-bold mb-4 text-foreground group-hover:text-amber-600 transition-colors">
                {item.title}
              </h2>
              
              <p className="text-foreground/60 leading-relaxed mb-8 flex-grow">
                {item.info}
              </p>

              <div className="pt-6 border-t border-gray-50 dark:border-slate-800 flex items-center justify-between">
                <Link href={item.href || "#"} className="flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400 hover:gap-3 transition-all">
                  বিস্তারিত জানুন <ChevronRight className="w-4 h-4" />
                </Link>
                <button className="p-2 rounded-full hover:bg-amber-50 dark:hover:bg-amber-950/30 text-foreground/30 hover:text-amber-600 transition">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-20 text-foreground/40 italic">
             কোনো তথ্য খুঁজে পাওয়া যায়নি...
          </div>
        )}
      </div>

      {/* ৪. নিচের কৌতূহলী বার্তা */}
      <div className="max-w-2xl mx-auto px-6 mt-24 text-center">
        <div className="w-16 h-1 w-16 bg-amber-200 dark:bg-amber-900 mx-auto mb-8 rounded-full"></div>
        <p className="text-lg font-medium text-foreground/50 leading-relaxed">
          "জ্ঞানই শক্তি। প্রতিদিন একটি করে নতুন তথ্য শেখা আমাদের চিন্তাভাবনাকে আরও প্রসারিত করে।"
        </p>
      </div>

    </div>
  );
}