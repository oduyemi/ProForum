import mongoose, { Schema, Document, Types } from "mongoose";

export interface IComment extends Document {
    _id: Types.ObjectId;
    discussion: Types.ObjectId;
    author: Types.ObjectId;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}

const commentSchema = new Schema<IComment>(
  {
    discussion: { 
      type: Types.ObjectId,
      ref: "Discussion",
      required: true, 
    },

    author: { 
        type: Types.ObjectId,
        ref: "User",
        required: true, 
    },

    content: { 
      type: String, 
      required: true 
    },

    },

    { timestamps: true }
);

const Comment =
  mongoose.models.Comment ||
  mongoose.model<IComment>("Comment", commentSchema);

export default Comment;