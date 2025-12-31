import mongoose, { Types, Schema, Document } from "mongoose";

export interface ICategory extends Document {
  _id: Types.ObjectId
  name: string;
  slug: string;
  description?: string;
  order?: number;
  createdAt: Date;
  updatedAt: Date;
}

const categorySchema = new Schema<ICategory>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
    },

    description: String,

    order: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Category =
  mongoose.models.Category ||
  mongoose.model<ICategory>("Category", categorySchema);

export default Category;
