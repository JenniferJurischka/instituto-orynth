import { useEffect, useMemo, useState } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import { supabase } from "./services/supabase"
import { loginWithDiscord } from "./services/auth"
import { ensureStudent, getStudentDashboard } from "./services/student"
import { createCampaign, deleteCampaign, getCampaigns } from "./services/campaigns"
import { getCharacterByUserId } from "./services/character"

import AppLayout from "./layouts/AppLayout"
import Dashboard from "./pages/Dashboard"
import Me from "./pages/Me"
import Campaigns from "./pages/Campaigns"

import CursosPage from "./pages/CursosPage"
import GraduationDetailsPage from "./pages/GraduationDetailsPage"
import TechnicalCourseDetailsPage from "./pages/TechnicalCourseDetailsPage"
import CreateCharacterPage from "./pages/CreateCharacterPage"

import InternalPanel from "./components/InternalPanel"

export default function App() {
  const [user, setUser] = useState<any>(null)
  const [role, setRole] = useState<string | null>(null)
  const [dashboard, setDashboard] = useState<any>(null)
  const [character, setCharacter] = useState<any>(undefined)
  const [hasCharacter, setHasCharacter] = useState<boolean | null>(null)

  const [campaigns, setCampaigns] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [authChecked, setAuthChecked] = useState(false)
  const [busy, setBusy] = useState<string | null>(null)

  const [showInternal, setShowInternal] = useState(false)

  const protocol = useMemo(() => {
    if (!user?.id) return "ORY-??????"
    return `ORY-${String(user.id).slice(0, 6).toUpperCase()}`
  }, [user?.id])

  useEffect(() => {
    const init = async () => {
      setLoading(true)

      try {
        const {
          data: { session },
        } = await supabase.auth.getSession()

        if (!session?.user) {
          setUser(null)
          setRole(null)
          setHasCharacter(null)
          setAuthChecked(true)
          setLoading(false)
          return
        }

        const currentUser = session.user
        setUser(currentUser)

        // =========================
        // 🔥 PROFILE
        // =========================

        const username =
          currentUser.user_metadata?.username ||
          currentUser.user_metadata?.full_name ||
          currentUser.email?.split("@")[0] ||
          "Estudante"

        const { error: profileUpsertError } = await supabase
          .from("profiles")
          .upsert({
            id: currentUser.id,
            username: username,
            role: "student",
          })

        if (profileUpsertError) {
          console.error("Erro ao criar/update profile:", profileUpsertError)
        }

        const { data: profile } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", currentUser.id)
          .maybeSingle()

        const currentRole =
          typeof profile?.role === "string"
            ? profile.role.toLowerCase()
            : "student"

        setRole(currentRole)

        console.log("USER ID:", currentUser.id)
        console.log("PROFILE:", profile)
        console.log("ROLE:", currentRole)

        // ✅ 🔥 AQUI É O PULO DO GATO
        await ensureStudent(currentUser)

        // =========================
        // 🔥 DATA LOAD
        // =========================
        if (currentRole === "master") {
          setHasCharacter(true)

          const dash = await getStudentDashboard(currentUser.id)
          setDashboard(dash)

          const list = await getCampaigns(currentUser.id)
          setCampaigns(list)
        } else {

          const characterData = await getCharacterByUserId(currentUser.id)

console.log("CHARACTER DATA:", characterData)

setCharacter(characterData)
setHasCharacter(!!characterData)

          const character = await getCharacterByUserId(currentUser.id)
setHasCharacter(!!character)

          const dash = await getStudentDashboard(currentUser.id)
          setDashboard(dash)
        }
      } catch (error) {
        console.error("Erro ao inicializar app:", error)
      } finally {
        setAuthChecked(true)
        setLoading(false)
      }
    }

    init()
  }, [])

  const refreshCampaigns = async () => {
    if (!user?.id) return
    const list = await getCampaigns(user.id)
    setCampaigns(list)
  }

  const onCreateCampaign = async () => {
    if (!user?.id) return
    setBusy("create")
    try {
      await createCampaign("Minha primeira campanha", "Teste Oficial", user.id)
      await refreshCampaigns()
    } finally {
      setBusy(null)
    }
  }

  const onDeleteCampaign = async (id: string) => {
    setBusy(id)
    try {
      await deleteCampaign(id)
      await refreshCampaigns()
    } finally {
      setBusy(null)
    }
  }

  if (!authChecked || loading) {
    return <div>Carregando...</div>
  }

  if (!user) {
    return (
      <div>
        <button onClick={loginWithDiscord}>
          Login com Discord
        </button>
      </div>
    )
  }

  const isMaster = role === "master"
  const shouldCreateCharacter = !isMaster && hasCharacter === false

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/criar-personagem"
          element={
            shouldCreateCharacter ? (
              <CreateCharacterPage />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        <Route
          element={
            <AppLayout
              user={user}
              role={role}
              protocol={protocol}
              showInternal={showInternal}
              onToggleInternal={() => setShowInternal((v) => !v)}
            />
          }
        >
          <Route
            path="/"
            element={
              shouldCreateCharacter ? (
                <Navigate to="/criar-personagem" replace />
              ) : (
                <Dashboard character={character}/>
              )
            }
          />

          <Route
            path="/me"
            element={
              shouldCreateCharacter ? (
                <Navigate to="/criar-personagem" replace />
              ) : (
                <Me dashboard={dashboard} loading={loading} />
              )
            }
          />

          <Route path="/cursos" element={<CursosPage />} />
          <Route path="/cursos/graduacoes/:id" element={<GraduationDetailsPage />} />
          <Route path="/cursos/tecnicos/:id" element={<TechnicalCourseDetailsPage />} />

          <Route
            path="/campaigns"
            element={
              shouldCreateCharacter ? (
                <Navigate to="/criar-personagem" replace />
              ) : (
                <div>
                  {isMaster && showInternal && user?.id && (
                    <InternalPanel userID={user.id} />
                  )}
                  <Campaigns
                    role={role}
                    campaigns={campaigns}
                    busy={busy}
                    onCreateCampaign={onCreateCampaign}
                    onDeleteCampaign={onDeleteCampaign}
                  />
                </div>
              )
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}