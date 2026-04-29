import { useEffect, useMemo, useState } from "react"
import { getCampaigns } from "../services/campaigns"
import {
  addBeat,
  createNpc,
  createNote,
  createSession,
  deleteBeat,
  listBeats,
  listNpcs,
  listNotes,
  listSessions,
  toggleBeat,
} from "../services/internal"

type Props = { userID: string }

export default function InternalPanel({ userID }: Props) {
    const [campaigns, setCampaigns] = useState<any[]>([])
    const [campaignId, setCampaignId] = useState<string>("")

    const [tab, setTab] = useState<"sessions" | "npcs" | "notes">("sessions")

    //sessions
    const [sessions, setSessions] = useState<any[]>([])
    const [newSessionTitle, setNewSessionTitle] = useState<string>("")

    const [activeSessionId, setActiveSessionId] = useState<string>("")
    const [beats, setBeats] = useState<any[]>([])
    const [newBeatText, setNewBeatText] = useState<string>("")

    //npcs
    const [npcs, setNpcs] = useState<any[]>([])
    const [npcName, setNpcName] = useState<string>("")
    const [npcInstituteRole, setNpcInstituteRole] = useState<string>("")
    const [npcNarrativeRole, setNpcNarrativeRole] = useState<string>("")
    const [npcNotes, setNpcNotes] = useState<string>("")

    //notes
    const [notes, setNotes] = useState<any[]>([])
    const [noteTitle, setNoteTitle] = useState<string>("")
    const [noteContent, setNoteContent] = useState<string>("")
    const [noteScope, setNoteScope] = useState<"campaign" | "session">("campaign")

    const activeSession = useMemo(
        () => sessions.find((s) => s.id === activeSessionId),
        [activeSessionId, sessions]
    )

    //load campaigns 
    useEffect(() => {
        const run = async () => {
            const list = await getCampaigns(userID)
            setCampaigns(list)
            if (!campaignId && list.length) setCampaignId(list[0].id)
        }
        run()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userID])

    // load data when campaign changes
    useEffect(() => {
        if (!campaignId) return
        const run = async () => {
            const [s, n, no] = await Promise.all([
                listSessions(campaignId),
                listNpcs(campaignId),
                listNotes(campaignId, null),
            ])
            setSessions(s)
            setNpcs(n)
            setNotes(no)
            setActiveSessionId(s[0]?.id || "")
        }
        run()
    }, [campaignId])

    // load beats when session changes
    useEffect(() => {
        if (!activeSessionId) {
            setBeats([])
            return
        }
        const run = async () => {
            const b = await listBeats(activeSessionId)
            setBeats(b)
        }
        run()
    }, [activeSessionId])

    const refreshNotes = async () => {
        if (!campaignId) return
        if (noteScope === "session" && !activeSessionId) {
            setNotes(await listNotes(campaignId, activeSessionId))
        } else {
            setNotes(await listNotes(campaignId, null))
        }
    }

    return (
<div className="mt-6 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 p-6 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <p className="text-xs tracking-widest text-gray-500 uppercase">
            Painel de Coordenação Interna
          </p>
          <h3 className="text-lg font-semibold text-gray-900">Operações Narrativas</h3>
          <p className="text-sm text-gray-600">
            Acesso restrito a coordenadores autorizados.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <select
            value={campaignId}
            onChange={(e) => setCampaignId(e.target.value)}
            className="text-sm rounded-lg border border-gray-200 bg-white dark:bg-zinc-900 px-3 py-2"
          >
            {campaigns.map((c) => (
              <option key={c.id} value={c.id}>
                {c.title}
              </option>
            ))}
          </select>

          <div className="flex rounded-lg border border-gray-200 overflow-hidden">
            <button
              className={`px-3 py-2 text-sm ${tab === "sessions" ? "bg-gray-100" : "bg-white dark:bg-zinc-900"}`}
              onClick={() => setTab("sessions")}
            >
              Sessões
            </button>
            <button
              className={`px-3 py-2 text-sm ${tab === "npcs" ? "bg-gray-100" : "bg-white"}`}
              onClick={() => setTab("npcs")}
            >
              NPCs
            </button>
            <button
              className={`px-3 py-2 text-sm ${tab === "notes" ? "bg-gray-100" : "bg-white"}`}
              onClick={() => setTab("notes")}
            >
              Notas
            </button>
          </div>
        </div>
      </div>

      {/* SESSIONS */}
      {tab === "sessions" && (
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <h4 className="font-semibold text-gray-900">Sessões</h4>
            <div className="mt-3 flex gap-2">
              <input
                value={newSessionTitle}
                onChange={(e) => setNewSessionTitle(e.target.value)}
                placeholder="Título da sessão (ex: Sessão 03 — Biblioteca)"
                className="flex-1 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm"
              />
              <button
                onClick={async () => {
                  if (!campaignId || !newSessionTitle.trim()) return
                  const created = await createSession(campaignId, newSessionTitle.trim())
                  setNewSessionTitle("")
                  const s = await listSessions(campaignId)
                  setSessions(s)
                  setActiveSessionId(created.id)
                }}
                className="px-3 py-2 rounded-lg bg-purple-600 text-white text-sm"
              >
                Criar
              </button>
            </div>

            <div className="mt-4 space-y-2">
              {sessions.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveSessionId(s.id)}
                  className={`w-full text-left rounded-xl border px-3 py-3 text-sm ${
                    s.id === activeSessionId
                      ? "border-purple-300 bg-white"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <div className="font-semibold text-gray-900">{s.title}</div>
                  <div className="text-xs text-gray-500">
                    status: {s.status ?? "planned"}
                  </div>
                </button>
              ))}

              {sessions.length === 0 && (
                <div className="text-sm text-gray-600">
                  Nenhuma sessão criada ainda.
                </div>
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <h4 className="font-semibold text-gray-900">Pontos obrigatórios</h4>
            <p className="text-xs text-gray-500">
              Sessão: {activeSession?.title ?? "—"}
            </p>

            <div className="mt-3 flex gap-2">
              <input
                value={newBeatText}
                onChange={(e) => setNewBeatText(e.target.value)}
                placeholder="Ex: Entrar no porão / Descobrir a lenda"
                className="flex-1 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm"
              />
              <button
                onClick={async () => {
                  if (!activeSessionId || !newBeatText.trim()) return
                  await addBeat(activeSessionId, newBeatText.trim())
                  setNewBeatText("")
                  setBeats(await listBeats(activeSessionId))
                }}
                className="px-3 py-2 rounded-lg bg-gray-900 text-white text-sm"
              >
                Adicionar
              </button>
            </div>

            <div className="mt-4 space-y-2">
              {beats.map((b) => (
                <div
                  key={b.id}
                  className="rounded-xl border border-gray-200 bg-white px-3 py-3 flex items-center justify-between gap-3"
                >
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={!!b.is_done}
                      onChange={async (e) => {
                        await toggleBeat(b.id, e.target.checked)
                        setBeats(await listBeats(activeSessionId))
                      }}
                    />
                    <span className={b.is_done ? "line-through text-gray-400" : "text-gray-900"}>
                      {b.text}
                    </span>
                  </label>

                  <button
                    onClick={async () => {
                      await deleteBeat(b.id)
                      setBeats(await listBeats(activeSessionId))
                    }}
                    className="text-xs px-2 py-1 rounded-lg bg-red-600 text-white"
                  >
                    remover
                  </button>
                </div>
              ))}

              {activeSessionId && beats.length === 0 && (
                <div className="text-sm text-gray-600">
                  Nenhum ponto obrigatório ainda.
                </div>
              )}

              {!activeSessionId && (
                <div className="text-sm text-gray-600">
                  Selecione uma sessão para editar os pontos obrigatórios.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* NPCS */}
      {tab === "npcs" && (
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <h4 className="font-semibold text-gray-900">Criar NPC</h4>

            <div className="mt-3 space-y-2">
              <input
                value={npcName}
                onChange={(e) => setNpcName(e.target.value)}
                placeholder="Nome (ex: Alberto)"
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
                  <option value="lenda">Lenda</option>
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
                placeholder="Notas rápidas (opcional)"
                className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm min-h-[90px]"
              />

              <button
                onClick={async () => {
                  if (!campaignId || !npcName.trim()) return
                  await createNpc(campaignId, {
                    name: npcName.trim(),
                    institute_role: npcInstituteRole,
                    narrative_role: npcNarrativeRole,
                    notes: npcNotes.trim() || undefined,
                  })
                  setNpcName("")
                  setNpcNotes("")
                  setNpcs(await listNpcs(campaignId))
                }}
                className="px-3 py-2 rounded-lg bg-purple-600 text-white text-sm"
              >
                Registrar NPC
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <h4 className="font-semibold text-gray-900">NPCs da campanha</h4>
            <div className="mt-4 space-y-2">
              {npcs.map((n) => (
                <div key={n.id} className="rounded-xl border border-gray-200 bg-white p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-semibold text-gray-900">{n.name}</div>
                      <div className="text-xs text-gray-500">
                        {n.institute_role ?? "—"} • {n.narrative_role ?? "—"}
                      </div>
                    </div>
                    <div className="text-[11px] text-gray-400">
                      ID: {String(n.id).slice(0, 6).toUpperCase()}
                    </div>
                  </div>

                  {n.notes && (
                    <p className="mt-2 text-sm text-gray-700 whitespace-pre-wrap">
                      {n.notes}
                    </p>
                  )}
                </div>
              ))}

              {npcs.length === 0 && (
                <div className="text-sm text-gray-600">
                  Nenhum NPC registrado ainda.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* NOTES */}
      {tab === "notes" && (
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <h4 className="font-semibold text-gray-900">Anotação livre</h4>

            <div className="mt-3 space-y-2">
              <div className="flex items-center gap-2">
                <select
                  value={noteScope}
                  onChange={(e) => setNoteScope(e.target.value as any)}
                  className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm"
                >
                  <option value="campaign">Da campanha</option>
                  <option value="session">Da sessão</option>
                </select>

                {noteScope === "session" && (
                  <select
                    value={activeSessionId}
                    onChange={(e) => setActiveSessionId(e.target.value)}
                    className="flex-1 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm"
                  >
                    {sessions.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                )}
              </div>

              <input
                value={noteTitle}
                onChange={(e) => setNoteTitle(e.target.value)}
                placeholder="Título (ex: Consequências da sessão)"
                className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm"
              />

              <textarea
                value={noteContent}
                onChange={(e) => setNoteContent(e.target.value)}
                placeholder="Texto livre…"
                className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm min-h-[140px]"
              />

              <button
                onClick={async () => {
                  if (!campaignId || !noteTitle.trim()) return
                  await createNote(campaignId, {
                    title: noteTitle.trim(),
                    content: noteContent,
                    session_id: noteScope === "session" ? activeSessionId || null : null,
                  })
                  setNoteTitle("")
                  setNoteContent("")
                  await refreshNotes()
                }}
                className="px-3 py-2 rounded-lg bg-gray-900 text-white text-sm"
              >
                Salvar anotação
              </button>

              <button
                onClick={refreshNotes}
                className="px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm"
              >
                Atualizar lista
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <h4 className="font-semibold text-gray-900">
              {noteScope === "session" ? "Notas da sessão" : "Notas da campanha"}
            </h4>

            <div className="mt-4 space-y-2">
              {notes.map((n) => (
                <div key={n.id} className="rounded-xl border border-gray-200 bg-white p-4">
                  <div className="font-semibold text-gray-900">{n.title}</div>
                  <div className="mt-1 text-xs text-gray-500">
                    atualizado: {new Date(n.updated_at ?? n.created_at).toLocaleString()}
                  </div>
                  {n.content && (
                    <p className="mt-2 text-sm text-gray-700 whitespace-pre-wrap">
                      {n.content}
                    </p>
                  )}
                </div>
              ))}

              {notes.length === 0 && (
                <div className="text-sm text-gray-600">
                  Nenhuma anotação encontrada.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <p className="mt-6 text-[11px] text-gray-400">
        Aviso: alterações registradas podem ser auditadas. Atividade fora do horário regulamentar pode ser
        limitada.
      </p>
    </div>
  )
}
