"use client";
import { Box, Heading, Text, Input, Textarea } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";

export const CreateThreadForm = () => {
  return (
    <Box maxW="700px" mx="auto">
      <Heading size="lg" mb={2}>
        Start a new discussion
      </Heading>
      <Text fontSize="sm" color="gray.400" mb={8}>
        Ask meaningful questions. Share real experiences.
      </Text>

      <Box className="space-y-6">
        <Input placeholder="Thread title" />
        <Textarea rows={8} placeholder="Write your thoughts…" />

        <div className="flex justify-end">
          <Button className="bg-yellow-400 text-black hover:bg-yellow-300">
            Publish Thread
          </Button>
        </div>
      </Box>
    </Box>
  );
}
