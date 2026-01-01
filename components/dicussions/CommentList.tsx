import { ReplyMessage } from "@/components/forum/ReplyMessage";

interface Props {
  comments: {
    id: string;
    author: string;
    content: string;
    createdAt: string;
    votes?: number;
  }[];
}

export const CommentList = ({ comments }: Props) => {
  if (!comments.length) {
    return (
      <p className="text-sm text-gray-500 mt-6">
        No comments yet. Be kind and start one 🌱
      </p>
    );
  }

  return (
    <div className="space-y-4 mt-6">
      {comments.map((comment) => (
        <ReplyMessage
          key={comment.id}
          author={comment.author}
          content={comment.content}
          createdAt={comment.createdAt}
          votes={comment.votes ?? 0}
        />
      ))}
    </div>
  );
};
