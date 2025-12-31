import mongoose, { Schema, Document, Types } from "mongoose";

export interface IUser extends Document {
  _id: Types.ObjectId;
  name: string;
  username: string;
  email: string;
  image?: string;
  role: "user" | "trusted" | "mentor" | "admin";
  expertise: string[];
  reputation: number;
  isBanned: boolean;
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },

    username: {
      type: String,
      unique: true,
      index: true,
      required: true,
    },

    email: {
      type: String,
      unique: true,
      index: true,
      required: true,
    },

    image: String,

    role: {
      type: String,
      enum: ["user", "trusted", "mentor", "admin"],
      default: "user",
    },

    expertise: [String],

    reputation: {
      type: Number,
      default: 0,
    },

    isBanned: {
      type: Boolean,
      default: false,
    },

    lastLogin: Date,
  },
  { timestamps: true }
);

const User =
  mongoose.models.User ||
  mongoose.model<IUser>("User", userSchema);

export default User;
