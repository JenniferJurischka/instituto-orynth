import { graduationCatalog } from "../system/data/academics/graduationsCatalog"
import { technicalCoursesCatalog } from "../system/data/academics/technicalCoursesCatalog"
import { CourseSection } from "../components/player/CourseSection"

export default function CursosPage() {
  const graduations = Object.values(graduationCatalog).map((course) => ({
    ...course,
    href: `/cursos/graduacoes/${course.id}`,
  }))

  const technicalCourses = Object.values(technicalCoursesCatalog).map((course) => ({
    ...course,
    href: `/cursos/tecnicos/${course.id}`,
  }))

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 xl:px-16">
        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] px-8 py-12 md:px-12 md:py-16">
          <div className="absolute inset-0">
            <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-indigo-500/10 blur-3xl" />
          </div>

          <div className="relative z-10 max-w-4xl">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-cyan-400">
              Instituto Orynth
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-5xl xl:text-6xl">
              Descubra a formação ideal para o seu personagem
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 text-white/70">
              Explore graduações e cursos técnicos do Instituto Orynth.
              Cada formação oferece identidade própria, proposta acadêmica específica
              e impactos únicos na construção do aluno dentro do sistema.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200">
                Graduações
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
                Cursos Técnicos
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
                Exploração Acadêmica
              </span>
            </div>
          </div>
        </section>

        <div className="mt-16">
          <CourseSection
            title="Graduações"
            description="As graduações definem a base acadêmica do estudante, moldando sua área principal de conhecimento, sua identidade universitária e o foco central da sua formação."
            items={graduations}
          />

          <CourseSection
            title="Cursos Técnicos"
            description="Os cursos técnicos funcionam como formações práticas complementares, ampliando o repertório do estudante com habilidades objetivas, especializações úteis e suporte aplicado."
            items={technicalCourses}
          />
        </div>
      </div>
    </main>
  )
}