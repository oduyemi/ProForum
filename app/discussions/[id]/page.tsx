import { DiscussionCard } from "@/components/dicussions/Card";
import { CommentInput } from "@/components/dicussions/CommentInput";
import { CommentList } from "@/components/dicussions/CommentList";

interface PageProps {
  params: { id: string };
}

export default function DiscussionDetailPage({ params }: PageProps) {
    const discussion = {
        id: params.id,
        author: {
          fname: "Susan",
        },
        content:
          "Day 14 of consistency. Shipped a tiny feature, resisted overthinking, and slept well.",
        createdAt: "Today • 9:14 AM",
        likeCount: 12,
        commentCount: 3,
      };
      

  const comments = [
    {
      id: "c1",
      author: "Ada",
      content: "This consistency streak is inspiring 🔥",
      createdAt: "2 hours ago",
    },
    {
      id: "c2",
      author: "Samuel",
      content: "Shipping tiny things really compounds.",
      createdAt: "1 hour ago",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-8">
        <DiscussionCard
            id={discussion.id}
            author={discussion.author}
            content={discussion.content}
            createdAt={discussion.createdAt}
            likeCount={discussion.likeCount}
            commentCount={discussion.commentCount}
        />
      <CommentList comments={comments} />
      <CommentInput discussionId={discussion.id} />
    </div>
  );
}
