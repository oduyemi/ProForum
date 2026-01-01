import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { dbConnect } from "@/utils/db";
import User from "@/models/user.model";

export async function GET() {
  await dbConnect();

  const cookieStore = await cookies(); // ✅ MUST be awaited
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      id: string;
    };

    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({
      user: {
        _id: user._id,
        fname: user.fname,
        lname: user.lname,
        username: user.username,
        email: user.email,
        image: user.image,
        role: user.role,
        expertise: user.expertise,
        reputation: user.reputation,
        emailVerified: user.emailVerified,
        profileCompleted: user.profileCompleted,
        lastLogin: user.lastLogin,
      },
    });
  } catch {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}
