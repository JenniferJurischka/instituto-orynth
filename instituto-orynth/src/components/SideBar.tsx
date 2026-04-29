import { NavLink } from "react-router-dom";

export default function SideBar({ role }: { role: string | null }) {
    const linkClass = ({ isActive}: { isActive: boolean }) =>
    `block px-3 py-2 rounded-lg text-sm ${
        isActive ? "bg-gray-100 text-gray-900" : "text-gray-600 houver:bg-gray-50"
    }`

    return (
        <aside className="w-64 hidden md:block bg-white dark:bg-zinc-900 border-r border-gray-200 min-h-screen">
            <div className="p-6">
                <p className="text-xs tracking-widest text-gray-500-uppercase">
                    Instituto Orynth
                </p>
                <p className="mt-1 text-lg font-semibold text-gray-900">Portal</p>

                <nav className="mt-6 space-y-1">
                    <NavLink to="/" className={linkClass} end>
                        Dashboard
                    </NavLink>

                    {role === "master" ? (
            <NavLink to="/archive" className={linkClass}>
              Arquivo do Instituto
            </NavLink>
          ) : (
                    <NavLink to="/me" className={linkClass}>
                        Minha Ficha
                    </NavLink>
                    )}
                    <NavLink to="/campaigns" className={linkClass}>
                        Campanhas
                    </NavLink>

                    {role === "master" && (
                        <div className="mt-4 pt-4 border-t border-gray-200">
                            <p className="px-3 text-[11px] tracking-widest text-gray-400 uppercase">
                                Coordenação
                            </p>
                            <NavLink to="/campaigns" className={linkClass}>
                            Programas Internos
                            </NavLink>
                            </div>
                    )}
                    </nav>

                    <p className="mt-8 text-[11px] text-gray-400">
                        Registros sujeitos a auditoria interna.
                    </p>
            </div>
        </aside>
    );
}