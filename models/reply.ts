import { Schema, model, models, Types } from "mongoose";

const ReplySchema = new Schema(
  {
    body: { type: String, required: true }, // markdown
    author: { type: Types.ObjectId, ref: "User", required: true },
    thread: { type: Types.ObjectId, ref: "Thread", required: true },

    parent: { type: Types.ObjectId, ref: "Reply", default: null },

    isAccepted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default models.Reply || model("Reply", ReplySchema);
