"use client";
import { Box, Heading, Text } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Cta = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#C69DD2] to-yellow-400 opacity-90" />
      <div className="absolute inset-0 bg-black/30" />

      <Box
        maxW="800px"
        mx="auto"
        px={4}
        textAlign="center"
        position="relative"
        zIndex={1}
      >
        <Heading size="lg" color="black" mb={4}>
          Ready to grow intentionally?
        </Heading>

        <Text color="blackAlpha.800" mb={10}>
          Join thoughtful conversations that actually move your career forward.
        </Text>

        <Link
          href="https://chat.whatsapp.com/CwXJQItHh3d6yviZlTa8Iz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="lg"
            className="
              gap-2 
              bg-black 
              text-yellow-400 
              hover:bg-black/90 
              shadow-xl
              focus-visible:ring-2
              focus-visible:ring-yellow-400
              focus-visible:ring-offset-2
              focus-visible:ring-offset-black
            "
          >
            Join WhatsApp Community
            <ArrowRight size={18} />
          </Button>
        </Link>
      </Box>
    </section>
  );
};
