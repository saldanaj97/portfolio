type Project = {
  id: string; // UUID
  created_at: string; // ISO timestamp with timezone
  updated_at: string | null; // ISO timestamp without timezone, nullable
  title: string;
  description: string;
  screenshot: string;
  stack: string[];
  category: ProjectCategory; // Enum or type for 'public.ProjectCategory'
};

// Pre-defined Enum for ProjectCategory from supabase db
type ProjectCategory = "ui" | "fullstack" | "other";

type ModalType = "add" | "edit" | null;

export type { ModalType, Project, ProjectCategory };
