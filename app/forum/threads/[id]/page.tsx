import { Box, Heading, Text } from "@chakra-ui/react";
import { ThreadActions } from "@/components/forum/ThreadActions";

interface ThreadPageProps {
  params: { id: string };
}

async function getThread(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/forum/threads/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;
  return res.json();
}

export default async function ThreadPage({ params }: ThreadPageProps) {
  const thread = await getThread(params.id);

  if (!thread) {
    return (
      <Box py={20} textAlign="center" color="gray.400">
        Thread not found.
      </Box>
    );
  }

  return (
    <Box maxW="800px">
      <ThreadActions
        canEdit={thread.canEdit}
        onEdit={() => {}}
        onDelete={() => {}}
      />

      <Box mb={8}>
        <Heading size="lg">{thread.title}</Heading>
        <Text fontSize="sm" color="gray.400">
          {thread.author} •{" "}
          {new Date(thread.createdAt).toLocaleDateString()}
        </Text>
      </Box>

      <Box
        className="bg-[#0e0e0e] border border-[#C69DD230] rounded-2xl p-6"
      >
        <Text color="gray.300" lineHeight="1.8">
          {thread.content}
        </Text>
      </Box>
    </Box>
  );
}
