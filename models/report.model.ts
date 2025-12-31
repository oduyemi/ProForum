import mongoose, { Schema, Types, Document } from "mongoose";

export interface IReport extends Document {
  _id: Types.ObjectId;
  reporter: Types.ObjectId;
  targetId: Types.ObjectId;
  targetType: "thread" | "reply";
  reason: string;
  resolved: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const reportSchema = new Schema<IReport>(
  {
    reporter: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },

    targetId: {
      type: Types.ObjectId,
      required: true,
      index: true,
    },

    targetType: {
      type: String,
      enum: ["thread", "reply"],
      required: true,
    },

    reason: {
      type: String,
      required: true,
    },

    resolved: {
      type: Boolean,
      default: false,
      index: true,
    },
  },
  { timestamps: true }
);

const Report =
  mongoose.models.Report ||
  mongoose.model<IReport>("Report", reportSchema);

export default Report;
