"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Vote } from "./Vote";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ThreadCardProps {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  createdAt: string;
  repliesCount: number;
  votes: number;
  tag?: string;
}

export const ThreadCard = ({
  id,
  title,
  excerpt,
  author,
  createdAt,
  repliesCount,
  votes,
  tag,
}: ThreadCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 250 }}
    >
      <Card
        className="
          p-6 flex gap-5
          bg-[#0e0e0e]
          border border-[#C69DD230]
          rounded-2xl
          transition
          hover:border-yellow-400/40
          hover:shadow-[0_10px_40px_-10px_rgba(198,157,210,0.25)]
        "
      >
        {/* Votes */}
        <Vote initialVotes={votes} />

        {/* Content */}
        <div className="flex-1 space-y-3">
          {/* Tag */}
          {tag && (
            <Badge
              className="
                bg-[#C69DD215]
                text-[#C69DD2]
                border border-[#C69DD240]
                hover:bg-[#C69DD225]
              "
            >
              {tag}
            </Badge>
          )}

          {/* Title */}
          <Link href={`/forum/thread/${id}`}>
            <h2 className="text-lg font-semibold leading-snug text-white hover:text-yellow-400 transition">
              {title}
            </h2>
          </Link>

          {/* Excerpt */}
          <p className="text-sm text-gray-400 line-clamp-2">
            {excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span className="text-gray-400">{author}</span>
            <span>•</span>
            <span>{createdAt}</span>

            <span className="flex items-center gap-1 ml-auto">
              <MessageCircle size={14} />
              {repliesCount}
            </span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
