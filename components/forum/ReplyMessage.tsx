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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex gap-4 rounded-xl border bg-white p-4"
    >
      <Vote initialVotes={votes} compact />

      <div className="flex-1">
        {/* Author */}
        <div className="flex items-center gap-3">
          <Avatar.Root size="sm">
            <Avatar.Image src={avatarUrl} alt={author} />
            <Avatar.Fallback>
              {author.charAt(0).toUpperCase()}
            </Avatar.Fallback>
          </Avatar.Root>

          <div>
            <p className="text-sm font-medium">{author}</p>
            <p className="text-xs text-muted-foreground">{createdAt}</p>
          </div>
        </div>

        {/* Content */}
        <p className="mt-3 text-sm leading-relaxed text-gray-700">
          {content}
        </p>
      </div>
    </motion.div>
  );
};
