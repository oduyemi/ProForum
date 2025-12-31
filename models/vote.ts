import mongoose, { Schema, Types, Document } from "mongoose";

export interface IVote extends Document {
  _id: Types.ObjectId;
  user: Types.ObjectId;
  targetId: Types.ObjectId;
  targetType: "thread" | "reply";
  value: 1 | -1;
  createdAt: Date;
  updatedAt: Date;
}

const voteSchema = new Schema<IVote>(
  {
    user: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },

    targetId: {
      type: Types.ObjectId,
      required: true,
      index: true,
    },

    targetType: {
      type: String,
      enum: ["thread", "reply"],
      required: true,
    },

    value: {
      type: Number,
      enum: [1, -1],
      default: 1,
    },
  },
  { timestamps: true }
);

// Prevent multiple votes by same user on same target
voteSchema.index(
  { user: 1, targetId: 1, targetType: 1 },
  { unique: true }
);

const Vote =
  mongoose.models.Vote ||
  mongoose.model<IVote>("Vote", voteSchema);

export default Vote;
