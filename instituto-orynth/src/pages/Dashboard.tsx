import { useEffect, useState } from "react"
import { getSubjectsByGraduation } from "../services/subjects"
import { getGraduationName } from "../services/graduation"
import { getArchetypeName } from "../services/archetype"

type Props = {
  character: any
}

export default function Dashboard({ character }: Props) {
  const [subjects, setSubjects] = useState<any[]>([])
  const [loadingSubjects, setLoadingSubjects] = useState(false)
  const [graduationName, setGraduationName] = useState<string>("")
  const [archetypeName, setArchetypeName] = useState("")

  // 🔥 carregar disciplinas
useEffect(() => {
  if (!character?.graduation) return

  const loadData = async () => {
    setLoadingSubjects(true)

const [subjectsData, gradName, archeName] = await Promise.all([
  getSubjectsByGraduation(character.graduation),
  getGraduationName(character.graduation),
  getArchetypeName(character.archetype)
])

setSubjects(subjectsData)
setGraduationName(gradName)
setArchetypeName(archeName)

    setLoadingSubjects(false)
  }

  loadData()
}, [character])

  return (
    <div className="p-6 space-y-6">

      {/* 👤 PERFIL */}
<section className="rounded-2xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-6 shadow-sm">
  <div className="flex items-center justify-between">

    <div>
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
        Olá, {character?.name || "Estudante"}
      </h2>

      <p className="text-sm font-medium text-gray-700 dark:text-zinc-300 mt-1">
        {graduationName || "Sem graduação"} • Matrícula ativa
      </p>
    </div>

    <div className="text-right">
      <p className="text-xs text-gray-400">ID do personagem</p>
      <p className="font-semibold text-gray-900 dark:text-white">
        {character?.id?.slice(0, 6)}
      </p>
    </div>

  </div>
</section>

      {/* 📊 CARDS */}
      <section className="grid md:grid-cols-3 gap-4">
        <Card title="Nível" value={character?.level ?? 1} />
        <Card title="Arquétipo" value={archetypeName || "—"} />
        <Card title="Curso Técnico" value={character?.technical_course ?? "—"} />
      </section>

      {/* 🎭 STATUS */}
<section className="rounded-2xl border border-cyan-200/40 dark:border-cyan-400/20 bg-white dark:bg-zinc-900 p-6 shadow-sm">
  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
    Status do Personagem
  </h3>

  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
    <Stat label="HP" value={character?.hp_max ?? 0} />
    <Stat label="SAN" value={character?.san_max ?? 0} />
    <Stat label="PF" value={character?.pf_max ?? 0} />
    <Stat label="DEF" value={character?.defense ?? 0} />
    <Stat label="Nível" value={character?.level ?? 1} />
  </div>
</section>

      {/* 🧠 ATRIBUTOS */}
 <section className="rounded-2xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-6">
  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
    Atributos
  </h3>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {character.attributes &&
      Object.entries(character.attributes).map(([key, value]) => (
        <div
          key={key}
          className="rounded-xl border border-gray-200 dark:border-zinc-700 p-4 flex flex-col items-center justify-center bg-gray-50 dark:bg-zinc-800"
        >
          <p className="text-xs text-gray-500 uppercase tracking-wide">
            {key}
          </p>

          <p className="text-2xl font-bold text-cyan-500 mt-1">
            {value as number}
          </p>
        </div>
      ))}
  </div>
</section>

      {/* 📚 DISCIPLINAS */}
      <section className="card">
        <h3 className="section-title">Disciplinas</h3>

        {loadingSubjects ? (
          <p className="text-sm text-gray-500">Carregando disciplinas...</p>
        ) : subjects.length === 0 ? (
          <p className="text-sm text-gray-500">
            Nenhuma disciplina encontrada para este curso.
          </p>
        ) : (
          <div className="space-y-3">
            {subjects.map((subject) => (
              <SubjectCard key={subject.id} subject={subject} />
            ))}
          </div>
        )}
      </section>

      {/* ⚡ ATIVIDADES */}
      <section className="card">
        <h3 className="section-title">Atividades recentes</h3>

        <ul className="space-y-2 text-sm text-gray-600 dark:text-zinc-400">
          <li>✔ Personagem criado</li>
          <li>📩 Bem-vindo ao Instituto</li>
        </ul>
      </section>

    </div>
  )
}

//
// 🔹 COMPONENTES
//

function Card({ title, value }: { title: string; value: any }) {
  return (
    <div className="rounded-2xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-4 shadow-sm">
      <p className="text-sm text-gray-500 dark:text-zinc-400">
        {title}
      </p>

      <p className="text-2xl font-semibold mt-2 text-gray-900 dark:text-white">
        {value}
      </p>
    </div>
  )
}

function Stat({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="rounded-xl border border-gray-200 dark:border-zinc-700 p-3 text-center bg-gray-50 dark:bg-zinc-800">
      <p className="text-xs text-gray-400 uppercase">{label}</p>

      <p className="text-lg font-bold text-cyan-500 mt-1">
        {value}
      </p>
    </div>
  )
}

function SubjectCard({ subject }: { subject: any }) {
  return (
    <div className="p-4 border rounded-xl bg-white dark:bg-zinc-800">
      <div className="flex justify-between items-center">
        <p className="font-medium">{subject.name}</p>

        <span className="text-xs text-gray-500">
          {subject.workload ?? 0}h
        </span>
      </div>

      {subject.description && (
        <p className="text-xs text-gray-400 mt-1">
          {subject.description}
        </p>
      )}
    </div>
  )
}