"use client";

import { useState, useTransition } from "react";
import { Textarea } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";

interface Props {
  discussionId: string;
}

export const CommentInput = ({ discussionId }: Props) => {
  const [content, setContent] = useState("");
  const [isPending, startTransition] = useTransition();

  const submit = () => {
    if (!content.trim()) return;

    startTransition(() => {
      console.log("Comment for discussion:", discussionId);
      console.log("Content:", content);

      // later: server action / API call
      setContent("");
    });
  };

  return (
    <div className="mt-8 bg-[#0e0e0e] border border-[#C69DD220] rounded-xl p-4">
      <Textarea
        placeholder="Add a thoughtful comment…"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        resize="none"
        rows={3}
        bg="transparent"
        border="none"
        color="white"
        mb={3}
      />

      <div className="flex justify-end">
        <Button
          size="sm"
          disabled={isPending || !content.trim()}
          onClick={submit}
          className="bg-yellow-400 text-black hover:bg-yellow-300"
        >
          Comment
        </Button>
      </div>
    </div>
  );
};
