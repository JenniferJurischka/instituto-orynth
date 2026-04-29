type Props = {
  role: string | null
  campaigns: any[]
  busy: string | null
  onCreateCampaign: () => void
  onDeleteCampaign: (id: string) => void
}

export default function Campaigns({
  role,
  campaigns,
  busy,
  onCreateCampaign,
  onDeleteCampaign,
}: Props) {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Campanhas</h2>
          <p className="mt-1 text-sm text-gray-600">
            {role === "master"
              ? "Crie e gerencie campanhas e programas internos."
              : "Você verá campanhas quando estiver matriculada em uma."}
          </p>
        </div>

        {role === "master" && (
          <button
            onClick={onCreateCampaign}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg"
            disabled={busy === "create"}
          >
            {busy === "create" ? "Criando..." : "Criar Campanha"}
          </button>
        )}
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {campaigns.map((camp) => (
          <div key={camp.id} className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h4 className="font-semibold text-gray-900">{camp.title}</h4>
                <p className="mt-1 text-sm text-gray-600">{camp.description}</p>
              </div>

              {role === "master" && (
                <button
                  onClick={() => onDeleteCampaign(camp.id)}
                  className="text-sm px-3 py-1 rounded-lg bg-red-600 text-white"
                  disabled={busy === camp.id}
                >
                  {busy === camp.id ? "..." : "Deletar"}
                </button>
              )}
            </div>

            <p className="mt-4 text-[11px] text-gray-400">
              Registro interno • ID: {String(camp.id).slice(0, 8).toUpperCase()}
            </p>
          </div>
        ))}

        {campaigns.length === 0 && (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-6 text-sm text-gray-600">
            Nenhuma campanha registrada.
          </div>
        )}
      </div>
    </div>
  )
}