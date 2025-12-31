import { ThreadCard } from "./ThreadCard";
import { Box } from "@chakra-ui/react";


interface Thread {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  createdAt: string;
  repliesCount: number;
  votes: number;
  tag?: string;
}

interface ThreadListProps {
  threads: Thread[];
}

export const ThreadList = ({ threads }: ThreadListProps) => {
  if (!threads.length) {
    return (
      <Box className="text-center text-gray-500 py-20">
        No discussions yet. Be the first to start one.
      </Box>
    );
  }

  return (
    <Box className="space-y-6">
      {threads.map((thread) => (
        <ThreadCard key={thread.id} {...thread} />
      ))}
    </Box>
  );
};
