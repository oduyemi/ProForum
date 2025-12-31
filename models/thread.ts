import { Schema, model, models, Types } from "mongoose";

const ThreadSchema = new Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true }, // markdown

    author: { type: Types.ObjectId, ref: "User", required: true },

    category: { type: Types.ObjectId, ref: "Category" },
    tags: [{ type: Types.ObjectId, ref: "Tag" }],

    skillLevel: {
      type: String,
      enum: ["beginner", "intermediate", "advanced"],
    },

    views: { type: Number, default: 0 },

    isPinned: { type: Boolean, default: false },
    isLocked: { type: Boolean, default: false },

    acceptedReply: { type: Types.ObjectId, ref: "Reply" },
  },
  { timestamps: true }
);

ThreadSchema.index({ title: "text", body: "text" });

export default models.Thread || model("Thread", ThreadSchema);
