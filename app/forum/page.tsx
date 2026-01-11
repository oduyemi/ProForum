import Link from "next/link";
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
            px={6}
            textAlign="center"
            border="1px dashed #C69DD230"
            borderRadius="2xl"
            bg="#0e0e0e"
          >
            <Heading size="md" mb={3}>
              Start the first conversation
            </Heading>

            <Text fontSize="sm" color="gray.400" mb={6} maxW="420px" mx="auto">
              Every great community starts with a single question or experience.
              Share what you’re learning or struggling with.
            </Text>

            <Link href="/forum/create">
              <span
                className="
                  inline-flex items-center justify-center
                  px-5 py-2.5
                  rounded-lg
                  bg-yellow-400
                  text-black
                  font-medium
                  hover:bg-yellow-300
                  transition
                "
              >
                Start a Conversation
              </span>
            </Link>
          </Box>
        ) : (
          <ThreadList threads={threads} />
        )}
      </Box>
    </main>
  );
}
