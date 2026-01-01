import { ReactNode } from "react";
import { ForumShell } from "@/components/forum/ForumShell";

export default function DiscussionsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ForumShell
      navItems={[
        { label: "Discussions", href: "/discussions" },
        { label: "Threads", href: "/forum" },
        {
          label: "New Story",
          href: "/discussions/create",
          highlight: true,
        },
      ]}
    >
      <div className="space-y-8">{children}</div>
    </ForumShell>
  );
}
