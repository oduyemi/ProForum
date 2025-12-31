"use client";

import { useState, useTransition } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export const Vote = ({ initialVotes }: { initialVotes: number }) => {
  const [votes, setVotes] = useState(initialVotes);
  const [isPending, startTransition] = useTransition();

  const vote = (delta: number) => {
    setVotes((v) => v + delta);

    startTransition(async () => {
      try {
        // await voteAction(delta)
      } catch {
        setVotes((v) => v - delta); // rollback
      }
    });
  };

  return (
    <div className="flex flex-col items-center text-gray-400">
      <button
        disabled={isPending}
        onClick={() => vote(1)}
        className="hover:text-yellow-400"
      >
        <ChevronUp />
      </button>

      <span className="text-sm font-medium text-white">
        {votes}
      </span>

      <button
        disabled={isPending}
        onClick={() => vote(-1)}
        className="hover:text-yellow-400"
      >
        <ChevronDown />
      </button>
    </div>
  );
};
