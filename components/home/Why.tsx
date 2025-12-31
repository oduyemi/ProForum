"use client";
import { Box, Heading } from "@chakra-ui/react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { GraduationCap, MessageSquare, Users } from "lucide-react";

const MotionCard = motion(Card);

const FEATURES = [
  {
    icon: GraduationCap,
    title: "Mentorship-driven",
    desc: "Learn from people who have walked the path and guide with intent.",
  },
  {
    icon: MessageSquare,
    title: "Signal over noise",
    desc: "Thoughtful discussions, real experiences, and practical advice.",
  },
  {
    icon: Users,
    title: "Community-first",
    desc: "A space for builders who want to grow together — deliberately.",
  },
];

export const Why = () => {
  return (
    <section className="pb-24 pt=18 bg-gradient-to-b from-black to-[#0f0f0f]">
      <Box maxW="1100px" mx="auto" px={4}>
        <Heading size="lg" mb={14} textAlign="center">
          Why <span className="text-[#C69DD2]">ProGrowing</span>?
        </Heading>

        <div className="grid gap-8 md:grid-cols-3">
          {FEATURES.map((item, idx) => (
            <MotionCard
              key={idx}
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-8 bg-[#111] border border-[#C69DD230] hover:border-yellow-400/50 rounded-2xl shadow-xl"
            >
              <item.icon size={30} className="mb-4 text-yellow-400" />
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </MotionCard>
          ))}
        </div>
      </Box>
    </section>
  );
}
