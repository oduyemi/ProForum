"use client";
import { Box, Heading, Text, Input, Textarea } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";



export default function CreateThreadPage() {
  return (
    <Box maxW="700px" mx="auto">
      {/* Header */}
      <Box mb={10}>
        <Heading size="lg" mb={2}>
          Start a new discussion
        </Heading>
        <Text fontSize="sm" color="gray.400">
          Ask meaningful questions. Share real experiences.
        </Text>
      </Box>

      {/* Form */}
      <Box className="space-y-6">
        {/* Title */}
        <Box>
          <label className="block mb-2 text-sm text-gray-300">
            Thread title
          </label>
          <Input
            placeholder="Be specific and thoughtful"
            bg="#0e0e0e"
            borderColor="#C69DD230"
            _hover={{ borderColor: "#C69DD260" }}
            _focus={{ borderColor: "#C69DD2" }}
          />
        </Box>

        {/* Content */}
        <Box>
          <label className="block mb-2 text-sm text-gray-300">
            Content
          </label>
          <Textarea
            placeholder="Share context, details, and what you’ve tried..."
            rows={8}
            bg="#0e0e0e"
            borderColor="#C69DD230"
            _hover={{ borderColor: "#C69DD260" }}
            _focus={{ borderColor: "#C69DD2" }}
          />
        </Box>

        {/* Actions */}
        <div className="flex justify-end gap-3 pt-4">
          <Button variant="outline" className="border-gray-600 text-gray-300">
            Cancel
          </Button>

          <Button className="bg-yellow-400 text-black hover:bg-yellow-300">
            Publish Thread
          </Button>
        </div>
      </Box>
    </Box>
  );
}
