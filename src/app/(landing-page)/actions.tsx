"use server";

import { NewProject, Project } from "~/components/projects/types";
import { supabase } from "../(auth)/actions";

export async function addProject(project: NewProject) {
  const { data, error } = await supabase.from("projects").insert([project]);
  return { data, error };
}

export async function editProject(project: Project) {
  const { data, error } = await supabase
    .from("projects")
    .update(project)
    .match({ id: project.id });
  return { data, error };
}
