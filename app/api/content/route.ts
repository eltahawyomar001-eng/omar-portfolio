import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const contentPath = path.join(process.cwd(), "data", "content.ts");

// Helper to read content from file
function readContent() {
  const fileContent = fs.readFileSync(contentPath, "utf-8");
  
  // Extract aboutContent
  const aboutMatch = fileContent.match(/export const aboutContent: AboutContent = ({[\s\S]*?});/);
  const contactMatch = fileContent.match(/export const contactInfo: ContactInfo = ({[\s\S]*?});/);
  const skillsMatch = fileContent.match(/export const skillsCategories: SkillCategory\[\] = (\[[\s\S]*?\]);/);
  
  if (!aboutMatch || !contactMatch || !skillsMatch) {
    throw new Error("Could not parse content file");
  }
  
  const aboutContent = eval(`(${aboutMatch[1]})`);
  const contactInfo = eval(`(${contactMatch[1]})`);
  const skillsCategories = eval(skillsMatch[1]);
  
  return { aboutContent, contactInfo, skillsCategories };
}

// Helper to write content to file
function writeContent(aboutContent: any, contactInfo: any, skillsCategories: any) {
  const content = `export interface AboutContent {
  heading: string;
  subheading: string;
  paragraphs: string[];
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
}

export const aboutContent: AboutContent = ${JSON.stringify(aboutContent, null, 2)};

export const contactInfo: ContactInfo = ${JSON.stringify(contactInfo, null, 2)};

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export const skillsCategories: SkillCategory[] = ${JSON.stringify(skillsCategories, null, 2)};
`;
  
  fs.writeFileSync(contentPath, content, "utf-8");
}

// GET - Read content
export async function GET() {
  try {
    const content = readContent();
    return NextResponse.json(content);
  } catch (error) {
    console.error("Error reading content:", error);
    return NextResponse.json(
      { error: "Failed to read content" },
      { status: 500 }
    );
  }
}

// PUT - Update content
export async function PUT(request: Request) {
  try {
    const { aboutContent, contactInfo, skillsCategories } = await request.json();
    writeContent(aboutContent, contactInfo, skillsCategories);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating content:", error);
    return NextResponse.json(
      { error: "Failed to update content" },
      { status: 500 }
    );
  }
}
