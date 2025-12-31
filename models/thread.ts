import mongoose, { Schema, Types, Document } from "mongoose";

export interface IThread extends Document {
  _id: Types.ObjectId;
  title: string;
  body: string;
  author: Types.ObjectId;
  category?: Types.ObjectId;
  tags: Types.ObjectId[];
  skillLevel: "beginner" | "intermediate" | "advanced";
  views: number;
  isPinned: boolean;
  isLocked: boolean;
  acceptedReply?: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const threadSchema = new Schema<IThread>(
  {
    title: { type: String, required: true },
    body: { type: String, required: true }, // markdown

    author: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },

    category: {
      type: Types.ObjectId,
      ref: "Category",
    },

    tags: [
      {
        type: Types.ObjectId,
        ref: "Tag",
      },
    ],

    skillLevel: {
      type: String,
      enum: ["beginner", "intermediate", "advanced"],
      default: "beginner",
    },

    views: { type: Number, default: 0 },

    isPinned: { type: Boolean, default: false },
    isLocked: { type: Boolean, default: false },

    acceptedReply: {
      type: Types.ObjectId,
      ref: "Reply",
    },
  },
  { timestamps: true }
);

// Full-text search
threadSchema.index({ title: "text", body: "text" });

const Thread =
  mongoose.models.Thread ||
  mongoose.model<IThread>("Thread", threadSchema);

export default Thread;
