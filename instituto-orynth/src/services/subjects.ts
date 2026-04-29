import { supabase } from "./supabase"

export async function getSubjectsByGraduation(graduation: string) {
  const normalized = graduation.toLowerCase().trim()

  console.log("VALOR RECEBIDO:", normalized)

  const { data, error } = await supabase
    .from("subjects")
    .select("*")
    .eq("graduation_id", normalized)

  if (error) {
    console.error(error)
    return []
  }

  return data ?? []
}