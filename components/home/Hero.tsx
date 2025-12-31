"use client";
import { Box, Heading, Text } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#C69DD230,transparent_60%)]" />

      <Box
        maxW="1100px"
        mx="auto"
        px={4}
        py={28}
        textAlign="center"
        position="relative"
        zIndex={1}
      >
        <Heading size="2xl" mb={6} mt={12} lineHeight="1.05" className="font-bold">
          <span className="bg-gradient-to-r from-[#C69DD2] to-yellow-400 bg-clip-text text-transparent">
            Grow intentionally.
          </span>
          <br />
          <span className="text-gray-400 text-3xl md:text-4xl">
            Learn with people who care.
          </span>
        </Heading>

        <Text
          fontSize="lg"
          maxW="720px"
          mx="auto"
          color="gray.400"
          mb={12}
        >
          ProGrowing is a community-driven forum for developers and builders who
          value mentorship, clarity, and long-term growth — not noise.
        </Text>

        <div className="flex justify-center gap-4">
            <Link
                href="/forum"
                rel="noopener noreferrer"
            >
                <Button
                    size="lg"
                    href="/forum"
                    className="gap-2 bg-yellow-400 text-black hover:bg-yellow-300 shadow-lg"
                >
                    Join the Forum
                    <ArrowRight size={18} />
                </Button>
            </Link>

            <Link
                href="discussions"
                rel="noopener noreferrer"
            >
                <Button
                    size="lg"
                    variant="outline"
                    className="border-[#C69DD2] text-[#C69DD2] hover:bg-[#C69DD215]"
                >
                    Explore Discussions
                </Button>
            </Link>
        </div>
      </Box>
    </section>
  );
}
