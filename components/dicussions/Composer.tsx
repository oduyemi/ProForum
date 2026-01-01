"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const DAILY_LIMIT = 3;
const MAX_CHARS = 500;

export const DiscussionComposer = ({ postsToday = 1 }) => {
  const [content, setContent] = useState("");
  const [isPosting, setIsPosting] = useState(false);

  const remaining = DAILY_LIMIT - postsToday;
  const isOverLimit = remaining <= 0;
  const isEmpty = content.trim().length === 0;

  const handleSubmit = async () => {
    if (isEmpty || isOverLimit) return;

    setIsPosting(true);

    // TEMP: dummy submit
    console.log("Submitting discussion:", content);

    // later → call server action / API route
    setContent("");
    setIsPosting(false);
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-[#0e0e0e] p-5 space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-400">
          What’s on your mind today?
        </p>
        <span className="text-xs text-gray-500">
          {remaining} / {DAILY_LIMIT} today
        </span>
      </div>

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Share progress, thoughts, lessons, or struggles..."
        rows={4}
        maxLength={MAX_CHARS}
        disabled={isOverLimit}
        className="w-full resize-none rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-[#C69DD2]"
      />

      <div className="flex items-center justify-between text-xs text-gray-500">
        <span>{content.length} / {MAX_CHARS}</span>

        <Button
          size="sm"
          onClick={handleSubmit}
          disabled={isEmpty || isOverLimit || isPosting}
          className="bg-yellow-400 text-black hover:bg-yellow-300 disabled:opacity-50"
        >
          {isPosting ? "Posting..." : "Post"}
        </Button>
      </div>

      {isOverLimit && (
        <p className="text-xs text-red-400">
          You’ve reached your daily discussion limit. Come back tomorrow 🌱
        </p>
      )}
    </div>
  );
};
