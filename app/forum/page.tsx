import { ThreadList } from "@/components/forum/ThreadList";
import { Box, Heading, Text } from "@chakra-ui/react";

async function getThreads() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/forum/threads`,
    { cache: "no-store" }
  );

  if (!res.ok) return [];

  const data = await res.json();
  return Array.isArray(data) ? data : [];
}


export default async function ForumWa() {
  const threads = await getThreads();

  return (
    <main className="min-h-screen bg-black text-white">
      <Box maxW="900px" mx="auto" px={4} py={14}>
        {/* Header */}
        <Box mb={12}>
          <Heading size="lg" mb={3}>
            ProGrowing Forum
          </Heading>
          <Text fontSize="sm" color="gray.400">
            Learn publicly. Share honestly. Grow intentionally.
          </Text>
        </Box>

        {/* Feed */}
        {threads.length === 0 ? (
          <Box
            py={20}
            textAlign="center"
            color="gray.500"
            border="1px dashed #C69DD230"
            borderRadius="xl"
          >
            <Text fontSize="sm">
              No threads yet. Be the first to start a discussion.
            </Text>
          </Box>
        ) : (
          <ThreadList threads={threads} />
        )}
      </Box>
    </main>
  );
}




