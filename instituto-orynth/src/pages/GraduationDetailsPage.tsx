import { Link, useParams } from "react-router-dom"
import { graduationCatalog } from "../system/data/academics/graduationsCatalog"

export default function GraduationDetailsPage() {
  const { id } = useParams()
  const course = id ? graduationCatalog[id] : null

  if (!course) {
    return (
      <main className="min-h-screen bg-neutral-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="text-white/70">Graduação não encontrada.</p>
          <Link to="/cursos" className="mt-4 inline-block text-cyan-300">
            ← Voltar para cursos
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-16 text-white md:px-10 xl:px-16">
      <div className="mx-auto max-w-5xl">
        <Link to="/cursos" className="mb-8 inline-block text-sm text-cyan-300">
          ← Voltar para cursos
        </Link>

        <div className="mb-10 rounded-3xl border border-white/10 bg-white/5 p-8">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-400">
            Graduação
          </p>

          <h1 className="text-4xl font-bold">{course.name}</h1>

          <p className="mt-4 text-base leading-7 text-white/75">
            {course.description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-4 text-xl font-semibold">Informações Acadêmicas</h2>
            <ul className="space-y-2 text-white/80">
              <li><strong>Duração:</strong> {course.duration}</li>
              <li><strong>Carga horária:</strong> {course.workload}</li>
              <li><strong>Turnos:</strong> {course.shifts.join(", ")}</li>
              <li><strong>Modalidade:</strong> {course.modality}</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-4 text-xl font-semibold">Investimento</h2>
            <ul className="space-y-2 text-white/80">
              <li><strong>Mensalidade:</strong> {course.monthlyCost}</li>
              <li><strong>Investimento anual:</strong> {course.yearlyCost}</li>
            </ul>
          </section>
        </div>

        <section className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="mb-4 text-xl font-semibold">Atributos recomendados</h2>
          <div className="flex flex-wrap gap-2">
            {course.recommendedAttributes.map((attr) => (
              <span
                key={attr}
                className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300"
              >
                {attr}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="mb-4 text-xl font-semibold">Prévia de habilidades</h2>
          <ul className="space-y-2 text-white/80">
            {course.abilityPreview.map((ability) => (
              <li key={ability}>• {ability}</li>
            ))}
          </ul>
        </section>

        <section className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="mb-4 text-xl font-semibold">O que você aprende</h2>
          <ul className="space-y-2 text-white/80">
            {course.whatYouLearn.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="mb-4 text-xl font-semibold">Estrutura das aulas</h2>
          <ul className="space-y-2 text-white/80">
            {course.classStructure.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="mb-4 text-xl font-semibold">Bolsas disponíveis</h2>
          <ul className="space-y-2 text-white/80">
            {course.scholarships.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="mb-4 text-xl font-semibold">Perfil ideal do estudante</h2>
          <ul className="space-y-2 text-white/80">
            {course.profile.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}