"use client";
import { Box, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

const STEPS = [
  "Ask meaningful questions",
  "Share honest experiences",
  "Grow through feedback & mentorship",
];

export const HowItWorks = () => {
  return (
    <section className="py-24">
      <Box maxW="900px" mx="auto" px={4} textAlign="center">
        <Heading size="lg" mb={14}>
          How it works
        </Heading>

        <div className="grid gap-10 md:grid-cols-3">
          {STEPS.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl border border-[#C69DD230] p-8 bg-[#0e0e0e]">
                <span className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-gradient-to-r from-[#C69DD2] to-yellow-400 text-black font-bold text-sm">
                  0{idx + 1}
                </span>
                <p className="mt-4 font-medium text-gray-200">{step}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Box>
    </section>
  );
}
