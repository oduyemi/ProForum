import { ThreadCard } from "@/components/forum/ThreadCard";
import { Box, Heading, Text } from "@chakra-ui/react";

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params;
  const threads = [
    {
      id: "1",
      title: "How I transitioned from junior to mid-level developer",
      excerpt:
        "Sharing lessons, mistakes, and habits that helped me grow faster in my career...",
      author: "Susan",
      createdAt: "2 hours ago",
      repliesCount: 12,
      votes: 34,
      tag: slug,
    },
    {
      id: "2",
      title: "Best resources to truly understand system design",
      excerpt:
        "Most tutorials are shallow. Here are the ones that actually helped me think like an engineer...",
      author: "Ada",
      createdAt: "1 day ago",
      repliesCount: 8,
      votes: 21,
      tag: slug,
    },
  ];

  return (
    <Box>
      {/* Category Header */}
      <Box mb={10}>
        <Heading size="lg" mb={2} className="capitalize">
          {slug} discussions
        </Heading>
        <Text fontSize="sm" color="gray.400" maxW="600px">
          Threads focused on {slug}. Learn from shared experiences and
          practical insights.
        </Text>
      </Box>

      {/* Threads */}
      <Box className="space-y-6">
        {threads.map((thread) => (
          <ThreadCard key={thread.id} {...thread} />
        ))}
      </Box>
    </Box>
  );
}
