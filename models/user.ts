import { Schema, model, models, Types } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    username: { type: String, unique: true, index: true },
    email: { type: String, unique: true, index: true },
    image: String,

    role: {
      type: String,
      enum: ["user", "trusted", "mentor", "admin"],
      default: "user",
    },

    expertise: [String], // ["frontend", "devops", "data"]
    reputation: { type: Number, default: 0 },

    isBanned: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default models.User || model("User", UserSchema);
