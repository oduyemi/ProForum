import { DiscussionComposer } from "@/components/dicussions/Composer";

export default function DiscussionsPage() {
  return (
    <div className="space-y-8">
      <DiscussionComposer postsToday={1} />
      {/* feed */}
    </div>
  );
}
