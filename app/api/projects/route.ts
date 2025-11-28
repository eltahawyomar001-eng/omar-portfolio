import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const projectsPath = path.join(process.cwd(), "data", "projects.ts");

// Helper to read projects from file
function readProjects() {
  const fileContent = fs.readFileSync(projectsPath, "utf-8");
  
  // Extract the projects array from the TypeScript file
  const match = fileContent.match(/export const projects: Project\[\] = (\[[\s\S]*?\]);/);
  if (!match) throw new Error("Could not parse projects file");
  
  // Use eval to parse the array (safe since we control the file)
  // In production, consider using a JSON file instead
  const projectsString = match[1];
  const projects = eval(projectsString);
  
  return projects;
}

// Helper to write projects to file
function writeProjects(projects: any[]) {
  const projectsJson = JSON.stringify(projects, null, 2);
  
  // Convert JSON back to TypeScript format
  const tsContent = `export interface Project {
  title: string;
  slug: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  highlight: string;
  role?: string;
}

export const projects: Project[] = ${projectsJson};
`;
  
  fs.writeFileSync(projectsPath, tsContent, "utf-8");
}

// GET - Read all projects
export async function GET() {
  try {
    const projects = readProjects();
    return NextResponse.json(projects);
  } catch (error) {
    console.error("Error reading projects:", error);
    return NextResponse.json(
      { error: "Failed to read projects" },
      { status: 500 }
    );
  }
}

// POST - Create new project
export async function POST(request: Request) {
  try {
    const newProject = await request.json();
    const projects = readProjects();
    
    // Check if slug already exists
    if (projects.some((p: any) => p.slug === newProject.slug)) {
      return NextResponse.json(
        { error: "Project with this slug already exists" },
        { status: 400 }
      );
    }
    
    projects.push(newProject);
    writeProjects(projects);
    
    return NextResponse.json({ success: true, project: newProject });
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json(
      { error: "Failed to create project" },
      { status: 500 }
    );
  }
}

// PUT - Update existing project
export async function PUT(request: Request) {
  try {
    const updatedProject = await request.json();
    const projects = readProjects();
    
    const index = projects.findIndex((p: any) => p.slug === updatedProject.slug);
    if (index === -1) {
      return NextResponse.json(
        { error: "Project not found" },
        { status: 404 }
      );
    }
    
    projects[index] = updatedProject;
    writeProjects(projects);
    
    return NextResponse.json({ success: true, project: updatedProject });
  } catch (error) {
    console.error("Error updating project:", error);
    return NextResponse.json(
      { error: "Failed to update project" },
      { status: 500 }
    );
  }
}

// DELETE - Remove project
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");
    
    if (!slug) {
      return NextResponse.json(
        { error: "Slug parameter required" },
        { status: 400 }
      );
    }
    
    const projects = readProjects();
    const filteredProjects = projects.filter((p: any) => p.slug !== slug);
    
    if (filteredProjects.length === projects.length) {
      return NextResponse.json(
        { error: "Project not found" },
        { status: 404 }
      );
    }
    
    writeProjects(filteredProjects);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting project:", error);
    return NextResponse.json(
      { error: "Failed to delete project" },
      { status: 500 }
    );
  }
}
