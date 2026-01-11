"use client";
import { DiscussionComposer } from "@/components/dicussions/Composer";
import { useUser } from "@/context/Usercontext";
import { useRouter } from "next/navigation";

export default function DiscussionsPage() {
  const { user, loading } = useUser();
  const router = useRouter();
  
  return (
    <div className="space-y-8">
      <DiscussionComposer postsToday={1} />
      {/* feed */}
    </div>
  );
}
