"use client";
import { DiscussionComposer } from "@/components/dicussions/Composer";
import { DiscussionFeed } from "@/components/dicussions/Feed";
import { discussions } from "@/lib/discussions";
import { groupDiscussionsByDay } from "@/lib/groupDiscussions";

export default function DiscussionsWa() {
    const grouped = groupDiscussionsByDay(discussions);

  return (
    <div>
        <h1 className="text-2xl font-semibold tracking-tight">
  Daily Discussions
</h1>
<p className="text-gray-400 text-sm max-w-xl">
  What are you working on today? Share progress, thoughts, or lessons —
  up to 3 posts per day.
</p>

        <DiscussionComposer postsToday={0} />


      <DiscussionFeed grouped={grouped} />
    </div>
  );
}
