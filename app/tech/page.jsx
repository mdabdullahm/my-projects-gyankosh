"use client";
import { useState } from "react";
import { 
  Search, 
  Code2, 
  Terminal, 
  Cpu, 
  Globe, 
  ArrowLeft, 
  Clock, 
  Calendar,
  ChevronRight,
  ExternalLink
} from "lucide-react";
import Link from "next/link";

// টেকনিক্যাল আর্টিকেল বা টিপস ডাটা (নমুনা)
const techPosts = [
  {
    id: 1,
    title: "Tailwind CSS v4-এ নতুন কী কী থাকছে?",
    description: "টেইলউইন্ডের নতুন ভার্সনে ইঞ্জিন পরিবর্তন করা হয়েছে। এটি এখন আগের চেয়ে অনেক বেশি দ্রুত এবং কনফিগার করা সহজ।",
    category: "Tailwind CSS",
    date: "জানুয়ারি ১৫, ২০২৪",
    readTime: "৫ মিনিট",
    icon: <Globe className="w-6 h-6" />,
    color: "text-blue-500 bg-blue-50 dark:bg-blue-950/30",
    tags: ["Frontend", "CSS", "v4"]
  },
  {
    id: 2,
    title: "Next.js App Router বনাম Pages Router",
    description: "Next.js এর দুটি রাউটিং সিস্টেমের মধ্যে পার্থক্য এবং কখন কোনটি ব্যবহার করবেন তা নিয়ে বিস্তারিত আলোচনা।",
    category: "Next.js",
    date: "জানুয়ারি ১২, ২০২৪",
    readTime: "৮ মিনিট",
    icon: <Code2 className="w-6 h-6" />,
    color: "text-indigo-500 bg-indigo-50 dark:bg-indigo-950/30",
    tags: ["React", "Routing", "Nextjs"]
  },
  {
    id: 3,
    title: "জাভাস্ক্রিপ্ট ক্লিনিং টিপস: কোডকে করুন আরও সুন্দর",
    description: "কিভাবে ছোট ছোট কিছু নিয়ম মেনে চললে আপনার জাভাস্ক্রিপ্ট কোড আরও বেশি রিডেবল এবং ক্লিন হবে।",
    category: "JavaScript",
    date: "জানুয়ারি ১০, ২০২৪",
    readTime: "৪ মিনিট",
    icon: <Terminal className="w-6 h-6" />,
    color: "text-amber-500 bg-amber-50 dark:bg-amber-950/30",
    tags: ["Clean Code", "Tips", "JS"]
  },
  {
    id: 4,
    title: "কেন রিঅ্যাক্ট ১৯ শেখা আপনার জন্য জরুরি?",
    description: "রিঅ্যাক্ট ১৯ ভার্সনে আসা নতুন হুকস এবং ফিচারগুলো নিয়ে এক নজরে আলোচনা।",
    category: "React",
    date: "জানুয়ারি ০৫, ২০২৪",
    readTime: "৬ মিনিট",
    icon: <Cpu className="w-6 h-6" />,
    color: "text-cyan-500 bg-cyan-50 dark:bg-cyan-950/30",
    tags: ["Update", "React19", "Frontend"]
  }
];

export default function TechPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = techPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 pb-20">
      
      {/* ১. হেডার সেকশন */}
      <div className="bg-blue-600 dark:bg-blue-900 text-white pt-10 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="flex items-center gap-2 text-blue-100 hover:text-white mb-6 transition">
            <ArrowLeft className="w-4 h-4" /> ফিরে যান
          </Link>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 flex items-center gap-3">
                <Terminal className="w-10 h-10" /> ওয়েব ও প্রযুক্তি
              </h1>
              <p className="text-blue-100 text-lg max-w-2xl">
                প্রোগ্রামিং দুনিয়ার নতুন সব প্রযুক্তি, কোডিং টিপস এবং আমার লার্নিং প্রসেস নিয়ে বিস্তারিত আলোচনা।
              </p>
            </div>
            <div className="hidden lg:block opacity-20">
               <Code2 className="w-40 h-40" />
            </div>
          </div>
        </div>
      </div>

      {/* ২. সার্চ এবং ফিল্টার */}
      <div className="max-w-6xl mx-auto px-6 -mt-8">
        <div className="bg-white dark:bg-slate-900 p-4 rounded-3xl shadow-xl flex flex-col md:flex-row gap-4 border border-gray-100 dark:border-slate-800">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="যেকোনো টেক টপিক বা টিপস খুঁজুন..." 
              className="w-full py-3 pl-12 pr-6 rounded-2xl bg-gray-50 dark:bg-slate-800 border-none outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <button className="px-5 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-sm">সবগুলো</button>
            <button className="px-5 py-3 rounded-2xl bg-gray-100 dark:bg-slate-800 text-foreground/70 font-semibold text-sm hover:bg-gray-200 transition">নতুনদের জন্য</button>
          </div>
        </div>
      </div>

      {/* ৩. টেক পোস্ট গ্রিড */}
      <div className="max-w-6xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <div 
                key={post.id} 
                className="group bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-gray-100 dark:border-slate-800 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-4 rounded-2xl ${post.color}`}>
                    {post.icon}
                  </div>
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>

                <h2 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                   {post.title}
                </h2>
                
                <p className="text-foreground/60 leading-relaxed mb-6 flex-grow">
                  {post.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase">#{tag}</span>
                  ))}
                </div>

                <div className="pt-6 border-t border-gray-50 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-6 text-xs text-foreground/40 font-medium">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                  </div>
                  <Link href={`/tech/${post.id}`} className="p-3 rounded-full bg-gray-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm group-hover:scale-110">
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-foreground/40 italic">
               কোনো টেক আর্টিকেল খুঁজে পাওয়া যায়নি।
            </div>
          )}
        </div>
      </div>

      {/* ৪. রিসোর্স সেকশন (নিচে ছোট করে) */}
      <div className="max-w-6xl mx-auto px-6 mt-24">
         <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[3rem] p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">প্রোগ্রামিং শিখতে চান?</h3>
              <p className="text-blue-100">আমার সাজানো কিছু সেরা ফ্রি রিসোর্স দেখুন যা আপনার যাত্রা সহজ করবে।</p>
            </div>
            <button className="flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:shadow-lg transition active:scale-95 whitespace-nowrap">
               রিসোর্স দেখুন <ExternalLink className="w-5 h-5" />
            </button>
         </div>
      </div>

    </div>
  );
}