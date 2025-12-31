import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import User from "@/models/user.model";
import bcrypt from "bcryptjs";
import { sendVerificationMail } from "@/helper/sendVerificationMail";

export async function POST(req: NextRequest) {
  await dbConnect();
  const body = await req.json();

  const {
    fname,
    lname,
    username,
    email,
    password,
    expertise = [],
  } = body;

  if (!fname || !lname || !email || !password || !username) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return NextResponse.json(
      { error: "An account with this email already exists." },
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

  await sendVerificationMail(email, code);

  return NextResponse.json(
    { message: "Registration successful. Please verify your email." },
    { status: 201 }
  );
}
