"use server";
import { supabase } from "~/app/(auth)/actions";

export async function isAdminLoggedIn() {
  const { data: user } = await supabase.auth.getUser();
  return user;
}
