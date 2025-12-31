import { Schema, model, models } from "mongoose";

const CategorySchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, unique: true },
    description: String,
    order: Number,
  },
  { timestamps: true }
);

export default models.Category || model("Category", CategorySchema);
