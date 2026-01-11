import { ThreadCard } from "@/components/forum/ThreadCard";
import { Box, Heading, Text } from "@chakra-ui/react";

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

async function getCategoryThreads(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/forum/threads?category=${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) return [];
  const data = await res.json();

  return Array.isArray(data) ? data : [];
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params;
  const threads = await getCategoryThreads(slug);

  return (
    <Box>
      {/* Header */}
      <Box mb={10}>
        <Heading size="lg" mb={2} className="capitalize">
          {slug} discussions
        </Heading>
        <Text fontSize="sm" color="gray.400" maxW="600px">
          Threads focused on {slug}. Learn from shared experiences and
          practical insights.
        </Text>
      </Box>

      {/* Content */}
      {threads.length === 0 ? (
        <Box
          py={20}
          textAlign="center"
          color="gray.500"
          border="1px dashed #C69DD230"
          borderRadius="xl"
        >
          <Text fontSize="sm">
            No discussions yet in this category.
          </Text>
        </Box>
      ) : (
        <Box className="space-y-6">
          {threads.map((thread) => (
            <ThreadCard key={thread.id} {...thread} />
          ))}
        </Box>
      )}
    </Box>
  );
}
