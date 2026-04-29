import { CourseCard } from "./CourseCard"

type CourseItem = {
  id: string
  name: string
  category: string
  summary: string
  recommendedAttributes: string[]
  abilityPreview: string[]
  href: string
}

type CourseSectionProps = {
  title: string
  description: string
  items: CourseItem[]
}

export function CourseSection({
  title,
  description,
  items,
}: CourseSectionProps) {
  return (
    <section className="mb-20">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-2 text-[11px] uppercase tracking-[0.28em] text-cyan-400/80">
            Catálogo Acadêmico
          </p>

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            {title}
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-6 text-white/65">
            {description}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/70">
          {items.length} opções disponíveis
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <CourseCard
            key={item.id}
            name={item.name}
            category={item.category}
            summary={item.summary}
            recommendedAttributes={item.recommendedAttributes}
            abilityPreview={item.abilityPreview}
            href={item.href}
          />
        ))}
      </div>
    </section>
  )
}