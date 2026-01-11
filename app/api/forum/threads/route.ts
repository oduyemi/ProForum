import { NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import Thread from "@/models/thread.model";

export async function GET(req: Request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const tag = searchParams.get("tag");
    const query: Record<string, any> = {};
    if (category) {
      query.skillLevel = category;
    }

    if (tag) {
      query.skillLevel = tag; 
    }

    const threads = await Thread.find(query)
      .populate("author", "username")
      .sort({ isPinned: -1, createdAt: -1 })
      .lean();

    const mapped = threads.map((t: any) => ({
      id: t._id.toString(),
      title: t.title,
      excerpt: t.body ? `${t.body.slice(0, 160)}...` : "",
      author: t.author?.username ?? "Unknown",
      createdAt: t.createdAt?.toISOString(),
      repliesCount: 0,
      votes: 0,
      tag: t.skillLevel,
    }));

    return NextResponse.json(mapped);
  } catch (error) {
    console.error("Failed to fetch threads:", error);
    return NextResponse.json(
      { message: "Failed to fetch threads" },
      { status: 500 }
    );
  }
}
