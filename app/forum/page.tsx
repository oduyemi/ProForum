"use client";
import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Input,
  Textarea,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { CATEGORY, TAG } from "@/lib/constants/forum";

export default function CreateThreadPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  const isDisabled =
    !title.trim() ||
    !content.trim() ||
    categories.length === 0;

  return (
    <Box maxW="780px" mx="auto">
      {/* Header */}
      <Box mb={12}>
        <Heading size="lg" mb={3}>
          Start a new discussion
        </Heading>
        <Text fontSize="sm" color="gray.400" maxW="520px">
          Select all categories and tags that best describe your discussion.
        </Text>
      </Box>

      {/* Card */}
      <Box
        bg="#0e0e0e"
        border="1px solid #C69DD230"
        borderRadius="2xl"
        p={10}
        className="space-y-10"
      >
        {/* Title */}
        <Box>
          <Text mb={2} fontSize="sm" color="gray.200">
            Thread title
          </Text>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Clear, specific, searchable"
            bg="#0b0b0b"
            borderColor="#C69DD230"
            _hover={{ borderColor: "#C69DD260" }}
            _focus={{ borderColor: "#C69DD2" }}
          />
        </Box>

        {/* Content */}
        <Box>
          <Text mb={2} fontSize="sm" color="gray.200">
            Details
          </Text>
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Context, constraints, examples, what you've tried…"
            rows={8}
            bg="#0b0b0b"
            borderColor="#C69DD230"
            _hover={{ borderColor: "#C69DD260" }}
            _focus={{ borderColor: "#C69DD2" }}
          />
        </Box>

        {/* Categories */}
        <Box>
          <Text mb={3} fontSize="sm" color="gray.200">
            Categories <span className="text-red-400">*</span>
          </Text>

          <Box
            bg="#0b0b0b"
            border="1px solid #C69DD230"
            borderRadius="xl"
            p={5}
          >
            <CheckboxGroup
              value={categories}
              onChange={(v) => setCategories(v as string[])}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {CATEGORY.map((c) => (
                  <Checkbox
                    key={c.value}
                    value={c.value}
                    colorScheme="yellow"
                  >
                    {c.label}
                  </Checkbox>
                ))}
              </div>
            </CheckboxGroup>
          </Box>

          <Text mt={2} fontSize="xs" color="gray.500">
            Choose one or more relevant domains.
          </Text>
        </Box>

        {/* Tags */}
        <Box>
          <Text mb={3} fontSize="sm" color="gray.200">
            Tags <span className="text-gray-500">(optional)</span>
          </Text>

          <Box
            bg="#0b0b0b"
            border="1px solid #C69DD230"
            borderRadius="xl"
            p={5}
          >
            <CheckboxGroup
              value={tags}
              onChange={(v) => setTags(v as string[])}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {TAG.map((tag) => (
                  <Checkbox
                    key={tag.value}
                    value={tag.value}
                    colorScheme="yellow"
                  >
                    {tag.label}
                  </Checkbox>
                ))}
              </div>
            </CheckboxGroup>
          </Box>
        </Box>

        {/* Actions */}
        <div className="flex justify-end gap-3 pt-6 border-t border-[#C69DD220]">
          <Button
            variant="outline"
            className="border-gray-600 text-gray-300"
            onClick={() => router.back()}
          >
            Cancel
          </Button>

          <Button
            disabled={isDisabled}
            className="bg-yellow-400 text-black hover:bg-yellow-300 disabled:opacity-60"
          >
            Publish
          </Button>
        </div>
      </Box>
    </Box>
  );
}
