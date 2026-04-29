import { supabase } from "./supabase"

export async function getCharacterByUserId(userId: string) {
  const { data, error } = await supabase
    .from("characters")
    .select("*")
    .eq("user_id", userId)
    .maybeSingle()

  if (error) {
    console.error(error)
    return null
  }

  return data
}