"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, MessageCircle } from "lucide-react";

interface Props {
  id: string;
  author: {
    fname: string;
    avatar?: string;
  };
  content: string;
  createdAt: string;
  likeCount: number;
  commentCount: number;
}

export const DiscussionCard = ({
  id,
  author,
  content,
  createdAt,
  likeCount,
  commentCount,
}: Props) => {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="relative"
    >
      <Link
        href={`/discussions/${id}`}
        className="absolute inset-0 z-0 rounded-2xl"
        aria-label="View discussion"
      />

      <div className="relative z-10 bg-[#0e0e0e] border border-[#C69DD220] rounded-2xl p-5 hover:border-[#C69DD2]/40 transition">
        <p className="text-sm text-gray-300 leading-relaxed mb-4">
          {content}
        </p>

        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>
            {author.fname} • {createdAt}
          </span>

          <div className="flex items-center gap-4">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              className="flex items-center gap-1 hover:text-yellow-400"
            >
              <Heart size={14} />
              {likeCount}
            </button>

            <div className="flex items-center gap-1">
              <MessageCircle size={14} />
              {commentCount}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
