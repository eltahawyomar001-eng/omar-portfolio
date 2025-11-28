import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("cv") as File;
    
    if (!file) {
      return NextResponse.json(
        { error: "No file uploaded" },
        { status: 400 }
      );
    }
    
    // Validate file type
    if (file.type !== "application/pdf") {
      return NextResponse.json(
        { error: "Only PDF files are allowed" },
        { status: 400 }
      );
    }
    
    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    // Save to public folder
    const cvPath = path.join(process.cwd(), "public", "cv.pdf");
    await writeFile(cvPath, buffer);
    
    return NextResponse.json({ 
      success: true, 
      message: "CV uploaded successfully" 
    });
  } catch (error) {
    console.error("Error uploading CV:", error);
    return NextResponse.json(
      { error: "Failed to upload CV" },
      { status: 500 }
    );
  }
}
