import { supabase } from "./supabase"

export async function listSheetsForCampaign(campaignId: string) {
  // puxa fichas via join com npcs/legends pela campaign_id
  const [npcSheetsRes, legendSheetsRes] = await Promise.all([
    supabase
      .from("entity_sheets")
      .select("id, npc_id, hp_current, hp_max, san_current, san_max, pf_current, pf_max, mental_exhaustion_level, other_side_contact")
      .not("npc_id", "is", null),

    supabase
      .from("entity_sheets")
      .select("id, legend_id, hp_current, hp_max, san_current, san_max, pf_current, pf_max, mental_exhaustion_level, other_side_contact")
      .not("legend_id", "is", null),
  ])

  if (npcSheetsRes.error) throw npcSheetsRes.error
  if (legendSheetsRes.error) throw legendSheetsRes.error

  // filtrar somente fichas que pertencem a esta campanha
  // (RLS já protege, mas precisamos filtrar porque não estamos joinando aqui)
  // Vamos buscar IDs das entidades da campanha pra filtrar com segurança no front.
  const [npcsRes, legendsRes] = await Promise.all([
    supabase.from("npcs").select("id").eq("campaign_id", campaignId),
    supabase.from("legends").select("id").eq("campaign_id", campaignId),
  ])

  if (npcsRes.error) throw npcsRes.error
  if (legendsRes.error) throw legendsRes.error

  const npcIds = new Set((npcsRes.data ?? []).map((x) => x.id))
  const legendIds = new Set((legendsRes.data ?? []).map((x) => x.id))

  const npcSheets = (npcSheetsRes.data ?? []).filter((s: any) => npcIds.has(s.npc_id))
  const legendSheets = (legendSheetsRes.data ?? []).filter((s: any) => legendIds.has(s.legend_id))

  return { npcSheets, legendSheets }
}