import { NextResponse } from "next/server";
import User from "@/models/user.model";
import { dbConnect } from "@/utils/db";

export async function GET() {
  try {
    await dbConnect();

    const users = await User.find({
      image: { $exists: true, $ne: "" },
      isBanned: false,
    }).select("fname lname username image expertise");

    const images = users.map((user) => ({
      image: user.image,
      name: `${user.fname} ${user.lname}`,
      username: user.username,
      expertise: user.expertise,
    }));

    return NextResponse.json(images);
  } catch (err) {
    console.error("Display picture fetch error:", err);
    return NextResponse.json(
      { error: "Failed to load display pictures" },
      { status: 500 }
    );
  }
}
