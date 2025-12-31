import { useUser } from "@/context/Usercontext";
import { Box, Heading, Text } from "@chakra-ui/react";

export const ThreadHeader = () => {
  const { user, loading } = useUser();

  if (loading) return <Text>Loading...</Text>;
  if (!user) return <Text>Please log in.</Text>;

  return (
    <Box>
      <Heading size="lg" color="black">Welcome {user.fname}</Heading>
    </Box>
  );
};
