"use client";
import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface VoteProps {
  initialVotes: number;
  compact?: boolean;
}


export const Vote = ({ initialVotes, compact = false }: VoteProps) => {
  const [votes, setVotes] = useState(initialVotes);

  return (
    <div
      className={`flex items-center ${
        compact ? "flex-col gap-1 text-xs" : "flex-col gap-2"
      }`}
    >
      <button
        onClick={() => setVotes((v) => v + 1)}
        className="text-gray-400 hover:text-yellow-400"
      >
        <ChevronUp size={compact ? 14 : 18} />
      </button>

      <span className="font-medium">{votes}</span>

      <button
        onClick={() => setVotes((v) => v - 1)}
        className="text-gray-400 hover:text-yellow-400"
      >
        <ChevronDown size={compact ? 14 : 18} />
      </button>
    </div>
  );
};
