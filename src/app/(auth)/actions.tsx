"use server";

import { cookies, headers } from "next/headers";
import { createClient } from "~/utils/supabase/server";
import { type LoginInput } from "./auth/login/page";

const supabase = createClient(cookies());
const origin = headers().get("origin");

export const signIn = async (data: LoginInput) => {
  const { error } = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });

  if (error) {
    return {
      error: error.message,
    };
  }

  return {
    success: true,
    message: "Sign in successful!",
  };
};
