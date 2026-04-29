import { supabase } from "./supabase";

export async function createCampaign(
    title: string,
    description: string,
    userId: string
) {
    const { error } = await supabase
    .from("campaigns")
    .insert({
        title,
        description,
        master_id: userId,
    })

    if (error) {
        console.error("Erro ao criar campanha:", error.message)
        throw error
    }
}

export async function getCampaigns(userId: string) {
    const { data, error } = await supabase
    .from("campaigns")
    .select("id, title, description, created_at")
    .eq("master_id", userId)
    .order("created_at", { ascending: false })

    if (error) {
        console.error("Erro ao buscar campanhas:", error.message)
        throw error
    }

    return data ?? []
}

export async function deleteCampaign(campaignId: string) {
    const { error } = await supabase
    .from("campaigns")
    .delete()
    .eq("id", campaignId)

    if (error) {
        console.error("Erro ao deletar campanha:", error.message)
        throw error
    }
}