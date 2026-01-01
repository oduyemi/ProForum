import mongoose, { Schema, Document, Types } from "mongoose";

export interface ILikes extends Document {
    _id: Types.ObjectId;
    user: Types.ObjectId;
    discussion: Types.ObjectId;
}

const discussionLikesSchema = new Schema<ILikes>(
  {
    user: { 
      type: Types.ObjectId,
      ref: "User",
      required: true, 
    },

    discussion: { 
        type: Types.ObjectId,
        ref: "Discussion",
        required: true, 
    },
  }
);

const Likes =
  mongoose.models.Likes ||
  mongoose.model<ILikes>("Likes", discussionLikesSchema);

export default Likes;

  