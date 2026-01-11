"use client";
import { ReactNode, useMemo } from "react";
import { ForumShell, type ForumNavItem } from "@/components/forum/ForumShell";
import { useUser } from "@/context/Usercontext";
import { LogOut } from "lucide-react";

export default function ForumLayout({ children }: { children: ReactNode }) {
  const { user } = useUser();
  const navItems: ForumNavItem[] = useMemo(() => {
    const items: ForumNavItem[] = [
      { label: "Threads", href: "/forum" },
      { label: "Discussions", href: "/discussions" },
      {
        label: "New",
        href: "/forum/create",
        highlight: true,
      },
    ];

    if (user) {
      items.push({
        href: "/logout",
        icon: LogOut,
        ariaLabel: "Logout",
      });
    }

    return items;
  }, [user]);

  return <ForumShell navItems={navItems}>{children}</ForumShell>;
}
