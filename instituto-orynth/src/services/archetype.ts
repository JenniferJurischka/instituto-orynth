import { supabase } from "./supabase"

export async function getArchetypeName(id: string) {
  const normalized = id?.toLowerCase().trim()

  const { data, error } = await supabase
    .from("archetypes")
    .select("name")
    .eq("id", normalized)
    .maybeSingle()

  if (error) {
    console.error("Erro ao buscar arquétipo:", error)
    return formatFallback(id)
  }

  return data?.name || formatFallback(id)
}

function formatFallback(text: string) {
  if (!text) return "—"
  return text.charAt(0).toUpperCase() + text.slice(1)
}