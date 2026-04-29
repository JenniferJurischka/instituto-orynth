import { supabase } from "./supabase"

export async function listLegends(campaignId: string) {
  const { data, error } = await supabase
    .from("legends")
    .select("id, title, category, status, content, created_at, updated_at")
    .eq("campaign_id", campaignId)
    .order("updated_at", { ascending: false })

  if (error) throw error
  return data ?? []
}

export async function createLegend(
  campaignId: string,
  payload: { title: string; category: string; status: string; content: string }
) {
  const { data, error } = await supabase
    .from("legends")
    .insert({
      campaign_id: campaignId,
      title: payload.title,
      category: payload.category,
      status: payload.status,
      content: payload.content,
      updated_at: new Date().toISOString(),
    })
    .select("id, title, category, status, content, created_at, updated_at")
    .single()

  if (error) throw error
  return data
}