"use server";

import { supabase } from "~/app/(auth)/actions";

export async function getProjects() {
  const { data: projects, error } = await supabase.from("projects").select("*");
  return { projects, error };
}

export async function handleAddProject() {
  // const { data, error } = await supabase
  //   .from("projects")
  //   .insert([{ some_column: "someValue", other_column: "otherValue" }])
  //   .select();
}

export async function handleEditProject() {}

export async function handleDeleteProject() {}
