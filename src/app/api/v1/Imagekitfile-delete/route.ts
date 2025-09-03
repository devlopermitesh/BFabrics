import { NextRequest, NextResponse } from "next/server";
import { imagekit } from "@/lib/imagekit";

export async function DELETE(req: NextRequest) {
  try {
    const { fileId } = await req.json();
    if (!fileId) {
      return NextResponse.json(
        { success: false, error: "fileId is neccessary" },
        { status: 400 },
      );
    }

    const response = await imagekit.deleteFile(fileId);
    console.log(response);
    return NextResponse.json(
      { success: true, message: "File Deleted SuccessFully" },
      { status: 200 },
    );
  } catch (error) {
    console.log("File Not Deleted: ", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong!" },
      { status: 500 },
    );
  }
}
