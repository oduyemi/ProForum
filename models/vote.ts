import { Schema, model, models, Types } from "mongoose";

const VoteSchema = new Schema(
  {
    user: { type: Types.ObjectId, ref: "User", required: true },
    targetId: { type: Types.ObjectId, required: true },
    targetType: {
      type: String,
      enum: ["thread", "reply"],
      required: true,
    },
    value: { type: Number, enum: [1, -1], default: 1 },
  },
  { timestamps: true }
);

VoteSchema.index({ user: 1, targetId: 1 }, { unique: true });

export default models.Vote || model("Vote", VoteSchema);
