import { ReactNode } from "react";
import Link from "next/link";
import { ForumSidebar } from "@/components/forum/Sidebar";

export default function ForumLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-[#C69DD220]">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/forum"
            className="text-lg font-semibold hover:text-[#C69DD2]"
          >
            ProGrowing Forum
          </Link>

          <nav className="flex items-center gap-5 text-sm text-gray-400">
            <Link href="/forum" className="hover:text-white">
              Threads
            </Link>
            <Link
              href="/forum/create"
              className="text-yellow-400 hover:text-yellow-300"
            >
              New Thread
            </Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-[1fr_280px] gap-10">
        {children}
        <ForumSidebar />
      </section>
    </main>
  );
}
