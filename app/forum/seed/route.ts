import { NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import Category from "@/models/category.model";
import Tag from "@/models/tag.model";
import { CATEGORY, TAG } from "@/lib/constants/forum";

export async function POST() {
  await dbConnect();

  await Category.insertMany(CATEGORY, { ordered: false }).catch(() => {});
  await Tag.insertMany(TAG, { ordered: false }).catch(() => {});

  return NextResponse.json({ success: true });
}
