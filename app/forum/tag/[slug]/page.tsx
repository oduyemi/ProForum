import { ThreadList } from "@/components/forum/ThreadList";
import { Box, Heading, Text } from "@chakra-ui/react";


interface TagPageProps {
  params: {
    slug: string;
  };
}

export default function TagPage({ params }: TagPageProps) {
  const { slug } = params;

  // Mock data
  const threads = [
    {
      id: "1",
      title: "What does growth look like after your first dev job?",
      excerpt:
        "Is it about salary, impact, learning curve, or something else entirely?",
      author: "Samuel",
      createdAt: "3 days ago",
      repliesCount: 18,
      votes: 42,
      tag: slug,
    },
  ];

  return (
    <Box>
      <Box mb={10}>
        <Heading size="lg" mb={2}>
          #{slug}
        </Heading>
        <Text fontSize="sm" color="gray.400">
          Conversations tagged with “{slug}”
        </Text>
      </Box>

      <ThreadList threads={threads} />
    </Box>
  );
}
