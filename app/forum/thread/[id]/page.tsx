import { Box, Heading, Text } from "@chakra-ui/react";
import { ThreadActions } from "@/components/forum/ThreadActions";
import { RepliesSection } from "@/components/forum/RepliesSection";
import { MessageCircle } from "lucide-react";

interface ThreadPageProps {
  params: { id: string };
}

export default async function ThreadPage({ params }: ThreadPageProps) {
  const thread = {
    id: params.id,
    title: "How I transitioned from junior to mid-level developer",
    content:
      "Sharing lessons, mistakes, and habits that helped me grow faster in my career...",
    author: "Opeyemi",
    createdAt: "2 hours ago",
    repliesCount: 2,
    canEdit: true,
  };

  const replies = [
    {
      id: "r1",
      author: "Ada",
      content: "This resonates a lot. Especially the mentorship part.",
      createdAt: "1 hour ago",
      votes: 3,
    },
    {
      id: "r2",
      author: "Samuel",
      content: "Curious — what was the hardest habit to build?",
      createdAt: "30 mins ago",
      votes: 1,
    },
  ];

  return (
    <Box maxW="800px">
      <ThreadActions
        canEdit={thread.canEdit}
        onEdit={() => {}}
        onDelete={() => {}}
      />

      <Box mb={8}>
        <Heading size="lg" mb={3}>
          {thread.title}
        </Heading>
        <Text fontSize="sm" color="gray.400">
          {thread.author} • {thread.createdAt}
        </Text>
      </Box>

      <Box className="bg-[#0e0e0e] border border-[#C69DD230] rounded-2xl p-6 mb-10">
        <Text color="gray.300" lineHeight="1.8">
          {thread.content}
        </Text>
      </Box>

      <div className="flex items-center gap-2 text-gray-400 mb-6">
        <MessageCircle size={16} />
        <span>{thread.repliesCount} replies</span>
      </div>

      <RepliesSection initialReplies={replies} />
    </Box>
  );
}
