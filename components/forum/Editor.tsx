"use client";
import { useState, useTransition } from "react";
import { Textarea } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";


interface ReplyEditorProps {
  onOptimisticAdd?: (reply: {
    id: string;
    content: string;
    author: string;
    createdAt: string;
  }) => void;
}


export const ReplyEditor = ({ onOptimisticAdd }: ReplyEditorProps) => {
  const [content, setContent] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    if (!content.trim()) return;

    const optimisticReply = {
      id: crypto.randomUUID(),
      content,
      author: "You",
      createdAt: "just now",
    };

    onOptimisticAdd?.(optimisticReply);
    setContent("");

    startTransition(async () => {
      try {
        // await createReplyAction(content)
      } catch {
        // TODO: rollback if needed
      }
    });
  };

  return (
    <div className="border border-[#C69DD230] rounded-2xl p-4 bg-[#0e0e0e]">
      <Textarea
        placeholder="Write a thoughtful reply…"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        bg="#0e0e0e"
        border="none"
        resize="none"
        mb={4}
      />

      <div className="flex justify-end">
        <Button
          onClick={handleSubmit}
          disabled={isPending}
          className="bg-yellow-400 text-black hover:bg-yellow-300"
        >
          Reply
        </Button>
      </div>
    </div>
  );
};
