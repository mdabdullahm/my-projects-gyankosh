import Link from "next/link";
import { 
  ArrowRight, 
  BookOpen, 
  GraduationCap, 
  Sparkles, 
  Code2, 
  BookMarked, 
  Heart, 
  Lightbulb,
  ChevronRight,
  ScrollText,
  Star,
  Quote,
  Calendar,
  Clock
} from "lucide-react";

// বিভাগসমূহের ডাটা
const categories = [
  {
    title: "দোয়া ও জিকির",
    description: "প্রতিদিনের প্রয়োজনীয় মাসনুন দোয়া এবং জিকিরসমূহ অর্থ ও আমলসহ।",
    icon: <ScrollText className="w-8 h-8 text-emerald-500" />,
    count: "২০+ দোয়া",
    color: "bg-emerald-500/10",
    href: "/dua"
  },
  {
    title: "ওয়েব ও প্রযুক্তি",
    description: "প্রোগ্রামিং এবং আধুনিক প্রযুক্তি নিয়ে আমার শেখা টিপস ও ট্রিক্স।",
    icon: <Code2 className="w-8 h-8 text-blue-500" />,
    count: "১৫+ টিপস",
    color: "bg-blue-500/10",
    href: "/tech"
  },
  {
    title: "জীবন গড়ার কথা",
    description: "মননশীলতা এবং জীবনকে সুন্দর করার মতো অনুপ্রেরণামূলক কথা ও উপদেশ।",
    icon: <Heart className="w-8 h-8 text-rose-500" />,
    count: "১০+ আলোচনা",
    color: "bg-rose-500/10",
    href: "/lifestyle"
  },
  {
    title: "সাধারণ জ্ঞান",
    description: "পৃথিবী ও প্রকৃতি নিয়ে কিছু চমকপ্রদ তথ্য যা আমাদের জ্ঞান বাড়াতে সাহায্য করবে।",
    icon: <Lightbulb className="w-8 h-8 text-amber-500" />,
    count: "১২+ টপিক",
    color: "bg-amber-500/10",
    href: "/general-knowledge"
  },
];

// সাম্প্রতিক পাঠসমূহের ডাটা
const recentLessons = [
  {
    title: "ঘুমানোর আগের সুন্নাহ ও দোয়া",
    category: "দোয়া ও জিকির",
    date: "মে ২০, ২০২৪",
    readTime: "৩ মিনিট",
    snippet: "রাসূলুল্লাহ (সা.) ঘুমানোর আগে যে দোয়াগুলো পড়তেন এবং যে আমলগুলো করতেন...",
    link: "#"
  },
  {
    title: "Tailwind CSS v4 কেন ব্যবহার করবেন?",
    category: "প্রযুক্তি",
    date: "মে ১৮, ২০২৪",
    readTime: "৫ মিনিট",
    snippet: "টেইলউইন্ডের নতুন ভার্সনে কী কী পরিবর্তন এসেছে এবং এটি আপনার কাজের গতি কীভাবে বাড়াবে...",
    link: "#"
  },
  {
    title: "ধৈর্য ধারণের গুরুত্ব ও ফজিলত",
    category: "জীবন গঠন",
    date: "মে ১৫, ২০২৪",
    readTime: "৪ মিনিট",
    snippet: "বিপদের সময় মুমিনের সবচেয়ে বড় অস্ত্র হলো ধৈর্য। কুরআনের আলোকে ধৈর্যের ব্যাখ্যা...",
    link: "#"
  }
];

export default function HomePage() {
  return (
    <div className="relative isolate pb-20">
      
      {/* ----------------- ১. Hero Section ----------------- */}
      <section className="relative px-6 pt-10 lg:px-8 overflow-hidden">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-400 to-blue-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>

        <div className="mx-auto max-w-4xl py-16 sm:py-24 text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-foreground/70 ring-1 ring-gray-200 dark:ring-gray-800 flex items-center gap-2">
                <Star className="w-4 h-4 text-emerald-500 fill-emerald-500" />
                <span>শিখুন, জানুন এবং আমল করুন</span>
              </div>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-7xl">
              আমার ব্যক্তিগত <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-emerald-400 dark:to-blue-400">
                ডিজিটাল জ্ঞানকোষ
              </span>
            </h1>
            
            <p className="mt-8 text-lg leading-8 text-foreground/60 max-w-2xl mx-auto">
              দোয়া-কালাম থেকে শুরু করে প্রযুক্তি—আমার প্রতিদিনের শেখা বিষয়গুলো সাজিয়ে রাখছি এখানে।
            </p>
            
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/topics" className="flex items-center gap-2 rounded-2xl bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-emerald-700 transition-all active:scale-95">
                <BookOpen className="w-5 h-5" /> পড়া শুরু করুন
              </Link>
            </div>
        </div>
      </section>

      {/* ----------------- ২. আজকের বিশেষ পাঠ ----------------- */}
      <section className="px-6 mb-24">
        <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/50 flex flex-col md:flex-row items-center gap-8">
          <div className="bg-white dark:bg-emerald-900 p-4 rounded-2xl shadow-sm flex-shrink-0">
             <Quote className="w-10 h-10 text-emerald-600" />
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">আজকের বিশেষ পাঠ</h3>
            <p className="text-xl font-medium italic text-foreground leading-relaxed">
              "বলুন, হে আমার প্রতিপালক! আমার জ্ঞান বৃদ্ধি করে দিন।" (সূরা ত্বহা: ১১৪)
            </p>
          </div>
        </div>
      </section>

      {/* ----------------- ৩. শিক্ষণীয় বিভাগসমূহ ----------------- */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">প্রধান বিভাগসমূহ</h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">আপনার পছন্দের বিষয়টি বেছে নিন।</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((item, index) => (
              <Link key={index} href={item.href} className="group p-8 rounded-3xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 hover:border-emerald-500 transition-all duration-300">
                  <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-foreground/60 text-sm mb-6 leading-relaxed">{item.description}</p>
                  <div className="flex items-center text-xs font-bold text-emerald-600 gap-2">
                    {item.count} <ChevronRight className="w-4 h-4" />
                  </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- ৪. সাম্প্রতিক পাঠসমূহ (NEW SECTION) ----------------- */}
      <section className="py-20 px-6 bg-gray-50/50 dark:bg-slate-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">সাম্প্রতিক পাঠসমূহ</h2>
              <p className="text-foreground/60">আমার জ্ঞানকোষে যুক্ত হওয়া সর্বশেষ কিছু বিষয়।</p>
            </div>
            <Link href="/all-posts" className="flex items-center gap-2 text-emerald-600 font-bold hover:underline">
              সবগুলো দেখুন <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentLessons.map((post, index) => (
              <div key={index} className="flex flex-col p-6 rounded-3xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 hover:shadow-xl transition-all group">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase rounded-full tracking-wider">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-600 transition-colors">
                  <Link href={post.link}>{post.title}</Link>
                </h3>
                <p className="text-foreground/60 text-sm mb-6 flex-grow leading-relaxed">
                  {post.snippet}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-gray-50 dark:border-slate-800 text-xs text-foreground/40 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" /> {post.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> {post.readTime}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- ৫. Footer Note ----------------- */}
      <section className="mt-24 text-center px-6">
          <div className="max-w-2xl mx-auto space-y-6">
             <div className="flex justify-center"><BookMarked className="w-12 h-12 text-foreground/20" /></div>
             <h2 className="text-2xl font-bold tracking-tight">জ্ঞানের আলো ছড়িয়ে পড়ুক</h2>
             <p className="text-foreground/60 leading-relaxed">
               আমি যা শিখছি তা অন্যদের সাথে শেয়ার করার এটি একটি ছোট চেষ্টা। আপনার যদি কোনো পরামর্শ থাকে, তবে নির্দ্বিধায় যোগাযোগ করতে পারেন।
             </p>
          </div>
      </section>
    </div>
  );
}