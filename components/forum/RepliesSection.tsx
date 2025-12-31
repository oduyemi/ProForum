"use client";
import { useState } from "react";
import { ReplyEditor } from "./Editor";
import { ReplyMessage } from "./ReplyMessage";


export const RepliesSection = ({ initialReplies }: any) => {
  const [replies, setReplies] = useState(initialReplies);

  return (
    <>
      <div className="space-y-4 mb-10">
        {replies.map((reply: any) => (
          <ReplyMessage key={reply.id} {...reply} />
        ))}
      </div>

      <ReplyEditor
        onOptimisticAdd={(reply) =>
          setReplies((prev: any) => [...prev, reply])
        }
      />
    </>
  );
};
