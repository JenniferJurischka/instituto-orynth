import { graduationCatalog } from "../../system/data/academics/graduationsCatalog"
import { technicalCoursesCatalog } from "../../system/data/academics/technicalCoursesCatalog"
import { CourseSection } from "../../components/player/CourseSection"

export default function CursosPage() {
  const graduations = Object.values(graduationCatalog)
  const technicalCourses = Object.values(technicalCoursesCatalog)

  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-16 text-white md:px-10 xl:px-16">
      <div className="mx-auto max-w-7xl">
<header className="mb-16 flex items-start justify-between gap-6">
  <div>
    <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-400">
      Instituto Orynth
    </p>

    <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
      Explore os cursos e descubra o caminho acadêmico do seu personagem
    </h1>

    <p className="mt-6 max-w-3xl text-base leading-7 text-white/70">
      Conheça as graduações e cursos técnicos disponíveis no Instituto
      Orynth. Cada formação oferece uma identidade própria, uma proposta
      acadêmica única e novas possibilidades para a criação de personagem.
    </p>
  </div>

</header>

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
    </main>
  )
}