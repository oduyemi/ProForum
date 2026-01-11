import { NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import Category from "@/models/category.model";
import Tag from "@/models/tag.model";

export async function GET() {
  await dbConnect();

  const categories = await Category.find().sort({ order: 1 }).lean();
  const tags = await Tag.find().lean();

  return NextResponse.json({ categories, tags });
}
