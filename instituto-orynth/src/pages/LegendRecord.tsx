import { useEffect, useMemo, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { supabase } from "../services/supabase"

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n))
}

function Stat({
  label,
  value,
  edit,
  onChange,
}: {
  label: string
  value: string
  edit: boolean
  onChange?: (v: string) => void
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-900">
      <p className="text-xs tracking-widest text-gray-500 dark:text-zinc-400">{label}</p>

      {!edit ? (
        <p className="mt-1 text-xl font-semibold text-gray-900 dark:text-zinc-100">{value}</p>
      ) : (
        <input
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="mt-2 h-9 w-20 rounded-lg border border-gray-200 bg-white px-2 text-center text-sm font-semibold text-gray-900
                     dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
        />
      )}
    </div>
  )
}

function StatPair({
  label,
  current,
  max,
  edit,
  onChangeCurrent,
  onChangeMax,
  suffix,
}: {
  label: string
  current: number | null | undefined
  max: number | null | undefined
  edit: boolean
  onChangeCurrent?: (v: number) => void
  onChangeMax?: (v: number) => void
  suffix?: string
}) {
  const currVal = current ?? 0
  const maxVal = max ?? 0

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-900">
      <p className="text-xs tracking-widest text-gray-500 dark:text-zinc-400">{label}</p>

      {!edit ? (
        <p className="mt-1 text-xl font-semibold text-gray-900 dark:text-zinc-100">
          {currVal}/{maxVal}
          {suffix ? <span className="text-base font-semibold">{suffix}</span> : null}
        </p>
      ) : (
        <div className="mt-2 flex items-center gap-2">
          <input
            inputMode="numeric"
            value={String(currVal)}
            onChange={(e) => onChangeCurrent?.(Number(e.target.value || 0))}
            className="h-9 w-16 rounded-lg border border-gray-200 bg-white px-2 text-center text-sm font-semibold text-gray-900
                       dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
          />

          <span className="text-sm font-semibold text-gray-400 dark:text-zinc-500">/</span>

          <input
            inputMode="numeric"
            value={String(maxVal)}
            onChange={(e) => onChangeMax?.(Number(e.target.value || 0))}
            className="h-9 w-16 rounded-lg border border-gray-200 bg-white px-2 text-center text-sm font-semibold text-gray-900
                       dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
          />

          {suffix ? (
            <span className="text-sm font-semibold text-gray-600 dark:text-zinc-300">{suffix}</span>
          ) : null}
        </div>
      )}
    </div>
  )
}

type Props = { userId: string }

type Sheet = {
  legend_id: string
  hp_max: number
  hp_current: number
  san_max: number
  san_current: number
  pf_max: number
  pf_current: number
  mental_exhaustion_level: number
  other_side_contact: number
}

const defaultSheet = (legendId: string): Sheet => ({
  legend_id: legendId,
  hp_max: 10,
  hp_current: 10,
  san_max: 50,
  san_current: 10,
  pf_max: 5,
  pf_current: 5,
  mental_exhaustion_level: 0,
  other_side_contact: 0,
})

export default function LegendRecord({ userId }: Props) {
  const { id } = useParams()
  const navigate = useNavigate()

  const [legend, setLegend] = useState<any>(null)
  const [sheet, setSheet] = useState<Sheet | null>(null)
  const [loading, setLoading] = useState(true)

  const [editMode, setEditMode] = useState(false)
  const [busy, setBusy] = useState(false)

  const [imageUrl, setImageUrl] = useState("")

  const [origLegend, setOrigLegend] = useState<any>(null)
  const [origSheet, setOrigSheet] = useState<Sheet | null>(null)
  const [origImageUrl, setOrigImageUrl] = useState("")

  const shortId = useMemo(() => (id ? String(id).slice(0, 6).toUpperCase() : "—"), [id])

  useEffect(() => {
    if (!id) return

    const run = async () => {
      setLoading(true)

      const { data: l, error: e1 } = await supabase.from("legends").select("*").eq("id", id).single()
      if (e1) {
        console.error(e1)
        setLegend(null)
        setLoading(false)
        return
      }

      const { data: s, error: e2 } = await supabase
        .from("entity_sheets")
        .select("*")
        .eq("legend_id", id)
        .maybeSingle()

      if (e2) console.warn("Sheet load warning:", e2.message)

      const nextSheet: Sheet = s ? ({ ...defaultSheet(id), ...s } as Sheet) : defaultSheet(id)

      nextSheet.hp_max = Math.max(0, Number(nextSheet.hp_max || 0))
      nextSheet.san_max = Math.max(0, Number(nextSheet.san_max || 0))
      nextSheet.pf_max = Math.max(0, Number(nextSheet.pf_max || 0))

      nextSheet.hp_current = clamp(Number(nextSheet.hp_current || 0), 0, nextSheet.hp_max)
      nextSheet.san_current = clamp(Number(nextSheet.san_current || 0), 0, nextSheet.san_max)
      nextSheet.pf_current = clamp(Number(nextSheet.pf_current || 0), 0, nextSheet.pf_max)

      nextSheet.mental_exhaustion_level = clamp(Number(nextSheet.mental_exhaustion_level || 0), 0, 3)
      nextSheet.other_side_contact = clamp(Number(nextSheet.other_side_contact || 0), 0, 100)

      setLegend(l)
      setSheet(nextSheet)
      setImageUrl(l?.image_url ?? "")

      setOrigLegend(l)
      setOrigSheet(nextSheet)
      setOrigImageUrl(l?.image_url ?? "")

      setLoading(false)
    }

    run()
  }, [id])

  const startEdit = () => setEditMode(true)

  const cancelEdit = () => {
    setLegend(origLegend)
    setSheet(origSheet)
    setImageUrl(origImageUrl)
    setEditMode(false)
  }

  const onSave = async () => {
    if (!id || !legend || !sheet) return
    setBusy(true)

    try {
      const { error: e1 } = await supabase
        .from("legends")
        .update({
          title: legend.title ?? "",
          short_description: (legend.short_description ?? "").trim() || null,
          category: legend.category ?? null,
          status: legend.status ?? null,
          content: legend.content ?? null,
          image_url: imageUrl || null,
        })
        .eq("id", id)

      if (e1) throw e1

      const { error: e2 } = await supabase
        .from("entity_sheets")
        .upsert(
          {
            legend_id: id,
            hp_max: sheet.hp_max,
            hp_current: sheet.hp_current,
            san_max: sheet.san_max,
            san_current: sheet.san_current,
            pf_max: sheet.pf_max,
            pf_current: sheet.pf_current,
            mental_exhaustion_level: sheet.mental_exhaustion_level,
            other_side_contact: sheet.other_side_contact,
          },
          { onConflict: "legend_id" }
        )

      if (e2) throw e2

      const newLegend = { ...legend, image_url: imageUrl }
      setOrigLegend(newLegend)
      setOrigSheet(sheet)
      setOrigImageUrl(imageUrl)

      setLegend(newLegend)
      setEditMode(false)
      alert("Alterações salvas ✅")
    } catch (err: any) {
      console.error(err)
      alert(`Erro ao salvar: ${err?.message ?? "desconhecido"}`)
    } finally {
      setBusy(false)
    }
  }

  const setHpMax = (v: number) => {
    setSheet((prev) => {
      if (!prev) return prev
      const hp_max = Math.max(0, v)
      const hp_current = clamp(prev.hp_current ?? 0, 0, hp_max)
      return { ...prev, hp_max, hp_current }
    })
  }

  const setHpCurrent = (v: number) => {
    setSheet((prev) => {
      if (!prev) return prev
      const hp_current = clamp(v, 0, prev.hp_max ?? 0)
      return { ...prev, hp_current }
    })
  }

  const setSanMax = (v: number) => {
    setSheet((prev) => {
      if (!prev) return prev
      const san_max = Math.max(0, v)
      const san_current = clamp(prev.san_current ?? 0, 0, san_max)
      return { ...prev, san_max, san_current }
    })
  }

  const setSanCurrent = (v: number) => {
    setSheet((prev) => {
      if (!prev) return prev
      const san_current = clamp(v, 0, prev.san_max ?? 0)
      return { ...prev, san_current }
    })
  }

  const setPfMax = (v: number) => {
    setSheet((prev) => {
      if (!prev) return prev
      const pf_max = Math.max(0, v)
      const pf_current = clamp(prev.pf_current ?? 0, 0, pf_max)
      return { ...prev, pf_max, pf_current }
    })
  }

  const setPfCurrent = (v: number) => {
    setSheet((prev) => {
      if (!prev) return prev
      const pf_current = clamp(v, 0, prev.pf_max ?? 0)
      return { ...prev, pf_current }
    })
  }

  const setEx = (v: number) => {
    setSheet((prev) => {
      if (!prev) return prev
      return { ...prev, mental_exhaustion_level: clamp(v, 0, 3) }
    })
  }

  const setOl = (v: number) => {
    setSheet((prev) => {
      if (!prev) return prev
      return { ...prev, other_side_contact: clamp(v, 0, 100) }
    })
  }

  if (loading) return <div className="text-sm text-gray-600 dark:text-zinc-300">Carregando registro…</div>

  if (!legend) {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-900">
        <p className="text-sm text-gray-700 dark:text-zinc-200">Registro não encontrado.</p>
        <button
          onClick={() => navigate("/archive")}
          className="mt-4 rounded-lg bg-indigo-600 px-4 py-2 text-sm text-white"
        >
          Voltar
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-900">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs tracking-widest text-gray-500 uppercase dark:text-zinc-400">
              Arquivo do Instituto • Registro da Lenda
            </p>

            {!editMode ? (
              <h1 className="mt-1 text-2xl font-semibold text-gray-900 dark:text-zinc-100">
                {legend.title}
              </h1>
            ) : (
              <input
                value={legend.title ?? ""}
                onChange={(e) => setLegend((prev: any) => ({ ...prev, title: e.target.value }))}
                className="mt-2 w-full max-w-lg rounded-lg border border-gray-200 bg-white px-3 py-2 text-base font-semibold
                           dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
              />
            )}

                        {!editMode ? (
                <p className="mt-2 text-sm text-gray-600 dark:text-zinc-300">
                  {legend.category} • {legend.status}
                </p>
              ) : (
                <div className="mt-2 grid max-w-md grid-cols-2 gap-2">
                  <select
                    value={legend.category ?? "lenda"}
                    onChange={(e) => setLegend((prev: any) => ({ ...prev, category: e.target.value }))}
                    className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm
                              dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
                  >
                    <option value="lenda">Lenda</option>
                    <option value="criatura">Criatura</option>
                    <option value="fenomeno">Fenômeno</option>
                    <option value="rumor">Rumor</option>
                  </select>

                  <select
                    value={legend.status ?? "armazenada"}
                    onChange={(e) => setLegend((prev: any) => ({ ...prev, status: e.target.value }))}
                    className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm
                              dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
                  >
                    <option value="armazenada">Armazenada</option>
                    <option value="ativa">Ativa</option>
                    <option value="confirmada">Confirmada</option>
                    <option value="rumor">Rumor</option>
                    <option value="encerrada">Encerrada</option>
                  </select>
                </div>
              )}
            {!editMode ? (
              legend.short_description ? (
                <p className="mt-3 text-sm text-gray-700 dark:text-zinc-200">
                  {legend.short_description}
                </p>
              ) : null
            ) : (
              <div className="mt-3">
                <p className="text-xs tracking-widest text-gray-500 dark:text-zinc-400">
                  DESCRIÇÃO CURTA
                </p>
                <textarea
                  value={legend.short_description ?? ""}
                  onChange={(e) => setLegend((prev: any) => ({ ...prev, short_description: e.target.value }))}
                  placeholder="Ex: Criatura que aparece nos corredores após a meia-noite…"
                  rows={2}
                  className="mt-2 w-full max-w-2xl resize-none rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm
                             dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
                />
                <p className="mt-1 text-[11px] text-gray-400">
                  Aparece como resumo no Arquivo (2 linhas).
                </p>
              </div>
            )}
          </div>

          <div className="text-right shrink-0">
            <p className="text-xs text-gray-500 dark:text-zinc-400">ID</p>
            <p className="text-sm font-semibold text-gray-900 dark:text-zinc-100">{shortId}</p>

            <button
              onClick={() => navigate("/archive")}
              className="mt-3 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50
                         dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              Voltar ao Arquivo
            </button>

            {!editMode ? (
              <button
                onClick={startEdit}
                className="mt-2 w-full rounded-lg bg-indigo-600 px-3 py-2 text-sm text-white hover:bg-indigo-700"
              >
                Editar ficha
              </button>
            ) : (
              <div className="mt-2 grid gap-2">
                <button
                  onClick={onSave}
                  disabled={busy}
                  className="w-full rounded-lg bg-indigo-600 px-3 py-2 text-sm text-white hover:bg-indigo-700 disabled:opacity-60"
                >
                  {busy ? "Salvando..." : "Salvar"}
                </button>
                <button
                  onClick={cancelEdit}
                  disabled={busy}
                  className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50
                             dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 disabled:opacity-60"
                >
                  Cancelar
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-3 md:grid-cols-5">
        <StatPair
          label="HP"
          current={sheet?.hp_current}
          max={sheet?.hp_max}
          edit={editMode}
          onChangeCurrent={setHpCurrent}
          onChangeMax={setHpMax}
        />

        <StatPair
          label="SAN"
          current={sheet?.san_current}
          max={sheet?.san_max}
          edit={editMode}
          onChangeCurrent={setSanCurrent}
          onChangeMax={setSanMax}
        />

        <StatPair
          label="PF"
          current={sheet?.pf_current}
          max={sheet?.pf_max}
          edit={editMode}
          onChangeCurrent={setPfCurrent}
          onChangeMax={setPfMax}
        />

        <Stat
          label="EX"
          value={String(sheet?.mental_exhaustion_level ?? 0)}
          edit={editMode}
          onChange={(v) => setEx(Number(v || 0))}
        />

        <Stat
          label="OL"
          value={String(sheet?.other_side_contact ?? 0)}
          edit={editMode}
          onChange={(v) => setOl(Number(v || 0))}
        />
      </div>

      {/* Body */}
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-zinc-700 dark:bg-zinc-900">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-zinc-100">Imagem</h3>
          <p className="mt-1 text-xs text-gray-500 dark:text-zinc-400">Use URL por enquanto.</p>

          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="https://..."
            disabled={!editMode}
            className={`mt-3 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm
                       dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 ${!editMode ? "opacity-60" : ""}`}
          />

          <div className="mt-4 overflow-hidden rounded-xl border border-gray-200 bg-gray-50 dark:border-zinc-700 dark:bg-zinc-800">
            {imageUrl ? (
              <img src={imageUrl} alt="Referência" className="h-64 w-full object-cover" />
            ) : (
              <div className="flex h-64 items-center justify-center text-sm text-gray-500 dark:text-zinc-400">
                Sem imagem
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-2 rounded-2xl border border-gray-200 bg-white p-5 dark:border-zinc-700 dark:bg-zinc-900">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-zinc-100">Registro da Lenda</h3>
          <p className="mt-1 text-xs text-gray-500 dark:text-zinc-400">
            História, detalhes, sinais, fraquezas, aparições, regras narrativas, etc.
          </p>

          <textarea
            value={legend.content ?? ""}
            onChange={(e) => setLegend((prev: any) => ({ ...prev, content: e.target.value }))}
            disabled={!editMode}
            className={`mt-3 w-full min-h-[420px] rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm leading-relaxed
                       dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 ${!editMode ? "opacity-70" : ""}`}
          />
        </div>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-900">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-zinc-100">Atributos & Perícias</h3>
        <p className="mt-1 text-xs text-gray-500 dark:text-zinc-400">
          Próximo passo: salvar atributos e calcular perícias automaticamente.
        </p>
      </div>
    </div>
  )
}