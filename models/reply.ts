import mongoose, { Schema, Types, Document } from "mongoose";

export interface IReply extends Document {
  _id: Types.ObjectId;
  body: string;
  author: Types.ObjectId;
  thread: Types.ObjectId;
  parent?: Types.ObjectId | null;
  isAccepted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const replySchema = new Schema<IReply>(
  {
    body: {
      type: String,
      required: true,
    },

    author: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    thread: {
      type: Types.ObjectId,
      ref: "Thread",
      required: true,
      index: true,
    },

    parent: {
      type: Types.ObjectId,
      ref: "Reply",
      default: null,
    },

    isAccepted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Common query patterns
replySchema.index({ thread: 1, createdAt: 1 });

const Reply =
  mongoose.models.Reply ||
  mongoose.model<IReply>("Reply", replySchema);

export default Reply;
