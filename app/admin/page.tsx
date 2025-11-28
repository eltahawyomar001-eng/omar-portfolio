"use client";

import { useState, useEffect } from "react";
import { Project } from "@/data/projects";

/**
 * Admin Dashboard
 * 
 * Password-protected interface for managing portfolio content:
 * - Add, edit, delete projects
 * - Update contact information
 * - Manage skills and about section
 */
export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [projects, setProjects] = useState<Project[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingProject, setEditingProject] = useState<Partial<Project> | null>(null);
  const [error, setError] = useState("");

  // Simple password check (in production, use proper auth)
  const ADMIN_PASSWORD = "omar2025"; // Change this to your secure password

  useEffect(() => {
    if (isAuthenticated) {
      loadProjects();
    }
  }, [isAuthenticated]);

  const loadProjects = async () => {
    try {
      const response = await fetch("/api/projects");
      const data = await response.json();
      setProjects(data);
    } catch (err) {
      console.error("Failed to load projects:", err);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword("");
  };

  const handleSaveProject = async () => {
    if (!editingProject) return;

    try {
      const response = await fetch("/api/projects", {
        method: editingProject.slug ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingProject),
      });

      if (response.ok) {
        await loadProjects();
        setIsEditing(false);
        setEditingProject(null);
      }
    } catch (err) {
      console.error("Failed to save project:", err);
      alert("Failed to save project");
    }
  };

  const handleDeleteProject = async (slug: string) => {
    if (!confirm("Are you sure you want to delete this project?")) return;

    try {
      const response = await fetch(`/api/projects?slug=${slug}`, {
        method: "DELETE",
      });

      if (response.ok) {
        await loadProjects();
      }
    } catch (err) {
      console.error("Failed to delete project:", err);
      alert("Failed to delete project");
    }
  };

  const startEdit = (project?: Project) => {
    setEditingProject(
      project || {
        title: "",
        slug: "",
        description: "",
        tech: [],
        githubUrl: "",
        liveUrl: "",
        highlight: "",
        role: "",
      }
    );
    setIsEditing(true);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="w-full max-w-md">
          <div className="bg-secondary-dark border border-white/10 rounded-2xl p-8 shadow-xl">
            <h1 className="text-3xl font-bold mb-2 text-center">Admin Login</h1>
            <p className="text-foreground/60 text-center mb-8">
              Portfolio Dashboard
            </p>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                  placeholder="Enter admin password"
                  autoFocus
                />
              </div>

              {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
              )}

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-accent to-accent-secondary text-white font-medium hover:opacity-90 transition-opacity"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-secondary-dark border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Portfolio Admin</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 transition-all text-sm"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Projects Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Projects</h2>
            <button
              onClick={() => startEdit()}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-accent to-accent-secondary text-white font-medium hover:opacity-90 transition-opacity"
            >
              + Add New Project
            </button>
          </div>

          <div className="grid gap-4">
            {projects.map((project) => (
              <div
                key={project.slug}
                className="bg-secondary-dark border border-white/10 rounded-xl p-6"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-foreground/70 text-sm mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 text-sm text-foreground/60">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accent transition-colors"
                        >
                          Live Demo →
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent transition-colors"
                      >
                        GitHub →
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <button
                      onClick={() => startEdit(project)}
                      className="px-3 py-1.5 rounded-lg border border-white/10 hover:bg-white/5 transition-all text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteProject(project.slug)}
                      className="px-3 py-1.5 rounded-lg border border-red-500/30 text-red-400 hover:bg-red-500/10 transition-all text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {isEditing && editingProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-secondary-dark border border-white/10 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-6">
              {editingProject.slug ? "Edit Project" : "Add New Project"}
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Title</label>
                <input
                  type="text"
                  value={editingProject.title || ""}
                  onChange={(e) =>
                    setEditingProject({ ...editingProject, title: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg bg-background border border-white/10 focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Slug (URL-friendly name)
                </label>
                <input
                  type="text"
                  value={editingProject.slug || ""}
                  onChange={(e) =>
                    setEditingProject({ ...editingProject, slug: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg bg-background border border-white/10 focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Description
                </label>
                <textarea
                  value={editingProject.description || ""}
                  onChange={(e) =>
                    setEditingProject({
                      ...editingProject,
                      description: e.target.value,
                    })
                  }
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-white/10 focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Technologies (comma-separated)
                </label>
                <input
                  type="text"
                  value={editingProject.tech?.join(", ") || ""}
                  onChange={(e) =>
                    setEditingProject({
                      ...editingProject,
                      tech: e.target.value.split(",").map((t) => t.trim()),
                    })
                  }
                  className="w-full px-4 py-2 rounded-lg bg-background border border-white/10 focus:border-accent focus:outline-none"
                  placeholder="Next.js, TypeScript, Tailwind CSS"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  GitHub URL
                </label>
                <input
                  type="url"
                  value={editingProject.githubUrl || ""}
                  onChange={(e) =>
                    setEditingProject({
                      ...editingProject,
                      githubUrl: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 rounded-lg bg-background border border-white/10 focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Live URL (optional)
                </label>
                <input
                  type="url"
                  value={editingProject.liveUrl || ""}
                  onChange={(e) =>
                    setEditingProject({
                      ...editingProject,
                      liveUrl: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 rounded-lg bg-background border border-white/10 focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Highlight
                </label>
                <input
                  type="text"
                  value={editingProject.highlight || ""}
                  onChange={(e) =>
                    setEditingProject({
                      ...editingProject,
                      highlight: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 rounded-lg bg-background border border-white/10 focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Role (optional)
                </label>
                <input
                  type="text"
                  value={editingProject.role || ""}
                  onChange={(e) =>
                    setEditingProject({ ...editingProject, role: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg bg-background border border-white/10 focus:border-accent focus:outline-none"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={handleSaveProject}
                className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-accent to-accent-secondary text-white font-medium hover:opacity-90 transition-opacity"
              >
                Save Project
              </button>
              <button
                onClick={() => {
                  setIsEditing(false);
                  setEditingProject(null);
                }}
                className="px-6 py-3 rounded-lg border border-white/10 hover:bg-white/5 transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
