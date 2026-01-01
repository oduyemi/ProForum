import mongoose, { Schema, Document, Types } from "mongoose";

export interface IDiscussion extends Document {
    _id: Types.ObjectId;
    author: Types.ObjectId;
    content: string;
    img?: string;
    url?: string;
    likeCount: number;
    commentCount: number;
    updatedAt: Date;
    createdAt: Date;
}

const discussionSchema = new Schema<IDiscussion>(
  {
    author: { 
        type: Types.ObjectId,
        ref: "User",
        required: true, 
    },

    content: { 
      type: String, 
      required: true 
    },

    img: {
      type: String,
      index: true,
    },

    url: {
      type: String,
      index: true,
      trim: true,
    },

    likeCount: {
        type: Number,
        default: 0,
      },
      
      commentCount: {
        type: Number,
        default: 0,
      },      

    },

    { timestamps: true }
);

const Discussion =
  mongoose.models.Discussion ||
  mongoose.model<IDiscussion>("Discussion", discussionSchema);

export default Discussion;

  