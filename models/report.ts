import { Schema, model, models, Types } from "mongoose";

const ReportSchema = new Schema(
  {
    reporter: { type: Types.ObjectId, ref: "User" },
    targetId: { type: Types.ObjectId },
    targetType: { type: String, enum: ["thread", "reply"] },

    reason: String,
    resolved: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default models.Report || model("Report", ReportSchema);
