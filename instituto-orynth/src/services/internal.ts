import { supabase } from "./supabase"

// ---------- Sessions ----------
export async function listSessions(campaignId: string) {
  const { data, error } = await supabase
    .from("sessions")
    .select("id, title, date, status, created_at")
    .eq("campaign_id", campaignId)
    .order("created_at", { ascending: false })

  if (error) throw error
  return data ?? []
}

export async function createSession(campaignId: string, title: string) {
  const { data, error } = await supabase
    .from("sessions")
    .insert({ campaign_id: campaignId, title })
    .select("id, title, date, status, created_at")
    .single()

  if (error) throw error
  return data
}

// ---------- Beats ----------
export async function listBeats(sessionId: string) {
  const { data, error } = await supabase
    .from("session_beats")
    .select("id, text, is_done, order_index, created_at")
    .eq("session_id", sessionId)
    .order("order_index", { ascending: true })
    .order("created_at", { ascending: true })

  if (error) throw error
  return data ?? []
}

export async function addBeat(sessionId: string, text: string) {
  const { data, error } = await supabase
    .from("session_beats")
    .insert({ session_id: sessionId, text })
    .select("id, text, is_done, order_index, created_at")
    .single()

  if (error) throw error
  return data
}

export async function toggleBeat(beatId: string, isDone: boolean) {
  const { error } = await supabase
    .from("session_beats")
    .update({ is_done: isDone })
    .eq("id", beatId)

  if (error) throw error
}

export async function deleteBeat(beatId: string) {
  const { error } = await supabase.from("session_beats").delete().eq("id", beatId)
  if (error) throw error
}

// ---------- NPCs ----------
export async function listNpcs(campaignId: string) {
  const { data, error } = await supabase
    .from("npcs")
    .select("id, name, institute_role, narrative_role, notes, created_at")
    .eq("campaign_id", campaignId)
    .order("created_at", { ascending: false })

  if (error) throw error
  return data ?? []
}

export async function createNpc(
  campaignId: string,
  payload: {
    name: string
    institute_role?: string
    narrative_role?: string
    notes?: string
  }
) {
  const { data, error } = await supabase
    .from("npcs")
    .insert({
      campaign_id: campaignId,
      name: payload.name,
      institute_role: payload.institute_role ?? null,
      narrative_role: payload.narrative_role ?? null,
      notes: payload.notes ?? null,
    })
    .select("id, name, institute_role, narrative_role, notes, created_at")
    .single()

  if (error) throw error
  return data
}

// ---------- Notes ----------
export async function listNotes(campaignId: string, sessionId?: string | null) {
  let q = supabase
    .from("master_notes")
    .select("id, title, content, session_id, created_at, updated_at")
    .eq("campaign_id", campaignId)
    .order("updated_at", { ascending: false })

  if (sessionId) q = q.eq("session_id", sessionId)

  const { data, error } = await q
  if (error) throw error
  return data ?? []
}

export async function createNote(
  campaignId: string,
  payload: { title: string; content: string; session_id?: string | null }
) {
  const { data, error } = await supabase
    .from("master_notes")
    .insert({
      campaign_id: campaignId,
      session_id: payload.session_id ?? null,
      title: payload.title,
      content: payload.content,
      updated_at: new Date().toISOString(),
    })
    .select("id, title, content, session_id, created_at, updated_at")
    .single()

  if (error) throw error
  return data
}