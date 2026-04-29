import { useNavigate } from "react-router-dom"
import { useEffect, useMemo, useState } from "react"
import { getCampaigns } from "../services/campaigns"
import { createNpc, listNpcs } from "../services/internal"
import { createLegend, listLegends } from "../services/legends"
import { listSheetsForCampaign } from "../services/sheets"

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-gray-50 px-2 py-2">
      <p className="text-[10px] tracking-widest text-gray-500">{label}</p>
      <p className="text-sm font-semibold text-gray-900">{value}</p>
    </div>
  )
}

type Props = { userId: string }

export default function Archive({ userId }: Props) {
  const navigate = useNavigate()

  const [tab, setTab] = useState<"npcs" | "legends">("npcs")
  const [campaigns, setCampaigns] = useState<any[]>([])
  const [campaignId, setCampaignId] = useState("")

  // NPCs
  const [npcs, setNpcs] = useState<any[]>([])
  const [npcName, setNpcName] = useState("")
  const [npcShort, setNpcShort] = useState("")
  const [npcInstituteRole, setNpcInstituteRole] = useState("professor")
  const [npcNarrativeRole, setNpcNarrativeRole] = useState("suspeito")
  const [npcNotes, setNpcNotes] = useState("")
  const [npcSheetsById, setNpcSheetsById] = useState<Record<string, any>>({})

  // Filtros NPC
  const [npcInstituteFilter, setNpcInstituteFilter] = useState("all")
  const [npcNarrativeFilter, setNpcNarrativeFilter] = useState("all")

  // Lendas
  const [legends, setLegends] = useState<any[]>([])
  const [legendTitle, setLegendTitle] = useState("")
  const [legendShort, setLegendShort] = useState("")
  const [legendCategory, setLegendCategory] = useState("lenda")
  const [legendStatus, setLegendStatus] = useState("armazenada")
  const [legendContent, setLegendContent] = useState("")
  const [legendSheetsById, setLegendSheetsById] = useState<Record<string, any>>({})

  // Filtro Lendas
  const [legendStatusFilter, setLegendStatusFilter] = useState("all")

  const campaignLabel = useMemo(() => {
    const c = campaigns.find((x) => x.id === campaignId)
    return c?.title ?? "—"
  }, [campaignId, campaigns])

  useEffect(() => {
    const run = async () => {
      const list = await getCampaigns(userId)
      setCampaigns(list)
      if (list.length) setCampaignId(list[0].id)
    }
    run()
  }, [userId])

  useEffect(() => {
    if (!campaignId) return

    const run = async () => {
      const [n, l, sheets] = await Promise.all([
        listNpcs(campaignId),
        listLegends(campaignId),
        listSheetsForCampaign(campaignId),
      ])

      setNpcs(n)
      setLegends(l)

      const npcMap: Record<string, any> = {}
      for (const s of sheets.npcSheets ?? []) npcMap[s.npc_id] = s
      setNpcSheetsById(npcMap)

      const legendMap: Record<string, any> = {}
      for (const s of sheets.legendSheets ?? []) legendMap[s.legend_id] = s
      setLegendSheetsById(legendMap)
    }

    run()
  }, [campaignId])

  const refreshAll = async () => {
    if (!campaignId) return
    const [n, l] = await Promise.all([listNpcs(campaignId), listLegends(campaignId)])
    setNpcs(n)
    setLegends(l)
  }

  const filteredNpcs = npcs.filter((n) => {
    const instituteOk =
      npcInstituteFilter === "all" || n.institute_role === npcInstituteFilter

    const narrativeOk =
      npcNarrativeFilter === "all" || n.narrative_role === npcNarrativeFilter

    return instituteOk && narrativeOk
  })

  const filteredLegends = legends.filter((l) => {
    if (legendStatusFilter === "all") return true
    return l.status === legendStatusFilter
  })

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 p-6 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <p className="text-xs tracking-widest text-gray-500 uppercase">Arquivo do Instituto</p>
          <h2 className="text-xl font-semibold text-gray-900">Registros Internos</h2>
          <p className="text-sm text-gray-600">Catalogação de entidades, pessoas e ocorrências.</p>
          <p className="mt-1 text-[11px] text-gray-400">
            Campanha ativa: <span className="font-medium">{campaignLabel}</span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <select
            value={campaignId}
            onChange={(e) => setCampaignId(e.target.value)}
            className="text-sm rounded-lg border border-gray-200 bg-white px-3 py-2"
          >
            {campaigns.map((c) => (
              <option key={c.id} value={c.id}>
                {c.title}
              </option>
            ))}
          </select>

          <div className="flex rounded-lg border border-gray-200 overflow-hidden">
            <button
              className={`px-3 py-2 text-sm ${tab === "npcs" ? "bg-gray-100" : "bg-white"}`}
              onClick={() => setTab("npcs")}
            >
              NPCs
            </button>
            <button
              className={`px-3 py-2 text-sm ${tab === "legends" ? "bg-gray-100" : "bg-white"}`}
              onClick={() => setTab("legends")}
            >
              Lendas
            </button>
          </div>
        </div>
      </div>

      {/* NPCs */}
      {tab === "npcs" && (
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {/* Form */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <h3 className="font-semibold text-gray-900">Registrar NPC</h3>

            <div className="mt-3 space-y-2">
              <input
                value={npcName}
                onChange={(e) => setNpcName(e.target.value)}
                placeholder="Nome (ex: Alberto)"
                className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm"
              />

              <input
                value={npcShort}
                onChange={(e) => setNpcShort(e.target.value)}
                placeholder="Descrição curta (ex: Professor de exatas, sempre nervoso)"
                className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm"
              />

              <div className="grid grid-cols-2 gap-2">
                <select
                  value={npcInstituteRole}
                  onChange={(e) => setNpcInstituteRole(e.target.value)}
                  className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm"
                >
                  <option value="professor">Professor</option>
                  <option value="funcionario">Funcionário</option>
                  <option value="aluno">Aluno</option>
                  <option value="externo">Externo</option>
                </select>

                <select
                  value={npcNarrativeRole}
                  onChange={(e) => setNpcNarrativeRole(e.target.value)}
                  className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm"
                >
                  <option value="suspeito">Suspeito</option>
                  <option value="aliado">Aliado</option>
                  <option value="perigoso">Perigoso</option>
                  <option value="neutro">Neutro</option>
                </select>
              </div>

              <textarea
                value={npcNotes}
                onChange={(e) => setNpcNotes(e.target.value)}
                placeholder="Notas rápidas (opcional) — o registro completo fica em “Visualizar mais”"
                className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm min-h-[110px]"
              />

              <button
                onClick={async () => {
                  if (!campaignId || !npcName.trim()) return
                  await createNpc(campaignId, {
                    name: npcName.trim(),
                    short_description: npcShort.trim() || undefined,
                    institute_role: npcInstituteRole,
                    narrative_role: npcNarrativeRole,
                    notes: npcNotes.trim() || undefined,
                  })

                  setNpcName("")
                  setNpcShort("")
                  setNpcNotes("")
                  await refreshAll()
                }}
                className="px-3 py-2 rounded-lg bg-purple-600 text-white text-sm"
              >
                Registrar NPC
              </button>
            </div>
          </div>

          {/* List */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-gray-900">NPCs catalogados</h3>

              {/* filtros */}
              <div className="grid grid-cols-2 gap-2">
                <select
                  value={npcInstituteFilter}
                  onChange={(e) => setNpcInstituteFilter(e.target.value)}
                  className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm"
                >
                  <option value="all">Todos os vínculos</option>
                  <option value="aluno">Alunos</option>
                  <option value="professor">Professores</option>
                  <option value="funcionario">Funcionários</option>
                  <option value="externo">Externos</option>
                </select>

                <select
                  value={npcNarrativeFilter}
                  onChange={(e) => setNpcNarrativeFilter(e.target.value)}
                  className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm"
                >
                  <option value="all">Todos os papéis</option>
                  <option value="aliado">Aliados</option>
                  <option value="suspeito">Suspeitos</option>
                  <option value="perigoso">Perigosos</option>
                  <option value="neutro">Neutros</option>
                </select>
              </div>
            </div>

            <div className="mt-3 space-y-3 max-h-[520px] overflow-y-auto pr-2">
              {filteredNpcs.map((n) => {
                const sheet = npcSheetsById[n.id]

                return (
                  <div key={n.id} className="rounded-xl border border-gray-200 bg-white p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="font-semibold text-gray-900">{n.name}</div>
                        <div className="text-xs text-gray-500">
                          {n.institute_role ?? "—"} • {n.narrative_role ?? "—"}
                        </div>
                      </div>
                      <div className="text-[11px] text-gray-400">
                        {String(n.id).slice(0, 6).toUpperCase()}
                      </div>
                    </div>

                    {n.short_description && (
                      <p className="mt-2 text-sm text-gray-700 line-clamp-2">
                        {n.short_description}
                      </p>
                    )}

                    <div className="mt-3 grid grid-cols-5 gap-2">
                      <MiniStat label="HP" value={sheet ? `${sheet.hp_current}/${sheet.hp_max}` : "—"} />
                      <MiniStat label="SAN" value={sheet ? `${sheet.san_current}/${sheet.san_max}` : "—"} />
                      <MiniStat label="PF" value={sheet ? `${sheet.pf_current}/${sheet.pf_max}` : "—"} />
                      <MiniStat label="EX" value={sheet ? String(sheet.mental_exhaustion_level ?? 0) : "—"} />
                      <MiniStat label="OL" value={sheet ? `${sheet.other_side_contact ?? 0}%` : "—"} />
                    </div>

                    <button
                      onClick={() => navigate(`/archive/npcs/${n.id}`)}
                      className="mt-3 text-sm text-indigo-600 hover:underline"
                    >
                      Visualizar mais
                    </button>
                  </div>
                )
              })}

              {filteredNpcs.length === 0 && (
                <div className="text-sm text-gray-600">Nenhum NPC encontrado com esses filtros.</div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Lendas */}
      {tab === "legends" && (
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {/* Form */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <h3 className="font-semibold text-gray-900">Registrar Lenda</h3>

            <div className="mt-3 space-y-2">
              <input
                value={legendTitle}
                onChange={(e) => setLegendTitle(e.target.value)}
                placeholder="Título (ex: O Espelho do Porão)"
                className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm"
              />

              <input
                value={legendShort}
                onChange={(e) => setLegendShort(e.target.value)}
                placeholder="Descrição curta (ex: Espelho que mostra algo errado)"
                className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm"
              />

              <div className="grid grid-cols-2 gap-2">
                <select
                  value={legendCategory}
                  onChange={(e) => setLegendCategory(e.target.value)}
                  className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm"
                >
                  <option value="lenda">Lenda</option>
                  <option value="criatura">Criatura</option>
                  <option value="fenomeno">Fenômeno</option>
                  <option value="rumor">Rumor</option>
                </select>

                <select
                  value={legendStatus}
                  onChange={(e) => setLegendStatus(e.target.value)}
                  className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm"
                >
                  <option value="armazenada">Armazenada</option>
                  <option value="ativa">Ativa</option>
                  <option value="confirmada">Confirmada</option>
                  <option value="rumor">Rumor</option>
                  <option value="encerrada">Encerrada</option>
                </select>
              </div>

              <textarea
                value={legendContent}
                onChange={(e) => setLegendContent(e.target.value)}
                placeholder="Notas rápidas (opcional) — o registro completo fica em “Visualizar mais”"
                className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm min-h-[140px]"
              />

              <button
                onClick={async () => {
                  if (!campaignId || !legendTitle.trim()) return
                  await createLegend(campaignId, {
                    title: legendTitle.trim(),
                    short_description: legendShort.trim() || null,
                    category: legendCategory,
                    status: legendStatus,
                    content: legendContent || null,
                  })

                  setLegendTitle("")
                  setLegendShort("")
                  setLegendContent("")
                  setLegendStatus("armazenada")
                  await refreshAll()
                }}
                className="px-3 py-2 rounded-lg bg-gray-900 text-white text-sm"
              >
                Registrar Lenda
              </button>
            </div>
          </div>

          {/* List */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-gray-900">Lendas catalogadas</h3>

              {/* filtro */}
              <select
                value={legendStatusFilter}
                onChange={(e) => setLegendStatusFilter(e.target.value)}
                className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm"
              >
                <option value="all">Todos os status</option>
                <option value="armazenada">Armazenadas</option>
                <option value="ativa">Ativas</option>
                <option value="confirmada">Confirmadas</option>
                <option value="rumor">Rumores</option>
                <option value="encerrada">Encerradas</option>
              </select>
            </div>

            <div className="mt-3 space-y-3 max-h-[520px] overflow-y-auto pr-2">
              {filteredLegends.map((l) => {
                const sheet = legendSheetsById[l.id]

                return (
                  <div key={l.id} className="rounded-xl border border-gray-200 bg-white p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="font-semibold text-gray-900">{l.title}</div>
                        <div className="text-xs text-gray-500">
                          {l.category ?? "—"} • {l.status ?? "—"}
                        </div>
                      </div>
                      <div className="text-[11px] text-gray-400">
                        {String(l.id).slice(0, 6).toUpperCase()}
                      </div>
                    </div>

                    {l.short_description && (
                      <p className="mt-2 text-sm text-gray-700 line-clamp-2">
                        {l.short_description}
                      </p>
                    )}

                    <div className="mt-3 grid grid-cols-5 gap-2">
                      <MiniStat label="HP" value={sheet ? `${sheet.hp_current}/${sheet.hp_max}` : "—"} />
                      <MiniStat label="SAN" value={sheet ? `${sheet.san_current}/${sheet.san_max}` : "—"} />
                      <MiniStat label="PF" value={sheet ? `${sheet.pf_current}/${sheet.pf_max}` : "—"} />
                      <MiniStat label="EX" value={sheet ? String(sheet.mental_exhaustion_level ?? 0) : "—"} />
                      <MiniStat label="OL" value={sheet ? `${sheet.other_side_contact ?? 0}%` : "—"} />
                    </div>

                    <button
                      onClick={() => navigate(`/archive/legends/${l.id}`)}
                      className="mt-3 text-sm text-indigo-600 hover:underline"
                    >
                      Visualizar mais
                    </button>
                  </div>
                )
              })}

              {filteredLegends.length === 0 && (
                <div className="text-sm text-gray-600">Nenhuma lenda encontrada com esse filtro.</div>
              )}
            </div>
          </div>
        </div>
      )}

      <p className="mt-6 text-[11px] text-gray-400">
        Alguns registros podem ser reclassificados sem aviso prévio.
      </p>
    </div>
  )
}