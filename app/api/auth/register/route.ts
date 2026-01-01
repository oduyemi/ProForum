import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import User from "@/models/user.model";
import bcrypt from "bcryptjs";
import { sendVerificationMail } from "@/helper/sendVerificationMail";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const body = await req.json();
    const {
      fname,
      lname,
      username,
      email,
      password,
      confirmPassword,
      expertise = [],
    } = body;

    if (!fname || !lname || !email || !password || !confirmPassword || !username) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (password !== confirmPassword) {
      return NextResponse.json(
        { error: "Passwords do not match" },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({
      $or: [{ email }, { username }],
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Email or username already exists." },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const code = Math.floor(100000 + Math.random() * 900000).toString();

    await User.create({
      fname,
      lname,
      username,
      email,
      password: hashedPassword,
      expertise,
      emailVerified: false,
      profileCompleted: false,
      verificationCode: code,
    });

    // ⛔ isolate mail errors
    try {
      await sendVerificationMail(email, code);
    } catch (mailError) {
      console.error("Email failed:", mailError);
    }

    return NextResponse.json(
      { message: "Registration successful. Please verify your email." },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("REGISTER ERROR:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
