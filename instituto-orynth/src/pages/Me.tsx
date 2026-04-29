import { supabase } from "../services/supabase"
import { useEffect, useState } from "react"
import { getCharacterByUserId } from "../services/character"
import { skills } from "../system/data/skills";
import type { SkillData } from "../system/data/skills";
import { subclassesCatalog } from "../system/data/academics/subclassesCatalog"
import { technicalCoursesCatalog } from "../system/data/academics/technicalCoursesCatalog"
import { graduationCatalog } from "../system/data/academics/graduationsCatalog";
import { archetypes } from "../system/data/archetypes";
import { updateCharacterProgression } from "../services/characterProgression";

export default function Me() {
const [dashboard, setDashboard] = useState<any>(null)
const [loading, setLoading] = useState(true)


  const [tab, setTab] = useState<"abilities" | "passives">("abilities")

  const [selectedAbility, setSelectedAbility] = useState<any>(null)

useEffect(() => {
  async function load() {
    try {
      const {
        data: { user }
      } = await supabase.auth.getUser()

      if (!user) {
        console.log("Sem usuário logado")
        setLoading(false)
        return
      }

      const character = await getCharacterByUserId(user.id)

      if (!character) {
        console.log("Sem personagem encontrado")
        setLoading(false)
        return
      }
      //await updateCharacterProgression(character.id, character.level)

      setDashboard({
        student: character,
        attrs: character.attributes
      })

    } catch (err) {
      console.error("Erro ao carregar personagem:", err)
    } finally {
      // 🔥 ISSO GARANTE QUE NUNCA TRAVA
      setLoading(false)
    }
  }

  load()
}, [])

  if (loading) return <p>Carregando...</p>
if (!dashboard && !loading)
  return <p>Nenhum personagem encontrado.</p>


  const trainedSkills: string[] = dashboard.student.chosen_extra_skills || []
  
const attrMap = {
  FOR: dashboard.attrs.FOR,
  DES: dashboard.attrs.DES,
  INT: dashboard.attrs.INT,
  SAB: dashboard.attrs.SAB,
  CAR: dashboard.attrs.CAR,
  VON: dashboard.attrs.VON,
  CON: dashboard.attrs.CON,
}

async function uploadImage(file: File, path: string) {
  const fileExt = file.name.split('.').pop()
  const fileName = `${Date.now()}.${fileExt}`

  const { error } = await supabase.storage
    .from("avatars")
    .upload(`${path}/${fileName}`, file)

if (error) {
  console.error("Erro no upload:", error)
  alert("Erro no upload: " + error.message)
  return null
}

  const { data } = supabase.storage
    .from("avatars")
    .getPublicUrl(`${path}/${fileName}`)

  // 🔥 FORÇA atualização visual
  return data.publicUrl + "?t=" + Date.now()
}

function getModifier(value: number) {
  if (value == null) return 0
  return Math.floor((value - 10) / 2)
}

function getSkillValue(skill: SkillData) {
  const attrValue = attrMap[skill.attribute]
  const modifier = getModifier(attrValue)

  const isTrained = trainedSkills.includes(skill.id)
  const isLocked = skill.trained && !isTrained

  const trainingBonus = isTrained ? 2 : 0

  return {
    total: modifier + trainingBonus,
    modifier,
    isTrained,
  }
}

  const shortRest = async () => {
  const char = dashboard.student

  const newHP = Math.min(char.current_hp + 10, char.hp_max)
  const newPF = Math.min(char.current_pf + 5, char.pf_max)

  await supabase
    .from("characters")
    .update({
      current_hp: newHP,
      current_pf: newPF
    })
    .eq("id", char.id)

  window.location.reload() // simples por enquanto
}

const normalRest = async () => {
  const char = dashboard.student

const newHP = Math.min((char.current_hp ?? 0) + 10, char.hp_max)
const newPF = Math.min((char.current_pf ?? 0) + 5, char.pf_max)
const newSAN = Math.min((char.current_san ?? 0) + 10, char.san_max)

  await supabase
    .from("characters")
    .update({
      current_hp: newHP,
      current_pf: newPF,
      current_san: newSAN
    })
    .eq("id", char.id)

  window.location.reload()
}

const longRest = async () => {
  const char = dashboard?.student

  await supabase
    .from("characters")
    .update({
      current_hp: char.hp_max,
      current_pf: char.pf_max,
      current_san: char.san_max
    })
    .eq("id", char.id)

  window.location.reload()
}

function getXPNextLevel(level: number) {
  return level * 100
}

function getXPPercent(xp: number, level: number) {
  const max = getXPNextLevel(level)
  return Math.min((xp / max) * 100, 100)
}

const inventory: { name: string; qty: number }[] =
  Array.isArray(dashboard.student.inventory)
    ? dashboard.student.inventory
    : []

  const graduationData = graduationCatalog[dashboard.student.graduation]
const archetypeData = archetypes[dashboard.student.archetype]

const subclassData = subclassesCatalog[dashboard.student.subclass]
const courseData = technicalCoursesCatalog[dashboard.student.technical_course]

let passives: any[] = []

try {
  passives = [
    ...((subclassData as any)?.passives || []),
    ...((courseData as any)?.passives || [])
  ]
} catch (err) {
  console.error("Erro ao montar passivas:", err)
  passives = []
}

const hasSubclassPassives = (subclassData as any)?.passives?.length > 0
const hasCoursePassives = (courseData as any)?.passives?.length > 0

function goToProgression() {
  const { subclass, technical_course } = dashboard.student

  if (subclass) {
    window.location.href = `/progression/subclass/${subclass}`
  } else if (technical_course) {
    window.location.href = `/progression/course/${technical_course}`
  } else {
    window.location.href = "/progression"
  }
}

const allAbilities = [
  ...((graduationData as any)?.abilities || []),
  ...((archetypeData as any)?.abilities || [])
]

const learnedAbilities: string[] = Array.isArray(dashboard.student.learned_abilities)
  ? dashboard.student.learned_abilities
  : []
  
const baseAbilities = [
  ...((graduationData as any)?.abilities || []).map((a:any) => ({
    ...a,
    source: "graduation"
  })),
  ...((archetypeData as any)?.abilities || []).map((a:any) => ({
    ...a,
    source: "archetype"
  }))
]

const passivesError = !subclassData || !courseData

const extraAbilities = allAbilities
  .filter((ability) => learnedAbilities.includes(ability.id))
  .map((a:any) => ({
    ...a,
    source: "extra"
  }))

const abilities = [...baseAbilities, ...extraAbilities]
  return (
    <div className="grid gap-4 space-y-6">
<section className="relative overflow-visible rounded-2xl border border-gray-200 p-6 shadow-sm text-center">

  {/* 🖼 FUNDO */}
<label className="cursor-pointer w-full">

  <div className="h-40 w-full rounded-xl overflow-hidden bg-gray-200 relative">

    {dashboard.student.character_image && (
<img
  key={dashboard.student.character_image}
  src={dashboard.student.character_image}
  className="absolute inset-0 w-full h-full object-cover object-center"
/>
    )}

    <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white text-sm">
      Trocar fundo
    </div>

  </div>

  <input
    type="file"
    accept="image/*"
    className="hidden"
    onChange={async (e) => {
      const file = e.target.files?.[0]
      if (!file) return

      const url = await uploadImage(file, "backgrounds")
      if (!url) return

      await supabase
        .from("characters")
        .update({ character_image: url })
        .eq("id", dashboard.student.id)

      setDashboard((prev: any) => ({
        ...prev,
        student: {
          ...prev.student,
          character_image: url
        }
      }))
    }}
  />

</label>

  {/* CONTEÚDO */}
  <div className="relative z-10 flex flex-col items-center -mt-16">

<div className="relative flex flex-col items-center">

  {/* 👤 AVATAR */}
  <div className="relative group z-20">

<label className="cursor-pointer">

  <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden border-2 border-cyan-500 hover:opacity-80 transition">
    {dashboard.student.avatar_image ? (
      <img
      alt = "Foto do avatar"
        src={dashboard.student.avatar_image}
        className="w-full h-full object-cover"
      />
    ) : (
      <div className="flex items-center justify-center h-full text-xs text-gray-500">
        Upload
      </div>
    )}
  </div>

  <input
    type="file"
    accept="image/*"
    className="hidden"
    onChange={async (e) => {
      const file = e.target.files?.[0]
      if (!file) return

const url = await uploadImage(file, "avatars")
if (!url) return

await supabase
  .from("characters")
  .update({ avatar_image: url }) // ✅ certo
  .eq("id", dashboard.student.id)

setDashboard((prev:any) => ({
  ...prev,
  student: {
    ...prev.student,
    avatar_image: url
  }
}))
    }}
  />

</label>

    {/* 🔢 NÍVEL */}
    <div className="absolute -bottom-2 -right-2 bg-cyan-500 text-white text-xs px-2 py-1 rounded-full shadow">
      Lv {dashboard.student.level}
    </div>

    {/* 🧠 TOOLTIP BONITO */}
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full
  opacity-0 group-hover:opacity-100 transition duration-200
  pointer-events-none z-50">

  <div className="w-64 backdrop-blur-md bg-white/90 dark:bg-zinc-800/90
    text-gray-800 dark:text-gray-100 text-xs p-3 rounded-xl shadow-xl border">

    <p className="font-semibold mb-1 text-cyan-600">Progressão</p>
    <p>Nível 1: habilidade inicial</p>
    <p>Nível atual: bônus ativo</p>

  </div>
</div>

    {/* ⚙️ INPUTS FLUTUANTES */}
    <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 
      opacity-0 group-hover:opacity-100 transition
      flex gap-2 w-[260px] z-50">

      <input
        type="text"
        placeholder="Avatar URL"
        defaultValue={dashboard.student.avatar_image || ""}
        className="flex-1 px-2 py-1 border rounded-md text-xs bg-white/90"
onBlur={async (e) => {
  const newUrl = e.target.value

  await supabase
    .from("characters")
    .update({ character_image: newUrl })
    .eq("id", dashboard.student.id)

  setDashboard((prev:any) => ({
    ...prev,
    student: {
      ...prev.student,
      character_image: newUrl
    }
  }))
}}
      />

      <input
        type="text"
        placeholder="Fundo URL"
        defaultValue={dashboard.student.character_image || ""}
        className="flex-1 px-2 py-1 border rounded-md text-xs bg-white/90"
onBlur={async (e) => {
  const newUrl = e.target.value

  await supabase
    .from("characters")
    .update({ character_image: newUrl })
    .eq("id", dashboard.student.id)

  setDashboard((prev:any) => ({
    ...prev,
    student: {
      ...prev.student,
      character_image: newUrl
    }
  }))
}}
      />
    </div>

  </div>
</div>

    {/* 📊 XP BAR */}
    <div className="w-full mt-6 group/xp">

      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-cyan-500 transition-all duration-500"
          style={{
            width: `${getXPPercent(
              dashboard.student.xp,
              dashboard.student.level
            )}%`,
          }}
        />
      </div>

      {/* TEXTO */}
      <p className="text-xs text-gray-500 mt-2">
        {dashboard.student.xp} XP
      </p>

      {/* TOOLTIP XP */}
      <div className="hidden group-hover:block text-xs text-white bg-black mt-2 p-2 rounded">
        Progresso atual: {dashboard.student.xp} XP  
        Próximo nível: {getXPNextLevel(dashboard.student.level)} XP
      </div>
    </div>

  </div>

  <div className="mt-4 grid grid-cols-2 gap-3">
  <div className="p-3 rounded-xl bg-yellow-50 border">
    <p className="text-xs text-gray-500">PD</p>
    <p className="text-lg font-bold">
      {dashboard.student.pd_total} / {dashboard.student.pd_spent}
    </p>
  </div>

  <div className="p-3 rounded-xl bg-purple-50 border">
    <p className="text-xs text-gray-500">PEH</p>
    <p className="text-lg font-bold">
      {dashboard.student.peh_total} / {dashboard.student.peh_spent}
    </p>
  </div>
</div>

  {/* ❤️ CONDIÇÃO */}
  <div className="mt-6 grid grid-cols-3 gap-3">
    {[
      ["HP", dashboard.student.current_hp, dashboard.student.hp_max],
      ["PF", dashboard.student.current_pf, dashboard.student.pf_max],
      ["SAN", dashboard.student.current_san, dashboard.student.san_max],
    ].map(([k, current, max]) => (
      <div key={k} className="rounded-xl bg-gradient-to-br from-white to-gray-100 border border-gray-300 shadow">
        <p className="text-xs text-gray-500">{k}</p>
        <p className="text-lg font-semibold">{current} / {max}</p>
      </div>
    ))}
  </div>

  {/* 💤 DESCANSO */}
  <div className="mt-4 flex justify-center gap-2">
    <button onClick={shortRest} className="px-3 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 shadow-md text-sm">
      💤
    </button>

    <button onClick={normalRest} className="px-3 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 shadow-md text-sm">
      🛌
    </button>

    <button onClick={longRest} className="px-3 py-2 rounded-lg bg-purple-500 text-white hover:bg-purple-600 shadow-md text-sm">
      🌙
    </button>
  </div>

</section>

<div className="grid md:grid-cols-2 gap-4">
<section className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 p-6 shadow-sm">
  <h3 className="text-base font-semibold text-gray-900">Atributos</h3>

  <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            ["FOR", dashboard.attrs.FOR],
            ["DES", dashboard.attrs.DES],
            ["INT", dashboard.attrs.INT],
            ["SAB", dashboard.attrs.SAB],
            ["CAR", dashboard.attrs.CAR],
            ["VON", dashboard.attrs.VON],
            ["CON", dashboard.attrs.CON],
          ].map(([k, v]) => (
            <div key={k} className="rounded-xl bg-gray-50 p-4 border border-gray-200">
              <p className="text-xs text-gray-500">{k}</p>
              <p className="text-2xl font-semibold">{v}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-[11px] text-gray-400">
          *Valores podem sofrer recalibração conforme diretrizes institucionais.
        </p>
      </section>

<section className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 p-6 shadow-sm mt-4">
  <h3 className="text-base font-semibold text-gray-900">Inventário</h3>

  {inventory.length === 0 ? (
   <p className="text-xs text-gray-400">
  {inventory.length} item(ns)
</p>
  ) : (
    <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
      {inventory.map((item: { name: string; qty: number }, i: number) => (
        <div
          key={i}
          className="p-3 rounded-xl border bg-gray-50 text-center hover:bg-gray-100 transition"
        >
          <p className="text-sm font-medium">
            {item.name}
          </p>
          <p className="text-xs text-gray-500">
            x{item.qty}
          </p>
        </div>
      ))}
    </div>
  )}
</section>

<section className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 p-6 shadow-sm">
  <h3 className="text-base font-semibold text-gray-900">Perícias</h3>

  <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
    {Object.values(skills).map((skill) => {
      const { total, isTrained } = getSkillValue(skill)
      const isLocked = skill.trained && !isTrained

      return (
        <div
          key={skill.id}
          className={`rounded-xl border p-3 text-center transition
            ${isLocked ? "bg-gray-100 opacity-50" : "bg-gray-50 hover:bg-gray-100"}
          `}
        >
          <p className="text-xs font-medium">{skill.name}</p>

          <p className="text-[10px] text-gray-400">
            {skill.attribute}
          </p>

          <p className="text-lg font-bold text-cyan-500 mt-1">
            {isLocked ? "—" : total >= 0 ? `+${total}` : total}
          </p>

          {isTrained && (
            <p className="text-[10px] text-green-500 mt-1">
              Treinada
            </p>
          )}
        </div>
      )
    })}
  </div>
</section>
      </div>

<section className="bg-white dark:bg-zinc-900 rounded-2xl border p-6 shadow-sm mt-4">

  <div className="flex gap-2 mb-4">
    <button
      onClick={() => setTab("abilities")}
      className={`px-3 py-1 rounded-lg ${
        tab === "abilities" ? "bg-purple-500 text-white" : "bg-gray-200"
      }`}
    >
      Habilidades
    </button>

    <button
      onClick={() => setTab("passives")}
      className={`px-3 py-1 rounded-lg ${
        tab === "passives" ? "bg-cyan-500 text-white" : "bg-gray-200"
      }`}
    >
      Passivas
    </button>
  </div>

  {/* HABILIDADES */}
  {tab === "abilities" && (
    <div className="space-y-3">
      {abilities.map((ability, i) => (
        <div
          key={i}
          onClick={() => setSelectedAbility(ability)}
          className="cursor-pointer p-3 rounded-xl border bg-gradient-to-r from-purple-50 to-white hover:scale-[1.01] transition"
        >
          <p className="text-[10px] text-gray-400">
            {ability.source === "graduation" && "🎓 Graduação"}
            {ability.source === "archetype" && "🧬 Arquétipo"}
            {ability.source === "extra" && "✨ Extra"}
          </p>

          <p className="text-sm font-semibold text-purple-600">
            ✦ {ability.name}
          </p>
        </div>
      ))}
    </div>
  )}

  {/* PASSIVAS */}
{tab === "passives" && (
  <div className="space-y-3">

    {/* ❌ ERRO */}
    {passivesError && (
      <div className="p-4 rounded-xl bg-red-50 border text-center">
        <p className="text-sm text-red-600 font-medium">
          Erro ao encontrar passivas
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Verifique dando refresh na página
        </p>
      </div>
    )}

    {/* 📭 SEM PASSIVAS */}
    {!passivesError && passives.length === 0 && (
      <div className="p-4 rounded-xl bg-gray-50 border text-center space-y-2">
        <p className="text-sm text-gray-600">
          Não encontramos nenhum registro de passiva
        </p>

      <button
        onClick={goToProgression}
        className="px-3 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 text-sm"
      >
        Ir para árvore de progressão
      </button>
      </div>
    )}

    {/* ✅ PASSIVAS */}
    {!passivesError && passives.length > 0 && (
      passives.map((passive, i) => (
        <div
          key={i}
          className="p-3 rounded-xl border bg-cyan-50"
        >
          <p className="text-sm font-semibold text-cyan-600">
            ✦ {passive.name}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {passive.description}
          </p>
        </div>
      ))
    )}

  </div>
)}

  {/* MODAL */}
{selectedAbility && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-xl max-w-md w-full space-y-3">

      <h2 className="text-lg font-bold text-purple-600">
        {selectedAbility.name}
      </h2>

      <p><strong>Tipo:</strong> {selectedAbility.type}</p>
      <p><strong>Custo:</strong> {selectedAbility.cost} PF</p>
      <p><strong>Atributo-base:</strong> {selectedAbility.attribute}</p>
      <p><strong>Alcance:</strong> {selectedAbility.range}</p>
      <p><strong>Duração:</strong> {selectedAbility.duration}</p>

      <div>
        <p className="font-semibold">Descrição:</p>
        <p className="text-sm text-gray-600">
          {selectedAbility.description}
        </p>
      </div>

      {selectedAbility.effects && (
        <div>
          <p className="font-semibold">Efeitos:</p>
          <ul className="list-disc ml-5 text-sm text-gray-600">
            {selectedAbility.effects.map((effect: string, i: number) => (
              <li key={i}>{effect}</li>
            ))}
          </ul>
        </div>
      )}

      {selectedAbility.critical_fail && (
        <div>
          <p className="font-semibold text-red-500">Falha crítica:</p>
          <p className="text-sm text-gray-600">
            {selectedAbility.critical_fail}
          </p>
        </div>
      )}

      {/* BOTÕES */}
      <div className="flex justify-between mt-4">
        
        <button
          onClick={async () => {
            const cost = selectedAbility.cost || 0
            const char = dashboard.student

            if (char.current_pf < cost) {
              alert("PF insuficiente!")
              return
            }

            const newPF = char.current_pf - cost

            await supabase
              .from("characters")
              .update({ current_pf: newPF })
              .eq("id", char.id)

            setDashboard((prev: any) => ({
              ...prev,
              student: {
                ...prev.student,
                current_pf: newPF
              }
            }))

            setSelectedAbility(null)
          }}
          className="px-3 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          Usar habilidade
        </button>

        <button
          onClick={() => setSelectedAbility(null)}
          className="px-3 py-2 bg-gray-200 rounded"
        >
          Fechar
        </button>
      </div>

    </div>
  </div>
)}

</section>

    </div>
  )
}

