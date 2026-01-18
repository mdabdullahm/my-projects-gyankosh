import { BookMarked, Terminal, Lightbulb, Users, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
    const stats = [
        { name: "মোট দোয়া", count: "২০", icon: <BookMarked />, color: "bg-emerald-500" },
        { name: "টেক পোস্ট", count: "১৫", icon: <Terminal />, color: "bg-blue-500" },
        { name: "সাধারণ জ্ঞান", count: "১০", icon: <Lightbulb />, color: "bg-amber-500" },
        { name: "মোট ভিজিটর", count: "১.২k", icon: <Users />, color: "bg-purple-500" },
    ];

    return (
        <div className="space-y-10">
            <div>
                <h1 className="text-3xl font-black mb-2 text-foreground">ড্যাশবোর্ড ওভারভিউ</h1>
                <p className="text-foreground/50">স্বাগতম! আজকে আপনার সাইটে কী কী ঘটছে দেখে নিন।</p>
            </div>

            {/* স্ট্যাট কার্ডস */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-gray-100 dark:border-slate-800 shadow-sm flex items-center gap-6">
                        <div className={`${stat.color} p-4 rounded-2xl text-white shadow-lg shadow-current/20`}>
                            {stat.icon}
                        </div>
                        <div>
                            <p className="text-sm font-medium text-foreground/40">{stat.name}</p>
                            <p className="text-2xl font-bold">{stat.count}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* সাম্প্রতিক এক্টিভিটি */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-slate-800 shadow-sm">
                    <h3 className="text-xl font-bold mb-6 flex items-center justify-between">
                        সাম্প্রতিক পোস্টসমূহ <ArrowUpRight className="w-5 h-5 text-gray-400" />
                    </h3>
                    <div className="space-y-4">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 dark:bg-slate-800/50">
                                <span className="font-medium">নতুন দোয়া যুক্ত করা হয়েছে</span>
                                <span className="text-xs text-foreground/40 font-mono">২ ঘণ্টা আগে</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-gradient-to-br from-emerald-600 to-teal-700 p-8 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-4 text-emerald-100">দ্রুত অ্যাকশন</h3>
                        <p className="mb-8 opacity-80 leading-relaxed">নতুন কোনো তথ্য যোগ করতে নিচের বাটন ব্যবহার করুন।</p>
                        <Link href="/admin/dua">
                            <button className="bg-white text-emerald-600 px-8 py-3 rounded-2xl font-black hover:shadow-lg transition active:scale-95">
                                নতুন দোয়া যোগ করুন
                            </button>
                        </Link>
                    </div>
                    <ActivityIcon className="absolute -bottom-10 -right-10 w-48 h-48 opacity-10" />
                </div>
            </div>
        </div>
    );
}

function ActivityIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
    )
}