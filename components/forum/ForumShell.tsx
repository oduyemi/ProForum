import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { ForumSidebar } from "@/components/forum/Sidebar";
import type { LucideIcon } from "lucide-react";

export type ForumNavItem = {
  href: string;
  label?: string;         
  highlight?: boolean;
  icon?: LucideIcon;       
  ariaLabel?: string;      
};



interface ForumShellProps {
  children: ReactNode;
  navItems: ForumNavItem[];
}

export function ForumShell({ children, navItems }: ForumShellProps) {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-[#C69DD220]">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="ProForum logo"
              width={200}
              height={60}
              priority
            />
          </Link>

          <nav className="flex items-center gap-5 text-sm text-gray-400">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-label={item.ariaLabel ?? item.label}
                className={`flex items-center gap-2 hover:text-white ${
                  item.highlight ? "text-yellow-400 hover:text-yellow-300" : ""
                }`}
              >
                {item.icon && (
                  <item.icon className="h-5 w-5" />
                )}

                {item.label && (
                  <span className="hidden sm:inline">{item.label}</span>
                )}
              </Link>
            ))}
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