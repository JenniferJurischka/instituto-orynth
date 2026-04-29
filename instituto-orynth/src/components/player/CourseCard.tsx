import { Link } from "react-router-dom"

type CourseCardProps = {
  name: string
  summary: string
  category: string
  recommendedAttributes: string[]
  abilityPreview: string[]
  href: string
}

export function CourseCard({
  name,
  summary,
  category,
  recommendedAttributes,
  abilityPreview,
  href,
}: CourseCardProps) {
  return (
    <Link
      to={href}
      className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.07]"
    >
      <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative z-10">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 text-[11px] uppercase tracking-[0.25em] text-cyan-300/80">
              Formação
            </p>
            <h3 className="text-xl font-semibold text-white leading-tight">
              {name}
            </h3>
          </div>

          <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wide text-white/60">
            {category}
          </span>
        </div>

        <p className="mb-5 text-sm leading-6 text-white/70">
          {summary}
        </p>

        <div className="mb-5">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">
            Atributos recomendados
          </p>

          <div className="flex flex-wrap gap-2">
            {recommendedAttributes.map((attr) => (
              <span
                key={attr}
                className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-200"
              >
                {attr}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">
            Destaques
          </p>

          <ul className="space-y-1 text-sm text-white/80">
            {abilityPreview.slice(0, 3).map((ability) => (
              <li key={ability}>• {ability}</li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 pt-4">
          <span className="text-sm font-medium text-cyan-300 transition group-hover:text-cyan-200">
            Ver detalhes
          </span>

          <span className="text-white/35 transition group-hover:translate-x-1 group-hover:text-cyan-300">
            →
          </span>
        </div>
      </div>
    </Link>
  )
}