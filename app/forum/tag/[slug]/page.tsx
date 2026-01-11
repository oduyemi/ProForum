import { ThreadCard } from "@/components/forum/ThreadCard";
import { Box, Heading, Text } from "@chakra-ui/react";
import { TAG } from "@/lib/constants/forum";
import { notFound } from "next/navigation";

interface TagPageProps {
  params: {
    slug: string;
  };
}

async function getTagThreads(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/forum/threads?tag=${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) return [];
  const data = await res.json();

  return Array.isArray(data) ? data : [];
}

export default async function TagPage({ params }: TagPageProps) {
  const { slug } = params;

  // 🔒 Validate tag
  const tag = TAG.find((t) => t.value === slug);
  if (!tag) notFound();

  const threads = await getTagThreads(slug);

  return (
    <Box>
      {/* Header */}
      <Box mb={10}>
        <Heading size="lg" mb={2}>
          #{tag.label}
        </Heading>
        <Text fontSize="sm" color="gray.400">
          Conversations tagged with “{tag.label}”
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
            No discussions yet for this tag.
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
