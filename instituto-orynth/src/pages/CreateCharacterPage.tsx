import { useMemo, useState, useEffect } from "react"
import Confetti from "react-confetti"
import { useNavigate } from "react-router-dom"
import { graduationCatalog } from "../system/data/academics/graduationsCatalog"
import { Link } from "react-router-dom"
import { technicalCoursesCatalog } from "../system/data/academics/technicalCoursesCatalog"
import { calculateCharacterSheet } from "../system/rules/calculations"
import { subclassesCatalog } from "../system/data/academics/subclassesCatalog"
import { archetypes, type ArchetypeData } from "../system/data/archetypes"
import { getModifier } from "../system/rules/modifiers"
import { calculateCharacterSkills } from "../system/rules/skills"
import type { AttributeKey } from "../system/types/attributes"
import { skills, type SkillKey } from "../system/data/skills"
import type { ActiveAbility } from "../system/types/activeAbilities"
import { graduations } from "../system/data/graduations"
import { supabase } from "../services/supabase"

const ATTRIBUTE_ORDER: AttributeKey[] = ["FOR", "DES", "INT", "SAB", "CAR", "VON", "CON"]
const ATTRIBUTE_BASE_VALUES = [15, 14, 13, 12, 10, 8, 8]
const ATTRIBUTE_ADJUST_POINTS = 2
const ATTRIBUTE_MIN_FINAL = 8
const ATTRIBUTE_MAX_FINAL = 16

function getInitialAssignedAttributes(): Record<AttributeKey, number> {
  return {
    FOR: 15,
    DES: 14,
    INT: 13,
    SAB: 12,
    CAR: 10,
    VON: 8,
    CON: 8,
  }
}

function StepBadge({
  index,
  current,
  label,
}: {
  index: number
  current: number
  label: string
}) {
  const active = current === index
  const done = current > index

  return (
    <div className="flex items-center gap-3">
      <div
        className={[
          "flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold transition",
          active
            ? "border-cyan-400 bg-cyan-500/20 text-cyan-200"
            : done
              ? "border-emerald-400/40 bg-emerald-500/15 text-emerald-200"
              : "border-white/10 bg-white/5 text-white/45",
        ].join(" ")}
      >
        {index + 1}
      </div>

      <span
        className={[
          "text-sm transition",
          active ? "text-white" : "text-white/50",
        ].join(" ")}
      >
        {label}
      </span>
    </div>
  )
}

function SelectCard({
  title,
  description,
  active,
  onClick,
  extra,
}: {
  title: string
  description: string
  active?: boolean
  onClick: () => void
  extra?: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "w-full rounded-3xl border p-5 text-left transition",
        active
          ? "border-cyan-400/40 bg-cyan-500/10 shadow-[0_0_0_1px_rgba(34,211,238,0.08)]"
          : "border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.06]",
      ].join(" ")}
    >
      <div className="mb-2 flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        {active && (
          <span className="rounded-full border border-cyan-400/20 bg-cyan-500/15 px-2 py-1 text-[11px] uppercase tracking-wide text-cyan-200">
            Selecionado
          </span>
        )}
      </div>

      <p className="text-sm leading-6 text-white/70">{description}</p>

      {extra ? <div className="mt-4">{extra}</div> : null}
    </button>
  )
}

export default function CreateCharacterPage() {
  const navigate = useNavigate()

  const [step, setStep] = useState(0)

  const [characterName, setCharacterName] = useState("")
  const [level, setLevel] = useState(1)

  const [archetype, setArchetype] = useState("")
  const [subclass, setSubclass] = useState<string | null>(null)
  const [chosenExtraSkills, setChosenExtraSkills] = useState<SkillKey[]>([])

  const [graduation, setGraduation] = useState("")
  const [technicalCourse, setTechnicalCourse] = useState<string | null>(null)

  const [selectedAttributeToSwap, setSelectedAttributeToSwap] = useState<AttributeKey | null>(null)

  const [assignedValues, setAssignedValues] = useState<Record<AttributeKey, number>>(
    getInitialAssignedAttributes()
  )

  const [chosenBonusAttribute, setChosenBonusAttribute] = useState<AttributeKey | null>(null)

  const [adjustments, setAdjustments] = useState<Record<AttributeKey, number>>({
    FOR: 0,
    DES: 0,
    INT: 0,
    SAB: 0,
    CAR: 0,
    VON: 0,
    CON: 0,
  })

const selectedArchetype = Object.values(archetypes).find(
  (item: ArchetypeData) => item.id === archetype
)

const [user, setUser] = useState<any>(null)

useEffect(() => {
  const getUser = async () => {
    const { data, error } = await supabase.auth.getUser()

    if (error) {
      console.error("Erro ao pegar usuário:", error)
      return
    }

    setUser(data.user)

    console.log("USER:", data.user)
    console.log("USER ID:", data.user?.id)
  }

  getUser()
}, [])

useEffect(() => {
  setChosenBonusAttribute(null)
  setChosenExtraSkills([])
  setSubclass(null) 
  setChosenArchetypeAbility(null)
}, [archetype])

useEffect(() => {
  setChosenGraduationAbility(null)
}, [graduation])


const attributes = useMemo<Record<AttributeKey, number>>(() => {
  let base = {
    FOR: assignedValues.FOR + adjustments.FOR,
    DES: assignedValues.DES + adjustments.DES,
    INT: assignedValues.INT + adjustments.INT,
    SAB: assignedValues.SAB + adjustments.SAB,
    CAR: assignedValues.CAR + adjustments.CAR,
    VON: assignedValues.VON + adjustments.VON,
    CON: assignedValues.CON + adjustments.CON,
  }

      if (!selectedArchetype?.attributeBonuses) return base

  const bonus = selectedArchetype.attributeBonuses

  if (!bonus) return base
  
  // FIXO
  if (bonus.type === "fixed" && bonus.value) {
    Object.entries(bonus.value).forEach(([key, value]) => {
      base[key as AttributeKey] += Number (value ?? 0) || 0
    })
  }

  // ESCOLHA
  if (bonus.type === "choice" && chosenBonusAttribute) {
    base[chosenBonusAttribute] += bonus.amount || 0
  }

  return base
}, [assignedValues, adjustments, selectedArchetype, chosenBonusAttribute])


const [characterImage, setCharacterImage] = useState<string | null>(null)

const [nickname, setNickname] = useState("")
const [age, setAge] = useState<number | "">("")
const [backstory, setBackstory] = useState("")
const [personality, setPersonality] = useState("")
const [fears, setFears] = useState("")
const [goals, setGoals] = useState("")
const [likes, setLikes] = useState("")
const [bonds, setBonds] = useState("")
const [chosenArchetypeAbility, setChosenArchetypeAbility] = useState<string | null>(null)
const [chosenGraduationAbility, setChosenGraduationAbility] = useState<string | null>(null)
  
  const technicalCourses = useMemo(() => Object.values(technicalCoursesCatalog), [])

const selectedGraduationData = graduation
  ? graduations[graduation]
  : null
  const selectedTechnicalCourse = technicalCourse
    ? technicalCourses.find((item) => item.id === technicalCourse)
    : null

    const graduationList = Object.values(graduationCatalog)

const finalGraduationAbility = selectedGraduationData?.abilities.find(
  a => a.id === chosenGraduationAbility
)

  const calculatedSheet = useMemo(() => {
    if (!archetype || !graduation) return null

    return calculateCharacterSheet({
      level,
      archetype,
      subclass,
      graduation,
      technicalCourse,
      attributes,
      chosenExtraSkills,
    })
  }, [
    level,
    archetype,
    subclass,
    graduation,
    technicalCourse,
    attributes,
    chosenExtraSkills,
  ])

  const calculatedSkills = useMemo(() => {
  if (!archetype || !selectedArchetype) return []

  return calculateCharacterSkills({
    archetype,
    attributes,
    chosenExtraSkills,
    level,
    graduation,
    technicalCourse,
    subclass,
  })
}, [
  archetype,
  selectedArchetype,
  attributes,
  chosenExtraSkills,
  level,
  graduation,
  technicalCourse,
  subclass,
])

const archetypeCommonAbilities = selectedArchetype?.abilities?.filter(
  (a: ActiveAbility) => a.rarity === "comum"
) ?? []

const graduationCommonAbilities = selectedGraduationData?.abilities?.filter(
  (a) => a.rarity === "comum"
) ?? []

const combinedAbilities = useMemo(() => {
  return [
    ...archetypeCommonAbilities.map((a: ActiveAbility) => ({
      ...a,
      source: "archetype" as const,
    })),
    ...graduationCommonAbilities.map((a) => ({
      ...a,
      source: "graduation" as const,
    })),
  ]
}, [archetypeCommonAbilities, graduationCommonAbilities])

const toggleSkill = (skill: SkillKey) => {
  setChosenExtraSkills((prev) => {
    const skillChoices = selectedArchetype?.skillChoices
    if (!skillChoices) return prev

    if (prev.includes(skill)) {
      return prev.filter((s) => s !== skill)
    }

    if (prev.length >= skillChoices.choose) {
      return prev
    }

    return [...prev, skill]
  })
}

 const totalSpent = Object.values(adjustments)
  .filter(v => v > 0)
  .reduce((sum, v) => sum + v, 0)

const totalGained = Object.values(adjustments)
  .filter(v => v < 0)
  .reduce((sum, v) => sum + Math.abs(v), 0)

const remainingAdjustmentPoints =
  ATTRIBUTE_ADJUST_POINTS + totalGained - totalSpent

const decreaseAdjustment = (key: AttributeKey) => {
  setAdjustments((prev) => {
    const currentFinal = assignedValues[key] + prev[key]

    if (currentFinal <= ATTRIBUTE_MIN_FINAL) return prev
    if (prev[key] <= -ATTRIBUTE_ADJUST_POINTS) return prev

    return {
      ...prev,
      [key]: prev[key] - 1,
    }
  })
}

const isStep3Valid = () => {
  if (remainingAdjustmentPoints < 0) return false

  if (
    selectedArchetype?.attributeBonuses?.type === "choice" &&
    !chosenBonusAttribute
  ) return false

  return true
}

const stepValidators = [
  () => characterName.trim().length > 1,
  () => !!archetype,
  () => !!graduation,
  () => isStep3Valid(),
  () => (
    (!selectedArchetype?.skillChoices ||
      chosenExtraSkills.length === selectedArchetype.skillChoices.choose) &&
    !!chosenArchetypeAbility &&
    !!chosenGraduationAbility
  ),
  () => backstory.trim().length > 10,
  () => true,
  () => true,
]

  const canContinue = 
  stepValidators[step]?.() ??  
  (
    (step === 0 && characterName.trim().length > 1) ||
    (step === 1 && !!archetype) ||
    (step === 2 && !!graduation) ||
(step === 3 && isStep3Valid()) ||
  (step === 4 &&
    (!selectedArchetype?.skillChoices ||
      chosenExtraSkills.length === selectedArchetype.skillChoices.choose) &&
    !!chosenArchetypeAbility &&
    !!chosenGraduationAbility) ||
  (step === 5 && backstory.trim().length > 10) ||
  (step === 6) ||
  (step === 7)
    )

  const nextStep = () => {
    if (!canContinue) return
    setStep((prev) => Math.min(prev + 1, 7))
  }

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 0))
  }

const swapAssignedValues = (firstKey: AttributeKey, secondKey: AttributeKey) => {
  setAssignedValues((prev) => ({
    ...prev,
    [firstKey]: prev[secondKey],
    [secondKey]: prev[firstKey],
  }))

setAdjustments((prev) => ({
  ...prev,
  [firstKey]: prev[secondKey],
  [secondKey]: prev[firstKey],
}))
}

const increaseAdjustment = (key: AttributeKey) => {
  setAdjustments((prev) => {
    const currentFinal = assignedValues[key] + prev[key]

    if (currentFinal >= ATTRIBUTE_MAX_FINAL) return prev

    if (remainingAdjustmentPoints <= 0) return prev

    return {
      ...prev,
      [key]: prev[key] + 1,
    }
  })
}

const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files?.[0]
  if (!file) return

  const reader = new FileReader()
  reader.onloadend = () => {
    setCharacterImage(reader.result as string)
  }
  reader.readAsDataURL(file)
}

const handleSaveCharacter = async () => {
  if (!user || !calculatedSheet) {
    console.error("Dados incompletos")
    return
  }

const { data: existingCharacters, error: checkError } = await supabase
  .from("characters")
  .select("id")
  .eq("user_id", user.id)
  .limit(1)

if (checkError) {
  console.error("Erro ao verificar personagem:", checkError)
  return false
}

if (existingCharacters && existingCharacters.length > 0) {
  console.log("Personagem já existe, seguindo fluxo...")
  return true
}

  const { data: character, error: charError } = await supabase
    .from("characters")
    .insert({
      user_id: user.id,
      name: characterName,
      level,
      archetype,
      subclass,
      graduation,
      technical_course: technicalCourse,
      attributes,
      chosen_extra_skills: chosenExtraSkills,
      hp_max: calculatedSheet.hpMax,
      pf_max: calculatedSheet.pfMax,
      san_max: calculatedSheet.sanMax,
      defense: calculatedSheet.defense,
      base_hp_max: calculatedSheet.baseHpMax,
      base_pf_max: calculatedSheet.basePfMax,
      base_san_max: calculatedSheet.baseSanMax,
      nickname,
      age: age || null,
      personality,
      fears,
      goals,
      likes,
      bonds,
      character_image: characterImage,
      backstory,
      archetype_ability: chosenArchetypeAbility,
      graduation_ability: chosenGraduationAbility,
    })
    .select()
    .single()

    console.log("existingCharacters:", existingCharacters)
    console.log("CHAR CREATED:", character)
    

if (charError) {
  if (charError.code === "23505") {
    alert("Você já possui um personagem criado.")
  } else {
    console.error("Erro ao salvar character:", charError)
  }
  return false
}

if (character) {
  navigate("/dashboard")
}

  // 🔥 PROFILE
  const { error: profileError } = await supabase
    .from("character_profiles")
    .upsert({
      character_id: character.id,
      full_name: characterName,
      nickname,
      age: age || null,
      profile_image_url: characterImage,
      backstory,
      likes,
      fears,
      goals,
    })

    console.error("Erro ao salvar profile:", profileError)

  if (profileError) {
    console.error("Erro ao salvar profile:", profileError)

    return false
  }

  // 🔥 BUILD
  const { error: buildError } = await supabase
    .from("character_builds")
    .insert({
      character_id: character.id,
      subclass,
      graduation,
      technical_course: technicalCourse,
      attributes,
      chosen_extra_skills: chosenExtraSkills,
      archetype_ability: chosenArchetypeAbility,
      graduation_ability: chosenGraduationAbility,
    })

    console.error("Erro ao salvar build:", buildError)

  if (buildError) {
    console.error("Erro ao salvar build:", buildError)

    return false
  }

  console.log("Tudo salvo com sucesso ")

  return true
}

const handleSelectAttributeSwap = (key: AttributeKey) => {
  if (selectedAttributeToSwap === null) {
    setSelectedAttributeToSwap(key)
    return
  }

  if (selectedAttributeToSwap === key) {
    setSelectedAttributeToSwap(null)
    return
  }

  swapAssignedValues(selectedAttributeToSwap, key)
  setSelectedAttributeToSwap(null)
}

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10 xl:px-16">
        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] px-8 py-10 md:px-10 md:py-12">
          <div className="absolute inset-0">
            <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl" />
          </div>

          <div className="relative z-10">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-cyan-400">
              Instituto Orynth
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Iniciar criação de personagem
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-7 text-white/70">
              Não encontramos um personagem vinculado à sua conta. Vamos construir
              sua identidade acadêmica e narrativa dentro do Instituto Orynth.
            </p>

            <div className="mt-8 flex flex-wrap gap-6">
            <StepBadge index={0} current={step} label="Identidade" />
            <StepBadge index={1} current={step} label="Arquétipo" />
            <StepBadge index={2} current={step} label="Formação" />
            <StepBadge index={3} current={step} label="Atributos" />
            <StepBadge index={4} current={step} label="Habilidades" />
            <StepBadge index={5} current={step} label="História" />

            </div>
          </div>
        </section>

<section
  className={`mt-8 grid gap-8 ${
    step < 5 ? "lg:grid-cols-[1.2fr_0.8fr]" : "grid-cols-1"
  }`}
>       

<div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:p-8">

            {step === 0 && (
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.25em] text-cyan-400">
                  Etapa 1
                </p>
                <h2 className="text-3xl font-bold">Quem é você?</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">
                  Vamos começar pelo básico: o nome da identidade que vai circular
                  pelo Instituto.
                </p>

                <div className="mt-8">
                  <label className="mb-2 block text-sm text-white/75">
                    Nome do personagem
                  </label>
                  <input
                    value={characterName}
                    onChange={(e) => setCharacterName(e.target.value)}
                    placeholder="Ex.: Ayla Vasconcellos"
                    className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-cyan-400/40"
                  />
                </div>

                <div className="mt-6">
                  <label className="mb-3 block text-sm text-white/75">
                    Nível inicial do personagem
                  </label>

                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
                    {[1, 2, 3, 4, 5].map((lvl) => (
                      <button
                        key={lvl}
                        type="button"
                        onClick={() => setLevel(lvl)}
                        className={[
                          "rounded-2xl border px-4 py-3 text-sm font-medium transition",
                          level === lvl
                            ? "border-cyan-400/40 bg-cyan-500/10 text-cyan-200 shadow-[0_0_0_1px_rgba(34,211,238,0.08)]"
                            : "border-white/10 bg-black/20 text-white/70 hover:border-white/20 hover:bg-white/[0.06]",
                        ].join(" ")}
                        aria-pressed={level === lvl}
                      >
                        Nível {lvl}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 1 && (
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.25em] text-cyan-400">
                  Etapa 2
                </p>
                <h2 className="text-3xl font-bold">Escolha o arquétipo</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">
                  O arquétipo define a base comportamental, o papel de grupo e a
                  energia principal do seu personagem.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {Object.values(archetypes).map((item: ArchetypeData) => (
                    <SelectCard
                      key={item.id}
                      title={item.name}
                      description={item.description!}
                      active={archetype === item.id}
                      onClick={() => {
                      setArchetype(item.id)
                      setChosenExtraSkills([])      // limpa skills antigas
                      setChosenBonusAttribute(null) // limpa escolha de atributo bônus
                    }}
                    />
                  ))}
                </div>

                <div className="mt-8">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <label className="block text-sm text-white/75">
                      Subclasse (opcional)
                    </label>

                    <button
                      type="button"
                      onClick={() => setSubclass(null)}
                      className={[
                        "rounded-2xl border px-4 py-2 text-sm transition",
                        subclass === null
                          ? "border-cyan-400/40 bg-cyan-500/10 text-cyan-200"
                          : "border-white/10 bg-white/[0.04] text-white/70 hover:bg-white/[0.06]",
                      ].join(" ")}
                    >
                      Nenhuma por enquanto
                    </button>
                  </div>

                  <div className="custom-scroll max-h-[22rem] overflow-y-auto rounded-3xl border border-white/10 bg-black/10 p-4 pr-2">
                    <div className="grid gap-4 md:grid-cols-2">
                      {subclassesCatalog.map((item) => (
                        <SelectCard
                          key={item.id}
                          title={item.name}
                          description={item.description}
                          active={subclass === item.id}
                          onClick={() => setSubclass(item.id)}
                        />
                      ))}
                    </div>
                  </div>

                  <p className="mt-3 text-xs text-white/45">
                    A subclasse pode ser definida agora ou deixada para depois.
                  </p>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.25em] text-cyan-400">
                  Etapa 3
                </p>
                <h2 className="text-3xl font-bold">Escolha sua formação</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">
                  A graduação define a base acadêmica do personagem. O curso técnico
                  adiciona uma camada prática e complementar, mas pode ser deixado
                  para depois.
                </p>

                <div className="mt-8">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <h3 className="text-xl font-semibold">Graduação</h3>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/60">
                      {Object.values(graduations).length}
                    </span>
                  </div>

                  <div className="custom-scroll max-h-[28rem] overflow-y-auto rounded-3xl border border-white/10 bg-black/10 p-4 pr-2">
                    <div className="grid gap-4 md:grid-cols-2">
                      {Object.values(graduations).map((course) => (
                        <SelectCard
                          key={course.id}
                          title={course.name}
                          description={course.description}
                          active={graduation === course.id}
                          onClick={() => setGraduation(course.id)}
                          extra={
                            <div className="flex flex-wrap gap-2">
                              {course.favoredAttributes?.slice(0, 3).map((attr) => (
                                <span
                                  key={attr}
                                  className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-200"
                                >
                                  {attr}
                                </span>
                              ))}
                            </div>
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <h3 className="text-xl font-semibold">Curso técnico (opcional)</h3>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/60">
                      {technicalCourses.length} opções
                    </span>
                  </div>

                  <div className="mb-4 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => setTechnicalCourse(null)}
                      className={[
                        "rounded-2xl border px-4 py-2 text-sm transition",
                        technicalCourse === null
                          ? "border-cyan-400/40 bg-cyan-500/10 text-cyan-200"
                          : "border-white/10 bg-white/[0.04] text-white/70 hover:bg-white/[0.06]",
                      ].join(" ")}
                    >
                      Sem curso técnico por enquanto
                    </button>
                  </div>

                  <div className="custom-scroll max-h-[28rem] overflow-y-auto rounded-3xl border border-white/10 bg-black/10 p-4 pr-2">
                    <div className="grid gap-4 md:grid-cols-2">
                      {technicalCourses.map((course) => (
                        <SelectCard
                          key={course.id}
                          title={course.name}
                          description={course.summary}
                          active={technicalCourse === course.id}
                          onClick={() => setTechnicalCourse(course.id)}
                          extra={
                            <div className="flex flex-wrap gap-2">
                              {course.recommendedAttributes.slice(0, 3).map((attr) => (
                                <span
                                  key={attr}
                                  className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-200"
                                >
                                  {attr}
                                </span>
                              ))}
                            </div>
                          }
                        />
                      ))}
                    </div>
                  </div>

                  <p className="mt-3 text-xs text-white/45">
                    Você pode continuar sem curso técnico e adicionar isso depois.
                  </p>
                </div>
              </div>
            )}

{step === 3 && (
  <div>
    <p className="mb-2 text-xs uppercase tracking-[0.25em] text-cyan-400">
      Etapa 4
    </p>

    <h2 className="text-3xl font-bold">Atributos</h2>

    {/* 🧠 BONUS DO ARQUÉTIPO */}
    {selectedArchetype?.attributeBonuses?.type === "choice" && (
      <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-500/5 p-4">
        <p className="text-sm text-white/70">
          Escolha um atributo para receber{" "}
          <span className="text-cyan-300 font-semibold">
            +{selectedArchetype.attributeBonuses.amount}
          </span>
        </p>

        <div className="flex gap-2 mt-3 flex-wrap">
          {selectedArchetype?.attributeBonuses.options?.map((attr: AttributeKey) => (
            <button
              key={attr}
              onClick={() => setChosenBonusAttribute(attr)}
              className={`px-4 py-2 rounded-xl border transition ${
                chosenBonusAttribute === attr
                  ? "border-cyan-400 bg-cyan-500/20 text-cyan-200"
                  : "border-white/10 text-white/70 hover:bg-white/10"
              }`}
            >
              {attr}
            </button>
          ))}
        </div>
      </div>
    )}

    {/* 🧱 BLOCO BASE */}
    <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium text-white">Valores-base</p>
          <p className="mt-1 text-sm text-white/60">
            {selectedAttributeToSwap
              ? `Selecionado: ${selectedAttributeToSwap} → escolha outro`
              : "Clique em um atributo para trocar"}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-2 text-sm text-cyan-200">
          {ATTRIBUTE_BASE_VALUES.join(" • ")}
        </div>
      </div>
    </div>

    {/* 🎯 GRID DE ATRIBUTOS */}
    <div className="mt-6 grid gap-4 md:grid-cols-2">
      {ATTRIBUTE_ORDER.map((key) => {
        const finalValue = attributes[key]
        const modifier = getModifier(finalValue)
        const isSelected = selectedAttributeToSwap === key

        return (
          <div
            key={key}
            onClick={() => handleSelectAttributeSwap(key)}
            className={`rounded-3xl border p-5 text-left transition ${
              isSelected
                ? "border-cyan-400 bg-cyan-500/10 shadow-lg"
                : "border-white/10 hover:border-white/20"
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-lg font-semibold">{key}</p>
                <p className="text-xs text-white/50">
                  Base {assignedValues[key]} • Ajuste{" "}
                  {adjustments[key] >= 0 ? `+${adjustments[key]}` : adjustments[key]}
                </p>
              </div>

              <div className="text-right">
                <p className="text-2xl font-bold">{finalValue}</p>
                <p className="text-xs text-cyan-300">
                  Mod. {modifier >= 0 ? `+${modifier}` : modifier}
                </p>
              </div>
            </div>

            {/* AJUSTE FINO */}
            <div
              className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-3 py-2"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-xs text-white/60">
                {ATTRIBUTE_MIN_FINAL} — {ATTRIBUTE_MAX_FINAL}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => decreaseAdjustment(key)}
                  disabled={finalValue <= ATTRIBUTE_MIN_FINAL}
                  className="w-8 h-8 rounded-lg border border-white/10"
                >
                  −
                </button>

                <span className="text-sm w-6 text-center">
                  {adjustments[key]}
                </span>

                <button
                  onClick={() => increaseAdjustment(key)}
                  disabled={
                    remainingAdjustmentPoints <= 0 ||
                    finalValue >= ATTRIBUTE_MAX_FINAL
                  }
                  className="w-8 h-8 rounded-lg border border-white/10"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </div>

    {/* 📊 STATUS DOS PONTOS */}
    <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm">
      <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
        <span>
          Pontos restantes:{" "}
          <strong>{remainingAdjustmentPoints}</strong> / {ATTRIBUTE_ADJUST_POINTS}
        </span>

        {remainingAdjustmentPoints < 0 && (
          <span className="text-red-400">
            Você usou mais pontos do que o permitido
          </span>
        )}

        {remainingAdjustmentPoints === 0 && (
          <span className="text-emerald-300">
            Distribuição concluída
          </span>
        )}
      </div>
    </div>
  </div>
)}

{step === 4 && selectedArchetype && (

  
  <div>
    <p className="mb-2 text-xs uppercase tracking-[0.25em] text-cyan-400">
      Etapa 5
    </p>

    <h2 className="text-3xl font-bold">Habilidades & Perícias</h2>

    {/* =========================
       🎯 PERÍCIAS (SKILLS)
    ========================== */}
    {selectedArchetype?.skillChoices && (
      <div className="mt-6">
        <p className="text-sm text-white/60">
          Escolha {selectedArchetype?.skillChoices.choose} perícias
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
          {selectedArchetype?.skillChoices.options.map((skill: SkillKey) => {
            const selected = chosenExtraSkills.includes(skill)

            const disabled =
  !selected &&
  chosenExtraSkills.length >= selectedArchetype.skillChoices.choose

            return (
              <button
                key={skill}
                onClick={() => toggleSkill(skill)}
                disabled={disabled}
                className={`px-4 py-2 rounded-xl border transition ${
                  selected
                    ? "border-cyan-400 bg-cyan-500/20 text-cyan-200"
                    : "border-white/10 text-white/70 hover:bg-white/10"
                } ${disabled ? "opacity-40 cursor-not-allowed" : ""}`}
              >
                {skills[skill]?.name || skill}
              </button>
            )
          })}
        </div>

        <p className="mt-3 text-xs text-white/50">
          {chosenExtraSkills.length}/
          {selectedArchetype.skillChoices.choose} escolhidas
        </p>
      </div>
    )}

    {/* ERRO DE PERÍCIAS */}
    {selectedArchetype.skillChoices &&
      chosenExtraSkills.length !==
        selectedArchetype.skillChoices.choose && (
        <p className="text-red-400 mt-4">
          Você precisa escolher exatamente{" "}
          {selectedArchetype.skillChoices.choose} perícias.
        </p>
      )}

    {combinedAbilities.length > 0 && (
  <div className="mt-10">
    <p className="text-sm text-white/60">
      Escolha suas habilidades
    </p>

    <div className="grid md:grid-cols-2 gap-4 mt-3">
      {combinedAbilities.map((ability) => {
        const isArchetype = ability.source === "archetype"

        const selected = isArchetype
          ? chosenArchetypeAbility === ability.id
          : chosenGraduationAbility === ability.id

        return (
          <button
            key={`${ability.source}-${ability.id}`}
            onClick={() => {
              if (isArchetype) {
                setChosenArchetypeAbility(ability.id)
              } else {
                setChosenGraduationAbility(ability.id)
              }
            }}
            className={`p-4 rounded-2xl border text-left transition ${
              selected
                ? "border-cyan-400 bg-cyan-500/10"
                : "border-white/10 hover:bg-white/5"
            }`}
          >
            <div className="flex justify-between">
              <h3 className="font-semibold">{ability.name}</h3>

              <span className="text-xs uppercase text-white/50">
                {ability.source === "archetype"
                  ? "Arquétipo"
                  : "Graduação"}
              </span>
            </div>

            <p className="text-sm text-white/60 mt-2">
              {ability.description}
            </p>
          </button>
        )
      })}
    </div>

    {/* ERRO */}
{(!chosenArchetypeAbility || !chosenGraduationAbility) && (
  <p className="text-red-400 mt-3 text-sm">
    Você precisa escolher 1 habilidade do arquétipo e 1 da graduação.
  </p>
)}
  </div>
)}

    {/* =========================
       📊 RESUMO DAS PERÍCIAS
    ========================== */}
    <div className="mt-10">
      <p className="text-sm text-white/60">Resumo completo</p>

      <div className="grid grid-cols-2 gap-3 mt-3">
        {calculatedSkills.map((skill) => (
          <div
            key={skill.id}
            className="px-3 py-2 rounded-xl border border-white/10 bg-black/20"
          >
            <div className="flex justify-between items-center">
              <p className="text-sm text-white">{skill.name}</p>

              <span
                className={`text-xs ${
                  skill.trained ? "text-emerald-300" : "text-white/40"
                }`}
              >
                {skill.trained ? "Treinada" : "Não treinada"}
              </span>
            </div>

            <p className="text-xs text-white/50">
              {skill.attribute}: {skill.attributeValue} (Mod{" "}
              {skill.attributeModifier >= 0
                ? `+${skill.attributeModifier}`
                : skill.attributeModifier}
              )
            </p>

            <p className="text-xs text-cyan-300">
              Total:{" "}
              {skill.totalBonus >= 0
                ? `+${skill.totalBonus}`
                : skill.totalBonus}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
)}

            {step === 5 && (
  <div>
    <p className="mb-2 text-xs uppercase tracking-[0.25em] text-cyan-400">
      Etapa 6
    </p>
    <h2 className="text-3xl font-bold">Perfil do personagem</h2>

    <div className="mt-8 space-y-6">

      {/* IMAGEM */}
      <div>
        <label className="text-sm text-white/70">Imagem do personagem</label>
        <label className="mt-2 flex cursor-pointer items-center justify-center rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/70 hover:bg-white/10">
  Escolher imagem
  <input
    type="file"
    onChange={handleImageUpload}
    className="hidden"
  />
</label>

        {characterImage ? (
  <img
    src={characterImage}
    alt="Imagem do personagem"
    className="mt-4 h-40 w-40 object-cover rounded-2xl border border-white/10"
  />
) : (
  <div className="mt-4 h-40 w-40 rounded-2xl border border-dashed border-white/20 flex items-center justify-center text-white/30">
    Sem imagem
  </div>
)}
      </div>

      {/* BASICO */}
      <div className="grid grid-cols-2 gap-4">
        <input
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="Apelido"
          className="rounded-xl bg-black/20 p-3"
        />
        <input
          value={age}
          onChange={(e) => {
            const value = e.target.value
            setAge(value === "" ? "" : Number(value))
          }}          
          placeholder="Idade"
          className="rounded-xl bg-black/20 p-3"
        />
      </div>

      {/* HISTÓRIA */}
      <textarea
        value={backstory}
        onChange={(e) => setBackstory(e.target.value)}
        placeholder="História do personagem"
        className="w-full rounded-xl bg-black/20 p-3 h-32"
      />

      {/* PERSONALIDADE */}
      <textarea
        value={personality}
        onChange={(e) => setPersonality(e.target.value)}
        placeholder="Personalidade"
        className="w-full rounded-xl bg-black/20 p-3"
      />

      <textarea
        value={fears}
        onChange={(e) => setFears(e.target.value)}
        placeholder="Do que você sente medo?"
        className="w-full rounded-xl bg-black/20 p-3"
      />

      <textarea
        value={goals}
        onChange={(e) => setGoals(e.target.value)}
        placeholder="Quais os desejos dele?"
        className="w-full rounded-xl bg-black/20 p-3"
      />

      <textarea
        value={likes}
        onChange={(e) => setLikes(e.target.value)}
        placeholder="Do que você gosta?"
        className="w-full rounded-xl bg-black/20 p-3"
      />

      {/* RELAÇÕES */}
      <textarea
        value={bonds}
        onChange={(e) => setBonds(e.target.value)}
        placeholder="Relações"
        className="w-full rounded-xl bg-black/20 p-3"
      />

</div>

</div>
)}

{step === 6 && (
  <div>
    <h2 className="text-3xl font-bold">Resumo final</h2>

    {/* RESUMO */}
    <div className="mt-4 text-sm text-white/60">
      {calculatedSkills.length} perícias •{" "}
      {
        calculatedSkills.filter((s) => s.trained).length
      } treinadas
    </div>

    {/* GRID */}
    <div className="mt-6 grid gap-6 md:grid-cols-2">
      {calculatedSkills.map((skill) => (
        <div
          key={skill.id}
          className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
        >
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-white">
              {skill.name}
            </p>

            <span
              className={`text-xs px-2 py-1 rounded-full border ${
                skill.trained
                  ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-300"
                  : "border-white/10 text-white/40"
              }`}
            >
              {skill.trained ? "Treinada" : "Base"}
            </span>
          </div>

          <div className="mt-2 flex items-center justify-between text-xs">
            <span className="text-white/50">
              {skill.attribute} ({skill.attributeValue})
            </span>

            <span className="text-cyan-300 font-semibold">
              {skill.totalBonus >= 0
                ? `+${skill.totalBonus}`
                : skill.totalBonus}

                
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
)}

{step === 7 && (
  <div className="flex flex-col items-center justify-center text-center py-20">

    <Confetti numberOfPieces={200} recycle={false} />

    <h2 className="text-4xl font-bold text-emerald-300">
      Personagem criado 🎉
    </h2>

    <p className="mt-4 text-white/70 max-w-md">
      {characterName}, sua jornada no Instituto Orynth começa agora.
    </p>

    {characterImage && (
      <img
        src={characterImage}
        alt="A foto do seu personagem"
        className="mt-8 h-48 w-48 rounded-2xl object-cover border border-white/10"
      />
    )}

    <div className="mt-10 flex gap-4">
          <Link to="/">
      <button className="px-6 py-3 bg-cyan-500 rounded-xl">
        Entrar na mesa
      </button>
      </Link>

      <button
        onClick={() => setStep(4)}
        className="px-6 py-3 border border-white/20 rounded-xl"
      >
        Voltar e editar
      </button>
    </div>
  </div>
)}

<div className="mt-10 flex items-center justify-between gap-4 border-t border-white/10 pt-6">
<button
  onClick={prevStep}
  disabled={step === 0}
  className="disabled:opacity-40 disabled:cursor-not-allowed"
>
  Voltar
</button>
<button
  onClick={() => {
    if (step === 6) {
      handleSaveCharacter().then((success) => {
        if (success) nextStep()
      })
    } else {
      nextStep()
    }
  }}
  disabled={!canContinue}
>
  {step === 6 ? "Finalizar" : "Continuar"}
</button>
</div>
</div>

{step < 5 && (
<aside className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:p-8">
            <p className="mb-2 text-xs uppercase tracking-[0.25em] text-cyan-400">
              Prévia da ficha
            </p>

            <h2 className="text-2xl font-bold">
              {characterName || "Novo estudante"}
            </h2>

            <div className="mt-6 space-y-5">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                  Nível
                </p>
                <p className="mt-2 text-white/85">{level}</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                  Arquétipo
                </p>
                <p className="mt-2 text-white/85">
                  {selectedArchetype?.name || "Não selecionado"}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                  Subclasse
                </p>
                <p className="mt-2 text-white/85">
                  {subclass || "Nenhuma por enquanto"}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                  Graduação
                </p>
                <p className="mt-2 text-white/85">
                  {selectedGraduationData?.name || "Não selecionada"}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                  Curso técnico
                </p>
                <p className="mt-2 text-white/85">
                  {selectedTechnicalCourse?.name || "Não selecionado"}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                  Atributos
                </p>

                <div className="mt-3 grid grid-cols-2 gap-3">
                  {(Object.keys(attributes) as AttributeKey[]).map((key) => {
                    const value = attributes[key]
                    const modifier = getModifier(value)

                    return (
                      <div
                        key={key}
                        className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
                      >
                        <p className="text-xs text-white/45">{key}</p>
                        <p className="mt-1 text-lg font-semibold text-white">{value}</p>
                        <p className="text-xs text-cyan-300">
                          Mod. {modifier >= 0 ? `+${modifier}` : modifier}
                        </p>
                        
                      </div>
                    )
                  })}
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                  Status calculados
                </p>

                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                    <p className="text-xs text-white/45">HP</p>
                    <p className="mt-1 font-semibold text-white">
                      {calculatedSheet?.hpMax ?? "—"}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                    <p className="text-xs text-white/45">PF</p>
                    <p className="mt-1 font-semibold text-white">
                      {calculatedSheet?.pfMax ?? "—"}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                    <p className="text-xs text-white/45">SAN</p>
                    <p className="mt-1 font-semibold text-white">
                      {calculatedSheet?.sanMax ?? "—"}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                    <p className="text-xs text-white/45">DEF</p>
                    <p className="mt-1 font-semibold text-white">
                      {calculatedSheet?.defense ?? "—"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          )}
        </section>
      </div>
    </main>
  )
}