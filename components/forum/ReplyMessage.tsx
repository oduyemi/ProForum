"use client";
import { motion } from "framer-motion";
import { Avatar } from "@chakra-ui/react";
import { Vote } from "./Vote";


interface ReplyMessageProps {
  author: string;
  avatarUrl?: string;
  content: string;
  createdAt: string;
  votes: number;
}



export const ReplyMessage = ({
  author,
  avatarUrl,
  content,
  createdAt,
  votes,
}: ReplyMessageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      className="
        flex gap-4
        rounded-2xl
        border border-[#C69DD230]
        bg-[#0e0e0e]
        p-5
      "
    >
      {/* Votes */}
      <Vote initialVotes={votes} />

      <div className="flex-1">
        {/* Author */}
        <div className="flex items-center gap-3">
          <Avatar
            size="sm"
            name={author}
            src={avatarUrl}
            bg="#C69DD230"
            color="#C69DD2"
          />

          <div>
            <p className="text-sm font-medium text-white">
              {author}
            </p>
            <p className="text-xs text-gray-500">
              {createdAt}
            </p>
          </div>
        </div>

        {/* Content */}
        <p className="mt-4 text-sm leading-relaxed text-gray-300">
          {content}
        </p>
      </div>
    </motion.div>
  );
};
