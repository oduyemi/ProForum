/* eslint-disable */
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import User from '@/models/user.model';
import { dbConnect } from '@/utils/db';
import { verifyToken } from '@/utils/auth';

export async function GET() {
  await dbConnect();

  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const decoded = verifyToken(token);

    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      const res = NextResponse.json({ error: "User not found" }, { status: 404 });
      res.cookies.set("token", "", { maxAge: 0 }); // clear invalid session
      return res;
    }

    return NextResponse.json({ user });
  } catch (err: any) {
    if (err.name === "TokenExpiredError") {
      return NextResponse.json({ error: "Session expired. Please log in again." }, { status: 401 });
    }

    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}