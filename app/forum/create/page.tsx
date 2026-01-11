"use client";

import { useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { Check, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";

import { CATEGORY, TAG } from "@/lib/constants/forum";

export default function CreateThreadPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  const isDisabled =
    !title.trim() || !content.trim() || categories.length === 0;

  return (
    <Box maxW="760px" mx="auto">
      {/* Header */}
      <Box mb={12}>
        <Heading size="lg" mb={3}>
          Start a new discussion
        </Heading>
        <Text fontSize="sm" color="gray.400" maxW="520px">
          Choose categories and relevant tags to help others discover your post.
        </Text>
      </Box>

      {/* Card */}
      <Box
        className="
          bg-[#0e0e0e]
          border border-[#C69DD230]
          rounded-2xl
          p-10
          space-y-8
        "
      >
        {/* Title */}
        <Box>
          <Text mb={2} fontSize="sm" color="gray.200">
            Thread title
          </Text>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Be clear and specific"
            className="bg-[#0b0b0b] border-[#C69DD230] text-white"
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
            placeholder="Share context, constraints, and what you've tried..."
            rows={8}
            className="bg-[#0b0b0b] border-[#C69DD230] text-white"
          />
        </Box>

        {/* Categories (Multi-select dropdown) */}
        <Box>
          <Text mb={2} fontSize="sm" color="gray.200">
            Categories <span className="text-red-400">*</span>
          </Text>

          <Popover>
            <PopoverTrigger asChild>
              <button
                type="button"
                className="
                  flex w-full items-center justify-between
                  rounded-md border border-[#C69DD230]
                  bg-[#0b0b0b] px-3 py-2 text-sm text-white
                  hover:border-[#C69DD260]
                "
              >
                {categories.length > 0
                  ? CATEGORY.filter((c) =>
                      categories.includes(c.value)
                    )
                      .map((c) => c.label)
                      .join(", ")
                  : "Select categories"}

                <ChevronDown className="h-4 w-4 opacity-60" />
              </button>
            </PopoverTrigger>

            <PopoverContent
              className="w-[320px] p-0 bg-[#0e0e0e] border-[#C69DD230]"
              align="start"
            >
              <Command>
                <CommandEmpty>No category found.</CommandEmpty>

                <CommandGroup>
                  {CATEGORY.map((c) => {
                    const isSelected = categories.includes(c.value);

                    return (
                      <CommandItem
                        key={c.value}
                        onSelect={() =>
                          setCategories((prev) =>
                            isSelected
                              ? prev.filter((v) => v !== c.value)
                              : [...prev, c.value]
                          )
                        }
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <Check
                          className={`h-4 w-4 ${
                            isSelected ? "opacity-100" : "opacity-0"
                          }`}
                        />
                        {c.label}
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
        </Box>

        {/* Tags */}
        <Box>
          <Text mb={2} fontSize="sm" color="gray.200">
            Tags <span className="text-gray-500">(optional)</span>
          </Text>

          <div className="bg-[#0b0b0b] border border-[#C69DD230] rounded-md p-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {TAG.map((tag) => {
                const checked = tags.includes(tag.value);

                return (
                  <label
                    key={tag.value}
                    className="flex items-center gap-2 text-sm text-gray-200 cursor-pointer"
                  >
                    <Checkbox
                      checked={checked}
                      onCheckedChange={(value) =>
                        setTags((prev) =>
                          value
                            ? [...prev, tag.value]
                            : prev.filter((t) => t !== tag.value)
                        )
                      }
                    />
                    {tag.label}
                  </label>
                );
              })}
            </div>
          </div>

          <Text mt={2} fontSize="xs" color="gray.500">
            Select any that apply.
          </Text>
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
