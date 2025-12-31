import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user.model";
import { dbConnect } from "@/utils/db";
import cloudinary from "@/utils/cloudinary";
import streamifier from "streamifier";
import { verifyToken } from "@/utils/auth";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    // 🔐 Get user from JWT cookie
    const token = req.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id: userId } = verifyToken(token);

    const formData = await req.formData();
    const file = formData.get("image") as File;

    if (!file) {
      return NextResponse.json(
        { error: "No image provided" },
        { status: 400 }
      );
    }

    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const imageUrl = await new Promise<string>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: "proforum/dp",
          public_id: `dp_${user._id}`,
          overwrite: true,
          transformation: [
            { width: 400, height: 400, crop: "fill", gravity: "face" },
            { quality: "auto", fetch_format: "auto" },
          ],
        },
        (error, result) => {
          if (error || !result) return reject(error);
          resolve(result.secure_url);
        }
      );

      streamifier.createReadStream(buffer).pipe(uploadStream);
    });

    user.image = imageUrl;
    await user.save();

    return NextResponse.json(
      { message: "Display picture updated", image: imageUrl },
      { status: 200 }
    );
  } catch (error) {
    console.error("DP upload error:", error);
    return NextResponse.json(
      { error: "Failed to upload image" },
      { status: 500 }
    );
  }
}
