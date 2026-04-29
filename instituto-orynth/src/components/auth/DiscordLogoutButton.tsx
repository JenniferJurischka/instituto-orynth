"use client"

import { supabase } from "../../services/supabase"

export function DiscordLogoutButton() {
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()

    if (error) {
      console.error("Erro ao sair:", error.message)
      return
    }

    window.location.href = "/"
  }

  return (
    <button
      onClick={handleLogout}
      className="text-sm px-3 py-2 rounded-lg border border-red-400/20 bg-red-500/10 text-red-300 hover:bg-red-500/20
                 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-300 dark:hover:bg-red-500/20"
    >
      Sair
    </button>
  )
}