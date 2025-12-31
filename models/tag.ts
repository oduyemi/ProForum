import { Schema, model, models } from "mongoose";

const TagSchema = new Schema({
  name: { type: String, unique: true },
  slug: { type: String, unique: true },
});

export default models.Tag || model("Tag", TagSchema);
