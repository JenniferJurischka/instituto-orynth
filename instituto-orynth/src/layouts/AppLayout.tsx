import { Outlet } from "react-router-dom"
import SideBar from "../components/SideBar"
import TopBar from "../components/TopBar"

type Props = {
  user: any
  role: string | null
  protocol: string
  showInternal: boolean
  onToggleInternal: () => void
}

export default function AppLayout({
  user,
  role,
  protocol,
  showInternal,
  onToggleInternal,
}: Props) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-zinc-900 dark:bg-zinc-1000">
      <div className="flex">
        <SideBar role={role} />

        <div className="flex-1 min-w-0">
          <TopBar
            user={user}
            role={role}
            protocol={protocol}
            showInternal={showInternal}
            onToggleInternal={onToggleInternal}
          />

          <main className="mx-auto max-w-6xl px-6 py-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}