"use client";
import { Heart, MessageCircle } from "lucide-react";

interface Props {
  liked: boolean;
  likeCount: number;
  commentCount: number;
  onLike: () => void;
}

export const DiscussionActions = ({
  liked,
  likeCount,
  commentCount,
  onLike,
}: Props) => {
  return (
    <div className="flex items-center gap-6 text-xs text-gray-500">
      <button
        onClick={onLike}
        className={`flex items-center gap-1 transition
          ${liked ? "text-yellow-400" : "hover:text-yellow-400"}
        `}
      >
        <Heart size={14} fill={liked ? "currentColor" : "none"} />
        {likeCount}
      </button>

      <div className="flex items-center gap-1">
        <MessageCircle size={14} />
        {commentCount}
      </div>
    </div>
  );
};
