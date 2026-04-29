import { supabase } from "./supabase"

export async function getGraduationName(id: string) {
  const normalized = id.toLowerCase().trim()

  const { data, error } = await supabase
    .from("graduations")
    .select("name")
    .eq("id", normalized)
    .maybeSingle() // 🔥 evita crash

  if (error) {
    console.error("Erro ao buscar graduação:", error)
    return id
  }

return data?.name || capitalize(id)

function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}
}