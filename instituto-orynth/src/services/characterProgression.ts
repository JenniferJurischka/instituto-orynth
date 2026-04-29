import { supabase } from "./supabase"
import { getTotalPDByLevel, getTotalPEHByLevel } from "../system/rules/progression"

export async function updateCharacterProgression(characterId: string, level: number) {
  if (!characterId || level == null) {
    console.error("Dados inválidos:", { characterId, level })
    return
  }

  const newPD = getTotalPDByLevel(level)
  const newPEH = getTotalPEHByLevel(level)

  const { data, error } = await supabase
    .from("characters")
    .update({
      pd_total: newPD ?? 0,
      peh_total: newPEH ?? 0
    })
    .eq("id", characterId)
    .select()

  if (error) {
    console.error("Erro ao atualizar progressão:", error)
  }

  return data
}