import { DiscordLogoutButton } from "./auth/DiscordLogoutButton"
import { useEffect, useState } from "react"

type Props = {
  user: any
  role: string | null
  protocol: string
  showInternal: boolean
  onToggleInternal: () => void
}

const STORAGE_KEY = "orynth_theme" // "dark" | "light"

function applyTheme(theme: "dark" | "light") {
  const root = document.documentElement
  if (theme === "dark") root.classList.add("dark")
  else root.classList.remove("dark")
}

export default function TopBar({
  user,
  role,
  protocol,
  showInternal,
  onToggleInternal,
}: Props) {
  const [theme, setTheme] = useState<"dark" | "light">("light")

  // carregar tema salvo (1x)
  useEffect(() => {
    const saved = (localStorage.getItem(STORAGE_KEY) as "dark" | "light" | null) ?? null
    const initial = saved ?? "light"
    setTheme(initial)
    applyTheme(initial)
  }, [])

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark"
    setTheme(next)
    localStorage.setItem(STORAGE_KEY, next)
    applyTheme(next)
  }

  return (
    <header className="border-b border-gray-200 bg-white dark:bg-zinc-900 dark:border-zinc-700">
      
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <div className="min-w-0">
          <p className="text-xs tracking-widest text-gray-500 uppercase dark:text-zinc-400">
            Instituto Profissional e Técnico Orynth
          </p>

          <h1 className="text-lg font-semibold text-gray-900 truncate dark:text-zinc-100">
            Portal Acadêmico do Aluno
          </h1>

          <p className="text-sm text-gray-600 dark:text-zinc-300">
            Plataforma Acadêmica Digital - acesso autorizado
          </p>
        </div>

<div className="flex items-center gap-3">
  <button
    onClick={toggleTheme}
    className="text-sm px-3 py-2 rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50
               dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
    title={theme === "dark" ? "Mudar para tema claro" : "Mudar para tema escuro"}
    aria-label="Alternar tema"
  >
    {theme === "dark" ? "☀️" : "🌙"}
  </button>

  <DiscordLogoutButton />

  {role === "master" && (
    <button
      onClick={onToggleInternal}
      className="text-xs px-3 py-2 rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50
                 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
    >
      {showInternal ? "Fechar Coordenação" : "Painel de Coordenação Interna"}
    </button>
  )}

  <div className="text-right">
    <p className="text-xs text-gray-500 dark:text-zinc-400">Protocolo</p>
    <p className="text-sm font-semibold text-gray-900 dark:text-zinc-100">
      {protocol}
    </p>
    <p className="text-[11px] text-gray-400 dark:text-zinc-500">
      Perfil: {role ?? "—"} • {user?.user_metadata?.full_name ?? "Aluno"}
    </p>
  </div>
</div>
      </div>
    </header>
  )
}