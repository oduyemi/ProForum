"use client";
import { ReactNode, useMemo } from "react";
import { ForumShell } from "@/components/forum/ForumShell";
import { useUser } from "@/context/Usercontext";
import { LogOut } from "lucide-react";

export default function DiscussionsLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { user } = useUser();

  const navItems = useMemo(() => {
    const items = [
      { label: "Discussions", href: "/discussions" },
      { label: "Threads", href: "/forum" },
      {
        label: "New Story",
        href: "/discussions/create",
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

  return (
    <ForumShell navItems={navItems}>
      <div className="space-y-8">{children}</div>
    </ForumShell>
  );
}
