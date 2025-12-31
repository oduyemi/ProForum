import mongoose, { Types, Schema, Document } from "mongoose";

export interface ITag extends Document {
  _id: Types.ObjectId;
  name: string;
  slug: string;
}

const tagSchema = new Schema<ITag>(
  {
    name: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
    },
  },
  { timestamps: false }
);

const Tag =
  mongoose.models.Tag ||
  mongoose.model<ITag>("Tag", tagSchema);

export default Tag;
