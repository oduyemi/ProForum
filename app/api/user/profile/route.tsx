import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import User from "@/models/user.model";
import { dbConnect } from "@/utils/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface JwtPayload {
  id: string;
  role: "user" | "trusted" | "mentor" | "admin";
}

export async function GET(req: NextRequest) {
  try {
    await dbConnect();

    const token = req.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as JwtPayload;

    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    return NextResponse.json({ user });
  } catch (err) {
    console.error("PROFILE ERROR:", err);
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
