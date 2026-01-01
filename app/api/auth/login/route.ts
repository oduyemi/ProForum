import { NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import User from "@/models/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    await dbConnect();

    const { email, password } = await req.json();

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined");
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    const safeUser = {
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
    };

    const response = NextResponse.json({ user: safeUser });

    response.headers.set(
      "Set-Cookie",
      `token=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${
        60 * 60 * 24 * 7
      }; ${process.env.NODE_ENV === "production" ? "Secure;" : ""}`
    );

    user.lastLogin = new Date();
    await user.save();

    return response;

  } catch (error) {
    console.error("LOGIN ERROR:", error); // 👈 THIS IS THE KEY
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
