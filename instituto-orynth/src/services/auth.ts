import { supabase } from "./supabase";

export async function loginWithDiscord() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "discord",
  });

  if (error) {
    console.error("Erro no login:", error.message);
  }
}