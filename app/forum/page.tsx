import { ThreadCard } from "@/components/forum/ThreadCard";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function ForumWa() {
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
      tag: "Career",
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
      tag: "Backend",
    },
    {
      id: "3",
      title: "What does growth look like after your first dev job?",
      excerpt:
        "Is it about salary, impact, learning curve, or something else entirely?",
      author: "Samuel",
      createdAt: "3 days ago",
      repliesCount: 18,
      votes: 42,
      tag: "Mindset",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Box maxW="900px" mx="auto" px={4} py={14}>
        {/* Page Header */}
        <Box mb={12}>
          <Heading size="lg" mb={3}>
            ProGrowing Forum
          </Heading>
          <Text fontSize="sm" color="gray.400" maxW="600px">
            Learn publicly. Share honestly. Grow intentionally.
          </Text>
        </Box>

        {/* Thread Feed */}
        <Box className="space-y-6">
          {threads.map((thread) => (
            <ThreadCard key={thread.id} {...thread} />
          ))}
        </Box>
      </Box>
    </main>
  );
}
